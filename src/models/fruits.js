// 水果资产注册表：形状 + 贴图 + 材质 + 截面 → 可实例化的「资产」
import * as THREE from 'three';
import {
  paramBody,
  SHAPES,
  taperedTube,
  leafGeo,
  crownGeo,
  calyxGeo,
  flapsGeo,
  shardsGeo,
  xform,
  assemble,
  finalize,
} from './shapes.js';
import { makeSkin } from './skins.js';
import { makeCap } from './caps.js';
import { leafTex, stemTex, bombTextures } from './props.js';
import { nextFrame } from './paint.js';

const PI = Math.PI;

/**
 * hit: 命中半径（世界单位）；score: 基础分；juice: 汁液/溅射颜色
 * power: 元素果类别（fire 火 / ice 冰 / bolt 雷 / gold 金）
 */
export const FRUIT_DEFS = {
  apple: { name: '苹果', score: 10, hit: 0.9, juice: '#ffd66b', pitch: 1.0 },
  orange: { name: '橙子', score: 10, hit: 0.92, juice: '#ff9a1a', pitch: 1.05 },
  kiwi: { name: '猕猴桃', score: 12, hit: 0.8, juice: '#8be03a', pitch: 1.2 },
  watermelon: { name: '西瓜', score: 20, hit: 1.15, juice: '#ff3355', pitch: 0.6 },
  pineapple: { name: '菠萝', score: 20, hit: 1.05, juice: '#ffe14a', pitch: 0.75 },
  peach: { name: '蜜桃', score: 12, hit: 0.9, juice: '#ff9a7a', pitch: 1.1 },
  strawberry: { name: '草莓', score: 12, hit: 0.82, juice: '#ff2d4e', pitch: 1.3 },
  banana: { name: '香蕉', score: 15, hit: 1.0, juice: '#fff0a0', pitch: 0.95, wSeg: 36, hSeg: 72 },
  coconut: { name: '椰子', score: 25, hit: 1.0, juice: '#f4f8ff', pitch: 0.5 },
  lemon: { name: '柠檬', score: 10, hit: 0.82, juice: '#fff36b', pitch: 1.4 },
  dragon: { name: '火龙果', score: 30, hit: 1.0, juice: '#e8156d', pitch: 0.9, power: 'fire' },
  pear: { name: '雪梨', score: 30, hit: 1.0, juice: '#b8e8ff', pitch: 1.5, power: 'ice' },
  star: { name: '杨桃', score: 30, hit: 0.98, juice: '#f4ff5a', pitch: 1.35, power: 'bolt', wSeg: 80 },
  golden: { name: '金苹果', score: 50, hit: 0.92, juice: '#ffd23a', pitch: 1.25, power: 'gold', shape: 'apple' },
};

export const POWER_DEFS = {
  fire: { fruit: 'dragon', name: '烈焰斩', desc: '爆炸波及周围水果，刀刃燃烧，连锁引爆并净化炸弹', color: '#ff6a1a', duration: 7 },
  ice: { fruit: 'pear', name: '冰封时刻', desc: '时间几乎静止，得分翻倍', color: '#7fd8ff', duration: 5 },
  bolt: { fruit: 'star', name: '雷霆之刃', desc: '每次斩击引发闪电连锁劈向附近水果', color: '#ffee55', duration: 7 },
  gold: { fruit: 'golden', name: '黄金时刻', desc: '得分 ×3，水果狂潮，炸弹消失', color: '#ffc830', duration: 8 },
};

/** 普通水果及出场权重 */
export const REGULAR = [
  ['apple', 10],
  ['orange', 10],
  ['kiwi', 8],
  ['watermelon', 7],
  ['pineapple', 6],
  ['peach', 8],
  ['strawberry', 8],
  ['banana', 7],
  ['coconut', 4],
  ['lemon', 7],
];

