// 波次导演：难度曲线 + 多种出场图案 + 炸弹/元素果/西瓜大王调度
import { weighted, rand, randInt, lerp, clamp } from './util/math.js';
import { REGULAR } from './models/fruits.js';

const POWER_KINDS = ['fire', 'ice', 'bolt', 'gold'];

export class Director {
  constructor(game) {
    this.game = game;
    this.reset('classic');
  }

  reset(mode) {
    this.mode = mode;
    this.t = 0;
    this.wait = 0.9;
    this.queue = [];
    this.powerTimer = mode === 'arcade' ? rand(12, 17) : rand(20, 28);
    this.bossTimer = rand(52, 62);
    this.powerBag = [];
    this.lastType = '';
  }

  get level() {
    const T = this.mode === 'arcade' ? 60 : this.mode === 'zen' ? 160 : 120;
    const cap = this.mode === 'zen' ? 0.75 : 1;
    return Math.min(cap, this.t / T);
  }

  pickFruit() {
    let t = weighted(REGULAR);
    if (t === this.lastType && Math.random() < 0.6) t = weighted(REGULAR);
    this.lastType = t;
    return t;
  }

  update(dt) {
    this.t += dt;
    for (let i = this.queue.length - 1; i >= 0; i--) {
      const it = this.queue[i];
      it.delay -= dt;
      if (it.delay <= 0) {
        this.queue.splice(i, 1);
        it.run();
      }
    }
    const g = this.game;
    const fever = g.powers.gold > 0;
    const bossOn = g.bossAlive();

    this.wait -= dt;
    if (this.wait <= 0) {
      if (!bossOn) this.wave();
      const lv = this.level;
      let iv = lerp(2.3, 0.95, lv) * rand(0.85, 1.15);
      if (this.mode === 'arcade') iv *= 0.85;
      if (this.mode === 'zen') iv *= 1.1;
      if (fever) iv *= 0.5;
      this.wait = bossOn ? 1.2 : iv;
    }

    this.powerTimer -= dt;
    if (this.powerTimer <= 0) {
      this.spawnPower();
      this.powerTimer = this.mode === 'arcade' ? rand(16, 22) : this.mode === 'zen' ? rand(16, 22) : rand(26, 36);
    }

    if (this.mode !== 'zen' && this.t > 30) {
      this.bossTimer -= dt;
      if (this.bossTimer <= 0 && !bossOn) {
        g.spawnBoss();
        this.bossTimer = rand(62, 78);
      }
    }
  }

  /* ---------------- 发射 ---------------- */

  schedule(delay, run) {
    if (delay <= 0) run();
    else this.queue.push({ delay, run });
  }

  /** 从 (x0,底部) 抛出，使其在到达最高点(apex 占屏高比例)后于 x1 处落回底部 */
  launch(type, x0, x1, apex, delay = 0, cls, extra = {}) {
    this.schedule(delay, () => {
      const g = this.game;
      const b = g.stage.bounds;
      const grav = g.world.gravity;
      const y0 = b.bottom - 1.6;
      const apexY = Math.min(b.top - 1.1, b.bottom + b.height * apex);
      const vy = Math.sqrt(2 * grav * Math.max(2, apexY - y0));
      const T = vy / grav;
      const vx = (x1 - x0) / (2 * T);
      g.launchEntity(type, { x: x0, y: y0, vx, vy, cls, ...extra });
    });
  }

  drop(type, x, delay = 0) {
    this.schedule(delay, () => {
      const g = this.game;
      const b = g.stage.bounds;
      g.launchEntity(type, { x, y: b.top + 1.6, vx: rand(-0.6, 0.6), vy: -rand(1, 3), silent: true });
    });
  }

