// 开发服务器：监听 src/ 变化并即时重新打包，http://localhost:5173
import * as esbuild from 'esbuild';

const ctx = await esbuild.context({
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'iife',
  outfile: 'dist/game.js',
  sourcemap: true,
  target: 'es2020',
  logLevel: 'info',
});

await ctx.watch();
const { port } = await ctx.serve({ servedir: '.', port: 5173 });
console.log(`\n  水果忍者 · 元素道场  →  http://localhost:${port}\n`);
