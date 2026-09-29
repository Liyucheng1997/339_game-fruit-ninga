// 界面层：HUD / 菜单 / 结算 / 飘字 / 横幅（DOM）
import { POWER_DEFS, FRUIT_DEFS } from './models/fruits.js';

export const RANKS = [
  { name: '白带', score: 0, color: '#eeeeee' },
  { name: '黄带', score: 300, color: '#f7d13a' },
  { name: '橙带', score: 800, color: '#ff9a2e' },
  { name: '绿带', score: 1500, color: '#5cd15c' },
  { name: '蓝带', score: 2500, color: '#4aa3ff' },
  { name: '紫带', score: 4000, color: '#a56bff' },
  { name: '棕带', score: 6000, color: '#a8703f' },
  { name: '红带', score: 8500, color: '#ff4a4a' },
  { name: '黑带', score: 12000, color: '#2b2b30' },
  { name: '宗师', score: 16000, color: '#ffd76a' },
];

const HEART =
  '<svg viewBox="0 0 32 30"><path d="M16 28C4 20 0 14 0 9 0 4 4 1 8 1c3 0 6 2 8 5 2-3 5-5 8-5 4 0 8 3 8 8 0 5-4 11-16 19Z" fill="#ff4a55" stroke="#7a0f18" stroke-width="2"/><path d="M6 6c2-2 5-1 6 2" stroke="#ffb0b0" stroke-width="2" fill="none" stroke-linecap="round"/></svg>';

const GLYPH = { combo: '⚔️', perfect: '🎯', reslice: '✂️' };

export class UI {
  constructor(stage, icons) {
    this.stage = stage;
    this.icons = icons || {};
    const $ = (id) => document.getElementById(id);
    this.$ = $;
    this.on = {};
    this.el = {
      loading: $('loading'), loadFill: $('loadFill'), loadText: $('loadText'),
      menu: $('menu'), modes: $('modes'), hud: $('hud'),
      rankDot: $('rankDot'), rankName: $('rankName'), rankBar: $('rankBar'), rankNext: $('rankNext'),
      score: $('score'), mult: $('mult'), best: $('best'), streak: $('streak'),
      lives: $('lives'), timer: $('timer'),
      bounty: $('bounty'), bIcon: $('bIcon'), bGlyph: $('bGlyph'), bText: $('bText'), bBar: $('bBar'), bProg: $('bProg'),
      powers: $('powers'), focus: $('focus'), fFill: $('fFill'), fBtn: $('fBtn'),
      banner: $('banner'), bannerMain: $('bannerMain'), bannerSub: $('bannerSub'),
      popups: $('popups'), toast: $('toast'),
      pause: $('pause'), over: $('over'), how: $('how'),
    };
    this.cache = {};
    this.powerEls = new Map();
    this.labels = new Map();
    this.toastTimer = 0;

    const click = (id, fn) =>
      $(id).addEventListener('click', (e) => {
        e.currentTarget.blur(); // 避免之后按空格(心眼)又触发这个按钮
        this.on.click?.();
        fn();
      });
    click('btnPause', () => this.on.pause?.());
    click('btnResume', () => this.on.resume?.());
    click('btnRestart', () => this.on.restart?.());
    click('btnQuit', () => this.on.quit?.());
    click('btnAgain', () => this.on.again?.());
    click('btnMenu', () => this.on.menu?.());
    click('btnHow', () => this.on.how?.());
    click('btnHowClose', () => this.hideHow());
    click('btnSound', () => this.on.sound?.());
    click('btnMute', () => this.on.sound?.());
    click('btnMusic', () => this.on.music?.());
    $('chkHover').addEventListener('change', (e) => this.on.hover?.(e.target.checked));
    const fb = this.el.fBtn;
    fb.addEventListener('pointerdown', (e) => { e.preventDefault(); this.on.focus?.(true); });
    const fu = () => this.on.focus?.(false);
    fb.addEventListener('pointerup', fu);
    fb.addEventListener('pointercancel', fu);
    fb.addEventListener('pointerleave', fu);

    this.buildHow();
  }

  /* ---------------- 加载 / 菜单 ---------------- */

  setLoading(p, text) {
    this.el.loadFill.style.width = `${Math.round(p * 100)}%`;
    if (text) this.el.loadText.textContent = `正在磨刀… ${text}`;
  }

  hideLoading() {
    const l = this.el.loading;
    l.style.transition = 'opacity 0.5s';
    l.style.opacity = '0';
    setTimeout(() => l.classList.add('hidden'), 520);
  }

  showMenu() {
    this.el.menu.classList.remove('hidden');
    this.hideHud();
  }

  hideMenu() {
    this.el.menu.classList.add('hidden');
  }

  initMenuLabels(list) {
    this.el.modes.innerHTML = '';
    this.labels.clear();
    for (const m of list) {
      const d = document.createElement('div');
      d.className = 'mode-label';
      d.innerHTML = `<b>${m.title}</b><span>${m.desc}</span><em></em>`;
      d.addEventListener('click', () => { this.on.click?.(); this.on.pick?.(m.mode); });
      this.el.modes.appendChild(d);
      this.labels.set(m.mode, d);
    }
  }

