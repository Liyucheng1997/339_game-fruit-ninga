// 全程序化音频：WebAudio 合成音效 + 和风(太鼓/古筝)生成式背景音乐，无需任何音频文件

const YO = [293.66, 329.63, 392.0, 440.0, 493.88, 587.33, 659.25, 783.99, 880.0]; // D E G A B D E G A

export class Sound {
  constructor() {
    this.ctx = null;
    this.muted = safeGet('fn_mute') === '1';
    this.musicOn = safeGet('fn_music') !== '0';
    this.intensity = 0;
    this.lastWhoosh = 0;
    this.timer = null;
  }

  init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    this.ctx = ctx;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.ratio.value = 6;
    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.8;
    comp.connect(this.master);
    this.master.connect(ctx.destination);
    this.out = comp;
    this.sfx = ctx.createGain();
    this.sfx.gain.value = 0.9;
    this.sfx.connect(comp);
    this.mus = ctx.createGain();
    this.mus.gain.value = this.musicOn ? 0.5 : 0;
    this.mus.connect(comp);

    // 噪声缓冲
    const len = ctx.sampleRate * 2;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.noiseBuf = buf;

    // 简易混响
    const irLen = Math.floor(ctx.sampleRate * 1.6);
    const ir = ctx.createBuffer(2, irLen, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const ch = ir.getChannelData(c);
      for (let i = 0; i < irLen; i++) ch[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / irLen, 2.6);
    }
    this.verb = ctx.createConvolver();
    this.verb.buffer = ir;
    const wet = ctx.createGain();
    wet.gain.value = 0.32;
    this.verb.connect(wet);
    wet.connect(comp);
  }

  resume() {
    this.init();
    if (this.ctx && this.ctx.state !== 'running') this.ctx.resume();
  }

  get t() {
    return this.ctx.currentTime;
  }

  /* ---------------- 基础发声 ---------------- */

  tone({ type = 'sine', f0 = 440, f1 = f0, dur = 0.2, gain = 0.2, attack = 0.004, delay = 0, verb = 0, dest = null }) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t0 = this.t + delay;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(f0, t0);
    if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(1, f1), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g);
    g.connect(dest || this.sfx);
    if (verb) {
      const s = ctx.createGain();
      s.gain.value = verb;
      g.connect(s);
      s.connect(this.verb);
    }
    o.start(t0);
    o.stop(t0 + dur + 0.05);
  }

  noise({ type = 'bandpass', f0 = 1000, f1 = f0, q = 1, dur = 0.2, gain = 0.2, attack = 0.003, delay = 0, verb = 0, dest = null }) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t0 = this.t + delay;
    const s = ctx.createBufferSource();
    s.buffer = this.noiseBuf;
    s.loop = true;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.Q.value = q;
    f.frequency.setValueAtTime(f0, t0);
    if (f1 !== f0) f.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t0 + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    s.connect(f);
    f.connect(g);
    g.connect(dest || this.sfx);
    if (verb) {
      const v = ctx.createGain();
      v.gain.value = verb;
      g.connect(v);
      v.connect(this.verb);
    }
    s.start(t0, Math.random() * 1.5);
    s.stop(t0 + dur + 0.05);
  }

  /* ---------------- 音效 ---------------- */

  whoosh(speed = 1) {
    if (!this.ctx) return;
    const now = performance.now();
    if (now - this.lastWhoosh < 110) return;
    this.lastWhoosh = now;
    const k = Math.min(1, speed);
    this.noise({ f0: 500 + 300 * k, f1: 2200 + 1200 * k, q: 0.8, dur: 0.16, gain: 0.05 + 0.09 * k, attack: 0.03 });
  }

  launch() {
    this.tone({ type: 'sine', f0: 180 + Math.random() * 60, f1: 420 + Math.random() * 120, dur: 0.11, gain: 0.05 });
    this.noise({ type: 'lowpass', f0: 900, f1: 300, dur: 0.1, gain: 0.05 });
  }

  slice(pitch = 1, big = 0) {
    this.noise({ f0: 3500, f1: 7500, q: 0.7, dur: 0.11, gain: 0.26 });
    this.noise({ type: 'lowpass', f0: 1400 / (0.6 + big * 0.3), f1: 280, dur: 0.2 + big * 0.08, gain: 0.3, verb: 0.15 });
    this.tone({ type: 'triangle', f0: 700 * pitch, f1: 190 * pitch, dur: 0.13, gain: 0.13 });
    this.tone({ type: 'sine', f0: 140 * pitch, f1: 60, dur: 0.14, gain: 0.2 });
  }

  splash() {
    this.noise({ type: 'bandpass', f0: 1800, f1: 500, q: 0.5, dur: 0.3, gain: 0.12, delay: 0.02 });
  }

  perfect() {
    this.tone({ type: 'sine', f0: 1318, dur: 0.6, gain: 0.16, verb: 0.4 });
    this.tone({ type: 'sine', f0: 1975, dur: 0.5, gain: 0.1, delay: 0.05, verb: 0.4 });
    this.tone({ type: 'sine', f0: 2637, dur: 0.4, gain: 0.06, delay: 0.1, verb: 0.4 });
  }

  combo(n) {
    const steps = Math.min(n, 7);
    for (let i = 0; i < steps; i++) {
      this.tone({ type: 'triangle', f0: YO[Math.min(i + 2, YO.length - 1)] * 1.5, dur: 0.14, gain: 0.12, delay: i * 0.055, verb: 0.2 });
    }
  }

  reslice() {
    this.tone({ type: 'triangle', f0: 1200, f1: 1800, dur: 0.09, gain: 0.1 });
    this.noise({ f0: 4500, f1: 8000, dur: 0.07, gain: 0.14 });
  }

  bomb() {
    this.tone({ type: 'sine', f0: 130, f1: 28, dur: 0.9, gain: 0.85, verb: 0.3 });
    this.noise({ type: 'lowpass', f0: 2600, f1: 90, dur: 1.0, gain: 0.7, verb: 0.35 });
    this.noise({ type: 'highpass', f0: 4000, dur: 0.15, gain: 0.3 });
  }

  miss() {
    this.tone({ type: 'triangle', f0: 210, f1: 85, dur: 0.32, gain: 0.22 });
  }

  lifeLost() {
    this.tone({ type: 'sawtooth', f0: 330, f1: 110, dur: 0.5, gain: 0.12, verb: 0.2 });
    this.tone({ type: 'triangle', f0: 247, f1: 82, dur: 0.6, gain: 0.14, delay: 0.1 });
  }

  fire() {
    this.noise({ f0: 250, f1: 3200, q: 0.6, dur: 0.8, gain: 0.4, attack: 0.05, verb: 0.2 });
    this.tone({ type: 'sawtooth', f0: 70, f1: 220, dur: 0.6, gain: 0.16 });
    this.tone({ type: 'sine', f0: 120, f1: 40, dur: 0.5, gain: 0.4 });
  }

  ice() {
    this.tone({ type: 'sine', f0: 320, f1: 70, dur: 0.9, gain: 0.3, verb: 0.3 });
    [2093, 2637, 3136, 3951].forEach((f, i) => this.tone({ type: 'sine', f0: f, dur: 0.9, gain: 0.07, delay: i * 0.05, verb: 0.5 }));
    this.noise({ type: 'highpass', f0: 5000, dur: 0.25, gain: 0.12 });
  }

  bolt() {
    for (let i = 0; i < 3; i++) this.noise({ type: 'highpass', f0: 3200, dur: 0.09, gain: 0.25, delay: i * 0.05 });
    this.tone({ type: 'sawtooth', f0: 90, f1: 900, dur: 0.18, gain: 0.14 });
    this.tone({ type: 'square', f0: 1400, f1: 300, dur: 0.12, gain: 0.05 });
  }

  zap() {
    this.noise({ type: 'highpass', f0: 3500, dur: 0.1, gain: 0.2 });
    this.tone({ type: 'sawtooth', f0: 600, f1: 1800, dur: 0.08, gain: 0.07 });
  }

  fever() {
    [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((f, i) => this.tone({ type: 'triangle', f0: f, dur: 0.5, gain: 0.16, delay: i * 0.07, verb: 0.35 }));
    this.noise({ type: 'highpass', f0: 6000, dur: 0.6, gain: 0.08, attack: 0.2 });
  }

  focusIn() {
    this.tone({ type: 'sine', f0: 520, f1: 90, dur: 0.45, gain: 0.25, verb: 0.3 });
    this.noise({ type: 'lowpass', f0: 1800, f1: 120, dur: 0.5, gain: 0.18 });
  }

  focusOut() {
    this.tone({ type: 'sine', f0: 100, f1: 620, dur: 0.28, gain: 0.18 });
  }

  bounty() {
    [659.25, 987.77].forEach((f, i) => this.tone({ type: 'triangle', f0: f, dur: 0.4, gain: 0.14, delay: i * 0.12, verb: 0.3 }));
  }

  bountyDone() {
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => this.tone({ type: 'triangle', f0: f, dur: 0.45, gain: 0.16, delay: i * 0.09, verb: 0.35 }));
  }

  rank() {
    [587.33, 783.99, 987.77, 1174.66, 1567.98].forEach((f, i) => this.tone({ type: 'sine', f0: f, dur: 0.7, gain: 0.12, delay: i * 0.08, verb: 0.5 }));
  }

  boss() {
    this.tone({ type: 'sine', f0: 73.4, f1: 55, dur: 1.4, gain: 0.55, verb: 0.3 });
    this.taiko(0, 0.9);
    this.taiko(0.32, 0.9);
    this.taiko(0.64, 1.0);
  }

  click() {
    this.tone({ type: 'triangle', f0: 880, f1: 660, dur: 0.07, gain: 0.12 });
  }

  gameover() {
    [392, 329.63, 261.63, 196].forEach((f, i) => this.tone({ type: 'triangle', f0: f, dur: 0.7, gain: 0.16, delay: i * 0.18, verb: 0.4 }));
  }

  taiko(delay = 0, vol = 1) {
    this.tone({ type: 'sine', f0: 150, f1: 48, dur: 0.38, gain: 0.55 * vol, delay, verb: 0.15, dest: this.mus });
    this.noise({ type: 'lowpass', f0: 900, f1: 200, dur: 0.12, gain: 0.25 * vol, delay, dest: this.mus });
  }

  /* ---------------- 音乐 ---------------- */

  startMusic() {
    if (!this.ctx || this.timer) return;
    this.step = 0;
    this.nextTime = this.t + 0.1;
    this.note = 3;
    this.timer = setInterval(() => this._schedule(), 60);
  }

  stopMusic() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
  }

  _schedule() {
    if (!this.ctx) return;
    const stepDur = (60 / (100 + this.intensity * 26)) / 2;
    while (this.nextTime < this.t + 0.25) {
      this._playStep(this.step, this.nextTime);
      this.nextTime += stepDur;
      this.step++;
    }
  }

  _pluck(freq, time, gain = 0.16, dur = 0.7) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    const o2 = ctx.createOscillator();
    const g = ctx.createGain();
    const f = ctx.createBiquadFilter();
    o.type = 'triangle';
    o2.type = 'sine';
    o.frequency.setValueAtTime(freq * 1.012, time);
    o.frequency.exponentialRampToValueAtTime(freq, time + 0.05);
    o2.frequency.setValueAtTime(freq * 2, time);
    f.type = 'lowpass';
    f.frequency.setValueAtTime(4200, time);
    f.frequency.exponentialRampToValueAtTime(700, time + dur);
    g.gain.setValueAtTime(0.0001, time);
    g.gain.exponentialRampToValueAtTime(gain, time + 0.003);
    g.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    o.connect(f);
    o2.connect(f);
    f.connect(g);
    g.connect(this.mus);
    const v = ctx.createGain();
    v.gain.value = 0.5;
    g.connect(v);
    v.connect(this.verb);
    o.start(time);
    o2.start(time);
    o.stop(time + dur + 0.05);
    o2.stop(time + dur + 0.05);
  }

  _playStep(step, time) {
    const s = step % 16;
    const ctx = this.ctx;
    const inten = this.intensity;
    const drum = (f0, f1, dur, gain) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.frequency.setValueAtTime(f0, time);
      o.frequency.exponentialRampToValueAtTime(f1, time + dur);
      g.gain.setValueAtTime(gain, time);
      g.gain.exponentialRampToValueAtTime(0.0001, time + dur);
      o.connect(g);
      g.connect(this.mus);
      o.start(time);
      o.stop(time + dur + 0.02);
    };
    // 太鼓
    if (s === 0 || s === 8) drum(140, 46, 0.4, 0.5);
    else if (s === 4 || s === 12) drum(200, 90, 0.18, 0.22);
    if (inten > 0.35 && (s === 6 || s === 14)) drum(180, 70, 0.16, 0.2);
    if (inten > 0.7 && (s === 2 || s === 10 || s === 15)) drum(220, 100, 0.12, 0.14);
    // 沙锤
    if (inten > 0.2 && s % 2 === 1) {
      const src = ctx.createBufferSource();
      src.buffer = this.noiseBuf;
      const f = ctx.createBiquadFilter();
      f.type = 'highpass';
      f.frequency.value = 6500;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.05, time);
      g.gain.exponentialRampToValueAtTime(0.0001, time + 0.05);
      src.connect(f);
      f.connect(g);
      g.connect(this.mus);
      src.start(time, Math.random());
      src.stop(time + 0.06);
    }
    // 古筝旋律：五声音阶随机游走
    if (s % 2 === 0 || (inten > 0.5 && Math.random() < 0.5)) {
      if (Math.random() < 0.72) {
        const move = [-2, -1, -1, 0, 1, 1, 2][(Math.random() * 7) | 0];
        this.note = Math.max(0, Math.min(YO.length - 1, this.note + move));
        this._pluck(YO[this.note], time, 0.14, 0.9);
        if (s === 0 && Math.random() < 0.6) this._pluck(YO[Math.max(0, this.note - 5)] * 0.5, time, 0.1, 1.2);
      }
    }
    // 低音
    if (s === 0) this._pluck(146.83 * (Math.random() < 0.3 ? 0.75 : 1), time, 0.16, 1.4);
  }

  setIntensity(v) {
    this.intensity = Math.max(0, Math.min(1, v));
  }

  setMuted(m) {
    this.muted = m;
    safeSet('fn_mute', m ? '1' : '0');
    if (this.master) this.master.gain.setTargetAtTime(m ? 0 : 0.8, this.t, 0.05);
  }

  setMusic(on) {
    this.musicOn = on;
    safeSet('fn_music', on ? '1' : '0');
    if (this.mus) this.mus.gain.setTargetAtTime(on ? 0.5 : 0, this.t, 0.1);
  }
}

function safeGet(k) {
  try {
    return localStorage.getItem(k);
  } catch {
    return null;
  }
}
function safeSet(k, v) {
  try {
    localStorage.setItem(k, v);
  } catch {
    /* ignore */
  }
}
