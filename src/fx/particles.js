// 特效系统：Ribbon(刀光/闪电) · Sparks(发光粒子) · Droplets(果汁水滴) · QuadFx(冲击环/斩痕/光晕) · Bolts(闪电)
import * as THREE from 'three';
import { TAU, rand } from '../util/math.js';

/* ============================== Ribbon ============================== */

const ribbonVS = /* glsl */ `
  attribute float aAlong;
  attribute float aAcross;
  varying float vAlong;
  varying float vAcross;
  void main() {
    vAlong = aAlong;
    vAcross = aAcross;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const ribbonFS = /* glsl */ `
  uniform vec3 uCore;
  uniform vec3 uEdge;
  uniform float uIntensity;
  uniform float uAlpha;
  varying float vAlong;
  varying float vAcross;
  void main() {
    float a = 1.0 - abs(vAcross);
    a = pow(max(a, 0.0), 1.5);
    vec3 col = mix(uEdge, uCore, pow(a, 2.2));
    gl_FragColor = vec4(col * uIntensity, a * uAlpha * vAlong);
  }
`;

export class Ribbon extends THREE.Mesh {
  constructor(maxPts = 32) {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(maxPts * 2 * 3);
    const along = new Float32Array(maxPts * 2);
    const across = new Float32Array(maxPts * 2);
    for (let i = 0; i < maxPts; i++) {
      across[i * 2] = -1;
      across[i * 2 + 1] = 1;
    }
    const idx = [];
    for (let i = 0; i < maxPts - 1; i++) {
      const a = i * 2;
      idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aAlong', new THREE.BufferAttribute(along, 1).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aAcross', new THREE.BufferAttribute(across, 1));
    geo.setIndex(idx);
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uCore: { value: new THREE.Color('#ffffff') },
        uEdge: { value: new THREE.Color('#66ccff') },
        uIntensity: { value: 1.6 },
        uAlpha: { value: 1 },
      },
      vertexShader: ribbonVS,
      fragmentShader: ribbonFS,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    super(geo, mat);
    this.maxPts = maxPts;
    this.frustumCulled = false;
    this.renderOrder = 20;
    this.visible = false;
  }

  setColors(core, edge, intensity = 1.6) {
    const u = this.material.uniforms;
    u.uCore.value.set(core);
    u.uEdge.value.set(edge);
    u.uIntensity.value = intensity;
  }

  /** pts: [{x,y,w}]，从尾到头 */
  setPoints(pts, z = 1.5, along = true) {
    const n = Math.min(pts.length, this.maxPts);
    if (n < 2) {
      this.visible = false;
      return;
    }
    this.visible = true;
    const pos = this.geometry.attributes.position.array;
    const al = this.geometry.attributes.aAlong.array;
    for (let i = 0; i < n; i++) {
      const p = pts[i];
      const p0 = pts[Math.max(0, i - 1)];
      const p1 = pts[Math.min(n - 1, i + 1)];
      let tx = p1.x - p0.x;
      let ty = p1.y - p0.y;
      const l = Math.hypot(tx, ty) || 1;
      tx /= l;
      ty /= l;
      const nx = -ty * p.w;
      const ny = tx * p.w;
      pos[i * 6] = p.x + nx;
      pos[i * 6 + 1] = p.y + ny;
      pos[i * 6 + 2] = z;
      pos[i * 6 + 3] = p.x - nx;
      pos[i * 6 + 4] = p.y - ny;
      pos[i * 6 + 5] = z;
      const a = along ? i / (n - 1) : 1;
      al[i * 2] = a;
      al[i * 2 + 1] = a;
    }
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.aAlong.needsUpdate = true;
    this.geometry.setDrawRange(0, (n - 1) * 6);
  }
}

/* ============================== Sparks ============================== */

const sparkVS = /* glsl */ `
  attribute float aSize;
  attribute vec4 aColor;
  uniform float uScale;
  varying vec4 vColor;
  void main() {
    vColor = aColor;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * uScale / max(0.1, -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;
const sparkFS = /* glsl */ `
  varying vec4 vColor;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0) discard;
    float a = 1.0 - d;
    a *= a;
    vec3 c = vColor.rgb * (0.7 + 1.8 * a * a);
    gl_FragColor = vec4(c, vColor.a * a);
  }
`;

export class Sparks {
  constructor(cap = 5000) {
    this.cap = cap;
    this.head = 0;
    this.pos = new Float32Array(cap * 3);
    this.vel = new Float32Array(cap * 3);
    this.col = new Float32Array(cap * 4);
    this.base = new Float32Array(cap * 4);
    this.size = new Float32Array(cap);
    this.size0 = new Float32Array(cap);
    this.life = new Float32Array(cap);
    this.age = new Float32Array(cap);
    this.grav = new Float32Array(cap);
    this.drag = new Float32Array(cap);
    this.mode = new Uint8Array(cap); // 0 淡出缩小 1 先亮后淡出
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aColor', new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    this.material = new THREE.ShaderMaterial({
      uniforms: { uScale: { value: 500 } },
      vertexShader: sparkVS,
      fragmentShader: sparkFS,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: true,
    });
    this.points = new THREE.Points(geo, this.material);
    this.points.frustumCulled = false;
    this.points.renderOrder = 12;
  }

  emit(x, y, z, vx, vy, vz, life, size, r, g, b, a = 1, grav = 0, drag = 0.5) {
    const i = this.head;
    this.head = (this.head + 1) % this.cap;
    this.pos[i * 3] = x;
    this.pos[i * 3 + 1] = y;
    this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx;
    this.vel[i * 3 + 1] = vy;
    this.vel[i * 3 + 2] = vz;
    this.life[i] = life;
    this.age[i] = 0;
    this.size0[i] = size;
    this.size[i] = size;
    this.base[i * 4] = r;
    this.base[i * 4 + 1] = g;
    this.base[i * 4 + 2] = b;
    this.base[i * 4 + 3] = a;
    this.grav[i] = grav;
    this.drag[i] = drag;
  }

  /** 以颜色对象发射一团方向随机的粒子 */
  burst(x, y, z, n, speed, life, size, color, grav = 6, spread = 1) {
    for (let k = 0; k < n; k++) {
      const a = Math.random() * TAU;
      const s = speed * (0.25 + Math.random() * 0.75);
      const el = (Math.random() - 0.5) * spread;
      this.emit(
        x, y, z,
        Math.cos(a) * s, Math.sin(a) * s + el, (Math.random() - 0.5) * s * 0.4,
        life * (0.6 + Math.random() * 0.6), size * (0.5 + Math.random() * 0.9),
        color.r, color.g, color.b, 1, grav, 1.2,
      );
    }
  }

  update(dt, stage) {
    this.material.uniforms.uScale.value = (stage.height * stage.pixelRatio * 0.5) / Math.tan((stage.camera.fov * Math.PI) / 360);
    const { pos, vel, col, base, size, size0, life, age, grav, drag } = this;
    for (let i = 0; i < this.cap; i++) {
      const l = life[i];
      if (l <= 0) continue;
      const a = (age[i] += dt);
      if (a >= l) {
        life[i] = 0;
        col[i * 4 + 3] = 0;
        size[i] = 0;
        continue;
      }
      const k = a / l;
      const dk = Math.exp(-drag[i] * dt);
      vel[i * 3] *= dk;
      vel[i * 3 + 1] = vel[i * 3 + 1] * dk - grav[i] * dt;
      vel[i * 3 + 2] *= dk;
      pos[i * 3] += vel[i * 3] * dt;
      pos[i * 3 + 1] += vel[i * 3 + 1] * dt;
      pos[i * 3 + 2] += vel[i * 3 + 2] * dt;
      const fade = 1 - k;
      col[i * 4] = base[i * 4];
      col[i * 4 + 1] = base[i * 4 + 1];
      col[i * 4 + 2] = base[i * 4 + 2];
      col[i * 4 + 3] = base[i * 4 + 3] * fade;
      size[i] = size0[i] * (0.35 + 0.65 * fade);
    }
    const g = this.points.geometry.attributes;
    g.position.needsUpdate = true;
    g.aColor.needsUpdate = true;
    g.aSize.needsUpdate = true;
  }
}

