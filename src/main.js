import { Stage } from './stage.js';
import { loadAssets } from './models/fruits.js';
import { renderIcons } from './icons.js';
import { nextFrame } from './models/paint.js';
import { runViewer } from './viewer.js';
import { Game } from './game.js';

async function main() {
  const params = new URLSearchParams(location.search);
  const fill = document.getElementById('loadFill');
  const text = document.getElementById('loadText');
  const stage = new Stage(document.getElementById('gl'));
  if (params.get('q') === 'low') stage.setQuality('low');

  const assets = await loadAssets((p, name) => {
    fill.style.width = `${Math.round(p * 92)}%`;
    text.textContent = `正在磨刀… ${name}`;
  });

  if (params.get('view')) {
    document.getElementById('loading').classList.add('hidden');
    runViewer(stage, assets, params.get('view'), params);
    return;
  }

  text.textContent = '正在擦拭图标…';
  await nextFrame();
  const icons = renderIcons(assets);
  fill.style.width = '100%';

  const game = new Game(stage, assets, icons);
  game.enterMenu();
  game.ui.hideLoading();
  // 调试接口：同步推进 n 帧（仅最后一帧渲染），便于在面板隐藏 / RAF 被节流时测试
  const step = (n = 60, dt = 1 / 60) => {
    for (let i = 0; i < n; i++) game.frame(dt, i === n - 1);
    return { state: game.state, score: game.score, lives: game.lives, ents: game.world.entities.length };
  };
  window.__ninja = { game, stage, world: game.world, assets, step };

  // 自适应画质：连续统计帧耗时，过慢则逐级降级
  let last = performance.now();
  let acc = 0;
  let cnt = 0;
  let cooldown = 3; // 启动后先观察几秒
  const loop = (now) => {
    const dt = (now - last) / 1000;
    last = now;
    if (!window.__freeze) game.frame(dt);
    if (dt < 0.12 && !document.hidden) {
      acc += dt;
      cnt++;
      if (cnt >= 90) {
        const avg = acc / cnt;
        acc = 0;
        cnt = 0;
        cooldown -= 1.5;
        if (avg > 0.03 && cooldown <= 0) {
          if (stage.degrade()) cooldown = 3;
        }
      }
    }
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

main().catch((e) => {
  console.error(e);
  const t = document.getElementById('loadText');
  if (t) t.textContent = '加载失败：' + e.message;
});
