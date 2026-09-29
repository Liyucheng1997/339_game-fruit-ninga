// 配件贴图：叶片、茎、炸弹（骷髅 + 发光图）
import { canvasTex } from './paint.js';
import { mulberry32 } from '../util/noise.js';
import { TAU } from '../util/math.js';

/** 叶片：u 沿长度(根→尖)，v 横向；stops 为沿长度的渐变 */
export function leafTex(stops, vein = 'rgba(230,255,200,0.5)') {
  return canvasTex(256, 96, (ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, w, 0);
    for (const [o, c] of stops) g.addColorStop(o, c);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = vein;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();
    ctx.lineWidth = 1.4;
    ctx.globalAlpha = 0.45;
    for (let i = 1; i < 12; i++) {
      const x = (i / 12) * w;
      ctx.beginPath();
      ctx.moveTo(x, h / 2);
      ctx.lineTo(x + w * 0.1, 2);
      ctx.moveTo(x, h / 2);
      ctx.lineTo(x + w * 0.1, h - 2);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  });
}

export function stemTex(base = '#5a3b1f', dark = '#2f1d0e') {
  return canvasTex(32, 64, (ctx, w, h) => {
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, w, h);
    const r = mulberry32(5);
    ctx.strokeStyle = dark;
    for (let i = 0; i < 14; i++) {
      ctx.globalAlpha = 0.3 + r() * 0.3;
      ctx.lineWidth = 1 + r() * 2;
      const x = r() * w;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + (r() - 0.5) * 4, h);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  });
}

function skull(ctx, cx, cy, s, fill, socket) {
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.ellipse(cx, cy - s * 0.1, s * 0.5, s * 0.44, 0, 0, TAU);
  ctx.fill();
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(cx - s * 0.27, cy + s * 0.14, s * 0.54, s * 0.34, s * 0.07);
  else ctx.rect(cx - s * 0.27, cy + s * 0.14, s * 0.54, s * 0.34);
  ctx.fill();
  ctx.fillStyle = socket;
  ctx.beginPath();
  ctx.ellipse(cx - s * 0.19, cy - s * 0.06, s * 0.13, s * 0.15, 0, 0, TAU);
  ctx.ellipse(cx + s * 0.19, cy - s * 0.06, s * 0.13, s * 0.15, 0, 0, TAU);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(cx, cy + s * 0.03);
  ctx.lineTo(cx - s * 0.06, cy + s * 0.15);
  ctx.lineTo(cx + s * 0.06, cy + s * 0.15);
  ctx.closePath();
  ctx.fill();
  // 牙缝
  ctx.strokeStyle = socket;
  ctx.lineWidth = Math.max(2, s * 0.03);
  for (let i = -1; i <= 1; i++) {
    ctx.beginPath();
    ctx.moveTo(cx + i * s * 0.14, cy + s * 0.24);
    ctx.lineTo(cx + i * s * 0.14, cy + s * 0.46);
    ctx.stroke();
  }
}

/** 炸弹表面：铸铁质感 + 两枚骷髅；返回 {map, emissive} */
export function bombTextures() {
  const W = 512;
  const H = 256;
  const map = canvasTex(
    W,
    H,
    (ctx) => {
      const g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, '#2c2c34');
      g.addColorStop(0.5, '#1a1a20');
      g.addColorStop(1, '#101014');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
      const r = mulberry32(9);
      for (let i = 0; i < 1800; i++) {
        ctx.fillStyle = `rgba(${r() < 0.5 ? '255,255,255' : '0,0,0'},${0.02 + r() * 0.05})`;
        ctx.fillRect(r() * W, r() * H, 1 + r() * 3, 1 + r() * 3);
      }
      for (const u of [0.25, 0.75]) {
        ctx.save();
        skull(ctx, u * W, H * 0.52, 96, '#d6d0c8', '#1a1a1e');
        ctx.restore();
      }
      ctx.strokeStyle = '#8a1010';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(0, H * 0.24);
      ctx.lineTo(W, H * 0.24);
      ctx.moveTo(0, H * 0.8);
      ctx.lineTo(W, H * 0.8);
      ctx.stroke();
    },
    { wrapS: true },
  );
  const emissive = canvasTex(
    W,
    H,
    (ctx) => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, W, H);
      for (const u of [0.25, 0.75]) skull(ctx, u * W, H * 0.52, 96, '#ff2a1a', '#000');
      ctx.strokeStyle = '#ff2a1a';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(0, H * 0.24);
      ctx.lineTo(W, H * 0.24);
      ctx.moveTo(0, H * 0.8);
      ctx.lineTo(W, H * 0.8);
      ctx.stroke();
    },
    { wrapS: true },
  );
  return { map, emissive };
}