  setMenuBest(mode, best) {
    const d = this.labels.get(mode);
    if (d) d.querySelector('em').textContent = best ? `最高 ${best}` : '';
  }

  placeLabel(mode, px, py) {
    const d = this.labels.get(mode);
    if (!d) return;
    d.style.left = `${px}px`;
    d.style.top = `${py}px`;
  }

  setToggles({ muted, music, hover }) {
    this.$('btnSound').textContent = muted ? '音效 关' : '音效 开';
    this.$('btnMusic').textContent = music ? '音乐 开' : '音乐 关';
    this.$('btnMute').classList.toggle('off', muted);
    this.$('chkHover').checked = !!hover;
  }

  /* ---------------- HUD ---------------- */

  showHud(mode) {
    this.el.hud.classList.remove('hidden');
    this.el.lives.classList.toggle('hidden', mode !== 'classic');
    this.el.timer.classList.toggle('hidden', mode === 'classic');
    this.cache = {};
  }

  hideHud() {
    this.el.hud.classList.add('hidden');
    this.clearBounty();
    this.setPowers([]);
    this.el.banner.classList.add('hidden');
  }

  setScore(n, bump = false) {
    if (this.cache.score !== n) {
      this.cache.score = n;
      this.el.score.textContent = n;
    }
    if (bump) {
      const s = this.el.score;
      s.classList.remove('bump');
      void s.offsetWidth;
      s.classList.add('bump');
    }
  }

  setBest(n) {
    this.el.best.textContent = n;
  }

  setMult(m) {
    if (this.cache.mult === m) return;
    this.cache.mult = m;
    this.el.mult.classList.toggle('hidden', m <= 1);
    this.el.mult.textContent = `×${m}`;
  }

  setStreak(n) {
    if (this.cache.streak === n) return;
    this.cache.streak = n;
    this.el.streak.textContent = n >= 5 ? `连击 ${n}` : '';
  }

  setRank(rank, next, score) {
    const c = this.cache;
    if (c.rank !== rank.name) {
      c.rank = rank.name;
      this.el.rankName.textContent = rank.name;
      this.el.rankDot.style.background = rank.color;
    }
    if (next) {
      const pct = ((score - rank.score) / (next.score - rank.score)) * 100;
      this.el.rankBar.style.width = `${Math.max(0, Math.min(100, pct))}%`;
      this.el.rankNext.textContent = `距${next.name} ${next.score - score}`;
    } else {
      this.el.rankBar.style.width = '100%';
      this.el.rankNext.textContent = '已至巅峰';
    }
  }

  setLives(n, max) {
    if (this.cache.lives === n && this.cache.maxLives === max) return;
    const prev = this.cache.lives ?? max;
    this.cache.lives = n;
    this.cache.maxLives = max;
    this.el.lives.innerHTML = HEART.repeat(max);
    const hs = this.el.lives.children;
    for (let i = 0; i < max; i++) {
      if (i >= n) hs[i].classList.add('lost');
      if (i < n && n > prev && i === n - 1) hs[i].style.animation = 'heart-break 0.5s ease-out';
    }
  }

  setTimer(sec) {
    const s = Math.max(0, Math.ceil(sec));
    if (this.cache.timer === s) return;
    this.cache.timer = s;
    this.el.timer.textContent = s;
    this.el.timer.classList.toggle('low', s <= 10);
  }

  setFocus(pct, active) {
    const f = this.el.fFill;
    f.style.width = `${Math.max(0, Math.min(100, pct))}%`;
    this.el.focus.classList.toggle('ready', pct >= 100 && !active);
    this.el.focus.classList.toggle('active', active);
    this.el.fBtn.classList.toggle('on', active);
  }

  /* ---------------- 悬赏令 ---------------- */

  setBounty(b) {
    const e = this.el;
    e.bounty.classList.remove('hidden', 'done');
    e.bounty.style.animation = 'none';
    void e.bounty.offsetWidth;
    e.bounty.style.animation = '';
    const src = this.icons[b.icon];
    e.bIcon.style.display = src ? '' : 'none';
    if (src) e.bIcon.src = src;
    e.bGlyph.textContent = src ? '' : GLYPH[b.icon] || '★';
    e.bText.textContent = b.text;
    this.updateBounty(b);
  }

  updateBounty(b) {
    this.el.bBar.style.width = `${Math.max(0, (b.left / b.total) * 100)}%`;
    this.el.bProg.textContent = b.kind === 'combo' ? `≥${b.min}` : `${b.got}/${b.need}`;
  }

  bountyDone() {
    const b = this.el.bounty;
    b.classList.add('done');
    setTimeout(() => b.classList.contains('done') && b.classList.add('hidden'), 700);
  }

  clearBounty() {
    this.el.bounty.classList.add('hidden');
    this.el.bounty.classList.remove('done');
  }

  /* ---------------- 元素状态 ---------------- */

