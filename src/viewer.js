// 调试用模型查看器：?view=whole 展示整果，?view=cut 展示切开后的两半（截面朝向镜头）
// 可选参数：&only=apple,kiwi 只显示指定水果；&scale=2 放大；&tilt=0.4 切面倾角
import * as THREE from 'three';
import { slicePiece } from './slicer.js';
import { FRUIT_DEFS } from './models/fruits.js';

export function runViewer(stage, assets, mode, params) {
  const only = params.get('only');
  const types = only ? only.split(',') : Object.keys(FRUIT_DEFS);
  const S = parseFloat(params.get('scale') || '1');
  const tilt = parseFloat(params.get('tilt') || '0.12');
  const cols = only ? Math.min(types.length, Math.max(1, Math.round(5 / S))) : 5;
  const gap = 4.4 * S;
  const items = [];
  const rows = Math.ceil(types.length / cols);
  types.forEach((t, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = (col - (cols - 1) / 2) * gap;
    const y = ((rows - 1) / 2 - row) * gap * 0.95 + (only ? 0 : 1.2);
    const a = assets[t];
    if (mode === 'cut') {
      const n = new THREE.Vector3(1, tilt, 0).normalize();
      const A = slicePiece(a.geometry, a.kinds, a.capIndex, n.x, n.y, n.z, 0);
      const B = slicePiece(a.geometry, a.kinds, a.capIndex, -n.x, -n.y, -n.z, 0);
      [[A, Math.PI / 2, -1], [B, -Math.PI / 2, 1]].forEach(([p, ry, sx]) => {
        if (!p) return;
        const m = new THREE.Mesh(p.geometry, a.materials);
        m.position.set(x + sx * 0.95 * S, y, 0);
        m.rotation.y = ry;
        m.scale.setScalar(S);
        m.castShadow = true;
        stage.world.add(m);
        items.push({ m, spin: false });
      });
    } else {
      const m = new THREE.Mesh(a.geometry, a.materials);
      m.position.set(x, y, 0);
      m.scale.setScalar(S);
      m.castShadow = true;
      m.rotation.set(0.3, 0.5 * i, 0.1);
      stage.world.add(m);
      items.push({ m, spin: true });
    }
  });

  let last = performance.now();
  const loop = (now) => {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    for (const it of items) if (it.spin) it.m.rotation.y += dt * 0.6;
    stage.render(dt);
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}
