// 道场背景：程序化木纹墙 + 灯笼 + 飘落樱花 + 果汁溅射层
import * as THREE from 'three';
import { fbm, hash2, mulberry32 } from '../util/noise.js';
import { TAU, rand } from '../util/math.js';

/* ------------------------------ 木纹墙 ------------------------------ */

export function makeWallTexture() {
  const W = 1536;
  const H = 768;
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(W, H);
  const d = img.data;
  const PW = 76; // 木板宽度(px)
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const p = Math.floor(x / PW);
      const lx = x - p * PW;
      const tone = hash2(p, 3);
      const grain = fbm(x * 0.05 + tone * 40, y * 0.006, 3);
      const rings = Math.sin((x * 0.18 + grain * 6 + tone * 30) * 0.5) * 0.5 + 0.5;
      let k = 0.72 + 0.5 * tone + 0.32 * grain + 0.1 * rings;
      // 板缝
      const edge = Math.min(lx, PW - lx);
      if (edge < 2.2) k *= 0.35 + edge * 0.28;
      else if (edge < 4) k *= 1.06;
      // 横梁：上下各一条
      const by = y / H;
      const beam = by > 0.885 || (by > 0.055 && by < 0.075);
      const i = (y * W + x) * 4;
      let r = 38 * k;
      let g = 25 * k;
      let b = 18 * k;
      if (beam) {
        r *= 0.62;
        g *= 0.6;
        b *= 0.62;
      }
      d[i] = r;
      d[i + 1] = g;
      d[i + 2] = b;
      d[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);

  // 暖色中心光晕
  const g = ctx.createRadialGradient(W / 2, H * 0.46, 0, W / 2, H * 0.46, H * 0.85);
  g.addColorStop(0, 'rgba(255,170,90,0.13)');
  g.addColorStop(0.6, 'rgba(255,120,60,0.03)');
  g.addColorStop(1, 'rgba(0,0,0,0.5)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  // 圆相(円相) 笔触
  const r = mulberry32(21);
  ctx.save();
  ctx.translate(W / 2, H * 0.47);
  ctx.lineCap = 'round';
  for (let s = 0; s < 7; s++) {
    ctx.strokeStyle = `rgba(255,214,150,${0.025 + r() * 0.025})`;
    ctx.lineWidth = 16 + r() * 22;
    ctx.beginPath();
    const rad = H * (0.31 + (r() - 0.5) * 0.02);
    ctx.arc(0, 0, rad, 0.35 * Math.PI + r() * 0.1, 1.8 * Math.PI + r() * 0.15);
    ctx.stroke();
  }
  ctx.restore();

  // 「斬」
  ctx.save();
  ctx.font = `bold ${Math.floor(H * 0.42)}px "STKaiti","KaiTi","楷体","Kaiti SC","Noto Serif SC",serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'rgba(255,90,60,0.05)';
  ctx.fillText('斬', W / 2, H * 0.48);
  ctx.restore();

  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

/* ------------------------------ 灯笼 ------------------------------ */

export function makeLantern() {
  const g = new THREE.Group();
  const body = new THREE.SphereGeometry(0.62, 32, 20);
  const p = body.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i);
    const z = p.getZ(i);
    const ph = Math.atan2(z, x);
    const k = 1 + 0.045 * Math.cos(ph * 16);
    p.setX(i, x * k);
    p.setZ(i, z * k);
    p.setY(i, p.getY(i) * 1.18);
  }
  body.computeVertexNormals();
  const mat = new THREE.MeshStandardMaterial({
    color: '#b8221f',
    emissive: new THREE.Color('#ff5a1a'),
    emissiveIntensity: 1.25,
    roughness: 0.65,
  });
  const mesh = new THREE.Mesh(body, mat);
  mesh.position.y = -1.3;
  g.add(mesh);
  const capMat = new THREE.MeshStandardMaterial({ color: '#1c1410', roughness: 0.6 });
  const capT = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.4, 0.16, 20), capMat);
  capT.position.y = -1.3 + 0.62 * 1.18;
  const capB = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.26, 0.14, 20), capMat);
  capB.position.y = -1.3 - 0.62 * 1.18;
  g.add(capT, capB);
  const rope = new THREE.Mesh(
    new THREE.CylinderGeometry(0.018, 0.018, 1.0, 6),
    new THREE.MeshStandardMaterial({ color: '#2a1a10', roughness: 0.9 }),
  );
  rope.position.y = -0.5 + 0.1;
  g.add(rope);
  // 流苏
  const tassel = new THREE.Mesh(
    new THREE.ConeGeometry(0.1, 0.55, 8),
    new THREE.MeshStandardMaterial({ color: '#d9a441', roughness: 0.5, emissive: new THREE.Color('#ff9a30'), emissiveIntensity: 0.2 }),
  );
  tassel.rotation.x = Math.PI;
  tassel.position.y = -1.3 - 0.62 * 1.18 - 0.35;
  g.add(tassel);
  const light = new THREE.PointLight('#ff8a44', 14, 14, 1.6);
  light.position.set(0, -1.3, 0.6);
  g.add(light);
  g.userData = { mesh, light, phase: Math.random() * 6 };
  return g;
}

/* ------------------------------ 樱花 ------------------------------ */

export class Petals {
  constructor(count = 42) {
    this.count = count;
    const geo = new THREE.PlaneGeometry(0.3, 0.2, 2, 1);
    const pp = geo.attributes.position;
    for (let i = 0; i < pp.count; i++) pp.setZ(i, Math.abs(pp.getX(i)) * -0.4);
    const mat = new THREE.MeshBasicMaterial({ color: '#ffffff', side: THREE.DoubleSide, transparent: true, opacity: 0.85, depthWrite: false });
    this.mesh = new THREE.InstancedMesh(geo, mat, count);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = -1;
    const col = new THREE.Color();
    const pinks = ['#ffc1d6', '#ffb0c8', '#ffd9e6', '#ff9dbb'];
    this.data = [];
    for (let i = 0; i < count; i++) {
      col.set(pinks[i % pinks.length]);
      this.mesh.setColorAt(i, col);
      this.data.push({
        x: 0, y: 0, z: rand(-4, 2), s: rand(0.6, 1.3),
        vx: rand(-0.3, 0.3), vy: rand(-0.7, -0.3),
        rx: rand(0, TAU), ry: rand(0, TAU), rz: rand(0, TAU),
        wx: rand(-2, 2), wy: rand(-2, 2), wz: rand(-2, 2), ph: rand(0, TAU),
      });
    }
    this.bounds = { left: -10, right: 10, top: 8, bottom: -8 };
    this.reset();
    this.dummy = new THREE.Object3D();
  }

  reset() {
    const b = this.bounds;
    for (const p of this.data) {
      p.x = rand(b.left, b.right);
      p.y = rand(b.bottom, b.top);
    }
  }

  update(dt, t) {
    const b = this.bounds;
    const o = this.dummy;
    for (let i = 0; i < this.count; i++) {
      const p = this.data[i];
      p.x += (p.vx + Math.sin(t * 0.7 + p.ph) * 0.5) * dt;
      p.y += p.vy * dt;
      p.rx += p.wx * dt;
      p.ry += p.wy * dt;
      p.rz += p.wz * dt;
      if (p.y < b.bottom - 1) {
        p.y = b.top + 1;
        p.x = rand(b.left, b.right);
      }
      if (p.x > b.right + 1) p.x = b.left - 1;
      if (p.x < b.left - 1) p.x = b.right + 1;
      o.position.set(p.x, p.y, p.z);
      o.rotation.set(p.rx, p.ry, p.rz);
      o.scale.setScalar(p.s);
      o.updateMatrix();
      this.mesh.setMatrixAt(i, o.matrix);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}

/* ------------------------------ 溅射层 ------------------------------ */

export class SplatLayer {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });
    this.tex = new THREE.CanvasTexture(this.canvas);
    this.tex.colorSpace = THREE.SRGBColorSpace;
    this.mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshStandardMaterial({ map: this.tex, transparent: true, roughness: 0.3, depthWrite: false }),
    );
    this.mesh.receiveShadow = true;
    this.dirty = false;
    this.fadeTimer = 0;
    this.resize(1.7);
  }

  resize(aspect) {
    if (!(aspect > 0) || !isFinite(aspect)) aspect = 1.7;
    const h = 640;
    const w = Math.max(512, Math.min(1800, Math.round(h * aspect)));
    if (this.canvas.width !== w || this.canvas.height !== h) {
      this.canvas.width = w;
      this.canvas.height = h;
      this.tex.dispose();
      this.tex.needsUpdate = true;
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.dirty = true;
  }

  /** nx, ny ∈ [0,1]（屏幕归一化，左上为原点）；size 为屏幕高度的比例 */
  splat(nx, ny, color, size = 0.06, angle = 0) {
    const ctx = this.ctx;
    const h = this.canvas.height;
    const x = nx * this.canvas.width;
    const y = ny * h;
    const R = size * h;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.6;
    // 主体：几个重叠的圆构成不规则液斑
    for (let i = 0; i < 6; i++) {
      const ox = (Math.random() - 0.5) * R * 0.9;
      const oy = (Math.random() - 0.5) * R * 0.7;
      ctx.beginPath();
      ctx.arc(ox, oy, R * (0.38 + Math.random() * 0.4), 0, TAU);
      ctx.fill();
    }
    // 向外甩出的细长液柱 + 末端水珠
    const arms = 7 + Math.floor(Math.random() * 6);
    for (let i = 0; i < arms; i++) {
      const dir = Math.random() * TAU;
      const len = R * (0.9 + Math.random() * 1.5);
      const w0 = R * (0.2 + Math.random() * 0.2);
      const cx = Math.cos(dir);
      const sy = Math.sin(dir);
      const tx = cx * len;
      const ty = sy * len;
      ctx.beginPath();
      ctx.moveTo(-sy * w0, cx * w0);
      ctx.quadraticCurveTo(tx * 0.55 - sy * w0 * 0.35, ty * 0.55 + cx * w0 * 0.35, tx, ty);
      ctx.quadraticCurveTo(tx * 0.55 + sy * w0 * 0.35, ty * 0.55 - cx * w0 * 0.35, sy * w0, -cx * w0);
      ctx.closePath();
      ctx.fill();
      if (Math.random() < 0.8) {
        ctx.beginPath();
        ctx.arc(cx * len * 1.12, sy * len * 1.12, R * (0.05 + Math.random() * 0.09), 0, TAU);
        ctx.fill();
      }
    }
    // 散落的小水珠
    const drops = 8 + Math.floor(Math.random() * 10);
    for (let i = 0; i < drops; i++) {
      const dir = Math.random() * TAU;
      const dist = R * (1.4 + Math.random() * 3.2);
      ctx.beginPath();
      ctx.arc(Math.cos(dir) * dist, Math.sin(dir) * dist * 0.8, R * (0.03 + Math.random() * 0.08), 0, TAU);
      ctx.fill();
    }
    // 高光
    ctx.globalAlpha = 0.28;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.ellipse(-R * 0.15, -R * 0.2, R * 0.32, R * 0.18, -0.4, 0, TAU);
    ctx.fill();
    ctx.restore();
    this.dirty = true;
  }

  update(dt) {
    this.fadeTimer += dt;
    if (this.fadeTimer >= 1.0 && this.canvas.width > 0 && this.canvas.height > 0) {
      this.fadeTimer = 0;
      const w = this.canvas.width;
      const h = this.canvas.height;
      const img = this.ctx.getImageData(0, 0, w, h);
      const d = img.data;
      let any = false;
      for (let i = 3; i < d.length; i += 4) {
        if (d[i] > 0) {
          d[i] = d[i] > 7 ? d[i] - 7 : 0;
          any = true;
        }
      }
      if (any) {
        this.ctx.putImageData(img, 0, 0);
        this.dirty = true;
      }
    }
    if (this.dirty) {
      this.tex.needsUpdate = true;
      this.dirty = false;
    }
  }
}
