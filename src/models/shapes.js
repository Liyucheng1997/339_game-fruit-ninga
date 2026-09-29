// 程序化几何建模：参数曲面主体 + 叶/茎/冠/鳞片/冰晶等附件
// 约定：所有几何均为「非索引」BufferGeometry，只含 position / normal / uv，便于切割器逐三角形处理。
import * as THREE from 'three';
import { gauss, smoothstep, TAU } from '../util/math.js';

const PI = Math.PI;
const sin = Math.sin;
const cos = Math.cos;

/* ------------------------------------------------------------------ */
/* 通用工具                                                            */
/* ------------------------------------------------------------------ */

/** 转成只含 position/normal/uv 的非索引几何 */
export function finalize(geo) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  for (const k of Object.keys(g.attributes)) {
    if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k);
  }
  if (!g.attributes.normal) g.computeVertexNormals();
  if (!g.attributes.uv) {
    g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
  }
  g.clearGroups();
  return g;
}

const _M = new THREE.Matrix4();
const _Q = new THREE.Quaternion();
const _E = new THREE.Euler();
const _V = new THREE.Vector3();
const _S = new THREE.Vector3();

/** 对几何做 位移/旋转(YXZ 欧拉)/缩放 */
export function xform(geo, { p = [0, 0, 0], r = [0, 0, 0], s = 1 } = {}) {
  _E.set(r[0], r[1], r[2], 'YXZ');
  _Q.setFromEuler(_E);
  const sc = typeof s === 'number' ? [s, s, s] : s;
  _M.compose(_V.set(p[0], p[1], p[2]), _Q, _S.set(sc[0], sc[1], sc[2]));
  geo.applyMatrix4(_M);
  return geo;
}

