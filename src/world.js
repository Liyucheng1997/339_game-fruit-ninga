// 世界：水果实体的生成 / 物理 / 真实切割（生成两半碎块并赋予"翻开露出截面"的旋转）
import * as THREE from 'three';
import { slicePiece } from './slicer.js';
import { clamp, rand, sign } from './util/math.js';

let glowTex = null;
function glowTexture() {
  if (glowTex) return glowTex;
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.35, 'rgba(255,255,255,0.45)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  glowTex = new THREE.CanvasTexture(c);
  glowTex.colorSpace = THREE.SRGBColorSpace;
  return glowTex;
}

const OPEN_RATE = 3.2; // 截面翻开的角速度衰减率
let nextId = 1;

const _M = new THREE.Matrix4();
const _inv = new THREE.Matrix4();
const _m3 = new THREE.Matrix3();
const _q = new THREE.Quaternion();
const Z = new THREE.Vector3(0, 0, 1);

export class World {
  constructor(stage, assets) {
    this.stage = stage;
    this.assets = assets;
    this.entities = [];
    this.gravity = 15;
    this.onFall = null; // (entity) => void
  }

  /**
   * 生成实体。o: {x,y,z,vx,vy,scale,cls,spin,aura,gravity,quat}
   * cls: fruit | power | bomb | boss | menu
   */
  spawn(type, o = {}) {
    const asset = this.assets[type];
    const mesh = new THREE.Mesh(asset.geometry, asset.materials);
    mesh.castShadow = true;
    const s = o.scale ?? 1;
    mesh.scale.setScalar(s);
    mesh.position.set(o.x ?? 0, o.y ?? 0, o.z ?? rand(-0.4, 0.4));
    if (o.quat) mesh.quaternion.copy(o.quat);
    else if (!asset.bomb) mesh.quaternion.random();
    this.stage.world.add(mesh);

    const spin = new THREE.Vector3();
    if (o.spin) spin.copy(o.spin);
    else if (asset.bomb) spin.set(rand(-0.4, 0.4), rand(-0.9, 0.9), sign() * rand(1.2, 2.2));
    else spin.set(rand(-1, 1), rand(-1, 1), rand(-1, 1)).normalize().multiplyScalar(rand(1.2, 3.2));

    const e = {
      id: nextId++,
      type,
      asset,
      def: asset.def,
      cls: o.cls ?? (asset.bomb ? 'bomb' : 'fruit'),
      mesh,
      vel: new THREE.Vector3(o.vx ?? 0, o.vy ?? 0, 0),
      spin,
      open: new THREE.Vector3(),
      hit: asset.hit * s,
      gen: 0,
      alive: true,
      age: 0,
      blockSwipe: -1,
      cooldown: 0,
      ownGeom: false,
      aura: null,
      gravity: o.gravity ?? 1,
      scale: s,
      sliceable: true,
      slicedBy: null,
    };
    if (o.aura) {
      const sp = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: glowTexture(),
          color: o.aura,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          transparent: true,
          opacity: 0.9,
        }),
      );
      const k = asset.hit * s * 4.4;
      sp.scale.set(k, k, 1);
      sp.renderOrder = -1;
      this.stage.world.add(sp);
      e.aura = sp;
    }
    this.entities.push(e);
    return e;
  }

  remove(e) {
    if (!e.alive) return;
    e.alive = false;
    this.stage.world.remove(e.mesh);
    if (e.ownGeom) e.mesh.geometry.dispose();
    if (e.aura) {
      this.stage.world.remove(e.aura);
      e.aura.material.dispose();
      e.aura = null;
    }
  }

  clear() {
    for (const e of this.entities) this.remove(e);
    this.entities.length = 0;
  }

  /** 推进物理；dt 为已缩放的模拟时间 */
  update(dt) {
    const b = this.stage.bounds;
    const list = this.entities;
    for (let i = list.length - 1; i >= 0; i--) {
      const e = list[i];
      if (!e.alive) {
        list.splice(i, 1);
        continue;
      }
      e.age += dt;
      e.cooldown -= dt;
      const m = e.mesh;
      if (e.gravity) e.vel.y -= this.gravity * e.gravity * dt;
      m.position.addScaledVector(e.vel, dt);

      // 自转 + 截面翻开的衰减角速度
      let wx = e.spin.x + e.open.x;
      let wy = e.spin.y + e.open.y;
      let wz = e.spin.z + e.open.z;
      const w = Math.hypot(wx, wy, wz);
      if (w > 1e-5) {
        _q.setFromAxisAngle(_v.set(wx / w, wy / w, wz / w), w * dt);
        m.quaternion.premultiply(_q);
      }
      if (e.open.lengthSq() > 1e-8) e.open.multiplyScalar(Math.exp(-OPEN_RATE * dt));

      if (e.aura) e.aura.position.set(m.position.x, m.position.y, m.position.z - 0.6);

      if (e.cls === 'menu') continue;
      const y = m.position.y;
      const x = m.position.x;
      if ((y < b.bottom - 3.2 - e.hit && e.vel.y < 0) || Math.abs(x) > b.width / 2 + 6 + e.hit) {
        if (e.age > 0.3) this.onFall?.(e);
        this.remove(e);
        list.splice(i, 1);
      } else if (e.cls === 'piece' && e.age > 8) {
        this.remove(e);
        list.splice(i, 1);
      }
    }
  }

  /**
   * 沿刀痕切开实体：blade 接触点 (px,py)，方向 (dx,dy)（单位向量），tilt 为切面倾斜。
   * 返回 { pieces:[a,b], perfect, offset, angle } 或 null（切失败）
   */
  slice(e, px, py, dx, dy, tilt = 0) {
    const asset = e.asset;
    const mesh = e.mesh;
    // 世界切面法线：垂直于刀痕，绕刀痕方向倾斜 tilt 弧度
    const c = Math.cos(tilt);
    const s = Math.sin(tilt);
    const nW = new THREE.Vector3(-dy * c, dx * c, s).normalize();

    mesh.updateMatrixWorld(true);
    _M.copy(mesh.matrixWorld);
    _inv.copy(_M).invert();
    const pL = new THREE.Vector3(px, py, mesh.position.z).applyMatrix4(_inv);
    _m3.setFromMatrix4(_M).transpose();
    const nL = nW.clone().applyMatrix3(_m3).normalize();
    const dL = nL.dot(pL);

    const A = slicePiece(e.mesh.geometry, asset.kinds, asset.capIndex, nL.x, nL.y, nL.z, dL);
    const B = slicePiece(e.mesh.geometry, asset.kinds, asset.capIndex, -nL.x, -nL.y, -nL.z, -dL);
    if (!A || !B) return null;

    const offset = Math.abs(nW.dot(_v.set(mesh.position.x - px, mesh.position.y - py, 0)));
    const perfect = offset < e.hit * 0.2;

    const pieces = [];
    [
      [A, -1],
      [B, 1],
    ].forEach(([p, side], k) => {
      // side: A 位于 +n 一侧，其截面朝 -n；B 相反
      const m = new THREE.Mesh(p.geometry, asset.materials);
      m.castShadow = true;
      m.scale.copy(mesh.scale);
      m.quaternion.copy(mesh.quaternion);
      const wp = p.center.clone().applyMatrix4(_M);
      m.position.copy(wp);
      this.stage.world.add(m);

      const dirSide = k === 0 ? 1 : -1; // A 沿 +nW 分离，B 沿 -nW
      const push = rand(1.6, 2.8);
      const piece = {
        id: nextId++,
        type: e.type,
        asset,
        def: e.def,
        cls: 'piece',
        mesh: m,
        vel: new THREE.Vector3(
          e.vel.x * 0.85 + nW.x * dirSide * push,
          e.vel.y * 0.85 + nW.y * dirSide * push + rand(0.3, 1.2),
          0,
        ),
        spin: new THREE.Vector3(0, 0, sign() * rand(0.8, 2.6)),
        open: new THREE.Vector3(),
        hit: Math.max(0.2, p.radius * e.scale * 0.85),
        gen: e.gen + 1,
        alive: true,
        age: 0,
        blockSwipe: -1,
        cooldown: 0.12,
        ownGeom: true,
        aura: null,
        gravity: 1,
        scale: e.scale,
        sliceable: p.radius * e.scale >= 0.34 && e.gen + 1 <= 3,
        slicedBy: null,
      };
      // 截面朝向：cap 法线 = -nW*dirSide 的反向...  A 的截面朝 -nW，B 的朝 +nW
      const capN = _v2.copy(nW).multiplyScalar(-dirSide);
      const cos = clamp(capN.dot(Z), -1, 1);
      const ang = Math.acos(cos);
      const axis = _v3.crossVectors(capN, Z);
      if (axis.lengthSq() > 1e-6 && ang > 0.05) {
        piece.open.copy(axis.normalize()).multiplyScalar(ang * OPEN_RATE);
      }
      this.entities.push(piece);
      pieces.push(piece);
    });

    const angle = Math.atan2(dy, dx);
    return { pieces, perfect, offset, angle, nW };
  }
}

const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _v3 = new THREE.Vector3();