  spawnPower() {
    const g = this.game;
    if (!this.powerBag.length) this.powerBag = POWER_KINDS.slice().sort(() => Math.random() - 0.5);
    let kind = this.powerBag.pop();
    if (kind === 'gold' && g.powers.gold > 0) kind = this.powerBag.pop() || 'fire';
    const b = g.stage.bounds;
    const hw = b.width / 2 - 2.4;
    const x0 = rand(-hw * 0.6, hw * 0.6);
    this.launch(g.powerFruit(kind), x0, x0 + rand(-2, 2), rand(0.62, 0.78), 0, 'power');
    g.announcePower(kind);
  }

  /* ---------------- 波次 ---------------- */

  wave() {
    const lv = this.level;
    const g = this.game;
    const fever = g.powers.gold > 0;
    const kind = weighted([
      ['single', lerp(3, 1, lv)],
      ['pair', lerp(3, 1.6, lv)],
      ['fountain', lerp(1.5, 3, lv)],
      ['cross', lerp(0.6, 2.6, lv)],
      ['arc', lerp(0.8, 1.8, lv)],
      ['shower', lv > 0.25 ? lerp(0.2, 1.6, lv) : 0],
    ]);
    const b = g.stage.bounds;
    const hw = clamp(b.width / 2 - 2.0, 3.5, 12);
    const bonus = fever ? 2 : 0;

    // 炸弹预算
    const noBomb = this.mode === 'zen' || fever || this.t < 9;
    let bombs = 0;
    const maxBombs = lv > 0.55 ? 2 : 1;
    const pBomb = noBomb ? 0 : lerp(0.07, 0.22, lv);
    const item = () => {
      if (bombs < maxBombs && Math.random() < pBomb) {
        bombs++;
        return 'bomb';
      }
      return this.pickFruit();
    };

    switch (kind) {
      case 'single': {
        const x0 = rand(-hw, hw);
        this.launch(item(), x0, clamp(x0 + rand(-3, 3), -hw, hw), rand(0.6, 0.92));
        break;
      }
      case 'pair': {
        const s = rand(0.3, 0.9) * hw;
        this.launch(item(), -s, -s * rand(0.2, 0.9), rand(0.62, 0.9));
        this.launch(item(), s, s * rand(0.2, 0.9), rand(0.62, 0.9), rand(0.05, 0.25));
        if (fever) this.launch(item(), rand(-hw, hw), rand(-hw, hw), rand(0.6, 0.9), 0.3);
        break;
      }
      case 'fountain': {
        const n = randInt(3, 3 + Math.round(lv * 3)) + bonus;
        const cx = rand(-hw * 0.5, hw * 0.5);
        for (let i = 0; i < n; i++) {
          const spread = (i - (n - 1) / 2) * 1.4;
          this.launch(item(), cx + spread * 0.5, cx + spread * 1.6, rand(0.62, 0.95), i * 0.12);
        }
        break;
      }
      case 'cross': {
        const n = randInt(1, 1 + Math.round(lv * 2)) + (fever ? 1 : 0);
        for (let i = 0; i < n; i++) {
          this.launch(item(), -hw - 0.6, rand(0, hw * 0.7), rand(0.55, 0.85), i * 0.22);
          this.launch(item(), hw + 0.6, -rand(0, hw * 0.7), rand(0.55, 0.85), i * 0.22 + 0.11);
        }
        break;
      }
      case 'arc': {
        const n = 4 + Math.round(lv * 3) + bonus;
        const dir = Math.random() < 0.5 ? 1 : -1;
        for (let i = 0; i < n; i++) {
          const x = lerp(-hw * 0.9, hw * 0.9, i / (n - 1)) * dir;
          this.launch(item(), x, x + dir * 1.6, rand(0.66, 0.9), i * 0.17);
        }
        break;
      }
      case 'shower': {
        const n = 4 + Math.round(lv * 4) + bonus;
        for (let i = 0; i < n; i++) this.drop(item(), rand(-hw, hw), i * 0.2 + rand(0, 0.1));
        break;
      }
    }
  }
}
