// 各水果表皮的程序化贴图（颜色 + 凹凸）。u 环绕（可无缝平铺），t 自上而下。
import { paintPixels } from './paint.js';
import { fbm, noise2, hash2 } from '../util/noise.js';
import { lerp as mix, smoothstep as sm, clamp, TAU } from '../util/math.js';

/** 周期 Worley 噪声：F1/F2 距离（单位：格） */
const W = { d1: 9, d2: 9, id: 0 };
function worley(u, t, nx, ny) {
  const x = u * nx;
  const y = t * ny;
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  let d1 = 9;
  let d2 = 9;
  let id = 0;
  for (let j = -1; j <= 1; j++) {
    for (let i = -1; i <= 1; i++) {
      const cx = ix + i;
      const cy = iy + j;
      const wx = ((cx % nx) + nx) % nx;
      const h1 = hash2(wx, cy);
      const h2 = hash2(wx + 101, cy + 37);
      const dx = cx + h1 - x;
      const dy = cy + h2 - y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < d1) {
        d2 = d1;
        d1 = d;
        id = h1 * 7.13 + h2 * 3.7;
      } else if (d < d2) d2 = d;
    }
  }
  W.d1 = d1;
  W.d2 = d2;
  W.id = id;
  return W;
}

export const SKINS = {
  apple: {
    w: 512,
    h: 256,
    fn(u, t, o) {
      const n1 = fbm(u * 6, t * 2.2, 4, 6);
      const st = fbm(u * 30, t * 3, 3, 30);
      const red = clamp(0.55 + 0.6 * n1 + 0.3 * st, 0, 1);
      let r = mix(150, 216, red);
      let g = mix(10, 30, red);
      let b = mix(26, 44, red);
      const yel = sm(0.42, 0.0, t) * (0.5 + 0.45 * n1) + sm(0.86, 1, t) * 0.22;
      r = mix(r, 218, yel);
      g = mix(g, 192, yel);
      b = mix(b, 72, yel);
      const cu = Math.floor(u * 96);
      const cv = Math.floor(t * 72);
      if (hash2(cu, cv) > 0.9) {
        const d = Math.hypot(u * 96 - cu - 0.5, t * 72 - cv - 0.5);
        const a = sm(0.26, 0.04, d) * 0.5;
        r = mix(r, 240, a);
        g = mix(g, 214, a);
        b = mix(b, 160, a);
      }
      o.r = r;
      o.g = g;
      o.b = b;
      o.h = 0.5 + 0.08 * n1;
    },
  },

  orange: {
    w: 512,
    h: 256,
    fn(u, t, o) {
      const n = fbm(u * 5, t * 3, 3, 5);
      const wv = worley(u, t, 128, 64);
      const pore = sm(0.36, 0.06, wv.d1);
      const tone = 0.5 + 0.5 * n;
      let r = mix(238, 255, tone);
      let g = mix(126, 160, tone);
      let b = mix(8, 34, tone);
      const k = 1 - pore * 0.24;
      r *= k;
      g *= k * 0.97;
      b *= k;
      const pole = Math.max(sm(0.08, 0, t), sm(0.92, 1, t));
      r = mix(r, 226, pole * 0.5);
      g = mix(g, 156, pole * 0.5);
      b = mix(b, 44, pole * 0.5);
      o.r = r;
      o.g = g;
      o.b = b;
      o.h = 0.64 - pore * 0.45 + 0.05 * n;
    },
  },

  kiwi: {
    w: 512,
    h: 256,
    fn(u, t, o) {
      const f1 = fbm(u * 72, t * 36, 3, 72);
      const f2 = fbm(u * 160, t * 14, 2, 160);
      const g0 = fbm(u * 6, t * 3, 3, 6);
      const k = 0.85 + 0.25 * g0 + 0.5 * f1 * 0.3 + 0.35 * f2 * 0.3;
      let r = 132 * k;
      let g = 94 * k;
      let b = 58 * k;
      if (f2 > 0.32) {
        const a = (f2 - 0.32) * 1.4;
        r = mix(r, 178, a);
        g = mix(g, 138, a);
        b = mix(b, 92, a);
      }
      o.r = r;
      o.g = g;
      o.b = b;
      o.h = 0.5 + 0.28 * f1 + 0.22 * f2;
    },
  },

  pineapple: {
    w: 768,
    h: 384,
    fn(u, t, o) {
      const NU = 9;
      const NV = 12;
      const p = u * NU;
      const q = t * NV;
      const fa = (p + q) % 1;
      const fb = (((p - q) % 1) + 1) % 1;
      const dx = Math.abs(fa - 0.5) * 2;
      const dy = Math.abs(fb - 0.5) * 2;
      const d = Math.max(dx, dy);
      const dc = Math.hypot(dx, dy) * 0.7071;
      const dome = 1 - d * d;
      const groove = sm(0.72, 1.0, d);
      const eye = sm(0.34, 0.1, dc);
      const n = fbm(u * 20, t * 10, 3, 20);
      const tone = clamp(0.5 + 0.5 * n, 0, 1);
      let r = mix(208, 246, dome * 0.7 + tone * 0.3);
      let g = mix(146, 196, dome * 0.7 + tone * 0.3);
      let b = mix(36, 74, dome * 0.7 + tone * 0.3);
      // 上部偏青绿
      const gr = sm(0.4, 0.0, t) * 0.45;
      r = mix(r, 168, gr);
      g = mix(g, 168, gr);
      b = mix(b, 52, gr);
      r = mix(r, 96, groove);
      g = mix(g, 84, groove);
      b = mix(b, 28, groove);
      r = mix(r, 70, eye);
      g = mix(g, 42, eye);
      b = mix(b, 16, eye);
      o.r = r;
      o.g = g;
      o.b = b;
      o.h = 0.18 + 0.72 * dome * (1 - groove) - eye * 0.25;
    },
  },

  watermelon: {
    w: 512,
    h: 256,
    fn(u, t, o) {
      const warp = fbm(u * 5, t * 3, 3, 5) * 0.55 + 0.1 * Math.sin(t * Math.PI * 7 + u * TAU * 2);
      const s = Math.sin((u * 9 + warp) * TAU);
      const stripe = sm(-0.08, 0.38, s);
      const fine = fbm(u * 72, t * 36, 3, 72);
      const vein = sm(0.07, 0, Math.abs(noise2(u * 44 + warp * 9, t * 22, 44))) * (1 - stripe) * 0.55;
      let r = mix(136, 26, stripe) + fine * 10;
      let g = mix(206, 92, stripe) + fine * 12;
      let b = mix(100, 42, stripe) + fine * 8;
      r = mix(r, 54, vein);
      g = mix(g, 128, vein);
      b = mix(b, 58, vein);
      o.r = r;
      o.g = g;
      o.b = b;
      o.h = 0.5 + 0.03 * fine;
    },
  },

  peach: {
    w: 512,
    h: 256,
    fn(u, t, o) {
      const du = Math.min(Math.abs(u - 0.62), 1 - Math.abs(u - 0.62));
      const cheek = Math.exp(-Math.pow(du / 0.26, 2));
      const n = fbm(u * 4, t * 2.6, 3, 4);
      const blush = clamp(cheek * (0.8 + 0.5 * n) + 0.22 * n + 0.04 + sm(0.3, 0, t) * 0.1, 0, 1);
      const fz = fbm(u * 168, t * 84, 2, 168);
      let r = mix(255, 234, blush) + fz * 9;
      let g = mix(216, 84, blush) + fz * 9;
      let b = mix(134, 92, blush) + fz * 9;
      // 顶部偏黄绿
      const yg = sm(0.18, 0, t) * 0.5;
      r = mix(r, 230, yg);
      g = mix(g, 200, yg);
      b = mix(b, 110, yg);
      o.r = r;
      o.g = g;
      o.b = b;
      o.h = 0.5 + fz * 0.18;
    },
  },

  strawberry: {
    w: 512,
    h: 384,
    fn(u, t, o) {
      const rows = 26;
      const row = t * rows;
      const ri = Math.floor(row);
      const cols = 20;
      const col = u * cols + (ri & 1) * 0.5;
      const ci = Math.floor(col);
      const dx = col - ci - 0.5;
      const dy = (row - ri - 0.5) * 1.25;
      const d = Math.hypot(dx, dy);
      const seed = sm(0.16, 0.07, d);
      const dimple = sm(0.44, 0.1, d);
      const n = fbm(u * 6, t * 4, 3, 6);
      let r = 214 + n * 24;
      let g = 16 + n * 12;
      let b = 32 + n * 10;
      const k = 1 - dimple * 0.32;
      r *= k;
      g *= k;
      b *= k;
      // 顶部偏浅、尖端偏深
      r = mix(r, 236, sm(0.25, 0, t) * 0.2);
      g = mix(g, 84, sm(0.25, 0, t) * 0.25);
      r = mix(r, 246, seed);
      g = mix(g, 214, seed);
      b = mix(b, 108, seed);
      o.r = r;
      o.g = g;
      o.b = b;
      o.h = 0.62 - dimple * 0.42 + seed * 0.12;
    },
  },

  banana: {
    w: 512,
    h: 256,
    fn(u, t, o) {
      const fu = (u * 5) % 1;
      const dr = Math.min(fu, 1 - fu);
      const ridge = sm(0.07, 0.0, dr);
      const n = fbm(u * 8, t * 6, 3, 8);
      let r = 248 + n * 10;
      let g = 214 + n * 14;
      let b = 54 + n * 16;
      // 糖斑
      const cu = Math.floor(u * 80);
      const cv = Math.floor(t * 70);
      if (hash2(cu + 7, cv + 3) > 0.955) {
        const d = Math.hypot(u * 80 - cu - 0.5, t * 70 - cv - 0.5);
        const a = sm(0.34, 0.1, d) * 0.7;
        r = mix(r, 120, a);
        g = mix(g, 78, a);
        b = mix(b, 34, a);
      }
      r = mix(r, 168, ridge * 0.6);
      g = mix(g, 160, ridge * 0.6);
      b = mix(b, 40, ridge * 0.6);
      // 蒂端偏绿→棕，尖端棕黑
      const stalk = sm(0.2, 0.04, t);
      r = mix(r, 138, stalk);
      g = mix(g, 156, stalk);
      b = mix(b, 58, stalk);
      const stalkEnd = sm(0.05, 0.0, t);
      r = mix(r, 96, stalkEnd);
      g = mix(g, 74, stalkEnd);
      b = mix(b, 44, stalkEnd);
      const tip = sm(0.93, 0.975, t);
      r = mix(r, 52, tip);
      g = mix(g, 38, tip);
      b = mix(b, 24, tip);
      o.r = r;
      o.g = g;
      o.b = b;
      o.h = 0.55 + ridge * 0.35;
    },
  },

  coconut: {
    w: 512,
    h: 256,
    fn(u, t, o) {
      const f = fbm(u * 44, t * 88, 4, 44);
      const g0 = fbm(u * 8, t * 6, 3, 8);
      const hair = noise2(u * 160, t * 22, 160);
      const k = 0.72 + 0.32 * g0 + 0.25 * f;
      let r = 118 * k;
      let g = 78 * k;
      let b = 46 * k;
      if (hair > 0.25) {
        const a = (hair - 0.25) * 1.6;
        r = mix(r, 168, a * 0.6);
        g = mix(g, 118, a * 0.6);
        b = mix(b, 74, a * 0.6);
      }
      // 三个"眼"
      let eye = 0;
      for (let e = 0; e < 3; e++) {
        let dx = u - (e / 3 + 0.08);
        dx -= Math.round(dx);
        const dy = t - 0.115;
        eye = Math.max(eye, sm(1.0, 0.55, Math.hypot(dx / 0.062, dy / 0.034)));
      }
      r = mix(r, 44, eye);
      g = mix(g, 30, eye);
      b = mix(b, 22, eye);
      o.r = r;
      o.g = g;
      o.b = b;
      o.h = 0.5 + 0.28 * f + 0.2 * Math.max(hair, 0) - eye * 0.3;
    },
  },

  lemon: {
    w: 512,
    h: 256,
    fn(u, t, o) {
      const n = fbm(u * 5, t * 3, 3, 5);
      const wv = worley(u, t, 140, 70);
      const pore = sm(0.3, 0.05, wv.d1);
      let r = 255;
      let g = mix(214, 238, 0.5 + 0.5 * n);
      let b = mix(30, 62, 0.5 + 0.5 * n);
      const k = 1 - pore * 0.16;
      r *= k;
      g *= k;
      b *= k;
      const pole = Math.max(sm(0.12, 0, t), sm(0.88, 1, t));
      r = mix(r, 214, pole * 0.5);
      g = mix(g, 214, pole * 0.5);
      b = mix(b, 60, pole * 0.5);
      o.r = r;
      o.g = g;
      o.b = b;
      o.h = 0.62 - pore * 0.36 + 0.05 * n;
    },
  },

  dragon: {
    w: 512,
    h: 256,
    fn(u, t, o) {
      const n = fbm(u * 6, t * 3, 4, 6);
      const k = clamp(0.5 + 0.6 * n, 0, 1);
      let r = mix(226, 255, k);
      let g = mix(14, 70, k);
      let b = mix(108, 154, k);
      const gr = Math.max(sm(0.12, 0, t), sm(0.88, 1, t)) * 0.4;
      r = mix(r, 120, gr);
      g = mix(g, 190, gr);
      b = mix(b, 80, gr);
      o.r = r;
      o.g = g;
      o.b = b;
      o.h = 0.5 + 0.06 * n;
    },
  },

  pear: {
    w: 512,
    h: 256,
    fn(u, t, o) {
      const wv = worley(u, t, 22, 11);
      const edge = sm(0.16, 0.0, wv.d2 - wv.d1);
      const n = fbm(u * 6, t * 3, 4, 6);
      const sp = hash2(Math.floor(u * 200), Math.floor(t * 100));
      const sparkle = sp > 0.985 ? 1 : 0;
      let r = mix(170, 214, 0.5 + 0.5 * n);
      let g = mix(222, 244, 0.5 + 0.5 * n);
      let b = 255;
      const facet = 0.9 + 0.12 * Math.sin(wv.id * 40);
      r *= facet;
      g *= facet;
      r = mix(r, 250, edge * 0.85);
      g = mix(g, 254, edge * 0.85);
      r = mix(r, 255, sparkle);
      g = mix(g, 255, sparkle);
      // 底部偏深蓝
      const deep = sm(0.55, 1, t) * 0.25;
      r = mix(r, 110, deep);
      g = mix(g, 180, deep);
      o.r = r;
      o.g = g;
      o.b = b;
      o.h = 0.4 + 0.35 * edge + 0.2 * (1 - wv.d1);
    },
  },

  star: {
    w: 512,
    h: 256,
    fn(u, t, o) {
      const fu = (u * 5) % 1;
      const dr = Math.min(fu, 1 - fu);
      const rib = sm(0.05, 0.0, dr);
      const n = fbm(u * 8, t * 4, 3, 8);
      let r = mix(226, 250, 0.5 + 0.5 * n);
      let g = mix(226, 244, 0.5 + 0.5 * n);
      let b = mix(66, 96, 0.5 + 0.5 * n);
      // 棱线呈黄褐色
      r = mix(r, 214, rib);
      g = mix(g, 168, rib);
      b = mix(b, 48, rib);
      // 沟谷更绿
      const valley = sm(0.28, 0.5, dr);
      r = mix(r, 170, valley * 0.5);
      g = mix(g, 214, valley * 0.35);
      b = mix(b, 60, valley * 0.5);
      o.r = r;
      o.g = g;
      o.b = b;
      o.h = 0.5 + rib * 0.2;
    },
  },

  golden: {
    w: 512,
    h: 256,
    fn(u, t, o) {
      const n = fbm(u * 8, t * 4, 4, 8);
      const st = fbm(u * 34, t * 3, 3, 34);
      const k = 0.85 + 0.2 * n + 0.08 * st;
      o.r = clamp(255 * k, 0, 255);
      o.g = clamp(196 * k, 0, 255);
      o.b = clamp(62 * k, 0, 255);
      o.h = 0.5 + 0.05 * n;
    },
  },
};

export function makeSkin(type) {
  const s = SKINS[type];
  return paintPixels(s.w, s.h, s.fn);
}
