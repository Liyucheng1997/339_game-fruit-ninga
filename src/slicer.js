// 真·网格切割：平面裁剪三角网格 + 沿切口重建封盖(截面)
//
// 输入几何为「非索引」三角网格(position/normal/uv) + 材质分组。
// kinds[材质下标] 决定每个分组的处理方式：
//   'body' / 'cap' —— 被平面真实裁剪，且切口边参与截面回路
//   'part'         —— 茎/叶/鳞片等附件，按三角形重心整块分配到某一侧
// 每次调用只保留平面正侧 (n·p - d >= 0)；调用两次（翻转平面）即得两半。

import * as THREE from 'three';

const EPS = 1e-6; // 顶点贴平面时的推离量，避免退化
const NODE_CELL = 1e-4; // 切口节点合并网格
const NODE_EPS = 3e-5; // 切口节点合并距离
const TAU = Math.PI * 2;

/** @returns {{geometry:THREE.BufferGeometry, center:THREE.Vector3, radius:number}|null} */
export function slicePiece(geo, kinds, capMat, nx, ny, nz, d, rnd = Math.random) {
  const pos = geo.attributes.position.array;
  const nor = geo.attributes.normal.array;
  const uvs = geo.attributes.uv.array;
  const groups = geo.groups.length
    ? geo.groups
    : [{ start: 0, count: pos.length / 3, materialIndex: 0 }];

  /** matIndex -> {p:[],n:[],u:[]} */
  const out = new Map();
  const bufOf = (m) => {
    let b = out.get(m);
    if (!b) {
      b = { p: [], n: [], u: [] };
      out.set(m, b);
    }
    return b;
  };
  const segs = []; // 切口线段：exit→entry，每段 6 个数
  const V = [new Float64Array(8), new Float64Array(8), new Float64Array(8)];
  const dist = [0, 0, 0];
  const poly = [];

  const pushTri = (buf, a, b, c) => {
    buf.p.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]);
    buf.n.push(a[3], a[4], a[5], b[3], b[4], b[5], c[3], c[4], c[5]);
    buf.u.push(a[6], a[7], b[6], b[7], c[6], c[7]);
  };

  for (const g of groups) {
    const kind = kinds[g.materialIndex] || 'body';
    const buf = bufOf(g.materialIndex);
    const end = g.start + g.count;
    for (let i = g.start; i < end; i += 3) {
      for (let k = 0; k < 3; k++) {
        const vi = i + k;
        const v = V[k];
        v[0] = pos[vi * 3];
        v[1] = pos[vi * 3 + 1];
        v[2] = pos[vi * 3 + 2];
        v[3] = nor[vi * 3];
        v[4] = nor[vi * 3 + 1];
        v[5] = nor[vi * 3 + 2];
        v[6] = uvs[vi * 2];
        v[7] = uvs[vi * 2 + 1];
        let dd = nx * v[0] + ny * v[1] + nz * v[2] - d;
        if (Math.abs(dd) < EPS) dd = EPS;
        dist[k] = dd;
      }

      if (kind === 'part') {
        if (dist[0] + dist[1] + dist[2] >= 0) pushTri(buf, V[0], V[1], V[2]);
        continue;
      }

      const in0 = dist[0] >= 0;
      const in1 = dist[1] >= 0;
      const in2 = dist[2] >= 0;
      const cnt = (in0 ? 1 : 0) + (in1 ? 1 : 0) + (in2 ? 1 : 0);
      if (cnt === 3) {
        pushTri(buf, V[0], V[1], V[2]);
        continue;
      }
      if (cnt === 0) continue;

      poly.length = 0;
      let ex = null;
      let en = null;
      for (let e = 0; e < 3; e++) {
        const P = V[e];
        const Q = V[(e + 1) % 3];
        const dp = dist[e];
        const dq = dist[(e + 1) % 3];
        if (dp >= 0) poly.push(P);
        if (dp >= 0 !== dq >= 0) {
          const t = dp / (dp - dq);
          const I = new Float64Array(8);
          for (let k = 0; k < 8; k++) I[k] = P[k] + (Q[k] - P[k]) * t;
          const nl = Math.hypot(I[3], I[4], I[5]) || 1;
          I[3] /= nl;
          I[4] /= nl;
          I[5] /= nl;
          poly.push(I);
          if (dp >= 0) ex = I;
          else en = I;
        }
      }
      pushTri(buf, poly[0], poly[1], poly[2]);
      if (poly.length === 4) pushTri(buf, poly[0], poly[2], poly[3]);
      if (ex && en) segs.push(ex[0], ex[1], ex[2], en[0], en[1], en[2]);
    }
  }

  buildCap(segs, nx, ny, nz, bufOf(capMat), rnd);

  // 汇总
  let total = 0;
  for (const b of out.values()) total += b.p.length / 3;
  if (total < 12) return null;

  // 包围盒中心 / 半径（仅 body+cap，作为新碎块的枢轴）
  let minX = Infinity,
    minY = Infinity,
    minZ = Infinity,
    maxX = -Infinity,
    maxY = -Infinity,
    maxZ = -Infinity;
  for (const [m, b] of out) {
    if (kinds[m] === 'part') continue;
    for (let i = 0; i < b.p.length; i += 3) {
      const x = b.p[i];
      const y = b.p[i + 1];
      const z = b.p[i + 2];
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
      if (z < minZ) minZ = z;
      if (z > maxZ) maxZ = z;
    }
  }
  if (minX === Infinity) return null;
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const cz = (minZ + maxZ) / 2;

  const P = new Float32Array(total * 3);
  const N = new Float32Array(total * 3);
  const U = new Float32Array(total * 2);
  const g = new THREE.BufferGeometry();
  let vOff = 0;
  let radius2 = 0;
  const mats = [...out.keys()].sort((a, b) => a - b);
  for (const m of mats) {
    const b = out.get(m);
    const n = b.p.length / 3;
    if (!n) continue;
    for (let i = 0; i < n; i++) {
      const x = b.p[i * 3] - cx;
      const y = b.p[i * 3 + 1] - cy;
      const z = b.p[i * 3 + 2] - cz;
      P[(vOff + i) * 3] = x;
      P[(vOff + i) * 3 + 1] = y;
      P[(vOff + i) * 3 + 2] = z;
      if (kinds[m] !== 'part') {
        const r2 = x * x + y * y + z * z;
        if (r2 > radius2) radius2 = r2;
      }
    }
    N.set(b.n, vOff * 3);
    U.set(b.u, vOff * 2);
    g.addGroup(vOff, n, m);
    vOff += n;
  }
  g.setAttribute('position', new THREE.BufferAttribute(P, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(N, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(U, 2));
  return { geometry: g, center: new THREE.Vector3(cx, cy, cz), radius: Math.sqrt(radius2) };
}

/* ------------------------------------------------------------------ */
/* 封盖：线段 → 回路 → 三角化                                           */
/* ------------------------------------------------------------------ */

function buildCap(segs, nx, ny, nz, buf, rnd) {
  const segCount = segs.length / 6;
  if (segCount < 3) return;

  // 1) 合并近似重合的端点为节点
  const nodes = []; // [x,y,z]
  const grid = new Map();
  const cellKey = (i, j, k) => i * 73856093 ^ j * 19349663 ^ k * 83492791;
  const nodeOf = (x, y, z) => {
    const ci = Math.floor(x / NODE_CELL);
    const cj = Math.floor(y / NODE_CELL);
    const ck = Math.floor(z / NODE_CELL);
    for (let a = -1; a <= 1; a++)
      for (let b = -1; b <= 1; b++)
        for (let c = -1; c <= 1; c++) {
          const list = grid.get(cellKey(ci + a, cj + b, ck + c));
          if (!list) continue;
          for (const id of list) {
            const q = nodes[id];
            if (Math.abs(q[0] - x) < NODE_EPS && Math.abs(q[1] - y) < NODE_EPS && Math.abs(q[2] - z) < NODE_EPS) {
              return id;
            }
          }
        }
    const id = nodes.length;
    nodes.push([x, y, z]);
    const key = cellKey(ci, cj, ck);
    const l = grid.get(key);
    if (l) l.push(id);
    else grid.set(key, [id]);
    return id;
  };

  const segA = [];
  const segB = [];
  const outgoing = new Map();
  for (let s = 0; s < segCount; s++) {
    const a = nodeOf(segs[s * 6], segs[s * 6 + 1], segs[s * 6 + 2]);
    const b = nodeOf(segs[s * 6 + 3], segs[s * 6 + 4], segs[s * 6 + 5]);
    if (a === b) continue;
    const idx = segA.length;
    segA.push(a);
    segB.push(b);
    const l = outgoing.get(a);
    if (l) l.push(idx);
    else outgoing.set(a, [idx]);
  }

  // 2) 追踪回路
  const used = new Uint8Array(segA.length);
  const loops = [];
  for (let s0 = 0; s0 < segA.length; s0++) {
    if (used[s0]) continue;
    used[s0] = 1;
    const loop = [segA[s0]];
    let node = segB[s0];
    let guard = 0;
    while (node !== segA[s0] && guard++ < segA.length + 2) {
      loop.push(node);
      const cand = outgoing.get(node);
      let nxt = -1;
      if (cand) for (const c of cand) if (!used[c]) { nxt = c; break; }
      if (nxt < 0) break;
      used[nxt] = 1;
      node = segB[nxt];
    }
    if (loop.length >= 3) loops.push(loop);
  }

  // 3) 平面基底 (e1,e2,n) 右手系
  let ax = 1, ay = 0, az = 0;
  if (Math.abs(nx) > 0.9) { ax = 0; ay = 1; }
  const dot = ax * nx + ay * ny + az * nz;
  let e1x = ax - nx * dot, e1y = ay - ny * dot, e1z = az - nz * dot;
  const e1l = Math.hypot(e1x, e1y, e1z);
  e1x /= e1l; e1y /= e1l; e1z /= e1l;
  const e2x = ny * e1z - nz * e1y;
  const e2y = nz * e1x - nx * e1z;
  const e2z = nx * e1y - ny * e1x;

  const cnx = -nx;
  const cny = -ny;
  const cnz = -nz;

  for (const loop of loops) {
    const n = loop.length;
    let cx = 0, cy = 0, cz = 0;
    for (const id of loop) {
      cx += nodes[id][0]; cy += nodes[id][1]; cz += nodes[id][2];
    }
    cx /= n; cy /= n; cz /= n;

    let xs = new Float64Array(n);
    let ys = new Float64Array(n);
    let ord = loop.slice();
    const project = () => {
      for (let i = 0; i < n; i++) {
        const q = nodes[ord[i]];
        const rx = q[0] - cx, ry = q[1] - cy, rz = q[2] - cz;
        xs[i] = rx * e1x + ry * e1y + rz * e1z;
        ys[i] = rx * e2x + ry * e2y + rz * e2z;
      }
    };
    project();
    let area = 0;
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      area += xs[i] * ys[j] - xs[j] * ys[i];
    }
    if (area < 0) {
      ord.reverse();
      project();
    }

    // 星形检验：绕质心的每段叉积都为正且总角度≈2π
    let star = true;
    let sweep = 0;
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      const cr = xs[i] * ys[j] - xs[j] * ys[i];
      if (cr <= 1e-12) { star = false; break; }
      sweep += Math.atan2(cr, xs[i] * xs[j] + ys[i] * ys[j]);
    }
    if (star && Math.abs(sweep - TAU) > 0.05) star = false;

    const rot = rnd() * TAU;
    const pushV = (x, y, z, u, v) => {
      buf.p.push(x, y, z);
      buf.n.push(cnx, cny, cnz);
      buf.u.push(u, v);
    };

    if (star) {
      // 从质心扇形展开，UV 把边界映射到单位圆 → 截面图案自动贴合真实轮廓
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        const a = nodes[ord[i]];
        const b = nodes[ord[j]];
        const ai = Math.atan2(ys[i], xs[i]) + rot;
        const bi = Math.atan2(ys[j], xs[j]) + rot;
        // 截面朝向 -n：(c, b, a)
        pushV(cx, cy, cz, 0.5, 0.5);
        pushV(b[0], b[1], b[2], 0.5 + 0.5 * Math.cos(bi), 0.5 + 0.5 * Math.sin(bi));
        pushV(a[0], a[1], a[2], 0.5 + 0.5 * Math.cos(ai), 0.5 + 0.5 * Math.sin(ai));
      }
    } else {
      // 凹多边形：耳切法 + 平面投影 UV
      let rmax = 1e-6;
      for (let i = 0; i < n; i++) rmax = Math.max(rmax, Math.hypot(xs[i], ys[i]));
      const cr = Math.cos(rot);
      const sr = Math.sin(rot);
      const uvOf = (i) => {
        const x = xs[i] / rmax;
        const y = ys[i] / rmax;
        return [0.5 + 0.5 * (x * cr - y * sr), 0.5 + 0.5 * (x * sr + y * cr)];
      };
      const tris = earClip(xs, ys);
      for (let t = 0; t < tris.length; t += 3) {
        const ia = tris[t], ib = tris[t + 1], ic = tris[t + 2];
        const A = nodes[ord[ia]], B = nodes[ord[ib]], C = nodes[ord[ic]];
        const ua = uvOf(ia), ub = uvOf(ib), uc = uvOf(ic);
        pushV(A[0], A[1], A[2], ua[0], ua[1]);
        pushV(C[0], C[1], C[2], uc[0], uc[1]);
        pushV(B[0], B[1], B[2], ub[0], ub[1]);
      }
    }
  }
}

