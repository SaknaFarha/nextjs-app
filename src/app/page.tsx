"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextAction = () => {
    router.push("/animationPage");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: "url(/Public.jpg)" }}
    >
      <button
        onClick={openModal}
        className="px-4 py-2 bg-white text-black rounded hover:bg-gray-300"
        style={{
          fontFamily: "Arial",
          fontSize: "15px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.9)",
        }}
      >
        <b>CLICK HERE</b>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-md sm:w-full">
            <div className="p-4 relative">
              <button
                onClick={closeModal}
                className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-800"
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4">Hello,</h2>
              <h4 className="mb-4">Get Started Now!</h4>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 mx-auto block"
              >
                close
              </button>
            </div>
          </div>
        </div>
      )}

      {!isModalOpen && (
        <button
          onClick={nextAction}
          className="fixed bottom-0 right-0 mb-4 mr-4 px-2 py-1 bg-white text-black text-sm rounded hover:bg-gray-700"
        >
          next
        </button>
      )}
    </div>
  );
};

export default HomePage;

//animation
// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const CreativePage: React.FC = () => {
//   const mountRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const mount = mountRef.current!;
//     const width = mount.clientWidth;
//     const height = mount.clientHeight;

//     const scene = new THREE.Scene();

//     // Create the camera
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     camera.position.z = 5;

//     // Create the renderer
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(width, height);
//     mount.appendChild(renderer.domElement);

//     // Create cubes
//     const geometry = new THREE.BoxGeometry();
//     const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
//     const cubes = [];

//     for (let i = 0; i < 10; i++) {
//       const cube = new THREE.Mesh(geometry, material);
//       cube.position.set(
//         (Math.random() - 0.5) * 10,
//         (Math.random() - 0.5) * 10,
//         (Math.random() - 0.5) * 10
//       );
//       scene.add(cube);
//       cubes.push(cube);
//     }

//     // Create particles
//     const particlesGeometry = new THREE.BufferGeometry();
//     const particlesMaterial = new THREE.PointsMaterial({
//       color: 0xffffff,
//       size: 0.02,
//     });

//     const particlesCount = 5000;
//     const positions = new Float32Array(particlesCount * 3);

//     for (let i = 0; i < particlesCount; i++) {
//       positions[i * 3] = (Math.random() - 0.5) * 20;
//       positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
//       positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
//     }

//     particlesGeometry.setAttribute(
//       'position',
//       new THREE.BufferAttribute(positions, 3)
//     );

//     const particles = new THREE.Points(particlesGeometry, particlesMaterial);
//     scene.add(particles);

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);

//       cubes.forEach((cube) => {
//         cube.rotation.x += 0.01;
//         cube.rotation.y += 0.01;
//       });

//       particles.rotation.y += 0.001;

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle window resize
//     const handleResize = () => {
//       const width = mount.clientWidth;
//       const height = mount.clientHeight;

//       renderer.setSize(width, height);
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       mount.removeChild(renderer.domElement);
//     };
//   }, []);

//   return (
//     <div
//       ref={mountRef}
//       style={{ width: '100%', height: '100vh', overflow: 'hidden' }}
//     />
//   );
// };

// export default CreativePage;
