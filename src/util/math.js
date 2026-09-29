export const TAU = Math.PI * 2;
export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
export const gauss = (x, w) => Math.exp(-(x * x) / (w * w));
export const rand = (a = 1, b) => (b === undefined ? Math.random() * a : a + Math.random() * (b - a));
export const randInt = (a, b) => Math.floor(rand(a, b + 1));
export const pick = (arr) => arr[(Math.random() * arr.length) | 0];
export const sign = () => (Math.random() < 0.5 ? -1 : 1);
/** 帧率无关的指数趋近 */
export const damp = (cur, target, rate, dt) => lerp(cur, target, 1 - Math.exp(-rate * dt));

/** 按权重随机选择：items = [[value, weight], ...] */
export function weighted(items) {
  let total = 0;
  for (const it of items) total += it[1];
  let r = Math.random() * total;
  for (const it of items) {
    r -= it[1];
    if (r <= 0) return it[0];
  }
  return items[items.length - 1][0];
}

/** 线段 (x0,y0)-(x1,y1) 上距离点 (px,py) 最近点的参数 t∈[0,1] 与距离 */
export function segmentClosest(x0, y0, x1, y1, px, py, out) {
  const dx = x1 - x0;
  const dy = y1 - y0;
  const l2 = dx * dx + dy * dy;
  let t = l2 > 1e-12 ? ((px - x0) * dx + (py - y0) * dy) / l2 : 0;
  t = clamp(t, 0, 1);
  const cx = x0 + dx * t;
  const cy = y0 + dy * t;
  out.t = t;
  out.x = cx;
  out.y = cy;
  out.dist = Math.hypot(px - cx, py - cy);
  return out;
}
