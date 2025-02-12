import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import SimplexNoise from "simplex-noise";

const useWaterWave = () => {
  const mountRef = useRef(null);
  const height = 752;

  useEffect(() => {
    const windowWidth = window.innerWidth;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      40,
      windowWidth / height,
      1,
      10000
    );
    camera.position.set(100, 100, 100);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(windowWidth, height);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const light1 = new THREE.PointLight(0x555555, 1, 0);
    const light2 = new THREE.PointLight(0x555555, 3, 0);
    const light3 = new THREE.PointLight(0x555555, 1, 0);
    light1.position.set(0, 200, 0);
    light2.position.set(100, 200, 100);
    light3.position.set(-100, -200, -100);
    scene.add(light1);
    scene.add(light2);
    scene.add(light3);

    // Geometry
    const geometry = new THREE.PlaneGeometry(4000, 2000, 400, 200);
    const material = new THREE.MeshLambertMaterial({
      color: 0x555555,
      opacity: 0.65,
      blending: THREE.NormalBlending,
      side: THREE.FrontSide,
      transparent: false,
      depthTest: false,
      wireframe: true,
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

    const simplex = new SimplexNoise();
    const clock = new THREE.Clock();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime() * 0.1;

      // Update vertices
      for (let i = 0; i < geometry.vertices.length; i++) {
        const vertex = geometry.vertices[i];
        vertex.z = simplex.noise2D(vertex.x / 100 + time, vertex.y / 100) * 15;
      }
      geometry.verticesNeedUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / height;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, height);
    };
    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
      // mountRef.current.removeChild(renderer.domElement);
      scene.dispose();
      renderer.dispose();
    };
  }, []);

  return mountRef;
};

const WaterWave = () => {
  const mountRef = useWaterWave();
  return (
    <div className="flex justify-center -mt-[30rem]">
      <div ref={mountRef} />
    </div>
  );
};

export default WaterWave;
