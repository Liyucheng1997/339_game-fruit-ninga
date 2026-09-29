// 刀光：指针输入 → 世界坐标刀痕线段 + 发光丝带轨迹（支持多点触控）
import { Ribbon } from './fx/particles.js';

const LIFE = 0.24; // 轨迹存活秒数
const MAX_SLOTS = 3;

export class Blade {
  constructor(stage, canvas) {
    this.stage = stage;
    this.canvas = canvas;
    this.swipes = new Map(); // pointerId -> swipe
    this.segments = [];
    this.swipeCounter = 0;
    this.hover = false;
    this.enabled = true;
    this.style = { core: '#ffffff', edge: '#66ccff', glow: 1 };
    this.onSwipeStart = null;
    this.onSwipeEnd = null;
    this.tmp = { x: 0, y: 0 };

    this.slots = [];
    for (let i = 0; i < MAX_SLOTS; i++) {
      const glow = new Ribbon(40);
      const core = new Ribbon(40);
      stage.fx.add(glow, core);
      this.slots.push({ glow, core, pts: [], swipe: null });
    }

    canvas.addEventListener('pointerdown', (e) => this.down(e));
    canvas.addEventListener('pointermove', (e) => this.move(e));
    const up = (e) => this.up(e);
    canvas.addEventListener('pointerup', up);
    canvas.addEventListener('pointercancel', up);
    canvas.addEventListener('pointerleave', (e) => {
      if (e.pointerType === 'mouse' && this.hover) this.up(e);
    });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  setStyle(core, edge, glow = 1) {
    this.style.core = core;
    this.style.edge = edge;
    this.style.glow = glow;
  }

  _world(e) {
    return this.stage.screenToWorld(e.clientX, e.clientY, this.tmp);
  }

  _begin(e) {
    if (this.swipes.has(e.pointerId)) return this.swipes.get(e.pointerId);
    const w = this._world(e);
    // 选一个空闲的轨迹槽
    let slot = this.slots.find((s) => !s.swipe && s.pts.length === 0) || this.slots.find((s) => !s.swipe) || this.slots[0];
    const sw = {
      id: ++this.swipeCounter,
      pointerId: e.pointerId,
      x: w.x,
      y: w.y,
      t: e.timeStamp,
      slot,
      sliced: 0,
      dist: 0,
      hoverMode: e.pointerType === 'mouse' && e.buttons === 0,
      lastMove: performance.now(),
    };
    slot.swipe = sw;
    slot.pts.length = 0;
    slot.pts.push({ x: w.x, y: w.y, t: performance.now() });
    this.swipes.set(e.pointerId, sw);
    this.onSwipeStart?.(sw);
    return sw;
  }

  down(e) {
    if (!this.enabled) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    try {
      this.canvas.setPointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
    this._begin(e);
  }

  move(e) {
    if (!this.enabled) return;
    let sw = this.swipes.get(e.pointerId);
    if (!sw) {
      if (this.hover && e.pointerType === 'mouse') sw = this._begin(e);
      else return;
    }
    const events = e.getCoalescedEvents ? e.getCoalescedEvents() : null;
    const list = events && events.length ? events : [e];
    for (const ev of list) {
      const w = this._world(ev);
      const dx = w.x - sw.x;
      const dy = w.y - sw.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 0.02) continue;
      const dt = Math.max(0.004, (ev.timeStamp - sw.t) / 1000);
      const seg = { x0: sw.x, y0: sw.y, x1: w.x, y1: w.y, speed: dist / dt, swipe: sw };
      this.segments.push(seg);
      sw.x = w.x;
      sw.y = w.y;
      sw.t = ev.timeStamp;
      sw.dist += dist;
      sw.lastMove = performance.now();
      sw.slot.pts.push({ x: w.x, y: w.y, t: performance.now() });
      if (sw.slot.pts.length > 60) sw.slot.pts.shift();
    }
  }

  up(e) {
    const sw = this.swipes.get(e.pointerId);
    if (!sw) return;
    this.swipes.delete(e.pointerId);
    sw.slot.swipe = null;
    this.onSwipeEnd?.(sw);
  }

  /** 取走本帧累积的刀痕线段 */
  take() {
    const s = this.segments;
    this.segments = [];
    return s;
  }

  /** 是否有任意刀正在滑动 */
  get active() {
    return this.swipes.size > 0;
  }

  update(dt) {
    const now = performance.now();
    const st = this.style;
    // 悬停模式没有"抬起"事件：停顿超过 150ms 视为一次挥刀结束
    for (const [id, sw] of this.swipes) {
      if (sw.hoverMode && now - sw.lastMove > 150) {
        this.swipes.delete(id);
        sw.slot.swipe = null;
        this.onSwipeEnd?.(sw);
      }
    }
    for (const slot of this.slots) {
      const pts = slot.pts;
      while (pts.length && (now - pts[0].t) / 1000 > LIFE) pts.shift();
      if (pts.length < 2) {
        slot.glow.visible = false;
        slot.core.visible = false;
        continue;
      }
      // Chaikin 平滑一次，让轨迹圆润
      let src = pts;
      if (pts.length > 2) {
        src = [pts[0]];
        for (let i = 0; i < pts.length - 1; i++) {
          const a = pts[i];
          const b = pts[i + 1];
          src.push(
            { x: a.x * 0.75 + b.x * 0.25, y: a.y * 0.75 + b.y * 0.25, t: a.t * 0.75 + b.t * 0.25 },
            { x: a.x * 0.25 + b.x * 0.75, y: a.y * 0.25 + b.y * 0.75, t: a.t * 0.25 + b.t * 0.75 },
          );
        }
        src.push(pts[pts.length - 1]);
      }
      const n = Math.min(src.length, 40);
      const off = src.length - n;
      const gp = [];
      const cp = [];
      for (let i = 0; i < n; i++) {
        const p = src[off + i];
        const age = (now - p.t) / 1000 / LIFE;
        const k = Math.max(0, 1 - age);
        const head = i / (n - 1);
        const taper = Math.pow(k, 0.85) * (0.35 + 0.65 * head);
        gp.push({ x: p.x, y: p.y, w: 0.3 * taper * st.glow });
        cp.push({ x: p.x, y: p.y, w: 0.085 * taper });
      }
      slot.glow.setColors(st.edge, st.edge, 1.15 * st.glow);
      slot.core.setColors(st.core, st.core, 2.2);
      slot.glow.setPoints(gp, 1.4);
      slot.core.setPoints(cp, 1.5);
    }
  }

  clearTrails() {
    for (const s of this.slots) s.pts.length = 0;
    this.segments.length = 0;
  }
}