/** 耳切三角化（输入为逆时针简单多边形），返回三角形下标 */
function earClip(xs, ys) {
  const n = xs.length;
  const idx = Array.from({ length: n }, (_, i) => i);
  const res = [];
  const inTri = (px, py, ax, ay, bx, by, cx, cy) => {
    const d1 = (px - bx) * (ay - by) - (ax - bx) * (py - by);
    const d2 = (px - cx) * (by - cy) - (bx - cx) * (py - cy);
    const d3 = (px - ax) * (cy - ay) - (cx - ax) * (py - ay);
    const neg = d1 < 0 || d2 < 0 || d3 < 0;
    const pos = d1 > 0 || d2 > 0 || d3 > 0;
    return !(neg && pos);
  };
  let guard = 0;
  while (idx.length > 3 && guard++ < n * n + 10) {
    let clipped = false;
    const len = idx.length;
    for (let i = 0; i < len; i++) {
      const ia = idx[(i + len - 1) % len];
      const ib = idx[i];
      const ic = idx[(i + 1) % len];
      const cr = (xs[ib] - xs[ia]) * (ys[ic] - ys[ia]) - (ys[ib] - ys[ia]) * (xs[ic] - xs[ia]);
      if (cr <= 1e-12) continue;
      let ok = true;
      for (let j = 0; j < len; j++) {
        const k = idx[j];
        if (k === ia || k === ib || k === ic) continue;
        if (inTri(xs[k], ys[k], xs[ia], ys[ia], xs[ib], ys[ib], xs[ic], ys[ic])) { ok = false; break; }
      }
      if (!ok) continue;
      res.push(ia, ib, ic);
      idx.splice(i, 1);
      clipped = true;
      break;
    }
    if (!clipped) {
      res.push(idx[0], idx[1], idx[2]);
      idx.splice(1, 1);
    }
  }
  if (idx.length === 3) res.push(idx[0], idx[1], idx[2]);
  return res;
}
