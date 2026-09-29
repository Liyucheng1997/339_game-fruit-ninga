// 用真实 3D 模型离屏渲染 HUD 图标（独立 WebGL 上下文，渲染完即释放）
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export function renderIcons(assets, size = 128) {
  const icons = {};
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  } catch {
    return icons;
  }
  renderer.setPixelRatio(1);
  renderer.setSize(size, size, false);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.95;
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.5;
  const key = new THREE.DirectionalLight('#fff0dc', 2.0);
  key.position.set(-3, 5, 8);
  scene.add(key);
  const fill = new THREE.DirectionalLight('#9bb8ff', 0.6);
  fill.position.set(6, 0, 5);
  scene.add(fill);
  scene.add(new THREE.HemisphereLight('#ffffff', '#553322', 0.35));

  const cam = new THREE.PerspectiveCamera(28, 1, 0.1, 50);
  cam.position.set(0, 0, 9);
  cam.lookAt(0, 0, 0);

  for (const [type, a] of Object.entries(assets)) {
    const mesh = new THREE.Mesh(a.geometry, a.materials);
    // 取景修正：香蕉很长(半径大)但很细；菠萝/火龙果带有向外伸展的叶
    const fit = { banana: 0.7, pineapple: 1.45, dragon: 1.15, pear: 1.2, strawberry: 1.1 }[type] ?? 1;
    const r = (a.radius || 1) * fit;
    mesh.scale.setScalar(1.55 / r);
    mesh.rotation.set(0.25, -0.55, type === 'banana' ? 0.5 : 0.05);
    if (a.bomb) mesh.position.y = -0.25;
    scene.add(mesh);
    renderer.render(scene, cam);
    icons[type] = renderer.domElement.toDataURL('image/png');
    scene.remove(mesh);
  }
  pmrem.dispose();
  renderer.dispose();
  renderer.forceContextLoss?.();
  return icons;
}
