import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export const F1CarScene = () => {
  let mixer;

  let model;

  const clock = new THREE.Clock();

  const container = document.getElementById('container');

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

  renderer.setSize(container?.offsetWidth, container?.offsetHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;
  container.appendChild(renderer.domElement);

  const pmremGenerator = new THREE.PMREMGenerator(renderer);

  const scene = new THREE.Scene();

  scene.environment = pmremGenerator.fromScene(
    new RoomEnvironment(),
    0.04
  ).texture;

  const camera = new THREE.PerspectiveCamera(
    40,
    container.offsetWidth / container.offsetHeight,
    1,
    100
  );
  camera.position.set(5, 4, 7);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0.5, 0);
  controls.update();
  controls.enablePan = false;
  controls.enableDamping = true;

  const dracoLoader = new DRACOLoader();

  dracoLoader.setDecoderPath('jsm/libs/draco/gltf/');

  const loader = new GLTFLoader();

  const scaleFactor = (input, limit = false) => {
    const scale = input / 1000;
    if (limit && scale > 1) {
      return 1;
    }
    return scale;
  };

  loader.setDRACOLoader(dracoLoader);
  loader.load(
    '/3d/f1_2022_generic_free.glb',
    (gltf) => {
      model = gltf.scene;

      const scale = scaleFactor(container.offsetWidth, true);

      model.scale.set(scale, scale, scale);

      scene.add(model);

      mixer = new THREE.AnimationMixer(model);

      animate();
    },
    undefined,
    function (e) {
      console.error(e);
    }
  );

  window.onresize = function () {
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();

    const scale = scaleFactor(container.offsetWidth, true);
    model.scale.set(scale, scale, scale);

    renderer.setSize(container.offsetWidth, container.offsetHeight);
  };

  function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();

    mixer.update(delta);

    controls.update();

    model.rotation.y += 0.001;

    renderer.render(scene, camera);
  }
};
