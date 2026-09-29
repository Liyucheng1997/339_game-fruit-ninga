// 程序化贴图基础：逐像素绘制 / 2D 画布绘制 → THREE 贴图
import * as THREE from 'three';

export function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

function toTexture(canvas, srgb, wrapS = true) {
  const t = new THREE.CanvasTexture(canvas);
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  if (wrapS) t.wrapS = THREE.RepeatWrapping;
  t.anisotropy = 8;
  return t;
}

/**
 * 逐像素绘制：fn(u, t, o)，u∈[0,1) 环绕，t∈[0,1] 自上而下。
 * 通过写 o.r/g/b (0..255) 与 o.h (0..1 高度，用于凹凸贴图)。
 */
export function paintPixels(w, h, fn, { bump = true } = {}) {
  const cc = makeCanvas(w, h);
  const cx = cc.getContext('2d');
  const img = cx.createImageData(w, h);
  let bc = null;
  let bimg = null;
  if (bump) {
    bc = makeCanvas(w, h);
    bimg = bc.getContext('2d').createImageData(w, h);
  }
  const o = { r: 0, g: 0, b: 0, h: 0.5 };
  const d = img.data;
  for (let y = 0; y < h; y++) {
    const t = (y + 0.5) / h;
    for (let x = 0; x < w; x++) {
      const u = (x + 0.5) / w;
      o.h = 0.5;
      fn(u, t, o);
      const k = (y * w + x) * 4;
      d[k] = o.r;
      d[k + 1] = o.g;
      d[k + 2] = o.b;
      d[k + 3] = 255;
      if (bimg) {
        const hv = o.h * 255;
        bimg.data[k] = hv;
        bimg.data[k + 1] = hv;
        bimg.data[k + 2] = hv;
        bimg.data[k + 3] = 255;
      }
    }
  }
  cx.putImageData(img, 0, 0);
  if (bc) bc.getContext('2d').putImageData(bimg, 0, 0);
  return { color: toTexture(cc, true), bump: bc ? toTexture(bc, false) : null };
}

/** 2D 画布绘制 → 颜色贴图 */
export function canvasTex(w, h, draw, { srgb = true, wrapS = false } = {}) {
  const c = makeCanvas(w, h);
  const ctx = c.getContext('2d');
  draw(ctx, w, h);
  return toTexture(c, srgb, wrapS);
}

/** 让出一帧，避免长时间生成阻塞界面 */
export const nextFrame = () =>
  new Promise((resolve) => {
    let done = false;
    const go = () => {
      if (!done) {
        done = true;
        resolve();
      }
    };
    requestAnimationFrame(go);
    setTimeout(go, 40); // 页面在后台时 RAF 会被暂停，用超时兜底
  });
