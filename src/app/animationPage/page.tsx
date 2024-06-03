"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Animation: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current!;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();

    // Create the camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Create the renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    // Create cubes
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
    const cubes: THREE.Mesh[] = [];

    for (let i = 0; i < 10; i++) {
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      scene.add(cube);
      cubes.push(cube);
    }

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,
    });

    const particlesCount = 5000;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      cubes.forEach((cube) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      });

      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <div
        ref={mountRef}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0)",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <b>
          <h1
            style={{
              fontSize: "20px",
              color: "#6495ED",
              fontFamily: "Arial, sans-serif",
            }}
          >
            ANIMATE YOUR{" "}
            <span style={{ color: "white" }}> IMAGINATION WITH CUBES !!</span>
          </h1>
        </b>
        <br />

        <h6 style={{ color: "white" }}>
          Immerse yourself in the wonder of <br />
          animated cubes, where fantasy meets <br />
          reality and dreams take flight on the <br />
          wings of imagination.
        </h6>
      </div>
    </div>
  );
};

export default Animation;
