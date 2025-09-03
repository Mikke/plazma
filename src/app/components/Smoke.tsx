import { useRef, useEffect } from 'react';
import * as THREE from 'three';

let delta = 0;

const SmokeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const clock = new THREE.Clock();
    // Scene setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 1000;
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);


    // scene.background = new THREE.Color("rgb(83, 84, 255)");
    scene.background = new THREE.Color("rgb(89, 22, 139)");
    // scene, (background = null);
    scene.add(camera);

    // Add a cube
    const geometry = new THREE.BoxGeometry(200, 200, 200);
    const material = new THREE.MeshLambertMaterial({
      // color: new THREE.Color("rgb(83, 84, 255)"),
      color: new THREE.Color("rgb(89, 22, 139)"),
      wireframe: false
    });
    const mesh = new THREE.Mesh(geometry, material);
    // scene.add(mesh);

    let cubeSineDriver = 0;
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(-1, 0, 1);
    scene.add(light);

    const textureLoader = new THREE.TextureLoader();
    const smokeTexture = textureLoader.load(
      // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
      "/smoke.png"
    );
    const smokeMaterial = new THREE.MeshLambertMaterial({
      // color: new THREE.Color("rgb(83, 84, 255)"),
      color: new THREE.Color("rgb(89, 22, 139)"),
      map: smokeTexture,
      transparent: true
    });
    const smokeGeo = new THREE.PlaneGeometry(300, 300);
    const smokeParticles = [];

    for (var p = 0; p < 100; p++) {
      var particle = new THREE.Mesh(smokeGeo, smokeMaterial);
      particle.position.set(
        Math.random() * 500 - 250,
        Math.random() * 500 - 250,
        Math.random() * 1000 - 100
      );
      particle.rotation.z = Math.random() * 360;
      scene.add(particle);
      smokeParticles.push(particle);
    }

    mountRef.current.appendChild(renderer.domElement);

    // Animation loop
    const animate = () => {
      delta = clock.getDelta();
      // requestAnimationFrame(animate);
      evolveSmoke();
      render();
      setTimeout(() => requestAnimationFrame(animate), 10)
      // requestAnimationFrame(animate);
    };

    const evolveSmoke = () => {
      var sp = smokeParticles.length;
      while (sp--) {
        smokeParticles[sp].rotation.z += delta * 0.2;
      }
    }

    const render = () => {
      renderer.setClearColor(0xffffff, 0);
      mesh.rotation.x += 0.005;
      mesh.rotation.y += 0.01;
      cubeSineDriver += 0.01;
      mesh.position.z = 100 + Math.sin(cubeSineDriver) * 500;
      renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      // if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      // }
    };
  }, []); // Empty dependency array ensures useEffect runs once on mount

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default SmokeScene;