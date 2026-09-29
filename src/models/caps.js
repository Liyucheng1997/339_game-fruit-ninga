// 截面(果肉)贴图：512×512，圆心 (256,256)，边界(=真实切口轮廓)对应半径 256
import { canvasTex } from './paint.js';
import { fbm, mulberry32 } from '../util/noise.js';
import { TAU } from '../util/math.js';

const S = 512;
const C = S / 2;

const disc = (ctx, r, fill) => {
  ctx.beginPath();
  ctx.arc(C, C, r * C, 0, TAU);
  ctx.fillStyle = fill;
  ctx.fill();
};

const radial = (ctx, stops, r0 = 0, r1 = 1) => {
  const g = ctx.createRadialGradient(C, C, r0 * C, C, C, r1 * C);
  for (const [o, c] of stops) g.addColorStop(o, c);
  return g;
};

/** 放射状纤维 */
function rays(ctx, rnd, n, r0, r1, color, width = 2, jitter = 0.35) {
  ctx.strokeStyle = color;
  ctx.lineCap = 'round';
  for (let i = 0; i < n; i++) {
    const a = (i / n) * TAU + (rnd() - 0.5) * jitter;
    const ra = r0 + (r1 - r0) * rnd() * 0.25;
    const rb = r1 - (r1 - r0) * rnd() * 0.4;
    ctx.lineWidth = width * (0.5 + rnd());
    ctx.beginPath();
    ctx.moveTo(C + Math.cos(a) * ra * C, C + Math.sin(a) * ra * C);
    ctx.lineTo(C + Math.cos(a) * rb * C, C + Math.sin(a) * rb * C);
    ctx.stroke();
  }
}

function dots(ctx, rnd, n, rmin, rmax, size, color) {
  ctx.fillStyle = color;
  for (let i = 0; i < n; i++) {
    const a = rnd() * TAU;
    const r = rmin + (rmax - rmin) * Math.sqrt(rnd());
    ctx.beginPath();
    ctx.arc(C + Math.cos(a) * r * C, C + Math.sin(a) * r * C, size * (0.6 + rnd() * 0.8), 0, TAU);
    ctx.fill();
  }
}

/** 水滴形/椭圆籽，沿指定角度朝向 */
function seed(ctx, x, y, ang, rx, ry, fill, hl) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(ang);
  ctx.beginPath();
  ctx.ellipse(0, 0, rx, ry, 0, 0, TAU);
  ctx.fillStyle = fill;
  ctx.fill();
  if (hl) {
    ctx.beginPath();
    ctx.ellipse(-rx * 0.25, -ry * 0.3, rx * 0.4, ry * 0.28, 0, 0, TAU);
    ctx.fillStyle = hl;
    ctx.fill();
  }
  ctx.restore();
}

/** 逐像素叠加果肉颗粒感 */
function grain(ctx, amp = 10, freq = 14) {
  const img = ctx.getImageData(0, 0, S, S);
  const d = img.data;
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const n = fbm((x / S) * freq, (y / S) * freq, 2) * amp + fbm((x / S) * freq * 4, (y / S) * freq * 4, 1) * amp * 0.6;
      const k = (y * S + x) * 4;
      d[k] += n;
      d[k + 1] += n;
      d[k + 2] += n;
    }
  }
  ctx.putImageData(img, 0, 0);
}

/** 分瓣（橙/柠檬）：n 个楔形，膜为果皮色 */
function segments(ctx, rnd, n, rIn, rOut, fill, membrane, vesicle1, vesicle2) {
  const gap = 0.05;
  for (let k = 0; k < n; k++) {
    const a0 = (k / n) * TAU + gap;
    const a1 = ((k + 1) / n) * TAU - gap;
    ctx.beginPath();
    ctx.moveTo(C + Math.cos((a0 + a1) / 2) * rIn * C * 0.6, C + Math.sin((a0 + a1) / 2) * rIn * C * 0.6);
    ctx.arc(C, C, rOut * C, a0, a1);
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.lineJoin = 'round';
    ctx.lineWidth = 7;
    ctx.strokeStyle = membrane;
    ctx.stroke();
    // 汁囊
    const am = (a0 + a1) / 2;
    for (let i = 0; i < 46; i++) {
      const aa = a0 + (a1 - a0) * (0.1 + 0.8 * rnd());
      const rr = rIn + (rOut - rIn - 0.06) * rnd();
      const x = C + Math.cos(aa) * rr * C;
      const y = C + Math.sin(aa) * rr * C;
      ctx.beginPath();
      ctx.ellipse(x, y, 9 + rnd() * 6, 2.6 + rnd() * 1.6, am, 0, TAU);
      ctx.fillStyle = rnd() < 0.5 ? vesicle1 : vesicle2;
      ctx.fill();
    }
  }
}