/** 依据参数网格 fn(s,t)->[x,y,z] 生成曲面（s 沿长度，t∈[-1,1] 横向） */
function gridSurface(nu, nv, fn) {
  const pos = [];
  const uv = [];
  const idx = [];
  for (let i = 0; i <= nu; i++) {
    const s = i / nu;
    for (let j = 0; j <= nv; j++) {
      const t = (j / nv) * 2 - 1;
      const p = fn(s, t);
      pos.push(p[0], p[1], p[2]);
      uv.push(s, (t + 1) / 2);
    }
  }
  for (let i = 0; i < nu; i++) {
    for (let j = 0; j < nv; j++) {
      const a = i * (nv + 1) + j;
      const b = a + nv + 1;
      idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

/* ------------------------------------------------------------------ */
/* 参数曲面主体                                                        */
/* ------------------------------------------------------------------ */

/**
 * shape(theta, phi, out) 把 (θ∈[0,π] 自上而下, φ∈[0,2π) 绕 Y 轴) 映射到三维点。
 * 生成带无缝重合顶点(便于切口回路匹配)与解析法线的非索引几何。
 */
export function paramBody({ wSeg = 56, hSeg = 36, shape }) {
  const cols = wSeg + 1;
  const rows = hSeg + 1;
  const pos = new Float32Array(cols * rows * 3);
  const nor = new Float32Array(cols * rows * 3);
  const uv = new Float32Array(cols * rows * 2);
  const P = new THREE.Vector3();
  const A = new THREE.Vector3();
  const B = new THREE.Vector3();
  const C = new THREE.Vector3();
  const D = new THREE.Vector3();
  const N = new THREE.Vector3();
  const e = 1e-3;

  for (let i = 0; i < rows; i++) {
    const th = (PI * i) / hSeg;
    const thc = Math.min(Math.max(th, 0.004), PI - 0.004);
    for (let j = 0; j < cols; j++) {
      const ph = (TAU * (j % wSeg)) / wSeg;
      // 极点强制 φ=0，保证极点是同一个点
      shape(th, i === 0 || i === rows - 1 ? 0 : ph, P);
      shape(thc + e, ph, A);
      shape(thc - e, ph, B);
      shape(thc, ph + e, C);
      shape(thc, ph - e, D);
      A.sub(B);
      C.sub(D);
      N.crossVectors(C, A).normalize();
      const k = i * cols + j;
      pos[k * 3] = P.x;
      pos[k * 3 + 1] = P.y;
      pos[k * 3 + 2] = P.z;
      nor[k * 3] = N.x;
      nor[k * 3 + 1] = N.y;
      nor[k * 3 + 2] = N.z;
      uv[k * 2] = j / wSeg;
      uv[k * 2 + 1] = 1 - i / hSeg;
    }
  }

  const idx = [];
  for (let i = 0; i < hSeg; i++) {
    for (let j = 0; j < wSeg; j++) {
      const a = i * cols + j;
      const b = a + 1;
      const c = a + cols;
      const d = c + 1;
      if (i !== 0) idx.push(a, b, c);
      if (i !== hSeg - 1) idx.push(b, d, c);
    }
  }

  // 自动纠正朝向：体积为正 = 外向 CCW
  let vol = 0;
  for (let t = 0; t < idx.length; t += 3) {
    const a = idx[t] * 3;
    const b = idx[t + 1] * 3;
    const c = idx[t + 2] * 3;
    vol +=
      pos[a] * (pos[b + 1] * pos[c + 2] - pos[b + 2] * pos[c + 1]) -
      pos[a + 1] * (pos[b] * pos[c + 2] - pos[b + 2] * pos[c]) +
      pos[a + 2] * (pos[b] * pos[c + 1] - pos[b + 1] * pos[c]);
  }
  if (vol < 0) {
    for (let t = 0; t < idx.length; t += 3) {
      const tmp = idx[t + 1];
      idx[t + 1] = idx[t + 2];
      idx[t + 2] = tmp;
    }
  }
  // 法线应指向外
  let agree = 0;
  for (let k = 0; k < cols * rows; k++) {
    agree += nor[k * 3] * pos[k * 3] + nor[k * 3 + 1] * pos[k * 3 + 1] + nor[k * 3 + 2] * pos[k * 3 + 2];
  }
  if (agree < 0) for (let k = 0; k < nor.length; k++) nor[k] = -nor[k];

  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  g.setIndex(idx);
  return finalize(g);
}

/** 取参数曲面上一点及外向法线（放置鳞片、冰晶用） */
export function surfacePoint(shape, th, ph) {
  const P = new THREE.Vector3();
  const A = new THREE.Vector3();
  const B = new THREE.Vector3();
  const C = new THREE.Vector3();
  const D = new THREE.Vector3();
  const e = 1e-3;
  shape(th, ph, P);
  shape(th + e, ph, A);
  shape(th - e, ph, B);
  shape(th, ph + e, C);
  shape(th, ph - e, D);
  A.sub(B);
  C.sub(D);
  const n = new THREE.Vector3().crossVectors(C, A).normalize();
  if (n.dot(P) < 0) n.negate();
  return { p: P.clone(), n };
}

/* ------------------------------------------------------------------ */
/* 各种水果主体的形状函数 (θ 顶→底, φ 环绕)                            */
/* ------------------------------------------------------------------ */

export const SHAPES = {
  apple(th, ph, o, R = 0.92) {
    const s = sin(th);
    const c = cos(th);
    let r = 1 - 0.34 * gauss(th, 0.36) - 0.14 * gauss(PI - th, 0.38);
    r *= 1 + 0.03 * cos(5 * ph) * smoothstep(1.6, 2.7, th) * s;
    r *= 1 + 0.018 * sin(ph + 1.3) * s;
    const hs = 1 + 0.08 * c;
    o.set(s * cos(ph) * r * hs, c * r * 0.9, s * sin(ph) * r * hs).multiplyScalar(R);
  },

  orange(th, ph, o, R = 0.92) {
    const s = sin(th);
    const c = cos(th);
    const r = 1 - 0.06 * gauss(th, 0.2) - 0.03 * gauss(PI - th, 0.2);
    o.set(s * cos(ph) * r, c * r * 0.95, s * sin(ph) * r).multiplyScalar(R);
  },

  lemon(th, ph, o, R = 0.66) {
    const s = sin(th);
    const c = cos(th);
    const r = 1 + 0.2 * gauss(th, 0.22) + 0.13 * gauss(PI - th, 0.22);
    o.set(s * cos(ph) * r * 1.0, c * r * 1.38, s * sin(ph) * r * 0.96).multiplyScalar(R);
  },

  kiwi(th, ph, o, R = 0.68) {
    const s = sin(th);
    const c = cos(th);
    const r = (1 - 0.035 * gauss(th, 0.2) - 0.03 * gauss(PI - th, 0.2)) * (1 + 0.05 * c);
    o.set(s * cos(ph) * r * 0.96, c * r * 1.2, s * sin(ph) * r * 0.86).multiplyScalar(R);
  },

  watermelon(th, ph, o, R = 0.92) {
    const s = sin(th);
    const c = cos(th);
    const r = (1 - 0.05 * gauss(th, 0.14) - 0.03 * gauss(PI - th, 0.14)) * (1 + 0.012 * cos(9 * ph) * s);
    o.set(s * cos(ph) * r, c * r * 1.24, s * sin(ph) * r * 0.97).multiplyScalar(R);
  },

  pineapple(th, ph, o, R = 0.76) {
    const s = sin(th);
    const c = cos(th);
    const r = 1 - 0.09 * gauss(th, 0.35) - 0.08 * gauss(PI - th, 0.5);
    o.set(s * cos(ph) * r, c * r * 1.34, s * sin(ph) * r).multiplyScalar(R);
  },

  peach(th, ph, o, R = 0.86) {
    const s = sin(th);
    const c = cos(th);
    const cleft = Math.pow(Math.max(0, cos(ph)), 4) * Math.pow(s, 1.5);
    let r = 1 - 0.12 * gauss(th, 0.32) + 0.06 * gauss(PI - th, 0.22);
    r *= 1 - 0.12 * cleft;
    o.set(s * cos(ph) * r, c * r * 0.97, s * sin(ph) * r * 0.94).multiplyScalar(R);
  },

  strawberry(th, ph, o, R = 0.84) {
    const s = sin(th);
    const c = cos(th);
    const rho = s * (1.14 - 0.66 * (th / PI)) * (1 + 0.03 * cos(6 * ph) * s);
    const y = c * 1.06 - 0.16 * gauss(th, 0.45) - 0.05;
    o.set(rho * cos(ph), y, rho * sin(ph)).multiplyScalar(R);
  },

  coconut(th, ph, o, R = 0.9) {
    const s = sin(th);
    const c = cos(th);
    const r = 1 + 0.045 * cos(3 * ph) * s * s - 0.02 * gauss(th, 0.2);
    o.set(s * cos(ph) * r, c * r * 1.06, s * sin(ph) * r).multiplyScalar(R);
  },

  dragon(th, ph, o, R = 0.82) {
    const s = sin(th);
    const c = cos(th);
    const r = 1 - 0.05 * gauss(th, 0.2) - 0.03 * gauss(PI - th, 0.2);
    o.set(s * cos(ph) * r * 0.94, c * r * 1.16, s * sin(ph) * r * 0.94).multiplyScalar(R);
  },

  pear(th, ph, o, R = 0.86) {
    const s = sin(th);
    const c = cos(th);
    const t = th / PI;
    const hx = 0.56 + 0.5 * smoothstep(0.15, 0.7, t);
    const r = 1 - 0.04 * gauss(th, 0.18);
    o.set(s * cos(ph) * hx * r, c * 1.22 * r, s * sin(ph) * hx * r).multiplyScalar(R);
  },

  star(th, ph, o, R = 0.8) {
    const s = sin(th);
    const c = cos(th);
    const rs = 0.62 + 0.38 * (1 - Math.pow(Math.abs(sin(2.5 * ph)), 0.8));
    o.set(s * cos(ph) * rs, c * 1.5 * (0.92 + 0.08 * s), s * sin(ph) * rs).multiplyScalar(R);
  },

  sphere(th, ph, o, R = 0.84) {
    o.set(sin(th) * cos(ph), cos(th), sin(th) * sin(ph)).multiplyScalar(R);
  },

  /** 香蕉：沿圆弧扫掠的圆角五边形截面，两端收口 */
  banana(th, ph, o) {
    const t = th / PI;
    const arc = 1.5;
    const Rc = 2.25;
    const a = (t - 0.5) * arc;
    const C_x = Rc * sin(a);
    const C_y = Rc * cos(a) - Rc;
    const Nx = sin(a);
    const Ny = cos(a);
    const body = Math.pow(sin(PI * t), 0.42);
    const stalk = 0.42 + 0.58 * smoothstep(0.03, 0.3, t);
    const tip = 0.72 + 0.28 * smoothstep(1.0, 0.86, t);
    const rho = 0.4 * body * stalk * tip;
    const ridge = 1 + 0.1 * cos(5 * ph) * smoothstep(0.02, 0.3, t);
    const u = cos(ph) * rho * ridge;
    const w = sin(ph) * rho * ridge * 0.94;
    o.set(C_x + Nx * u, C_y + Ny * u, w);
  },
};

/* ------------------------------------------------------------------ */
/* 附件：茎 / 叶 / 冠 / 花萼 / 鳞片 / 冰晶                              */
/* ------------------------------------------------------------------ */

/** 渐细弯曲的圆管（茎） */
export function taperedTube(points, r0, r1, seg = 10, radial = 8) {
  const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(p[0], p[1], p[2])));
  const frames = curve.computeFrenetFrames(seg, false);
  const pos = [];
  const nor = [];
  const uv = [];
  const idx = [];
  for (let i = 0; i <= seg; i++) {
    const t = i / seg;
    const p = curve.getPointAt(t);
    const N = frames.normals[i];
    const B = frames.binormals[i];
    const r = r0 + (r1 - r0) * t;
    for (let j = 0; j <= radial; j++) {
      const a = (j / radial) * TAU;
      const cx = cos(a);
      const sx = sin(a);
      const nx = N.x * cx + B.x * sx;
      const ny = N.y * cx + B.y * sx;
      const nz = N.z * cx + B.z * sx;
      pos.push(p.x + nx * r, p.y + ny * r, p.z + nz * r);
      nor.push(nx, ny, nz);
      uv.push(j / radial, t);
    }
  }
  for (let i = 0; i < seg; i++) {
    for (let j = 0; j < radial; j++) {
      const a = i * (radial + 1) + j;
      const b = a + radial + 1;
      idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  return finalize(g);
}

/** 叶片：根部在原点，沿 +X 生长，宽度沿 Z，上方为 +Y */
export function leafGeo({ len = 1, width = 0.3, droop = 0.2, fold = 0.3, nu = 12, nv = 6 } = {}) {
  const g = gridSurface(nu, nv, (s, t) => {
    const w = width * Math.pow(sin(PI * Math.pow(s, 0.72)), 0.85);
    const x = s * len;
    const z = t * w;
    const y = fold * Math.abs(t) * w - droop * s * s * len;
    return [x, y, z];
  });
  return finalize(g);
}

/** 菠萝叶冠 */
export function crownGeo(topY) {
  const geos = [];
  const rings = [
    { n: 14, elev: 0.8, len: 1.55, width: 0.2, droop: 0.42, y: 0.0 },
    { n: 11, elev: 1.08, len: 1.4, width: 0.19, droop: 0.34, y: 0.04 },
    { n: 8, elev: 1.32, len: 1.15, width: 0.17, droop: 0.24, y: 0.08 },
    { n: 5, elev: 1.48, len: 0.8, width: 0.15, droop: 0.12, y: 0.1 },
  ];
  rings.forEach((ring, ri) => {
    for (let k = 0; k < ring.n; k++) {
      const az = (k / ring.n) * TAU + ri * 0.37;
      const g = leafGeo({ len: ring.len, width: ring.width, droop: ring.droop, fold: 0.5, nu: 10, nv: 4 });
      xform(g, { p: [cos(az) * 0.06, topY + ring.y - 0.05, sin(az) * 0.06], r: [0, -az, ring.elev] });
      geos.push(g);
    }
  });
  return mergeList(geos);
}

/** 花萼：围绕顶部的一圈星形叶 (+ 短茎)。k 为整体缩放，n 为叶片数 */
export function calyxGeo(top, k = 1, n = 8, withStem = true) {
  const geos = [];
  for (let i = 0; i < n; i++) {
    const az = (i / n) * TAU + 0.2;
    const g = leafGeo({ len: 0.62 * k, width: 0.2 * k, droop: -0.05 * k, fold: 0.6, nu: 8, nv: 4 });
    xform(g, { p: [cos(az) * 0.04 * k, top.y + 0.02, sin(az) * 0.04 * k], r: [0, -az, -0.28 + (i % 2) * 0.22] });
    geos.push(g);
  }
  if (withStem) {
    geos.push(
      taperedTube(
        [
          [0, top.y, 0],
          [0.02, top.y + 0.12, 0],
          [0.06, top.y + 0.26, 0],
        ],
        0.045,
        0.03,
        6,
        6,
      ),
    );
  }
  return mergeList(geos);
}

/** 火龙果鳞片：螺旋分布的尖叶 */
export function flapsGeo(shape, count = 46) {
  const geos = [];
  const golden = 2.399963;
  for (let k = 0; k < count; k++) {
    const frac = (k + 0.5) / count;
    const th = Math.acos(1 - 2 * frac);
    if (th < 0.32 || th > PI - 0.3) continue;
    const ph = k * golden;
    const { p, n } = surfacePoint(shape, th, ph);
    // 叶片指向：法线外翻 + 朝顶部的切线方向
    const up = new THREE.Vector3(0, 1, 0);
    const tangent = up.clone().sub(n.clone().multiplyScalar(up.dot(n))).normalize();
    const X = n.clone().multiplyScalar(0.72).add(tangent.multiplyScalar(0.7)).normalize();
    const Z = new THREE.Vector3().crossVectors(X, n).normalize();
    const Y = new THREE.Vector3().crossVectors(Z, X).normalize();
    const len = 0.42 + 0.12 * Math.sin(k * 1.7);
    const g = leafGeo({ len, width: 0.13, droop: 0.28, fold: 0.5, nu: 7, nv: 3 });
    const m = new THREE.Matrix4().makeBasis(X, Y, Z);
    m.setPosition(p.x, p.y, p.z);
    g.applyMatrix4(m);
    geos.push(g);
  }
  return mergeList(geos);
}

/** 冰晶：在曲面上竖起的六棱锥柱 */
export function shardsGeo(shape, spots) {
  const geos = [];
  const Y = new THREE.Vector3(0, 1, 0);
  for (const sp of spots) {
    const { p, n } = surfacePoint(shape, sp.th, sp.ph);
    const g = new THREE.ConeGeometry(sp.r, sp.h, 5, 1, false);
    g.translate(0, sp.h / 2 - 0.04, 0);
    const q = new THREE.Quaternion().setFromUnitVectors(Y, n.clone().add(new THREE.Vector3(sp.lx || 0, sp.ly || 0, 0)).normalize());
    const m = new THREE.Matrix4().compose(p, q, new THREE.Vector3(1, 1, 1));
    g.applyMatrix4(m);
    geos.push(finalize(g));
  }
  return mergeList(geos);
}

/** 合并若干非索引几何（无分组） */
export function mergeList(list) {
  let total = 0;
  for (const g of list) total += g.attributes.position.count;
  const pos = new Float32Array(total * 3);
  const nor = new Float32Array(total * 3);
  const uv = new Float32Array(total * 2);
  let o = 0;
  for (const g of list) {
    const n = g.attributes.position.count;
    pos.set(g.attributes.position.array, o * 3);
    nor.set(g.attributes.normal.array, o * 3);
    uv.set(g.attributes.uv.array, o * 2);
    o += n;
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  out.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return out;
}

/**
 * 把「主体 + 若干附件」拼成一个带材质分组的几何。
 * parts[0] 是主体（可切割），其余为附件（切割时整块分配）。
 * 返回的几何 groups 与 parts 一一对应，materialIndex = 下标。
 */
export function assemble(parts) {
  const merged = mergeList(parts);
  let start = 0;
  parts.forEach((g, i) => {
    const count = g.attributes.position.count;
    merged.addGroup(start, count, i);
    start += count;
  });
  return merged;
}