/* ============================== Droplets ============================== */

export class Droplets {
  constructor(cap = 900) {
    this.cap = cap;
    this.head = 0;
    const geo = new THREE.SphereGeometry(1, 10, 8);
    const mat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.12, metalness: 0.0, envMapIntensity: 1.4 });
    this.mesh = new THREE.InstancedMesh(geo, mat, cap);
    this.mesh.frustumCulled = false;
    this.mesh.castShadow = true;
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.p = new Float32Array(cap * 3);
    this.v = new Float32Array(cap * 3);
    this.life = new Float32Array(cap);
    this.age = new Float32Array(cap);
    this.size = new Float32Array(cap);
    this.dummy = new THREE.Object3D();
    this.tmpColor = new THREE.Color();
    const zero = new THREE.Matrix4().makeScale(0, 0, 0);
    for (let i = 0; i < cap; i++) {
      this.mesh.setMatrixAt(i, zero);
      this.mesh.setColorAt(i, this.tmpColor.set('#ffffff'));
    }
    this.colorDirty = false;
  }

  emit(x, y, z, vx, vy, vz, size, color, life = 1.1) {
    const i = this.head;
    this.head = (this.head + 1) % this.cap;
    this.p[i * 3] = x;
    this.p[i * 3 + 1] = y;
    this.p[i * 3 + 2] = z;
    this.v[i * 3] = vx;
    this.v[i * 3 + 1] = vy;
    this.v[i * 3 + 2] = vz;
    this.life[i] = life;
    this.age[i] = 0;
    this.size[i] = size;
    this.mesh.setColorAt(i, this.tmpColor.set(color));
    this.colorDirty = true;
  }

  update(dt, gravity = 13) {
    const { p, v, life, age, size, dummy, mesh } = this;
    for (let i = 0; i < this.cap; i++) {
      const l = life[i];
      if (l <= 0) continue;
      const a = (age[i] += dt);
      if (a >= l) {
        life[i] = 0;
        dummy.position.set(0, 0, 0);
        dummy.scale.set(0, 0, 0);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
        continue;
      }
      v[i * 3 + 1] -= gravity * dt;
      v[i * 3] *= 1 - 0.4 * dt;
      p[i * 3] += v[i * 3] * dt;
      p[i * 3 + 1] += v[i * 3 + 1] * dt;
      p[i * 3 + 2] += v[i * 3 + 2] * dt;
      const speed = Math.hypot(v[i * 3], v[i * 3 + 1]);
      const k = a / l;
      const s = size[i] * (k > 0.75 ? 1 - (k - 0.75) * 4 : 1);
      dummy.position.set(p[i * 3], p[i * 3 + 1], p[i * 3 + 2]);
      dummy.rotation.set(0, 0, Math.atan2(v[i * 3 + 1], v[i * 3]));
      dummy.scale.set(s * (1 + Math.min(1.1, speed * 0.05)), s, s);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (this.colorDirty) {
      mesh.instanceColor.needsUpdate = true;
      this.colorDirty = false;
    }
  }
}