function star5(ctx, r, amp, fill, stroke, lw = 3) {
  ctx.beginPath();
  for (let i = 0; i <= 120; i++) {
    const a = (i / 120) * TAU;
    const rr = (r + amp * Math.cos(5 * a)) * C;
    const x = C + Math.cos(a) * rr;
    const y = C + Math.sin(a) * rr;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  if (stroke) {
    ctx.lineWidth = lw;
    ctx.strokeStyle = stroke;
    ctx.stroke();
  }
}

function sparkleStar(ctx, x, y, s, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = color;
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU;
    const r = i % 2 === 0 ? s : s * 0.22;
    ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

const PAINT = {
  watermelon(ctx, rnd) {
    disc(ctx, 1, '#1f6a2c');
    disc(ctx, 0.965, radial(ctx, [[0.9, '#dff2c5'], [0.97, '#a5d98a'], [1, '#5fb050']]));
    disc(ctx, 0.87, radial(ctx, [[0, '#ff2e4c'], [0.4, '#ff2848'], [0.78, '#ff4d63'], [0.93, '#ff9ba2'], [1, '#ffd6d2']]));
    rays(ctx, rnd, 200, 0.12, 0.82, 'rgba(255,255,255,0.16)', 2.2);
    rays(ctx, rnd, 160, 0.12, 0.8, 'rgba(190,10,40,0.16)', 2.4);
    const ring = (n, r, off) => {
      for (let i = 0; i < n; i++) {
        const a = (i / n) * TAU + off + (rnd() - 0.5) * 0.25;
        const rr = r + (rnd() - 0.5) * 0.05;
        seed(ctx, C + Math.cos(a) * rr * C, C + Math.sin(a) * rr * C, a, 17, 8.5, '#1a100f', 'rgba(120,100,95,0.7)');
      }
    };
    ring(9, 0.56, 0.1);
    ring(6, 0.3, 0.5);
    dots(ctx, rnd, 220, 0.05, 0.84, 1.6, 'rgba(255,255,255,0.28)');
    grain(ctx, 7);
  },

  orange(ctx, rnd) {
    disc(ctx, 1, '#ef8810');
    disc(ctx, 0.955, '#fff2d8');
    disc(ctx, 0.9, '#fff7e6');
    segments(ctx, rnd, 10, 0.1, 0.9, radial(ctx, [[0.1, '#ffb62e'], [0.6, '#ff9c17'], [1, '#ff8a0a']]), '#fff3d6', 'rgba(255,214,110,0.6)', 'rgba(230,118,0,0.32)');
    disc(ctx, 0.075, '#fff6df');
    grain(ctx, 6);
  },

  kiwi(ctx, rnd) {
    disc(ctx, 1, '#78563a');
    disc(ctx, 0.965, radial(ctx, [[0.2, '#d8ea9c'], [0.4, '#a6d84e'], [0.78, '#6fbf30'], [1, '#86cf3c']]));
    rays(ctx, rnd, 260, 0.26, 0.92, 'rgba(236,247,176,0.42)', 2.6);
    rays(ctx, rnd, 200, 0.26, 0.92, 'rgba(60,140,20,0.3)', 2.4);
    // 中心白色果心（椭圆）
    ctx.save();
    ctx.translate(C, C);
    ctx.rotate(rnd() * TAU);
    const g = ctx.createRadialGradient(0, 0, 8, 0, 0, 0.27 * C);
    g.addColorStop(0, '#fbfde8');
    g.addColorStop(0.75, '#e6f1b8');
    g.addColorStop(1, 'rgba(210,232,140,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.ellipse(0, 0, 0.27 * C, 0.19 * C, 0, 0, TAU);
    ctx.fill();
    // 籽
    for (let i = 0; i < 40; i++) {
      const a = (i / 40) * TAU + (rnd() - 0.5) * 0.05;
      const rx = 0.32 * C + (rnd() - 0.5) * 8;
      const ry = 0.245 * C + (rnd() - 0.5) * 6;
      seed(ctx, Math.cos(a) * rx, Math.sin(a) * ry, a, 8, 3.6, '#17110c', 'rgba(150,140,120,0.6)');
    }
    ctx.restore();
    grain(ctx, 7);
  },

  apple(ctx, rnd) {
    disc(ctx, 1, '#b31a2b');
    disc(ctx, 0.975, '#ecd06a');
    disc(ctx, 0.955, radial(ctx, [[0, '#fff8d4'], [0.5, '#fdf1bd'], [1, '#f6e39e']]));
    rays(ctx, rnd, 130, 0.3, 0.94, 'rgba(255,255,240,0.3)', 2);
    rays(ctx, rnd, 100, 0.3, 0.94, 'rgba(200,160,70,0.14)', 2);
    ctx.save();
    ctx.translate(C, C);
    ctx.rotate(rnd() * TAU);
    ctx.translate(-C, -C);
    dots(ctx, rnd, 30, 0.44, 0.5, 2, 'rgba(160,120,50,0.55)');
    star5(ctx, 0.27, 0.06, '#f4ebb6', '#c49a4a', 3);
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * TAU;
      const x = C + Math.cos(a) * 0.15 * C;
      const y = C + Math.sin(a) * 0.15 * C;
      ctx.beginPath();
      ctx.ellipse(x, y, 0.09 * C, 0.06 * C, a, 0, TAU);
      ctx.fillStyle = '#e8d596';
      ctx.fill();
      seed(ctx, x, y, a + Math.PI / 2, 10, 5.5, '#5d2c15', 'rgba(170,110,70,0.7)');
    }
    ctx.restore();
    grain(ctx, 6);
  },

  lemon(ctx, rnd) {
    disc(ctx, 1, '#f6d21f');
    disc(ctx, 0.95, '#fff6c8');
    disc(ctx, 0.88, '#fffbe0');
    segments(ctx, rnd, 9, 0.1, 0.86, radial(ctx, [[0.1, '#fff2a2'], [0.6, '#ffe873'], [1, '#ffe15a']]), '#fffbe2', 'rgba(255,250,190,0.7)', 'rgba(240,210,60,0.3)');
    disc(ctx, 0.07, '#fffbe6');
    for (let i = 0; i < 3; i++) {
      const a = rnd() * TAU;
      seed(ctx, C + Math.cos(a) * 0.34 * C, C + Math.sin(a) * 0.34 * C, a, 12, 6, '#f4ecc4', 'rgba(255,255,255,0.7)');
    }
    grain(ctx, 6);
  },

  pineapple(ctx, rnd) {
    disc(ctx, 1, '#7a5220');
    disc(ctx, 0.95, '#c9993a');
    disc(ctx, 0.915, radial(ctx, [[0, '#ffe066'], [0.6, '#ffd54a'], [1, '#ffcb3a']]));
    rays(ctx, rnd, 320, 0.18, 0.88, 'rgba(255,244,170,0.5)', 2.4);
    rays(ctx, rnd, 220, 0.18, 0.88, 'rgba(232,160,0,0.28)', 2.4);
    disc(ctx, 0.25, radial(ctx, [[0, '#fff5bd'], [0.8, '#ffe98c'], [1, 'rgba(255,220,110,0.4)']], 0, 0.25));
    ctx.beginPath();
    ctx.arc(C, C, 0.25 * C, 0, TAU);
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'rgba(224,170,40,0.6)';
    ctx.stroke();
    dots(ctx, rnd, 40, 0.8, 0.9, 3, 'rgba(120,80,20,0.55)');
    grain(ctx, 8);
  },

  peach(ctx, rnd) {
    disc(ctx, 1, '#df6a5a');
    disc(ctx, 0.96, radial(ctx, [[0, '#e3452d'], [0.32, '#f0882f'], [0.62, '#ffb54c'], [1, '#ffd77c']]));
    rays(ctx, rnd, 150, 0.3, 0.72, 'rgba(214,52,40,0.34)', 3);
    rays(ctx, rnd, 100, 0.3, 0.9, 'rgba(255,240,180,0.18)', 2);
    // 果核
    ctx.save();
    ctx.translate(C, C);
    ctx.rotate(rnd() * TAU);
    ctx.beginPath();
    for (let i = 0; i <= 90; i++) {
      const a = (i / 90) * TAU;
      const wob = 1 + 0.06 * Math.sin(a * 9) + 0.04 * Math.sin(a * 5 + 1);
      const x = Math.cos(a) * 0.235 * C * wob;
      const y = Math.sin(a) * 0.33 * C * wob;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    const g = ctx.createRadialGradient(-10, -14, 6, 0, 0, 0.36 * C);
    g.addColorStop(0, '#c48a52');
    g.addColorStop(1, '#8a532c');
    ctx.fillStyle = g;
    ctx.fill();
    ctx.strokeStyle = 'rgba(70,38,16,0.55)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 14; i++) {
      const y0 = (rnd() - 0.5) * 0.5 * C;
      ctx.beginPath();
      ctx.moveTo(-0.18 * C, y0);
      ctx.quadraticCurveTo(0, y0 + (rnd() - 0.5) * 30, 0.18 * C, y0 + (rnd() - 0.5) * 14);
      ctx.stroke();
    }
    ctx.restore();
    grain(ctx, 7);
  },

  strawberry(ctx, rnd) {
    disc(ctx, 1, '#c90d2a');
    disc(ctx, 0.95, radial(ctx, [[0, '#fff1ee'], [0.2, '#ffd0cf'], [0.42, '#ff7484'], [0.75, '#f3364f'], [1, '#d81a36']]));
    rays(ctx, rnd, 120, 0.2, 0.9, 'rgba(255,226,226,0.4)', 3);
    rays(ctx, rnd, 90, 0.3, 0.92, 'rgba(160,0,30,0.2)', 2.6);
    disc(ctx, 0.05, 'rgba(255,255,255,0.7)');
    dots(ctx, rnd, 26, 0.86, 0.93, 2.4, 'rgba(255,224,130,0.9)');
    grain(ctx, 7);
  },

  banana(ctx, rnd) {
    disc(ctx, 1, '#eec52f');
    disc(ctx, 0.93, '#f7efc4');
    disc(ctx, 0.86, radial(ctx, [[0, '#ffefb8'], [0.6, '#fff6d6'], [1, '#fffbea']]));
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * TAU + 0.5;
      seed(ctx, C + Math.cos(a) * 0.12 * C, C + Math.sin(a) * 0.12 * C, a, 8, 5, '#d9bd86', null);
    }
    ctx.strokeStyle = 'rgba(214,180,110,0.35)';
    ctx.lineWidth = 2;
    for (const r of [0.3, 0.5, 0.68]) {
      ctx.beginPath();
      ctx.arc(C, C, r * C, 0, TAU);
      ctx.stroke();
    }
    grain(ctx, 5);
  },

  coconut(ctx, rnd) {
    disc(ctx, 1, '#5d3d22');
    disc(ctx, 0.95, '#3a2513');
    disc(ctx, 0.91, radial(ctx, [[0.6, '#ffffff'], [1, '#f2ebd7']], 0, 0.91));
    disc(ctx, 0.62, radial(ctx, [[0, '#f4fbff'], [0.65, '#dff1fb'], [1, '#c4e0f0']], 0, 0.62));
    ctx.beginPath();
    ctx.arc(C, C, 0.62 * C, 0, TAU);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgba(180,200,210,0.6)';
    ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,0.85)';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(C, C, 0.5 * C, Math.PI * 1.15, Math.PI * 1.55);
    ctx.stroke();
    grain(ctx, 4);
  },

  dragon(ctx, rnd) {
    disc(ctx, 1, '#d61a72');
    disc(ctx, 0.965, '#f5eef0');
    disc(ctx, 0.94, radial(ctx, [[0, '#c50f56'], [0.6, '#dd2470'], [1, '#ef5b93']]));
    rays(ctx, rnd, 150, 0.1, 0.9, 'rgba(255,190,220,0.2)', 2.2);
    dots(ctx, rnd, 1100, 0.02, 0.92, 1.9, '#140a0e');
    grain(ctx, 6);
  },

  pear(ctx, rnd) {
    disc(ctx, 1, '#8fd0f0');
    disc(ctx, 0.965, radial(ctx, [[0, '#ffffff'], [0.7, '#eaf8ff'], [1, '#c8ecfb']]));
    rays(ctx, rnd, 120, 0.2, 0.94, 'rgba(110,196,255,0.5)', 2.4, 0.6);
    rays(ctx, rnd, 90, 0.1, 0.9, 'rgba(255,255,255,0.9)', 2.4, 0.6);
    ctx.save();
    ctx.translate(C, C);
    ctx.rotate(rnd() * TAU);
    ctx.translate(-C, -C);
    star5(ctx, 0.2, 0.05, 'rgba(180,225,250,0.9)', 'rgba(90,170,220,0.7)', 3);
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * TAU;
      seed(ctx, C + Math.cos(a) * 0.12 * C, C + Math.sin(a) * 0.12 * C, a + Math.PI / 2, 8, 4.5, '#2d5670', 'rgba(150,200,230,0.7)');
    }
    ctx.restore();
    for (let i = 0; i < 26; i++) {
      const a = rnd() * TAU;
      const r = rnd() * 0.85;
      sparkleStar(ctx, C + Math.cos(a) * r * C, C + Math.sin(a) * r * C, 6 + rnd() * 9, 'rgba(255,255,255,0.95)');
    }
    grain(ctx, 4);
  },

  star(ctx, rnd) {
    disc(ctx, 1, '#b7bd2f');
    disc(ctx, 0.97, radial(ctx, [[0, '#fff9b8'], [0.55, '#ffeb55'], [0.95, '#efe040'], [1, '#d7cf33']]));
    rays(ctx, rnd, 170, 0.15, 0.94, 'rgba(255,255,220,0.35)', 2.4);
    rays(ctx, rnd, 120, 0.15, 0.94, 'rgba(210,190,30,0.25)', 2.4);
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * TAU + 0.3;
      seed(ctx, C + Math.cos(a) * 0.1 * C, C + Math.sin(a) * 0.1 * C, a, 9, 5, '#7a4a1e', 'rgba(200,150,90,0.7)');
    }
    for (let i = 0; i < 16; i++) {
      const a = rnd() * TAU;
      const r = 0.15 + rnd() * 0.7;
      sparkleStar(ctx, C + Math.cos(a) * r * C, C + Math.sin(a) * r * C, 5 + rnd() * 7, 'rgba(255,255,230,0.9)');
    }
    grain(ctx, 5);
  },

  golden(ctx, rnd) {
    disc(ctx, 1, '#c98a14');
    disc(ctx, 0.965, radial(ctx, [[0, '#fff4b8'], [0.45, '#ffe27a'], [0.9, '#ffd044'], [1, '#f0b428']]));
    rays(ctx, rnd, 140, 0.25, 0.94, 'rgba(255,250,200,0.5)', 2.4);
    ctx.save();
    ctx.translate(C, C);
    ctx.rotate(rnd() * TAU);
    ctx.translate(-C, -C);
    star5(ctx, 0.27, 0.06, '#ffd257', '#e0a020', 3);
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * TAU;
      seed(ctx, C + Math.cos(a) * 0.15 * C, C + Math.sin(a) * 0.15 * C, a + Math.PI / 2, 10, 5.5, '#8a5a10', 'rgba(255,220,120,0.8)');
    }
    ctx.restore();
    for (let i = 0; i < 34; i++) {
      const a = rnd() * TAU;
      const r = rnd() * 0.9;
      sparkleStar(ctx, C + Math.cos(a) * r * C, C + Math.sin(a) * r * C, 5 + rnd() * 10, 'rgba(255,255,240,0.95)');
    }
    grain(ctx, 4);
  },
};

export function makeCap(type, seedNo = 1) {
  const rnd = mulberry32(1000 + seedNo * 17);
  return canvasTex(S, S, (ctx) => {
    ctx.fillStyle = '#888';
    ctx.fillRect(0, 0, S, S);
    PAINT[type](ctx, rnd);
  });
}