  setPowers(list) {
    const seen = new Set();
    for (const p of list) {
      seen.add(p.kind);
      let el = this.powerEls.get(p.kind);
      if (!el) {
        const def = POWER_DEFS[p.kind];
        el = document.createElement('div');
        el.className = 'power';
        el.style.setProperty('--c', def.color);
        el.innerHTML = `<div class="in"><img src="${this.icons[def.fruit] || ''}" alt=""></div><small>${def.name}</small>`;
        this.el.powers.appendChild(el);
        this.powerEls.set(p.kind, el);
      }
      el.style.setProperty('--p', Math.max(0, (p.left / p.total) * 100).toFixed(1));
    }
    for (const [k, el] of this.powerEls) {
      if (!seen.has(k)) {
        el.remove();
        this.powerEls.delete(k);
      }
    }
  }

  /* ---------------- 文字特效 ---------------- */

  banner(text, sub = '', color = '#ffd36a') {
    const b = this.el.banner;
    this.el.bannerMain.textContent = text;
    this.el.bannerSub.textContent = sub;
    b.style.setProperty('--bc', color);
    b.classList.remove('hidden');
    b.style.animation = 'none';
    void b.offsetWidth;
    b.style.animation = '';
    clearTimeout(this._bt);
    this._bt = setTimeout(() => b.classList.add('hidden'), 2100);
  }

  popup(text, px, py, cls = '', color = null) {
    const host = this.el.popups;
    if (host.children.length > 26) host.firstChild.remove();
    const d = document.createElement('div');
    d.className = `pop ${cls}`;
    d.textContent = text;
    const m = 60;
    d.style.left = `${Math.max(m, Math.min(this.stage.width - m, px))}px`;
    d.style.top = `${Math.max(m, Math.min(this.stage.height - m, py))}px`;
    if (color) d.style.setProperty('--pc', color);
    d.addEventListener('animationend', () => d.remove());
    host.appendChild(d);
  }

  toast(text) {
    const t = this.el.toast;
    t.textContent = text;
    t.classList.add('show');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => t.classList.remove('show'), 1700);
  }

  /* ---------------- 面板 ---------------- */

  showPause() { this.el.pause.classList.remove('hidden'); }
  hidePause() { this.el.pause.classList.add('hidden'); }
  showHow() { this.el.how.classList.remove('hidden'); }
  hideHow() { this.el.how.classList.add('hidden'); }
  hideOver() { this.el.over.classList.add('hidden'); }

  showOver(d) {
    const $ = this.$;
    $('overTitle').textContent = d.title;
    $('overScore').textContent = d.score;
    $('overBest').textContent = d.best;
    $('overNew').classList.toggle('hidden', !d.isNew);
    $('overRank').textContent = d.rank.name;
    $('overDot').style.background = d.rank.color;
    $('overStats').innerHTML = d.stats.map(([k, v]) => `<div><b>${v}</b><span>${k}</span></div>`).join('');
    this.el.over.classList.remove('hidden');
  }

  buildHow() {
    const img = (t) => (this.icons[t] ? `<img src="${this.icons[t]}" alt="">` : '');
    const items = [
      ['🔪', '真·3D 切割', '刀锋划过，水果网格被真实劈开，露出果肉截面。刀的方向与切面完全一致。'],
      ['🎯', '完美斩', '刀过果心（切口近乎对半）触发完美斩：得分翻倍，心眼能量大增。'],
      ['✂️', '二次斩', '斩开后飞出的半块还能再劈一刀，碎成四块，额外得分。'],
      ['⚔️', '连斩与连击', '一刀连斩 3 个以上触发连斩加分；连续不失误累积连击，得分倍率最高 ×5。'],
      [img('dragon'), '火龙果 · 烈焰斩', '爆炸波及周围水果，刀刃燃烧：每次斩击引燃邻近水果，还能净化炸弹。'],
      [img('pear'), '雪梨 · 冰封时刻', '时间几乎静止，水果悬停空中，得分翻倍。'],
      [img('star'), '杨桃 · 雷霆之刃', '每次斩击引发闪电，连锁劈向附近水果。'],
      [img('golden'), '金苹果 · 黄金时刻', '得分 ×3，水果狂潮涌来，炸弹消失。'],
      ['👁️', '心眼（空格 / 右键）', '积攒能量后按住进入子弹时间，看清 3D 切面，从容斩击。'],
      ['📜', '悬赏令', '随机任务：斩指定水果、一刀连斩、完美斩、二次斩。完成得奖励。'],
      [img('watermelon'), '西瓜大王', '定时来袭的巨型西瓜，可层层劈成 8 块，收获满满。'],
      [img('bomb'), '炸弹', '别斩炸弹！经典模式扣 1 条命，限时模式扣时间。火龙果可以净化它。'],
    ];
    this.$('howList').innerHTML = items
      .map(([ic, t, d]) => `<div class="how-item"><div class="ic">${ic}</div><div><b>${t}</b><p>${d}</p></div></div>`)
      .join('');
  }
}

export { FRUIT_DEFS };