const MAT = {
  apple: { roughness: 0.3, clearcoat: 0.9, clearcoatRoughness: 0.12, bumpScale: 0.6 },
  orange: { roughness: 0.55, clearcoat: 0.2, clearcoatRoughness: 0.5, bumpScale: 2.2 },
  kiwi: { roughness: 0.95, sheen: 1, sheenColor: '#d8b58a', sheenRoughness: 0.6, bumpScale: 2.0 },
  pineapple: { roughness: 0.6, clearcoat: 0.1, bumpScale: 5.0 },
  watermelon: { roughness: 0.32, clearcoat: 0.6, clearcoatRoughness: 0.2, bumpScale: 0.2 },
  peach: { roughness: 0.7, sheen: 1, sheenColor: '#ffc6b0', sheenRoughness: 0.4, bumpScale: 0.5 },
  strawberry: { roughness: 0.35, clearcoat: 0.8, clearcoatRoughness: 0.25, bumpScale: 3.5 },
  banana: { roughness: 0.5, clearcoat: 0.25, bumpScale: 1.2 },
  coconut: { roughness: 0.95, bumpScale: 5 },
  lemon: { roughness: 0.42, clearcoat: 0.4, bumpScale: 1.5 },
  dragon: { roughness: 0.35, clearcoat: 0.7, emissive: '#ff3a00', emissiveIntensity: 0.2, bumpScale: 0.4 },
  pear: { roughness: 0.3, clearcoat: 0.8, emissive: '#3aa8ff', emissiveIntensity: 0.14, bumpScale: 3 },
  star: { roughness: 0.38, clearcoat: 0.6, emissive: '#ffe930', emissiveIntensity: 0.1, bumpScale: 0.5 },
  golden: { roughness: 0.22, metalness: 1, clearcoat: 1, emissive: '#ffb000', emissiveIntensity: 0.3, bumpScale: 0.4 },
};

let shared = null;
function sharedMats() {
  if (shared) return shared;
  const dbl = THREE.DoubleSide;
  shared = {
    stem: new THREE.MeshStandardMaterial({ map: stemTex(), roughness: 0.9, side: dbl }),
    stemGreen: new THREE.MeshStandardMaterial({ map: stemTex('#557a2a', '#2d4a14'), roughness: 0.85, side: dbl }),
    leaf: new THREE.MeshStandardMaterial({
      map: leafTex([[0, '#2a6f28'], [0.5, '#48a83a'], [1, '#7cd04a']]),
      roughness: 0.55,
      side: dbl,
    }),
    crown: new THREE.MeshStandardMaterial({
      map: leafTex([[0, '#1d5a22'], [0.55, '#3c8f2e'], [1, '#a6c93c']], 'rgba(255,255,190,0.35)'),
      roughness: 0.5,
      side: dbl,
    }),
    calyx: new THREE.MeshStandardMaterial({
      map: leafTex([[0, '#2b8a2e'], [0.6, '#3fae3c'], [1, '#6cc94c']]),
      roughness: 0.5,
      side: dbl,
    }),
    flap: new THREE.MeshStandardMaterial({
      map: leafTex([[0, '#f0308a'], [0.4, '#ec3d92'], [0.75, '#a8c84a'], [1, '#5cae3a']], 'rgba(255,220,230,0.4)'),
      roughness: 0.45,
      emissive: new THREE.Color('#ff2a00'),
      emissiveIntensity: 0.15,
      side: dbl,
    }),
    shard: new THREE.MeshPhysicalMaterial({
      color: '#c8f0ff',
      roughness: 0.06,
      clearcoat: 1,
      emissive: new THREE.Color('#5ad0ff'),
      emissiveIntensity: 0.55,
      side: dbl,
    }),
    goldMetal: new THREE.MeshStandardMaterial({
      color: '#ffcf40',
      metalness: 1,
      roughness: 0.25,
      emissive: new THREE.Color('#ffb000'),
      emissiveIntensity: 0.3,
      side: dbl,
    }),
  };
  return shared;
}

function topOf(shape) {
  const v = new THREE.Vector3();
  shape(0, 0, v);
  return v;
}

