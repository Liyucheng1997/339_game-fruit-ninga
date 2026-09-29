// 游戏本体：状态机 / 规则 / 得分 / 元素技能 / 心眼 / 炸弹 / 西瓜大王 / 菜单
import * as THREE from 'three';
import { World } from './world.js';
import { Blade } from './blade.js';
import { Effects } from './fx/particles.js';
import { Director } from './director.js';
import { Bounty } from './bounty.js';
import { UI, RANKS } from './ui.js';
import { Sound } from './audio.js';
import { FRUIT_DEFS, POWER_DEFS, REGULAR } from './models/fruits.js';
import { clamp, rand, damp, weighted, segmentClosest, TAU } from './util/math.js';

const MIN_SPEED = 6; // 低于此速度的划动不会切开水果
const BLADE_R = 0.16;
const FOCUS_SCALE = 0.22;
const ICE_SCALE = 0.3;

export const MODES = {
  classic: { title: '经典', desc: '3 条命 · 无尽挑战', fruit: 'watermelon', lives: 3 },
  arcade: { title: '限时', desc: '60 秒 · 炸弹扣时间', fruit: 'orange', time: 60 },
  zen: { title: '禅意', desc: '90 秒 · 无炸弹', fruit: 'peach', time: 90 },
};

const lsGet = (k) => {
  try {
    return localStorage.getItem(k);
  } catch {
    return null;
  }
};
const lsSet = (k, v) => {
  try {
    localStorage.setItem(k, v);
  } catch {
    /* ignore */
  }
};

export class Game {
  constructor(stage, assets, icons) {
    this.stage = stage;
    this.assets = assets;
    this.icons = icons;
    this.sound = new Sound();
    this.fx = new Effects(stage);
    this.world = new World(stage, assets);
    this.world.onFall = (e) => this.onFall(e);
    this.blade = new Blade(stage, stage.canvas);
    this.ui = new UI(stage, icons);
    this.director = new Director(this);
    this.bounty = new Bounty(this);

    this.state = 'menu';
    this.mode = 'classic';
    this.timers = [];
    this.timeScale = 1;
    this.hitstop = 0;
    this.time = 0;
    this.bests = {};
    for (const m of Object.keys(MODES)) this.bests[m] = parseInt(lsGet('fn_best_' + m) || '0', 10) || 0;
    this.blade.hover = lsGet('fn_hover') === '1';
    this.bot = new URLSearchParams(location.search).get('bot') === '1';
    this.botTimer = 0;
    this.botFocus = 0;
    this.swipeIdBot = 100000;

    this.resetRun();
    this.bind();
    this.ui.initMenuLabels(Object.entries(MODES).map(([mode, m]) => ({ mode, title: m.title, desc: m.desc })));
    for (const m of Object.keys(MODES)) this.ui.setMenuBest(m, this.bests[m]);
    this.refreshToggles();
  }

  /* ============================== 绑定输入 ============================== */

