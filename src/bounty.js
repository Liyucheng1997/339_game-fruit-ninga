// 悬赏令：随机任务，完成后得分 / 心眼能量 / 回血
import { REGULAR, FRUIT_DEFS } from './models/fruits.js';
import { weighted, pick, randInt, rand } from './util/math.js';

export class Bounty {
  constructor(game) {
    this.game = game;
    this.reset();
  }

  reset() {
    this.active = null;
    this.cool = 14;
    this.done = 0;
  }

  update(dt) {
    const g = this.game;
    if (g.state !== 'playing') return;
    if (this.active) {
      this.active.left -= dt;
      g.ui.updateBounty(this.active);
      if (this.active.left <= 0) this.fail();
    } else {
      this.cool -= dt;
      if (this.cool <= 0) this.spawn();
    }
  }

  spawn() {
    const g = this.game;
    const tier = Math.min(3, Math.floor(g.elapsed / 45));
    const kind = pick(['fruit', 'fruit', 'combo', 'perfect', 'reslice']);
    const b = { kind, tier, got: 0, need: 1, type: null, min: 0, icon: null, reward: 200 + tier * 100 };
    switch (kind) {
      case 'fruit': {
        b.type = weighted(REGULAR);
        b.need = randInt(3, 4) + Math.min(2, tier);
        b.total = 28;
        b.text = `斩 ${b.need} 个${FRUIT_DEFS[b.type].name}`;
        b.icon = b.type;
        break;
      }
      case 'combo':
        b.min = tier >= 2 ? 4 : 3;
        b.total = 32;
        b.text = `一刀连斩 ${b.min} 个水果`;
        b.icon = 'combo';
        break;
      case 'perfect':
        b.need = 2 + (tier >= 2 ? 1 : 0);
        b.total = 32;
        b.text = `完美斩 ${b.need} 次（过果心）`;
        b.icon = 'perfect';
        break;
      case 'reslice':
        b.need = 3 + Math.min(2, tier);
        b.total = 30;
        b.text = `二次斩 ${b.need} 次（劈开飞出的半块）`;
        b.icon = 'reslice';
        break;
    }
    b.left = b.total;
    this.active = b;
    g.ui.setBounty(b);
    g.sound.bounty();
  }

  event(kind, data = {}) {
    const a = this.active;
    if (!a) return;
    if (a.kind === 'fruit' && kind === 'slice' && data.type === a.type) a.got++;
    else if (a.kind === 'combo' && kind === 'combo' && data.n >= a.min) a.got = 1;
    else if (a.kind === 'perfect' && kind === 'perfect') a.got++;
    else if (a.kind === 'reslice' && kind === 'reslice') a.got++;
    else return;
    this.game.ui.updateBounty(a);
    if (a.got >= a.need) this.complete();
  }

  complete() {
    const g = this.game;
    const a = this.active;
    this.active = null;
    this.done++;
    g.stats.bounty++;
    this.cool = rand(8, 12);
    g.addScore(a.reward, null, false);
    g.addFocus(40);
    if (g.mode === 'classic' && g.lives < g.maxLives) g.gainLife();
    if (g.mode !== 'classic' && g.timeLeft != null) g.timeLeft += 4;
    g.ui.bountyDone(a);
    g.sound.bountyDone();
    g.ui.banner('悬赏完成！', `+${a.reward}`, '#ffd76a');
  }

  fail() {
    this.active = null;
    this.cool = rand(6, 9);
    this.game.ui.clearBounty();
    this.game.ui.toast('悬赏令超时');
  }
}
