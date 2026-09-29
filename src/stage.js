// 舞台：渲染器 / 相机 / 灯光 / 后期(泛光+调色) / 背景 / 坐标换算
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { makeWallTexture, makeLantern, Petals, SplatLayer } from './fx/background.js';
import { damp } from './util/math.js';

const FOV = 30;
const MIN_VISIBLE_W = 12.6; // 世界单位：保证竖屏也能看到足够宽的场地
const WALL_Z = -5;
const SPLAT_Z = -4.96;

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uSat: { value: 1 },
    uTint: { value: new THREE.Vector3(1, 1, 1) },
    uVig: { value: 0.5 },
    uAber: { value: 0 },
    uFlash: { value: 0 },
    uFlashColor: { value: new THREE.Vector3(1, 1, 1) },
    uFocus: { value: 0 },
    uTime: { value: 0 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uSat, uVig, uAber, uFlash, uFocus, uTime;
    uniform vec3 uTint, uFlashColor;
    varying vec2 vUv;
    void main() {
      vec2 d = vUv - 0.5;
      float ab = uAber * (0.4 + length(d));
      vec3 col;
      col.r = texture2D(tDiffuse, vUv + d * ab).r;
      col.g = texture2D(tDiffuse, vUv).g;
      col.b = texture2D(tDiffuse, vUv - d * ab).b;
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, uSat);
      col *= uTint;
      float r = length(d * vec2(1.0, 0.85));
      float v = smoothstep(0.95, 0.22, r);
      col *= mix(1.0, v, uVig + uFocus * 0.5);
      // 心眼：边缘的放射光线
      float ang = atan(d.y, d.x);
      float rays = smoothstep(0.55, 1.0, sin(ang * 26.0 + uTime * 0.6) * 0.5 + 0.5) * smoothstep(0.25, 0.75, r);
      col += vec3(0.5, 0.75, 1.0) * rays * uFocus * 0.10;
      col += uFlashColor * uFlash;
      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

export class Stage {
  constructor(canvas) {
    this.canvas = canvas;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
    this.renderer = renderer;
    this.pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(this.pixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.95;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#1a110c');
    this.camera = new THREE.PerspectiveCamera(FOV, 1, 1, 200);
    this.camDist = 30;
    this.camera.position.set(0, 0, this.camDist);
    this.camera.lookAt(0, 0, 0);

    // 环境反射
    const pmrem = new THREE.PMREMGenerator(renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environmentIntensity = 0.42;
    pmrem.dispose();

    this.buildLights();
    this.buildBackdrop();

    this.world = new THREE.Group(); // 水果等实体
    this.fx = new THREE.Group(); // 特效
    this.scene.add(this.world, this.fx);

    // 后期
    const size = renderer.getSize(new THREE.Vector2());
    const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: 4 });
    this.composer = new EffectComposer(renderer, rt);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.38, 0.6, 1.1);
    this.composer.addPass(this.bloom);
    this.grade = new ShaderPass(GradeShader);
    this.composer.addPass(this.grade);
    this.composer.addPass(new OutputPass());

    this.time = 0;
    this.shakeAmt = 0;
    this.flash = 0;
    this.aber = 0;
    this.bounds = { left: -8, right: 8, top: 4.5, bottom: -4.5, width: 16, height: 9 };
    this.gradeTarget = { sat: 1, tint: [1, 1, 1], vig: 0.5, focus: 0 };
    this.width = window.innerWidth || 1280;
    this.height = window.innerHeight || 720;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  buildLights() {
    const s = this.scene;
    const key = new THREE.DirectionalLight('#fff0dc', 2.0);
    key.position.set(-2.6, 4.2, 14);
    key.target.position.set(0, 0, 0);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.bias = -0.0004;
    key.shadow.normalBias = 0.03;
    key.shadow.radius = 4;
    s.add(key, key.target);
    this.key = key;

    const fill = new THREE.DirectionalLight('#8fb4ff', 0.55);
    fill.position.set(9, 1, 9);
    s.add(fill);

    const rim = new THREE.DirectionalLight('#ffb070', 1.1);
    rim.position.set(2, 6, -10);
    s.add(rim);

    s.add(new THREE.HemisphereLight('#ffffff', '#4a3324', 0.3));
  }

  buildBackdrop() {
    const wallTex = makeWallTexture();
    this.wall = new THREE.Mesh(
      new THREE.PlaneGeometry(80, 40),
      new THREE.MeshStandardMaterial({ map: wallTex, roughness: 0.88, metalness: 0 }),
    );
    this.wall.position.z = WALL_Z;
    this.wall.receiveShadow = true;
    this.scene.add(this.wall);

    this.splats = new SplatLayer();
    this.splats.mesh.position.z = SPLAT_Z;
    this.scene.add(this.splats.mesh);

    this.lanterns = [makeLantern(), makeLantern()];
    this.lanterns.forEach((l) => {
      l.position.z = -2.4;
      this.scene.add(l);
    });

    this.petals = new Petals(46);
    this.scene.add(this.petals.mesh);
  }

  /** 相对相机的可见范围（世界单位） */
  resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    if (!(w > 0 && h > 0)) return; // 窗口被最小化/尚未布局时忽略
    this.width = w;
    this.height = h;
    const aspect = w / h;
    // 竖屏：拉远相机以保证最小可见宽度
    const tan = Math.tan((FOV * Math.PI) / 360);
    this.camDist = Math.max(30, MIN_VISIBLE_W / (2 * tan * aspect));
    this.camera.aspect = aspect;
    this.camera.position.z = this.camDist;
    this.camera.updateProjectionMatrix();
    this.camera.updateMatrixWorld(true);
    this.renderer.setPixelRatio(this.pixelRatio);
    this.renderer.setSize(w, h, false);
    this.composer.setPixelRatio(this.pixelRatio);
    this.composer.setSize(w, h);

    const H = 2 * this.camDist * tan;
    const W = H * aspect;
    this.bounds = { left: -W / 2, right: W / 2, top: H / 2, bottom: -H / 2, width: W, height: H };

    // 背景元素匹配视锥
    const dWall = this.camDist - WALL_Z;
    const scale = dWall / this.camDist;
    this.wall.scale.set(Math.max(1, (W * scale) / 60), Math.max(1, (H * scale) / 30), 1);
    const dSplat = this.camDist - SPLAT_Z;
    this.splats.mesh.scale.set(W * (dSplat / this.camDist), H * (dSplat / this.camDist), 1);
    this.splats.resize(aspect);

    const sx = this.bounds.width / 2 - 4.8;
    this.lanterns[0].position.set(-sx, this.bounds.top + 0.2, -2.4);
    this.lanterns[1].position.set(sx, this.bounds.top + 0.2, -2.4);
    this.lanterns.forEach((l) => (l.visible = aspect > 1.3 && w > 900));

    this.petals.bounds = { left: this.bounds.left, right: this.bounds.right, top: this.bounds.top, bottom: this.bounds.bottom };
    this.petals.reset();

    const sh = this.key.shadow.camera;
    sh.left = -W / 2 - 3;
    sh.right = W / 2 + 3;
    sh.top = H / 2 + 3;
    sh.bottom = -H / 2 - 3;
    sh.near = 1;
    sh.far = 60;
    sh.updateProjectionMatrix();
  }

  /** 世界坐标 → CSS 像素 */
  project(x, y, z = 0, out = { x: 0, y: 0 }) {
    const v = _v.set(x, y, z).project(this.camera);
    out.x = (v.x * 0.5 + 0.5) * this.width;
    out.y = (-v.y * 0.5 + 0.5) * this.height;
    return out;
  }

  /** CSS 像素 → z=0 平面世界坐标 */
  screenToWorld(px, py, out = { x: 0, y: 0 }) {
    const b = this.bounds;
    out.x = (px / this.width - 0.5) * b.width;
    out.y = (0.5 - py / this.height) * b.height;
    return out;
  }

  /** 世界 (x,y) → 溅射层归一化坐标 */
  splat(x, y, color, size, angle) {
    const b = this.bounds;
    this.splats.splat(x / b.width + 0.5, 0.5 - y / b.height, color, size, angle);
  }

  shake(a) {
    this.shakeAmt = Math.max(this.shakeAmt, a);
  }

  setFlash(v, color = [1, 1, 1]) {
    this.flash = Math.max(this.flash, v);
    this.grade.uniforms.uFlashColor.value.set(color[0], color[1], color[2]);
  }

  kick(aberr) {
    this.aber = Math.max(this.aber, aberr);
  }

  /** 设定调色目标（心眼/冰封/黄金等状态） */
  setGrade(g) {
    Object.assign(this.gradeTarget, g);
  }

  setQuality(q) {
    if (q === 'low') {
      this.key.castShadow = false;
      this.bloom.enabled = false;
      this.pixelRatio = 1;
    }
    this.resize();
  }

  /** 帧率不足时逐级降低画质（分辨率 → 阴影 → 泛光 → 再降分辨率），返回是否还有可降的档位 */
  degrade() {
    const steps = [
      () => this.pixelRatio > 1 && ((this.pixelRatio = Math.max(1, this.pixelRatio - 0.5)), true),
      () => this.key.castShadow && ((this.key.castShadow = false), true),
      () => this.bloom.enabled && ((this.bloom.enabled = false), true),
      () => this.pixelRatio > 0.75 && ((this.pixelRatio = Math.max(0.75, this.pixelRatio * 0.85)), true),
    ];
    for (const s of steps) {
      if (s()) {
        this.resize();
        return true;
      }
    }
    return false;
  }

  render(dt) {
    this.update(dt);
    this.composer.render(dt);
  }

  /** 推进舞台自身的动画（灯笼/花瓣/震动/闪光/调色），不绘制 */
  update(dt) {
    this.time += dt;
    const t = this.time;
    // 灯笼摇摆
    for (const l of this.lanterns) {
      const p = l.userData.phase;
      l.rotation.z = Math.sin(t * 0.9 + p) * 0.07;
      l.userData.mesh.material.emissiveIntensity = 1.15 + 0.15 * Math.sin(t * 3.1 + p * 2);
    }
    this.petals.update(dt, t);
    this.splats.update(dt);

    // 相机震动
    this.shakeAmt = damp(this.shakeAmt, 0, 9, dt);
    const sa = this.shakeAmt;
    this.camera.position.x = sa > 0.001 ? (Math.random() - 0.5) * sa : 0;
    this.camera.position.y = sa > 0.001 ? (Math.random() - 0.5) * sa : 0;
    this.camera.updateMatrixWorld(true);

    // 调色平滑
    const u = this.grade.uniforms;
    const g = this.gradeTarget;
    u.uSat.value = damp(u.uSat.value, g.sat, 6, dt);
    u.uVig.value = damp(u.uVig.value, g.vig, 6, dt);
    u.uFocus.value = damp(u.uFocus.value, g.focus, 8, dt);
    for (let i = 0; i < 3; i++) u.uTint.value.setComponent(i, damp(u.uTint.value.getComponent(i), g.tint[i], 6, dt));
    this.flash = damp(this.flash, 0, 10, dt);
    this.aber = damp(this.aber, 0, 8, dt);
    u.uFlash.value = this.flash;
    u.uAber.value = this.aber;
    u.uTime.value = t;
  }
}

const _v = new THREE.Vector3();