/** 各水果的附件：[{geo, mat}] */
function partsFor(type, shape) {
  const M = sharedMats();
  const top = topOf(shape);
  switch (type) {
    case 'apple':
    case 'golden': {
      const gold = type === 'golden';
      const stem = taperedTube(
        [[0, top.y - 0.05, 0], [0.005, top.y + 0.16, 0], [0.05, top.y + 0.34, 0]],
        0.05,
        0.032,
        8,
        7,
      );
      const leaf = xform(leafGeo({ len: 0.62, width: 0.22, droop: 0.16, fold: 0.4 }), {
        p: [0.03, top.y + 0.2, 0],
        r: [0, 0.4, 0.5],
      });
      return [
        { geo: stem, mat: gold ? M.goldMetal : M.stem },
        { geo: leaf, mat: gold ? M.goldMetal : M.leaf },
      ];
    }
    case 'orange':
      return [
        { geo: taperedTube([[0, top.y - 0.03, 0], [0, top.y + 0.05, 0], [0.01, top.y + 0.1, 0]], 0.05, 0.04, 4, 8), mat: M.stemGreen },
        { geo: calyxGeo(top, 0.36, 6, false), mat: M.calyx },
      ];
    case 'kiwi':
      return [{ geo: taperedTube([[0, top.y - 0.03, 0], [0, top.y + 0.07, 0]], 0.05, 0.035, 3, 7), mat: M.stem }];
    case 'watermelon':
      return [
        {
          geo: taperedTube([[0, top.y - 0.04, 0], [0.01, top.y + 0.12, 0], [0.05, top.y + 0.24, 0]], 0.06, 0.04, 6, 8),
          mat: M.stemGreen,
        },
      ];
    case 'peach':
      return [
        { geo: taperedTube([[0, top.y - 0.03, 0], [0.01, top.y + 0.1, 0], [0.04, top.y + 0.2, 0]], 0.04, 0.03, 6, 6), mat: M.stem },
        {
          geo: xform(leafGeo({ len: 0.7, width: 0.16, droop: 0.2, fold: 0.3 }), { p: [0.02, top.y + 0.1, 0], r: [0, 2.3, 0.35] }),
          mat: M.leaf,
        },
      ];
    case 'strawberry':
      return [{ geo: calyxGeo(top, 1, 8, true), mat: M.calyx }];
    case 'pineapple':
      return [{ geo: crownGeo(top.y), mat: M.crown }];
    case 'dragon':
      return [{ geo: flapsGeo(shape, 46), mat: M.flap }];
    case 'pear': {
      const stem = taperedTube([[0, top.y - 0.04, 0], [0.01, top.y + 0.16, 0], [0.07, top.y + 0.34, 0]], 0.05, 0.035, 8, 7);
      const shards = shardsGeo(shape, [
        { th: 0.5, ph: 0.4, r: 0.085, h: 0.42, lx: 0.3 },
        { th: 0.8, ph: 1.7, r: 0.07, h: 0.34, lx: -0.2 },
        { th: 1.1, ph: 3.0, r: 0.1, h: 0.46 },
        { th: 1.5, ph: 4.4, r: 0.09, h: 0.4, lx: 0.2 },
        { th: 1.9, ph: 5.5, r: 0.11, h: 0.5 },
        { th: 2.3, ph: 0.9, r: 0.085, h: 0.36 },
        { th: 2.0, ph: 2.6, r: 0.07, h: 0.3, ly: -0.2 },
        { th: 1.3, ph: 1.0, r: 0.06, h: 0.28 },
      ]);
      return [
        { geo: stem, mat: M.stem },
        { geo: shards, mat: M.shard },
      ];
    }
    default:
      return [];
  }
}

function makeBodyMat(type, skin) {
  const p = MAT[type] || {};
  return new THREE.MeshPhysicalMaterial({
    map: skin.color,
    bumpMap: skin.bump,
    bumpScale: p.bumpScale ?? 1,
    roughness: p.roughness ?? 0.5,
    metalness: p.metalness ?? 0,
    clearcoat: p.clearcoat ?? 0,
    clearcoatRoughness: p.clearcoatRoughness ?? 0.3,
    sheen: p.sheen ?? 0,
    sheenColor: new THREE.Color(p.sheenColor ?? '#ffffff'),
    sheenRoughness: p.sheenRoughness ?? 0.5,
    emissive: new THREE.Color(p.emissive ?? '#000000'),
    emissiveIntensity: p.emissiveIntensity ?? 0,
  });
}

