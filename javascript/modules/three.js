import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const camera = new THREE.PerspectiveCamera(75, 300 / 200, 0.1, 1000);

/**
 * 
 * @param {Element} parent 
 * @param {string} aoeType 
 * @param {number} range 
 * @param {number} size 
 */
function threeCreateAoeView(parent, screenWidth, aoeType, range, size) {
  const canvas = createElement("canvas", "", parent);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x3399ff);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(screenWidth, screenWidth * 2 / 3);
  camera.position.setY(100);

  const rangeGeometry = new THREE.SphereGeometry(range, range * 3, range * 3, 0, Math.PI * 2, 0, Math.PI / 2);
  const rangeMaterial = new THREE.MeshStandardMaterial({ color: 0x45e3ff, transparent: true, opacity: 0.2 });
  const rangeSphere = new THREE.Mesh(rangeGeometry, rangeMaterial);

  const groundTexture = new THREE.TextureLoader().load('Images/ThreeJS/Circle.png')
  const groundGeometry = new THREE.CircleGeometry(range, range * 3);
  const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x45e3ff, transparent: true, opacity: 1, map: groundTexture });

  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotateX(3 * Math.PI / 2);
  ground.translateZ(0.1);

  switch (aoeType) {
    case "Full":
      // Full
      let fullAoeGeometry = new THREE.CircleGeometry(range, range * 3, 0, 3 * Math.PI);
      let fullAoeMaterial = new THREE.MeshStandardMaterial({ color: 0x45e3ff });

      let fullAoe = new THREE.Mesh(fullAoeGeometry, fullAoeMaterial);
      fullAoe.rotateX(3 * Math.PI / 2);
      fullAoe.translateZ(0.5);

      scene.add(fullAoe)

      break;
    case "Cone":
      // Cone
      let sizeInRadians = size * Math.PI / 180

      let coneAoeGeometry = new THREE.CircleGeometry(range, range * 3, Math.PI / 2 - sizeInRadians / 2, sizeInRadians);
      let coneAoeMaterial = new THREE.MeshStandardMaterial({ color: 0x45e3ff });

      let coneAoe = new THREE.Mesh(coneAoeGeometry, coneAoeMaterial);
      coneAoe.rotateX(3 * Math.PI / 2);
      coneAoe.translateZ(0.5);

      scene.add(coneAoe)

      break;
    case "Circle":
      // Circle
      let circleAoeGeometry = new THREE.CircleGeometry(size, size * 2);
      let circleAoeMaterial = new THREE.MeshStandardMaterial({ color: 0x45e3ff });

      let circleAoe = new THREE.Mesh(circleAoeGeometry, circleAoeMaterial);
      circleAoe.rotateX(3 * Math.PI / 2);
      circleAoe.translateZ(0.5);
      circleAoe.translateY(range)

      scene.add(circleAoe)

      break;
    case "Line":
      // Line
      let lineAoeGeometry = new THREE.PlaneGeometry(size * 2, range);
      let lineAoeMaterial = new THREE.MeshStandardMaterial({ color: 0x45e3ff });

      let lineAoe = new THREE.Mesh(lineAoeGeometry, lineAoeMaterial);
      lineAoe.rotateX(3 * Math.PI / 2);
      lineAoe.translateZ(0.5);
      lineAoe.translateY(range / 2)

      scene.add(lineAoe)

      break;
    case "Stadium":
      // Stadium
      let stadiumCircleAoeGeometry = new THREE.CircleGeometry(size, size * 2);
      let stadiumCircleAoeMaterial = new THREE.MeshStandardMaterial({ color: 0x45e3ff });

      let stadiumCircleAoe1 = new THREE.Mesh(stadiumCircleAoeGeometry, stadiumCircleAoeMaterial);
      stadiumCircleAoe1.rotateX(3 * Math.PI / 2);
      stadiumCircleAoe1.translateZ(0.5);
      stadiumCircleAoe1.translateY(range)

      let stadiumCircleAoe2 = new THREE.Mesh(stadiumCircleAoeGeometry, stadiumCircleAoeMaterial);
      stadiumCircleAoe2.rotateX(3 * Math.PI / 2);
      stadiumCircleAoe2.translateZ(0.5);

      let stadiumLineAoeGeometry = new THREE.PlaneGeometry(size * 2, range);
      let stadiumLineAoeMaterial = new THREE.MeshStandardMaterial({ color: 0x45e3ff });

      let stadiumLineAoe = new THREE.Mesh(stadiumLineAoeGeometry, stadiumLineAoeMaterial);
      stadiumLineAoe.rotateX(3 * Math.PI / 2);
      stadiumLineAoe.translateZ(0.5);
      stadiumLineAoe.translateY(range / 2)

      scene.add(stadiumCircleAoe1, stadiumCircleAoe2, stadiumLineAoe)

      break;
    case "Splash":
      // Splash
      let SplashCircleAoeGeometry = new THREE.CircleGeometry(size[0], size[0] * 2);
      let splashCircleAoeMaterial = new THREE.MeshStandardMaterial({ color: 0x45e3ff });

      let splashCircleAoe = new THREE.Mesh(SplashCircleAoeGeometry, splashCircleAoeMaterial);
      splashCircleAoe.rotateX(3 * Math.PI / 2);
      splashCircleAoe.translateZ(0.5);
      splashCircleAoe.translateY(range)

      let splashSizeInRadians = size[1] * Math.PI / 180

      let splashConeAoeGeometry = new THREE.CircleGeometry(range, range * 3, Math.PI / 2 - splashSizeInRadians / 2, splashSizeInRadians);
      let splashConeAoeMaterial = new THREE.MeshStandardMaterial({ color: 0x45e3ff });

      let splashConeAoe = new THREE.Mesh(splashConeAoeGeometry, splashConeAoeMaterial);
      splashConeAoe.rotateX(3 * Math.PI / 2);
      splashConeAoe.translateZ(0.5);
      splashConeAoe.translateY(range)

      scene.add(splashCircleAoe, splashConeAoe)

      break;
  }

  scene.add(rangeSphere, ground)

  const pointLight = new THREE.PointLight(0xffffff, 20, 200, 0.2);
  pointLight.position.set(10, 50, 10)

  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(pointLight, ambientLight)

  const gridHelper = new THREE.GridHelper(200, 25, new THREE.Color(0xffffff), new THREE.Color(0xaaaaaa))
  scene.add(gridHelper)

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false

  let animationId;
  let isRunning = true;

  // Function to clean up all Three.js resources
  function cleanup() {
    isRunning = false;
    cancelAnimationFrame(animationId);

    // Dispose of controls
    controls.dispose();

    // Dispose of all geometries
    scene.traverse((object) => {
      if (object.geometry) {
        object.geometry.dispose();
      }
      if (object.material) {
        // Handle both single materials and material arrays
        if (Array.isArray(object.material)) {
          object.material.forEach(material => {
            if (material.map) material.map.dispose();
            material.dispose();
          });
        } else {
          if (object.material.map) object.material.map.dispose();
          object.material.dispose();
        }
      }
    });

    // Dispose of renderer
    renderer.dispose();
    renderer.forceContextLoss();

    // Clear the scene
    while (scene.children.length > 0) {
      scene.remove(scene.children[0]);
    }
  }

  function animate() {
    // Stop animation if canvas is no longer in the DOM
    if (!document.body.contains(canvas)) {
      cleanup();
      return;
    }

    if (isRunning) {
      animationId = requestAnimationFrame(animate);

      controls.update();
      ground.rotation.z += 0.005

      renderer.render(scene, camera);
    }
  }

  animate()
}

// Make function globally available for non-module scripts
window.threeCreateAoeView = threeCreateAoeView;
