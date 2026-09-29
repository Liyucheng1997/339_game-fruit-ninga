// 可沿 x 方向无缝平铺的梯度噪声 + 分形叠加，用于程序化生成水果表皮贴图

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const perm = new Uint8Array(512);
{
  const r = mulberry32(1337);
  const p = Array.from({ length: 256 }, (_, i) => i);
  for (let i = 255; i > 0; i--) {
    const j = (r() * (i + 1)) | 0;
    [p[i], p[j]] = [p[j], p[i]];
  }
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255];
}

const GX = new Float32Array([1, -1, 1, -1, 1, -1, 0, 0]);
const GY = new Float32Array([1, 1, -1, -1, 0, 0, 1, -1]);
const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);

/** 2D 梯度噪声，输出约 [-1,1]。period>0 时在 x 方向以 period 为周期无缝平铺 */
export function noise2(x, y, period = 0) {
  const xf = Math.floor(x);
  const yf = Math.floor(y);
  const fx = x - xf;
  const fy = y - yf;
  let x0 = xf;
  let x1 = xf + 1;
  if (period) {
    x0 = ((x0 % period) + period) % period;
    x1 = ((x1 % period) + period) % period;
  }
  x0 &= 255;
  x1 &= 255;
  const y0 = yf & 255;
  const y1 = (yf + 1) & 255;
  const g00 = perm[perm[x0] + y0] & 7;
  const g10 = perm[perm[x1] + y0] & 7;
  const g01 = perm[perm[x0] + y1] & 7;
  const g11 = perm[perm[x1] + y1] & 7;
  const n00 = GX[g00] * fx + GY[g00] * fy;
  const n10 = GX[g10] * (fx - 1) + GY[g10] * fy;
  const n01 = GX[g01] * fx + GY[g01] * (fy - 1);
  const n11 = GX[g11] * (fx - 1) + GY[g11] * (fy - 1);
  const u = fade(fx);
  const v = fade(fy);
  return (n00 + u * (n10 - n00)) * (1 - v) + (n01 + u * (n11 - n01)) * v;
}

/** 分形布朗运动，输出约 [-1,1]；period 为第一层的 x 周期（整数），后续层按倍频同步放大 */
export function fbm(x, y, oct = 4, period = 0) {
  let a = 1;
  let f = 1;
  let s = 0;
  let n = 0;
  for (let i = 0; i < oct; i++) {
    s += a * noise2(x * f, y * f, period ? period * f : 0);
    n += a;
    a *= 0.5;
    f *= 2;
  }
  return s / n;
}

/** 整数格点哈希 → [0,1) */
export function hash2(i, j) {
  let h = (Math.imul(i | 0, 374761393) + Math.imul(j | 0, 668265263)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}