function makeCapMat(type) {
  const tex = makeCap(type, type.length * 7 + type.charCodeAt(0));
  return new THREE.MeshPhysicalMaterial({
    map: tex,
    color: type === 'golden' ? '#b0b0b0' : '#8c8c8c',
    roughness: 0.6,
    clearcoat: 0,
    specularIntensity: 0.28,
    envMapIntensity: 0.35,
    emissive: new THREE.Color('#ffffff'),
    emissiveMap: tex,
    emissiveIntensity: type === 'golden' ? 0.3 : 0.07,
  });
}

/** 构建单个水果资产 */
export function buildAsset(type) {
  const def = FRUIT_DEFS[type];
  const shape = SHAPES[def.shape || type];
  const body = paramBody({ shape, wSeg: def.wSeg || 64, hSeg: def.hSeg || 40 });
  const extras = partsFor(type, shape);

  // 主体包围盒中心 → 整体居中（香蕉等非对称形状）
  body.computeBoundingBox();
  const c = new THREE.Vector3();
  body.boundingBox.getCenter(c);
  const geos = [body, ...extras.map((e) => e.geo)];
  if (c.length() > 0.02) for (const g of geos) g.translate(-c.x, -c.y, -c.z);

  const geometry = assemble(geos);
  const materials = [makeBodyMat(type, makeSkin(type)), ...extras.map((e) => e.mat), makeCapMat(type)];
  const kinds = ['body', ...extras.map(() => 'part'), 'cap'];

  let r2 = 0;
  const p = body.attributes.position.array;
  for (let i = 0; i < p.length; i += 3) r2 = Math.max(r2, p[i] * p[i] + p[i + 1] * p[i + 1] + p[i + 2] * p[i + 2]);

  return {
    type,
    def,
    geometry,
    materials,
    kinds,
    capIndex: materials.length - 1,
    radius: Math.sqrt(r2),
    hit: def.hit,
    bomb: false,
  };
}

/** 炸弹资产（不可切开） */
export function buildBomb() {
  const body = paramBody({ shape: SHAPES.sphere, wSeg: 44, hSeg: 30 });
  const neck = finalize(new THREE.CylinderGeometry(0.2, 0.25, 0.26, 20, 1, false).translate(0, 0.86, 0));
  const ring = finalize(new THREE.TorusGeometry(0.26, 0.05, 10, 26).rotateX(PI / 2).translate(0, 0.99, 0));
  const fuse = taperedTube([[0, 1.0, 0], [0.1, 1.26, 0], [0.28, 1.42, 0], [0.32, 1.7, 0]], 0.045, 0.032, 14, 6);
  const geometry = assemble([body, neck, ring, fuse]);
  const tex = bombTextures();
  const bodyMat = new THREE.MeshPhysicalMaterial({
    map: tex.map,
    emissiveMap: tex.emissive,
    emissive: new THREE.Color('#ff3020'),
    emissiveIntensity: 0.9,
    metalness: 0.75,
    roughness: 0.32,
    clearcoat: 0.6,
    clearcoatRoughness: 0.25,
  });
  const metal = new THREE.MeshStandardMaterial({ color: '#3a3a44', metalness: 0.9, roughness: 0.35 });
  const rope = new THREE.MeshStandardMaterial({ color: '#c9a66b', roughness: 0.9 });
  return {
    type: 'bomb',
    def: { name: '炸弹', score: 0, hit: 0.9, juice: '#ff8a1a' },
    geometry,
    materials: [bodyMat, metal, metal, rope],
    kinds: ['body', 'part', 'part', 'part'],
    capIndex: -1,
    radius: 0.9,
    hit: 0.88,
    bomb: true,
    fuseTip: new THREE.Vector3(0.32, 1.72, 0),
    bodyMat,
  };
}

/** 依次构建所有资产，每个之间让出一帧以便刷新加载进度 */
export async function loadAssets(onProgress) {
  const assets = {};
  const types = Object.keys(FRUIT_DEFS);
  const total = types.length + 1;
  let n = 0;
  for (const t of types) {
    assets[t] = buildAsset(t);
    onProgress?.(++n / total, FRUIT_DEFS[t].name);
    await nextFrame();
  }
  assets.bomb = buildBomb();
  onProgress?.(1, '炸弹');
  return assets;
}