/* ============================== QuadFx ============================== */

const quadVS = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const quadFS = /* glsl */ `
  uniform float uKind;
  uniform float uProg;
  uniform vec3 uColor;
  uniform float uIntensity;
  varying vec2 vUv;
  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    float a = 0.0;
    if (uKind < 0.5) {
      // 冲击环
      float r = length(p);
      float w = 0.16 * (1.0 - uProg) + 0.03;
      a = smoothstep(w, 0.0, abs(r - uProg)) * (1.0 - uProg);
    } else if (uKind < 1.5) {
      // 斩痕：细长的亮线，中间粗两端尖
      float ax = 1.0 - abs(p.x);
      float ay = 1.0 - abs(p.y);
      a = pow(max(ay, 0.0), 6.0) * pow(max(ax, 0.0), 0.8) * (1.0 - uProg);
      a += pow(max(ay, 0.0), 24.0) * (1.0 - uProg) * 1.5;
    } else {
      // 光晕
      float r = length(p);
      a = pow(max(1.0 - r, 0.0), 2.0) * (1.0 - uProg);
    }
    gl_FragColor = vec4(uColor * uIntensity, a);
  }
`;

export class QuadFx {
  constructor(cap = 28) {
    this.group = new THREE.Group();
    this.items = [];
    const geo = new THREE.PlaneGeometry(1, 1);
    for (let i = 0; i < cap; i++) {
      const mat = new THREE.ShaderMaterial({
        uniforms: {
          uKind: { value: 0 },
          uProg: { value: 0 },
          uColor: { value: new THREE.Color('#fff') },
          uIntensity: { value: 2 },
        },
        vertexShader: quadVS,
        fragmentShader: quadFS,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        depthWrite: false,
      });
      const m = new THREE.Mesh(geo, mat);
      m.visible = false;
      m.renderOrder = 15;
      m.frustumCulled = false;
      this.group.add(m);
      this.items.push({ m, t: 0, dur: 1, active: false });
    }
  }

  _spawn(kind, x, y, z, sx, sy, rot, color, dur, intensity) {
    let it = this.items.find((i) => !i.active);
    if (!it) it = this.items[0];
    it.active = true;
    it.t = 0;
    it.dur = dur;
    it.m.visible = true;
    it.m.position.set(x, y, z);
    it.m.scale.set(sx, sy, 1);
    it.m.rotation.z = rot;
    const u = it.m.material.uniforms;
    u.uKind.value = kind;
    u.uProg.value = 0;
    u.uColor.value.set(color);
    u.uIntensity.value = intensity;
  }

  ring(x, y, size, color = '#ffffff', dur = 0.5, intensity = 2.2) {
    this._spawn(0, x, y, 1.2, size, size, 0, color, dur, intensity);
  }

