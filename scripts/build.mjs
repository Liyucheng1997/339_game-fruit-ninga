// 生产构建：
//  1) 把 src/ 打包为单个经典脚本 dist/game.js（index.html 双击即可运行）
//  2) 再把样式与脚本内联，生成单文件 play.html —— 拷到任何电脑双击就能玩
import * as esbuild from 'esbuild';
import { readFileSync, writeFileSync } from 'node:fs';

await esbuild.build({
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'iife',
  outfile: 'dist/game.js',
  minify: true,
  target: 'es2020',
  legalComments: 'none',
  logLevel: 'info',
});

const html = readFileSync('index.html', 'utf8');
const css = readFileSync('style.css', 'utf8');
const js = readFileSync('dist/game.js', 'utf8').replace(/<\/script/gi, '<\\/script');
const single = html
  .replace('<link rel="stylesheet" href="style.css">', () => `<style>\n${css}\n</style>`)
  .replace('<script src="dist/game.js"></script>', () => `<script>\n${js}\n</script>`);
writeFileSync('play.html', single);
console.log(`  play.html  ${(single.length / 1024).toFixed(0)}kb  (单文件版，可直接分享)`);