  bind() {
    const ui = this.ui;
    const unlock = () => {
      this.sound.resume();
      this.sound.startMusic();
    };
    window.addEventListener('pointerdown', unlock);
    window.addEventListener('keydown', unlock);

    ui.on.click = () => this.sound.click();
    ui.on.pick = (m) => this.pickMode(m);
    ui.on.pause = () => this.pause();
    ui.on.resume = () => this.resume();
    ui.on.restart = () => {
      ui.hidePause();
      this.startGame(this.mode);
    };
    ui.on.quit = () => {
      ui.hidePause();
      this.enterMenu();
    };
    ui.on.again = () => {
      ui.hideOver();
      this.startGame(this.mode);
    };
    ui.on.menu = () => {
      ui.hideOver();
      this.enterMenu();
    };
    ui.on.how = () => ui.showHow();
    ui.on.sound = () => {
      this.sound.setMuted(!this.sound.muted);
      this.refreshToggles();
    };
    ui.on.music = () => {
      this.sound.setMusic(!this.sound.musicOn);
      this.refreshToggles();
    };
    ui.on.hover = (v) => {
      this.blade.hover = v;
      lsSet('fn_hover', v ? '1' : '0');
    };
    ui.on.focus = (down) => this.setFocusHeld(down);

    window.addEventListener('keydown', (e) => {
      if (e.repeat) return;
      if (e.code === 'Space') {
        e.preventDefault();
        this.setFocusHeld(true);
      } else if (e.code === 'Escape' || e.code === 'KeyP') {
        if (this.state === 'playing') this.pause();
        else if (this.state === 'paused') this.resume();
      } else if (e.code === 'KeyM') {
        ui.on.sound();
      } else if (this.state === 'menu') {
        const map = { Digit1: 'classic', Digit2: 'arcade', Digit3: 'zen' };
        if (map[e.code]) this.pickMode(map[e.code]);
      }
    });
    window.addEventListener('keyup', (e) => {
      if (e.code === 'Space') this.setFocusHeld(false);
    });
    stageContext(this.stage.canvas, (e) => {
      if (e.button === 2) {
        e.preventDefault();
        this.setFocusHeld(e.type === 'pointerdown');
      }
    });
    let resizeTimer = 0;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (this.state === 'menu' && !this.pending) {
          this.world.clear();
          this.layoutMenu();
        }
      }, 120);
    });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.state === 'playing') this.pause();
    });
  }

  refreshToggles() {
    this.ui.setToggles({ muted: this.sound.muted, music: this.sound.musicOn, hover: this.blade.hover });
  }

  /* ============================== 流程 ============================== */

  resetRun() {
    this.score = 0;
    this.dispScore = 0;
    this.lives = 3;
    this.maxLives = 3;
    this.timeLeft = null;
    this.elapsed = 0;
    this.streak = 0;
    this.combo = { count: 0, timer: 0, x: 0, y: 0 };
    this.focus = 25;
    this.focusActive = false;
    this.powers = { fire: 0, ice: 0, bolt: 0, gold: 0 };
    this.rankIdx = 0;
    this.stats = { slices: 0, perfect: 0, reslice: 0, bombs: 0, maxCombo: 0, maxStreak: 0, bounty: 0 };
    this.timers.length = 0;
  }

  enterMenu() {
    this.state = 'menu';
    this.pending = null;
    this.world.clear();
    this.blade.clearTrails();
    this.blade.enabled = true;
    this.resetRun();
    this.exitFocusSilent();
    this.sound.setIntensity(0.15);
    this.ui.showMenu();
    this.ui.hidePause();
    this.ui.hideOver();
    for (const m of Object.keys(MODES)) this.ui.setMenuBest(m, this.bests[m]);
    this.menuIdle = 1.5;
    this.layoutMenu();
    this.stage.setGrade({ sat: 1, tint: [1, 1, 1], vig: 0.5, focus: 0 });
  }

  layoutMenu() {
    const b = this.stage.bounds;
    const modes = Object.keys(MODES);
    const portrait = b.width / b.height < 0.95;
    const gap = portrait ? Math.min(b.height * 0.185, 5.2) : Math.min(b.width * 0.27, 6.2);
    const baseY = portrait ? b.height * 0.045 : -b.height * 0.04;
    this.menuFruits = [];
    modes.forEach((m, i) => {
      const x = portrait ? 0 : (i - 1) * gap;
      const y = portrait ? baseY + (1 - i) * gap : baseY;
      const e = this.world.spawn(MODES[m].fruit, {
        x,
        y,
        z: 0,
        cls: 'menu',
        gravity: 0,
        scale: portrait ? 1.2 : 1.45,
        spin: new THREE.Vector3(0.15, 0.55, 0.1),
      });
      e.menuMode = m;
      e.baseY = y;
      e.phase = i * 1.7;
      this.menuFruits.push(e);
    });
  }

  pickMode(mode) {
    if (this.state !== 'menu' || this.pending) return;
    // 通过键盘/点击选择：选中的水果自己"被斩开"
    const e = this.menuFruits.find((f) => f.alive && f.menuMode === mode);
    if (e) {
      const p = e.mesh.position;
      this.sliceEntity(e, p.x, p.y, 0.8, 0.6, { menu: true });
    } else this.startGame(mode);
  }

  startGame(mode) {
    this.mode = mode;
    const cfg = MODES[mode];
    this.state = 'playing';
    this.pending = null;
    this.world.clear();
    this.resetRun();
    this.exitFocusSilent();
    this.lives = cfg.lives || 0;
    this.maxLives = cfg.lives || 0;
    this.timeLeft = cfg.time ?? null;
    this.director.reset(mode);
    this.bounty.reset();
    this.blade.enabled = true;
    this.blade.clearTrails();
    this.stage.splats.clear();
    this.hitstop = 0;
    this.ui.hideMenu();
    this.ui.showHud(mode);
    this.ui.setBest(this.bests[mode] || 0);
    this.ui.setScore(0);
    this.ui.setMult(1);
    this.ui.setStreak(0);
    if (cfg.lives) this.ui.setLives(cfg.lives, cfg.lives);
    if (cfg.time) this.ui.setTimer(cfg.time);
    this.updateRankUI();
    this.ui.setFocus(this.focus, false);
    this.ui.banner(`${cfg.title}模式`, '挥刀吧，忍者！', '#ffd36a');
    this.sound.startMusic();
    if (!lsGet('fn_seen')) {
      lsSet('fn_seen', '1');
      setTimeout(() => this.ui.toast('斩开半块可二次斩 · 按住空格进入心眼 · 避开炸弹'), 2600);
    }
  }

  pause() {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    this.ui.showPause();
    this.exitFocusSilent();
    this.sound.ctx?.suspend();
  }

  resume() {
    if (this.state !== 'paused') return;
    this.state = 'playing';
    this.ui.hidePause();
    this.sound.ctx?.resume();
    this.blade.clearTrails();
  }

  gameOver(title = '游戏结束') {
    if (this.state !== 'playing') return;
    this.state = 'over';
    this.exitFocusSilent();
    this.sound.gameover();
    const mode = this.mode;
    const isNew = this.score > (this.bests[mode] || 0);
    if (isNew) {
      this.bests[mode] = this.score;
      lsSet('fn_best_' + mode, String(this.score));
    }
    this.combo.count = 0;
    this.finishCombo();
    const rank = RANKS[this.rankIdx];
    const s = this.stats;
    setTimeout(() => {
      if (this.state !== 'over') return;
      this.ui.hideHud();
      this.ui.showOver({
        title,
        score: this.score,
        best: this.bests[mode],
        isNew,
        rank,
        stats: [
          ['斩切', s.slices],
          ['完美斩', s.perfect],
          ['二次斩', s.reslice],
          ['最高连斩', s.maxCombo],
          ['最长连击', s.maxStreak],
          ['悬赏完成', s.bounty],
        ],
      });
    }, 1100);
  }

  /* ============================== 规则辅助 ============================== */

  get playing() {
    return this.state === 'playing';
  }

  scr(x, y) {
    const p = this.stage.project(x, y, 0);
    return { x: p.x, y: p.y };
  }

  after(delay, fn) {
    this.timers.push({ t: delay, fn });
  }

  multiplier() {
    const s = this.streak;
    let m = s >= 100 ? 5 : s >= 60 ? 4 : s >= 30 ? 3 : s >= 12 ? 2 : 1;
    if (this.powers.gold > 0) m *= 3;
    if (this.powers.ice > 0) m *= 2;
    return Math.min(m, 10);
  }

  addScore(pts) {
    if (!this.playing) return 0;
    this.score = Math.max(0, this.score + pts);
    this.checkRank();
    this.updateRankUI();
    return pts;
  }

  checkRank() {
    let idx = 0;
    for (let i = 0; i < RANKS.length; i++) if (this.score >= RANKS[i].score) idx = i;
    if (idx > this.rankIdx) {
      this.rankIdx = idx;
      this.ui.banner(`晋升 · ${RANKS[idx].name}`, `${RANKS[idx].score} 分`, RANKS[idx].color === '#2b2b30' ? '#c9c9d0' : RANKS[idx].color);
      this.sound.rank();
    }
  }

  updateRankUI() {
    const r = RANKS[this.rankIdx];
    const next = RANKS[this.rankIdx + 1];
    this.ui.setRank(r, next, this.score);
  }

  addFocus(n) {
    this.focus = Math.min(100, this.focus + n);
  }

  gainLife() {
    if (this.lives < this.maxLives) {
      this.lives++;
      this.ui.setLives(this.lives, this.maxLives);
      const p = this.scr(this.stage.bounds.right - 2, this.stage.bounds.top - 1.2);
      this.ui.popup('+1 命', p.x, p.y + 30, 'good');
    }
  }

  loseLife() {
    if (this.mode !== 'classic' || !this.playing) return;
    this.lives--;
    this.ui.setLives(Math.max(0, this.lives), this.maxLives);
    this.sound.lifeLost();
    this.stage.setFlash(0.25, [1, 0.2, 0.15]);
    if (this.lives <= 0) this.gameOver('你被击败了');
  }

  bossAlive() {
    return this.world.entities.some((e) => e.alive && e.boss);
  }

  powerFruit(kind) {
    return POWER_DEFS[kind].fruit;
  }

  announcePower(kind) {
    this.ui.toast(`元素果「${FRUIT_DEFS[POWER_DEFS[kind].fruit].name}」出现！`);
  }

  /* ============================== 生成 ============================== */

  launchEntity(type, o) {
    const cls = o.cls ?? (type === 'bomb' ? 'bomb' : 'fruit');
    const def = FRUIT_DEFS[type];
    const aura = cls === 'power' ? POWER_DEFS[def.power].color : null;
    const e = this.world.spawn(type, { x: o.x, y: o.y, vx: o.vx, vy: o.vy, cls, aura, scale: o.scale });
    if (!o.silent) this.sound.launch();
    return e;
  }

  spawnBoss() {
    const b = this.stage.bounds;
    const g = this.world.gravity * 0.72;
    const y0 = b.bottom - 3.4;
    const apex = b.bottom + b.height * 0.66;
    const vy = Math.sqrt(2 * g * (apex - y0));
    const x = rand(-3, 3);
    const e = this.world.spawn('watermelon', {
      x,
      y: y0,
      vx: -x * 0.1,
      vy,
      cls: 'boss',
      scale: 2.0,
      gravity: 0.72,
      spin: new THREE.Vector3(0.2, 0.5, 0.8),
    });
    e.boss = true;
    this.sound.boss();
    this.ui.banner('西瓜大王来袭！', '劈开它，层层碎成 8 块', '#ff5a6a');
    this.stage.shake(0.35);
  }

  /* ============================== 命中判定 ============================== */

  processSegment(seg) {
    if (seg.speed < MIN_SPEED) return;
    if (seg.speed > 14) this.sound.whoosh(Math.min(1, seg.speed / 70));
    const dx = seg.x1 - seg.x0;
    const dy = seg.y1 - seg.y0;
    const len = Math.hypot(dx, dy) || 1;
    const ux = dx / len;
    const uy = dy / len;
    const hits = [];
    const c = {};
    for (const e of this.world.entities) {
      if (!e.alive || !e.sliceable) continue;
      if (e.blockSwipe === seg.swipe.id || e.cooldown > 0) continue;
      segmentClosest(seg.x0, seg.y0, seg.x1, seg.y1, e.mesh.position.x, e.mesh.position.y, c);
      if (c.dist < e.hit + BLADE_R) hits.push({ e, t: c.t, x: c.x, y: c.y });
    }
    hits.sort((a, b) => a.t - b.t);
    for (const h of hits) {
      if (!h.e.alive) continue;
      if (h.e.cls === 'bomb') {
        if (this.playing) this.explodeBomb(h.e);
        else this.fizzleBomb(h.e);
      } else if (h.e.cls === 'menu') {
        this.sliceEntity(h.e, h.x, h.y, ux, uy, { swipe: seg.swipe, menu: true });
      } else {
        this.sliceEntity(h.e, h.x, h.y, ux, uy, { swipe: seg.swipe });
      }
    }
  }

  /** 切开一个实体，触发得分/特效/元素/连斩 */
  sliceEntity(e, cx, cy, dx, dy, opts = {}) {
    if (!e.alive || !e.sliceable) return false;
    const tilt = (Math.random() < 0.5 ? -1 : 1) * rand(0.05, 0.5);
    const len = Math.hypot(dx, dy) || 1;
    dx /= len;
    dy /= len;
    const res = this.world.slice(e, cx, cy, dx, dy, tilt);
    if (!res) return false;

    const isPiece = e.cls === 'piece';
    const def = e.def;
    const swipe = opts.swipe;
    const boss = !!e.boss;
    const cls = e.cls;
    for (const p of res.pieces) {
      p.blockSwipe = swipe ? swipe.id : -1;
      p.boss = boss;
    }
    this.world.remove(e);
    if (swipe) swipe.sliced++;

    const playing = this.playing;
    const perfect = res.perfect && !isPiece;
    const sp = this.scr(cx, cy);
    const big = boss || isPiece && e.scale > 1.5 ? 2 : def.hit > 1.05 ? 1 : 0;

    // —— 得分 ——
    if (playing && !opts.menu) {
      if (isPiece) {
        const base = boss ? [0, 60, 40, 25][Math.min(3, e.gen)] : 5 * e.gen;
        const pts = Math.round(base * this.multiplier());
        this.addScore(pts);
        this.ui.popup(`+${pts}`, sp.x, sp.y, boss ? 'gold' : 'reslice');
        this.stats.reslice++;
        this.stats.slices++;
        if (!boss) this.bounty.event('reslice');
        this.sound.reslice();
        this.addFocus(1.5);
      } else {
        const base = cls === 'boss' ? 150 : def.score;
        const mul = this.multiplier();
        const pts = Math.round(base * (perfect ? 2 : 1) * mul);
        this.addScore(pts);
        this.streak++;
        this.stats.slices++;
        this.stats.maxStreak = Math.max(this.stats.maxStreak, this.streak);
        this.ui.popup(`+${pts}`, sp.x, sp.y + 8, perfect ? 'gold' : mul > 1 ? 'gold' : '');
        if (perfect) {
          this.stats.perfect++;
          this.ui.popup('完美斩', sp.x, sp.y - 34, 'perfect');
          this.bounty.event('perfect');
        }
        if (cls === 'fruit') this.bounty.event('slice', { type: e.type });
        this.addFocus(perfect ? 10 : 3.2);
        this.bumpCombo(cx, cy);
      }
      this.ui.setScore(this.score, true);
      this.updateRankUI();
    }

    // —— 特效 ——
    const juicePower = isPiece ? 0.55 : big ? 2.2 : 1;
    this.fx.juice(cx, cy, res.angle, def.juice, juicePower);
    this.stage.splat(cx, cy, def.juice, (isPiece ? 0.05 : 0.07) * (big ? 1.7 : 1), res.angle);
    const edge = this.powers.fire > 0 ? '#ff8a3a' : this.powers.bolt > 0 ? '#ffee66' : '#9fdcff';
    this.fx.quads.slash(cx, cy, res.angle, (big ? 6.5 : 3.6) * (isPiece ? 0.7 : 1), edge, 0.2, 0.55);
    this.sound.slice(def.pitch || 1, big);
    if (!isPiece) this.sound.splash();
    if (perfect) {
      this.fx.quads.ring(cx, cy, 3.4, '#ffe27a', 0.5, 2.6);
      const c = this.fx.color('#ffe27a');
      this.fx.sparks.burst(cx, cy, 0.6, 26, 7, 0.7, 0.36, c, 6);
      this.sound.perfect();
      this.hitstop = Math.max(this.hitstop, 0.05);
      this.stage.kick(0.006);
    }
    if (boss) {
      this.stage.shake(0.3);
      this.hitstop = Math.max(this.hitstop, 0.06);
    }
    if (boss && isPiece && e.gen >= 3) this.stage.setFlash(0.2, [1, 0.5, 0.5]);
    if (boss && !this.bossAlive()) {
      this.ui.banner('大王已除！', '西瓜汁四溅', '#ff8a8a');
      this.stage.setFlash(0.35, [1, 0.6, 0.6]);
    }

    // —— 元素果 / 元素刀 ——
    if (!isPiece && def.power && !opts.menu) this.activatePower(def.power, cx, cy);
    if (playing && !opts.menu) {
      if (this.powers.fire > 0 && (opts.depth || 0) < 2 && !(def.power === 'fire' && !isPiece)) this.igniteAround(cx, cy, (opts.depth || 0) + 1);
      if (this.powers.bolt > 0 && !opts.auto && !(def.power === 'bolt' && !isPiece)) this.chainBolts(cx, cy);
    }

    // —— 菜单选择 ——
    if (opts.menu && this.state === 'menu' && !this.pending) {
      this.pending = { mode: e.menuMode, t: 0.85 };
      for (const f of this.menuFruits) {
        if (f.alive && f !== e) {
          f.cls = 'fruit';
          f.gravity = 1;
          f.vel.set(rand(-1, 1), rand(1, 3), 0);
        }
      }
      this.sound.perfect();
    }
    return true;
  }

  bumpCombo(x, y) {
    const c = this.combo;
    c.count++;
    c.timer = 0.36;
    c.x = x;
    c.y = y;
    if (c.count >= 3) {
      const p = this.scr(x, y);
      this.ui.popup(`${c.count} 连斩`, p.x, p.y - 74, 'combo');
      this.sound.combo(c.count);
      this.bounty.event('combo', { n: c.count });
    }
  }

  finishCombo() {
    const c = this.combo;
    if (c.count >= 3 && this.playing) {
      const bonus = Math.round(c.count * (c.count - 1) * 2 * Math.min(3, this.multiplier()));
      this.addScore(bonus);
      const p = this.scr(c.x, c.y);
      this.ui.popup(`连斩 +${bonus}`, p.x, p.y - 18, 'gold');
      this.ui.setScore(this.score, true);
      this.stats.maxCombo = Math.max(this.stats.maxCombo, c.count);
      this.addFocus(c.count * 2);
      this.updateRankUI();
      this.stage.kick(0.01);
    } else if (c.count > 0) {
      this.stats.maxCombo = Math.max(this.stats.maxCombo, c.count);
    }
    c.count = 0;
  }

  /* ============================== 炸弹 ============================== */

  explodeBomb(e) {
    if (!e.alive) return;
    const p = e.mesh.position;
    const x = p.x;
    const y = p.y;
    this.world.remove(e);
    this.boom(x, y);
    this.streak = 0;
    this.combo.count = 0;
    this.stats.bombs++;
    const sp = this.scr(x, y);
    this.ui.popup('BOOM!', sp.x, sp.y, 'bad');
    if (this.mode === 'classic') this.loseLife();
    else if (this.playing) {
      this.timeLeft = Math.max(0, this.timeLeft - 5);
      this.score = Math.max(0, this.score - 10);
      this.ui.popup('-5 秒', sp.x, sp.y + 44, 'bad');
    }
    // 冲击波：推开附近的实体
    for (const o of this.world.entities) {
      if (!o.alive || o === e || o.cls === 'menu') continue;
      const dx = o.mesh.position.x - x;
      const dy = o.mesh.position.y - y;
      const d = Math.hypot(dx, dy) || 1;
      if (d < 7) {
        const f = (1 - d / 7) * 9;
        o.vel.x += (dx / d) * f;
        o.vel.y += (dy / d) * f * 0.6 + f * 0.3;
      }
    }
  }

  boom(x, y) {
    const fx = this.fx;
    fx.quads.glow(x, y, 11, '#ffb04a', 0.5, 1.9);
    fx.quads.ring(x, y, 10, '#ff8a30', 0.7, 2.4);
    fx.quads.ring(x, y, 6, '#ffe0a0', 0.45, 2.4);
    const c1 = fx.color('#ff8a1a');
    fx.sparks.burst(x, y, 0.6, 90, 15, 1.0, 0.6, c1, 5);
    const c2 = fx.color('#ffe27a');
    fx.sparks.burst(x, y, 0.8, 50, 9, 0.8, 0.45, c2, 3);
    this.stage.shake(0.9);
    this.stage.setFlash(0.55, [1, 0.75, 0.45]);
    this.stage.kick(0.02);
    this.sound.bomb();
    this.hitstop = Math.max(this.hitstop, 0.11);
  }

  fizzleBomb(e) {
    const p = e.mesh.position;
    this.world.remove(e);
    this.boom(p.x, p.y);
  }

  purifyBomb(e) {
    if (!e.alive) return;
    const p = e.mesh.position;
    const x = p.x;
    const y = p.y;
    this.world.remove(e);
    this.fx.quads.ring(x, y, 4.5, '#fff0c0', 0.5, 2.6);
    this.fx.quads.glow(x, y, 5, '#ffd080', 0.4, 2.4);
    const c = this.fx.color('#fff0c0');
    this.fx.sparks.burst(x, y, 0.6, 40, 8, 0.7, 0.4, c, -1);
    this.sound.zap();
    if (this.playing) {
      this.addScore(30);
      const sp = this.scr(x, y);
      this.ui.popup('净化 +30', sp.x, sp.y, 'good');
      this.ui.setScore(this.score, true);
    }
  }

  /* ============================== 元素技能 ============================== */

  activatePower(kind, x, y) {
    if (!this.playing) return;
    const def = POWER_DEFS[kind];
    this.powers[kind] = def.duration;
    const sp = this.scr(x, y);
    this.ui.popup(def.name, sp.x, sp.y - 30, 'power', def.color);
    this.ui.banner(def.name, def.desc, def.color);
    const fx = this.fx;
    const col = fx.color(def.color);
    switch (kind) {
      case 'fire': {
        this.sound.fire();
        fx.quads.ring(x, y, 11, '#ff7a2a', 0.7, 2.2);
        fx.quads.glow(x, y, 9, '#ff9a3a', 0.45, 1.3);
        fx.sparks.burst(x, y, 0.6, 100, 13, 1.0, 0.55, col, -1);
        this.stage.shake(0.55);
        this.stage.setFlash(0.35, [1, 0.6, 0.25]);
        this.blast(x, y, 3.9, 1);
        break;
      }
      case 'ice': {
        this.sound.ice();
        fx.quads.ring(x, y, 12, '#9be8ff', 0.8, 2.0);
        fx.quads.glow(x, y, 9, '#bff0ff', 0.6, 1.0);
        fx.sparks.burst(x, y, 0.6, 90, 6, 1.6, 0.34, col, 0.5);
        this.stage.setFlash(0.22, [0.6, 0.9, 1]);
        this.stage.kick(0.012);
        break;
      }
      case 'bolt': {
        this.sound.bolt();
        this.stage.setFlash(0.4, [1, 1, 0.6]);
        const b = this.stage.bounds;
        const targets = this.world.entities
          .filter((t) => t.alive && t.sliceable && t.cls !== 'bomb' && t.cls !== 'menu' && !t.pending && t.mesh.position.y > b.bottom)
          .sort(() => Math.random() - 0.5)
          .slice(0, 4);
        targets.forEach((t, i) => {
          t.pending = true;
          this.after(0.07 * (i + 1), () => {
            if (!t.alive) return;
            const p = t.mesh.position;
            fx.bolts.bolt(p.x + rand(-1, 1), b.top + 1.5, p.x, p.y);
            this.sound.zap();
            this.sliceEntity(t, p.x, p.y, 1, rand(-0.5, 0.5), { auto: true, depth: 2 });
          });
        });
        break;
      }
      case 'gold': {
        this.sound.fever();
        fx.quads.ring(x, y, 12, '#ffd050', 0.8, 2.6);
        fx.quads.glow(x, y, 10, '#ffe090', 0.6, 2.4);
        fx.sparks.burst(x, y, 0.6, 110, 9, 1.4, 0.4, col, 3);
        this.stage.setFlash(0.4, [1, 0.85, 0.4]);
        break;
      }
    }
  }

  /** 爆炸波：半径 R 内的水果被切开，炸弹被净化 */
  blast(x, y, R, depth) {
    const list = this.world.entities
      .filter((t) => t.alive && t.sliceable && t.cls !== 'menu' && !t.pending)
      .map((t) => ({ t, d: Math.hypot(t.mesh.position.x - x, t.mesh.position.y - y) }))
      .filter((o) => o.d < R + o.t.hit && o.t.age > 0.04)
      .sort((a, b) => a.d - b.d)
      .slice(0, 8);
    list.forEach(({ t }, i) => {
      t.pending = true;
      this.after(0.05 * (i + 1), () => {
        if (!t.alive) return;
        if (t.cls === 'bomb') this.purifyBomb(t);
        else {
          const p = t.mesh.position;
          const a = Math.atan2(p.y - y, p.x - x) + Math.PI / 2 + rand(-0.6, 0.6);
          this.sliceEntity(t, p.x, p.y, Math.cos(a), Math.sin(a), { auto: true, depth });
        }
      });
    });
  }

  /** 火焰刀：每次斩击引燃周围水果 */
  igniteAround(x, y, depth) {
    const fx = this.fx;
    const c = fx.color('#ff8a2a');
    fx.sparks.burst(x, y, 0.6, 16, 5, 0.6, 0.4, c, -1.5);
    fx.quads.ring(x, y, 3.6, '#ff8a3a', 0.35, 2.2);
    this.blast(x, y, 2.3, depth);
  }

  /** 雷电刀：闪电劈向附近水果 */
  chainBolts(x, y) {
    const targets = this.world.entities
      .filter((t) => t.alive && t.sliceable && t.cls !== 'bomb' && t.cls !== 'menu' && !t.pending && t.age > 0.06)
      .map((t) => ({ t, d: Math.hypot(t.mesh.position.x - x, t.mesh.position.y - y) }))
      .filter((o) => o.d < 5.5)
      .sort((a, b) => a.d - b.d)
      .slice(0, 2);
    targets.forEach(({ t }, i) => {
      t.pending = true;
      this.fx.bolts.bolt(x, y, t.mesh.position.x, t.mesh.position.y);
      this.after(0.09 * (i + 1), () => {
        if (!t.alive) return;
        const p = t.mesh.position;
        this.sound.zap();
        this.sliceEntity(t, p.x, p.y, rand(-1, 1), rand(-1, 1), { auto: true, depth: 2 });
      });
    });
  }

  /* ============================== 心眼 ============================== */

  setFocusHeld(down) {
    if (this.state !== 'playing') return;
    if (down && !this.focusActive && this.focus > 8) {
      this.focusActive = true;
      this.sound.focusIn();
    } else if (!down && this.focusActive) {
      this.focusActive = false;
      this.sound.focusOut();
    }
  }

  exitFocusSilent() {
    this.focusActive = false;
  }

  /* ============================== 失误 ============================== */

  onFall(e) {
    if (!this.playing) return;
    if (e.cls !== 'fruit') return;
    this.streak = 0;
    this.sound.miss();
    const b = this.stage.bounds;
    const x = clamp(e.mesh.position.x, b.left + 1.2, b.right - 1.2);
    const p = this.scr(x, b.bottom + 0.8);
    this.ui.popup('✕', p.x, p.y, 'miss');
    if (this.mode === 'classic') this.loseLife();
  }

  /* ============================== 主循环 ============================== */

  frame(dtRaw, render = true) {
    const dt = Math.min(dtRaw, 0.05);
    this.time += dt;

    if (this.state === 'paused') {
      this.blade.update(dt);
      this.blade.take();
      if (render) this.stage.render(dt);
      else this.stage.update(dt);
      return;
    }

    // —— 时间缩放 ——
    let target = 1;
    if (this.focusActive) target = Math.min(target, FOCUS_SCALE);
    if (this.powers.ice > 0) target = Math.min(target, ICE_SCALE);
    if (this.hitstop > 0) {
      this.hitstop -= dt;
      this.timeScale = 0.03;
    } else this.timeScale = damp(this.timeScale, target, 7, dt);
    const sdt = dt * this.timeScale;

    // —— 输入 / 刀 ——
    this.blade.update(dt);
    const segs = this.blade.take();
    if (this.state === 'playing' || this.state === 'menu') for (const s of segs) this.processSegment(s);
    if (this.bot) this.runBot(dt);
    this.updateBladeStyle();

    // —— 世界 ——
    this.world.update(sdt);
    for (let i = this.timers.length - 1; i >= 0; i--) {
      const t = this.timers[i];
      t.t -= sdt;
      if (t.t <= 0) {
        this.timers.splice(i, 1);
        t.fn();
      }
    }
    this.emitAuras(sdt);
    this.fx.update(dt * Math.max(this.timeScale, 0.14), this.world.gravity);
    this.updateBladeSparks();

    if (this.state === 'menu') this.updateMenu(dt);
    else if (this.state === 'playing') this.updatePlaying(dt, sdt);

    this.updateGrade();
    if (render) this.stage.render(dt);
    else this.stage.update(dt);
  }

  updateMenu(dt) {
    const t = this.time;
    for (const f of this.menuFruits) {
      if (f.alive && f.cls === 'menu') {
        f.mesh.position.y = f.baseY + Math.sin(t * 1.3 + f.phase) * 0.22;
      }
    }
    const modes = Object.keys(MODES);
    modes.forEach((m) => {
      const f = this.menuFruits.find((o) => o.alive && o.menuMode === m && o.cls === 'menu');
      const el = this.ui.labels.get(m);
      if (!el) return;
      if (f) {
        el.style.display = '';
        const p = this.scr(f.mesh.position.x, f.baseY - f.hit - 0.15);
        this.ui.placeLabel(m, p.x, p.y);
      } else el.style.display = 'none';
    });
    // 背景里偶尔飞过水果，供玩家随手练习
    this.menuIdle -= dt;
    if (this.menuIdle <= 0 && !this.pending) {
      this.menuIdle = rand(2.2, 3.6);
      const b = this.stage.bounds;
      const type = weighted(REGULAR);
      const fromLeft = Math.random() < 0.5;
      const g = this.world.gravity;
      const y0 = b.bottom - 1.6;
      const apexY = b.bottom + b.height * rand(0.7, 0.9);
      const vy = Math.sqrt(2 * g * (apexY - y0));
      const T = vy / g;
      const x0 = fromLeft ? b.left + 1.5 : b.right - 1.5;
      const x1 = x0 + (fromLeft ? 1 : -1) * rand(3, 6);
      this.launchEntity(type, { x: x0, y: y0, vx: (x1 - x0) / (2 * T), vy, silent: true });
    }
    if (this.pending) {
      this.pending.t -= dt;
      if (this.pending.t <= 0) {
        const m = this.pending.mode;
        this.pending = null;
        this.startGame(m);
      }
    }
  }

  updatePlaying(dt, sdt) {
    this.elapsed += sdt;
    this.director.update(sdt);
    this.bounty.update(dt);

    // 连斩窗口
    if (this.combo.count > 0) {
      this.combo.timer -= dt;
      if (this.combo.timer <= 0) this.finishCombo();
    }

    // 计时
    if (this.timeLeft != null) {
      this.timeLeft -= dt;
      this.ui.setTimer(this.timeLeft);
      if (this.timeLeft <= 0) this.gameOver('时间到');
    }

    // 元素持续时间
    for (const k of Object.keys(this.powers)) {
      if (this.powers[k] > 0) {
        this.powers[k] -= dt;
        if (this.powers[k] <= 0) this.powers[k] = 0;
      }
    }
    this.ui.setPowers(
      Object.keys(this.powers)
        .filter((k) => this.powers[k] > 0)
        .map((k) => ({ kind: k, left: this.powers[k], total: POWER_DEFS[k].duration })),
    );

    // 心眼
    if (this.focusActive) {
      this.focus -= 26 * dt;
      if (this.focus <= 0) {
        this.focus = 0;
        this.focusActive = false;
        this.sound.focusOut();
      }
    }
    this.ui.setFocus(this.focus, this.focusActive);

    // HUD
    this.dispScore += (this.score - this.dispScore) * Math.min(1, 12 * dt);
    if (Math.abs(this.score - this.dispScore) < 1) this.dispScore = this.score;
    this.ui.setScore(Math.round(this.dispScore));
    this.ui.setMult(this.multiplier());
    this.ui.setStreak(this.streak);
    this.sound.setIntensity(clamp(this.director.level * 0.75 + (this.powers.gold > 0 ? 0.4 : 0) - (this.focusActive ? 0.3 : 0), 0, 1));
  }

  /* ============================== 视觉状态 ============================== */

  updateBladeStyle() {
    const p = this.powers;
    const b = this.blade;
    if (p.fire > 0) b.setStyle('#fff2c0', '#ff6a1a', 1.5);
    else if (p.bolt > 0) b.setStyle('#ffffff', '#ffe84a', 1.4);
    else if (p.gold > 0) b.setStyle('#fff6d0', '#ffc830', 1.3);
    else if (p.ice > 0) b.setStyle('#ffffff', '#7fd8ff', 1.2);
    else if (this.focusActive) b.setStyle('#ffffff', '#8ad0ff', 1.2);
    else b.setStyle('#ffffff', '#66ccff', 1);
  }

  updateBladeSparks() {
    const p = this.powers;
    if (!(p.fire > 0 || p.bolt > 0 || p.gold > 0 || p.ice > 0)) return;
    for (const slot of this.blade.slots) {
      const pts = slot.pts;
      if (!slot.swipe || pts.length < 2) continue;
      const h = pts[pts.length - 1];
      const sp = this.fx.sparks;
      for (let i = 0; i < 2; i++) {
        if (p.fire > 0) sp.emit(h.x + rand(-0.15, 0.15), h.y, 1, rand(-1, 1), rand(1, 3), 0, rand(0.3, 0.6), rand(0.25, 0.45), 1.0, rand(0.35, 0.65), 0.1, 1, -1.5, 1);
        else if (p.bolt > 0) sp.emit(h.x, h.y, 1, rand(-4, 4), rand(-4, 4), 0, rand(0.12, 0.25), rand(0.15, 0.3), 1, 0.95, 0.4, 1, 0, 2);
        else if (p.gold > 0) sp.emit(h.x + rand(-0.2, 0.2), h.y + rand(-0.2, 0.2), 1, rand(-1, 1), rand(-1, 1), 0, rand(0.4, 0.8), rand(0.2, 0.35), 1, 0.8, 0.25, 1, 0.5, 1);
        else sp.emit(h.x + rand(-0.2, 0.2), h.y + rand(-0.2, 0.2), 1, rand(-0.5, 0.5), rand(-0.5, 0.5), 0, rand(0.5, 0.9), rand(0.12, 0.22), 0.7, 0.95, 1, 1, 0.2, 1);
      }
    }
  }

  emitAuras(sdt) {
    const sp = this.fx.sparks;
    const t = this.time;
    const bomb = this.assets.bomb;
    if (bomb) bomb.bodyMat.emissiveIntensity = 0.65 + 0.4 * Math.sin(t * 9);
    for (const e of this.world.entities) {
      if (!e.alive) continue;
      if (e.cls === 'power') {
        const kind = e.def.power;
        const rate = kind === 'ice' ? 45 : kind === 'bolt' ? 60 : 70;
        e._acc = (e._acc || 0) + sdt * rate;
        const p = e.mesh.position;
        while (e._acc >= 1) {
          e._acc -= 1;
          const a = Math.random() * TAU;
          const r = e.hit * (0.3 + Math.random() * 0.7);
          const x = p.x + Math.cos(a) * r;
          const y = p.y + Math.sin(a) * r;
          if (kind === 'fire') sp.emit(x, y, p.z + 0.3, rand(-0.6, 0.6), rand(1.5, 3.5), 0, rand(0.5, 0.9), rand(0.3, 0.55), 1, rand(0.4, 0.75), 0.1, 1, -1.5, 1);
          else if (kind === 'ice') sp.emit(x, y, p.z + 0.3, rand(-0.5, 0.5), rand(-0.6, 0.4), 0, rand(0.8, 1.3), rand(0.16, 0.3), 0.7, 0.95, 1, 1, 0.3, 0.5);
          else if (kind === 'bolt') sp.emit(x, y, p.z + 0.3, rand(-5, 5), rand(-5, 5), 0, rand(0.15, 0.3), rand(0.18, 0.32), 1, 0.95, 0.4, 1, 0, 2);
          else sp.emit(x, y, p.z + 0.3, rand(-0.7, 0.7), rand(-0.5, 0.9), 0, rand(0.6, 1.0), rand(0.2, 0.42), 1, 0.8, 0.25, 1, 0, 0.8);
        }
        if (kind === 'bolt') {
          e._arc = (e._arc || 0) - sdt;
          if (e._arc <= 0) {
            e._arc = rand(0.15, 0.4);
            const a = Math.random() * TAU;
            const d = e.hit * rand(1.4, 2.3);
            this.fx.bolts.bolt(p.x, p.y, p.x + Math.cos(a) * d, p.y + Math.sin(a) * d, '#ffffff', '#ffe84a', 0.16, 0.05);
          }
        }
      } else if (e.cls === 'bomb') {
        e._acc = (e._acc || 0) + sdt * 55;
        if (e._acc >= 1) {
          e.mesh.updateMatrixWorld();
          const tip = this.assets.bomb.fuseTip.clone().applyMatrix4(e.mesh.matrixWorld);
          while (e._acc >= 1) {
            e._acc -= 1;
            sp.emit(tip.x, tip.y, tip.z + 0.2, rand(-1.5, 1.5), rand(0.5, 2.8), 0, rand(0.25, 0.5), rand(0.14, 0.28), 1, rand(0.5, 0.85), 0.15, 1, 2, 1);
          }
        }
      }
    }
  }

  updateGrade() {
    const g = { sat: 1, tint: [1, 1, 1], vig: 0.5, focus: 0 };
    const mul = (t) => {
      for (let i = 0; i < 3; i++) g.tint[i] *= t[i];
    };
    if (this.focusActive) {
      g.sat = 0.5;
      g.focus = 1;
      mul([0.82, 0.94, 1.14]);
    }
    if (this.powers.ice > 0) {
      g.sat = Math.min(g.sat, 0.85);
      mul([0.78, 0.95, 1.2]);
    }
    if (this.powers.fire > 0) mul([1.1, 0.97, 0.9]);
    if (this.powers.gold > 0) {
      g.sat = Math.max(g.sat, 1.15);
      mul([1.12, 1.03, 0.82]);
    }
    this.stage.setGrade(g);
  }

  /* ============================== 自动测试机器人 (?bot=1) ============================== */

  runBot(dt) {
    if (this.state === 'menu') {
      this.botTimer -= dt;
      if (this.botTimer <= 0 && this.menuFruits.length) {
        this.botTimer = 1.2;
        const m = ['classic', 'arcade', 'zen'][Math.floor(Math.random() * 3)];
        this.pickMode(this.bot === true ? 'classic' : m);
      }
      return;
    }
    if (this.state === 'over') {
      this.botTimer -= dt;
      if (this.botTimer <= 0) {
        this.botTimer = 2.5;
        this.ui.hideOver();
        this.startGame(this.mode);
      }
      return;
    }
    if (this.state !== 'playing') return;
    this.botFocus -= dt;
    if (this.botFocus < -18 && this.focus > 60) {
      this.botFocus = 2.0;
      this.setFocusHeld(true);
    }
    if (this.botFocus <= 0 && this.focusActive && this.botFocus > -18) this.setFocusHeld(false);
    this.botTimer -= dt;
    if (this.botTimer > 0) return;
    this.botTimer = 0.09;
    const b = this.stage.bounds;
    const cands = this.world.entities.filter(
      (e) => e.alive && e.sliceable && e.cls !== 'bomb' && e.cls !== 'menu' && e.blockSwipe < 100000 && e.mesh.position.y > b.bottom + 0.6 && Math.abs(e.mesh.position.x) < b.width / 2 - 0.4,
    );
    if (!cands.length) return;
    cands.sort((a, c) => a.mesh.position.y - c.mesh.position.y);
    const t = cands[0];
    const p = t.mesh.position;
    const ang = rand(-0.9, 0.9);
    const dx = Math.cos(ang) * 2.2;
    const dy = Math.sin(ang) * 2.2;
    // 避开炸弹
    for (const o of this.world.entities) {
      if (!o.alive || o.cls !== 'bomb') continue;
      const c = {};
      segmentClosest(p.x - dx, p.y - dy, p.x + dx, p.y + dy, o.mesh.position.x, o.mesh.position.y, c);
      if (c.dist < o.hit + 0.5) return;
    }
    const swipe = { id: ++this.swipeIdBot, sliced: 0 };
    this.processSegment({ x0: p.x - dx, y0: p.y - dy, x1: p.x + dx, y1: p.y + dy, speed: 40, swipe });
  }
}

function stageContext(canvas, fn) {
  canvas.addEventListener('pointerdown', fn);
  canvas.addEventListener('pointerup', fn);
  canvas.addEventListener('pointercancel', fn);
}