  slash(x, y, angle, len, color = '#ffffff', dur = 0.22, thick = 0.5) {
    this._spawn(1, x, y, 1.3, len, thick, angle, color, dur, 2.8);
  }

  glow(x, y, size, color = '#ffffff', dur = 0.35, intensity = 2.5) {
    this._spawn(2, x, y, 1.1, size, size, 0, color, dur, intensity);
  }

  update(dt) {
    for (const it of this.items) {
      if (!it.active) continue;
      it.t += dt;
      const k = it.t / it.dur;
      if (k >= 1) {
        it.active = false;
        it.m.visible = false;
        continue;
      }
      it.m.material.uniforms.uProg.value = k;
    }
  }
}

/* ============================== Bolts ============================== */

export class Bolts {
  constructor(cap = 14) {
    this.group = new THREE.Group();
    this.items = [];
    for (let i = 0; i < cap; i++) {
      const r = new Ribbon(18);
      r.setColors('#ffffff', '#ffe066', 2.4);
      this.group.add(r);
      this.items.push({ r, t: 0, dur: 0.2, active: false, x0: 0, y0: 0, x1: 0, y1: 0, w: 0.09, jitter: 0.5 });
    }
  }

  /** 生成一道闪电 */
  bolt(x0, y0, x1, y1, core = '#ffffff', edge = '#ffe066', dur = 0.22, w = 0.1) {
    let it = this.items.find((i) => !i.active);
    if (!it) it = this.items[0];
    Object.assign(it, { active: true, t: 0, dur, x0, y0, x1, y1, w });
    it.r.setColors(core, edge, 2.6);
    this._shape(it);
  }

  _shape(it) {
    const n = 16;
    const dx = it.x1 - it.x0;
    const dy = it.y1 - it.y0;
    const len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len;
    const ny = dx / len;
    const pts = [];
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const env = Math.sin(t * Math.PI);
      const off = (Math.random() - 0.5) * 2 * Math.min(0.9, len * 0.12) * env;
      pts.push({ x: it.x0 + dx * t + nx * off, y: it.y0 + dy * t + ny * off, w: it.w * (0.4 + env * 0.9) });
    }
    it.r.setPoints(pts, 1.6, false);
  }

  update(dt) {
    for (const it of this.items) {
      if (!it.active) continue;
      it.t += dt;
      if (it.t >= it.dur) {
        it.active = false;
        it.r.visible = false;
        continue;
      }
      // 闪烁：每帧重新抖动形状
      this._shape(it);
      it.r.material.uniforms.uAlpha.value = 1 - it.t / it.dur;
    }
  }
}

/* ============================== 汇总 ============================== */

export class Effects {
  constructor(stage) {
    this.stage = stage;
    this.sparks = new Sparks(5200);
    this.drops = new Droplets(900);
    this.quads = new QuadFx(30);
    this.bolts = new Bolts(16);
    stage.fx.add(this.drops.mesh, this.sparks.points, this.quads.group, this.bolts.group);
    this._c = new THREE.Color();
  }

  update(dt, gravity) {
    this.sparks.update(dt, this.stage);
    this.drops.update(dt, gravity);
    this.quads.update(dt);
    this.bolts.update(dt);
  }

  color(c) {
    return this._c.set(c);
  }

  /** 果汁喷溅：沿切口两侧喷出 */
  juice(x, y, dirAngle, juiceColor, power = 1) {
    const c = this._c.set(juiceColor);
    const cr = c.r;
    const cg = c.g;
    const cb = c.b;
    const n = Math.floor(18 * power);
    for (let i = 0; i < n; i++) {
      // 沿垂直于刀痕的两侧喷洒 + 一部分沿刀痕
      const side = Math.random() < 0.5 ? 1 : -1;
      const a = dirAngle + Math.PI / 2 * side + (Math.random() - 0.5) * 1.8;
      const s = (3 + Math.random() * 7) * (0.6 + 0.5 * power);
      this.drops.emit(
        x + (Math.random() - 0.5) * 0.3, y + (Math.random() - 0.5) * 0.3, (Math.random() - 0.5) * 0.8,
        Math.cos(a) * s, Math.sin(a) * s + 1.5, (Math.random() - 0.5) * 2,
        0.03 + Math.random() * 0.065 * Math.sqrt(power), juiceColor, 0.9 + Math.random() * 0.8,
      );
    }
    for (let i = 0; i < 10 * power; i++) {
      const a = Math.random() * TAU;
      const s = 1 + Math.random() * 4;
      this.sparks.emit(x, y, 0.3, Math.cos(a) * s, Math.sin(a) * s, 0, 0.35 + Math.random() * 0.3, 0.3 + Math.random() * 0.4, cr * 1.1, cg * 1.1, cb * 1.1, 0.55, 2, 2);
    }
  }
}
