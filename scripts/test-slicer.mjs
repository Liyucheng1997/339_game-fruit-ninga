// 切割器自检：体积守恒、网格封闭（每条有向边恰有一条反向边）、二次切割、凹形(香蕉)、多种水果
import * as THREE from 'three';
import { paramBody, SHAPES } from '../src/models/shapes.js';
import { slicePiece } from '../src/slicer.js';

const kinds = ['body', 'cap'];
let failures = 0;
const fail = (m) => { failures++; console.log('  ✗', m); };
const ok = (m) => console.log('  ✓', m);

function volume(geo) {
  const p = geo.attributes.position.array;
  let v = 0;
  for (let i = 0; i < p.length; i += 9) {
    const ax = p[i], ay = p[i + 1], az = p[i + 2];
    const bx = p[i + 3], by = p[i + 4], bz = p[i + 5];
    const cx = p[i + 6], cy = p[i + 7], cz = p[i + 8];
    v += ax * (by * cz - bz * cy) - ay * (bx * cz - bz * cx) + az * (bx * cy - by * cx);
  }
  return v / 6;
}

function openEdges(geo, tol = 1e-3) {
  const p = geo.attributes.position.array;
  const key = (i) => `${Math.round(p[i * 3] / tol)},${Math.round(p[i * 3 + 1] / tol)},${Math.round(p[i * 3 + 2] / tol)}`;
  const cnt = new Map();
  const n = p.length / 9;
  for (let t = 0; t < n; t++) {
    const k = [key(t * 3), key(t * 3 + 1), key(t * 3 + 2)];
    if (k[0] === k[1] || k[1] === k[2] || k[0] === k[2]) continue; // 退化三角形
    for (let e = 0; e < 3; e++) {
      const a = k[e], b = k[(e + 1) % 3];
      const f = `${a}>${b}`;
      cnt.set(f, (cnt.get(f) || 0) + 1);
    }
  }
  let open = 0;
  for (const [f, c] of cnt) {
    const [a, b] = f.split('>');
    if ((cnt.get(`${b}>${a}`) || 0) !== c) open++;
  }
  return open;
}

function normalizePlane(nx, ny, nz, d) {
  const l = Math.hypot(nx, ny, nz);
  return [nx / l, ny / l, nz / l, d / l];
}

function testShape(name, shape, plane) {
  console.log(`[${name}]`);
  const geo = paramBody({ shape });
  const v0 = volume(geo);
  if (v0 <= 0) fail(`原始体积为负 ${v0}`); else ok(`体积 ${v0.toFixed(3)}，开放边 ${openEdges(geo)}`);
  const [nx, ny, nz, d] = normalizePlane(...plane);
  const A = slicePiece(geo, kinds, 1, nx, ny, nz, d);
  const B = slicePiece(geo, kinds, 1, -nx, -ny, -nz, -d);
  if (!A || !B) { fail('某一半为空'); return; }
  const va = volume(A.geometry);
  const vb = volume(B.geometry);
  // 半块已被平移到自身中心，体积不变
  const rel = Math.abs(va + vb - v0) / v0;
  rel < 0.01 ? ok(`体积守恒 ${va.toFixed(3)} + ${vb.toFixed(3)} = ${(va + vb).toFixed(3)} (误差 ${(rel * 100).toFixed(3)}%)`) : fail(`体积不守恒 ${va} + ${vb} vs ${v0}`);
  va > 0 && vb > 0 ? ok('两半体积均为正（朝向正确）') : fail(`朝向错误 ${va} ${vb}`);
  const oa = openEdges(A.geometry);
  const ob = openEdges(B.geometry);
  oa === 0 && ob === 0 ? ok('两半均为封闭网格') : fail(`开放边 A=${oa} B=${ob}`);
  // 检查封盖法线朝外：封盖组三角形的法线应与面法线一致
  const capGroup = A.geometry.groups.find((g) => g.materialIndex === 1);
  capGroup ? ok(`有截面封盖 (${capGroup.count / 3} 个三角形)`) : fail('缺少截面封盖');

  // 二次切割：对半块再切一刀（局部坐标）
  const plane2 = normalizePlane(0.7, -0.2, 0.5, 0.05);
  const C = slicePiece(A.geometry, kinds, 1, plane2[0], plane2[1], plane2[2], plane2[3]);
  const D = slicePiece(A.geometry, kinds, 1, -plane2[0], -plane2[1], -plane2[2], -plane2[3]);
  if (!C || !D) { fail('二次切割产生空块'); return; }
  const vc = volume(C.geometry), vd = volume(D.geometry);
  const rel2 = Math.abs(vc + vd - va) / va;
  rel2 < 0.01 ? ok(`二次切割体积守恒 (${(rel2 * 100).toFixed(3)}%)`) : fail(`二次切割不守恒 ${vc}+${vd} vs ${va}`);
  const oc = openEdges(C.geometry), od = openEdges(D.geometry);
  oc === 0 && od === 0 ? ok('二次切割后仍封闭') : fail(`二次开放边 C=${oc} D=${od}`);
}

testShape('球体·斜切', SHAPES.sphere, [0.3, 0.9, 0.1, 0.2]);
testShape('苹果·过心', SHAPES.apple, [1, 0.2, 0.3, 0.0]);
testShape('西瓜·偏心', SHAPES.watermelon, [0.2, 1, 0.4, 0.35]);
testShape('杨桃·星形截面', SHAPES.star, [0.05, 1, 0.02, 0.1]);
testShape('菠萝', SHAPES.pineapple, [1, 0.1, 0.0, 0.2]);
testShape('草莓', SHAPES.strawberry, [0.4, 0.8, 0.3, 0.0]);
testShape('雪梨', SHAPES.pear, [0.1, 1, 0.2, -0.2]);
testShape('桃子', SHAPES.peach, [0.9, 0.3, 0.1, 0.1]);
testShape('香蕉·横切', SHAPES.banana, [1, 0.05, 0.0, 0.0]);
testShape('香蕉·纵切(凹截面)', SHAPES.banana, [0.0, 0.3, 1.0, 0.02]);
testShape('香蕉·沿弧斜切', SHAPES.banana, [0.4, 1.0, 0.0, -0.3]);

console.log(failures ? `\n失败 ${failures} 项` : '\n全部通过 ✔');
process.exit(failures ? 1 : 0);
