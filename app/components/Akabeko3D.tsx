"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

function AkabekoModel() {
  const headRef = useRef<THREE.Group>(null);
  const neckRef = useRef<THREE.Group>(null);

  // Smoothly damp the head rotation based on mouse position
  useFrame((state) => {
    if (!headRef.current) return;

    const x = state.pointer.x;
    const y = state.pointer.y;

    // ... (rest of logic same, just skipping to avoid huge replace block if possible, but I will replace the top block)

    const targetRotationX = -y * 0.5; // Look up/down
    const targetRotationY = x * 0.8; // Look left/right

    // Bobbing motion for the head (traditional Akabeko movement)
    const time = state.clock.getElapsedTime();
    const bobbing = Math.sin(time * 5) * 0.05;

    // Smoothly interpolate current rotation to target
    headRef.current.rotation.x = THREE.MathUtils.lerp(
      headRef.current.rotation.x,
      targetRotationX + bobbing,
      0.1
    );
    headRef.current.rotation.y = THREE.MathUtils.lerp(
      headRef.current.rotation.y,
      targetRotationY,
      0.1
    );

    // Also rotate neck slightly
    if (neckRef.current) {
      neckRef.current.rotation.x = THREE.MathUtils.lerp(
        neckRef.current.rotation.x,
        targetRotationX * 0.3,
        0.1
      );
      neckRef.current.rotation.y = THREE.MathUtils.lerp(
        neckRef.current.rotation.y,
        targetRotationY * 0.3,
        0.1
      );
    }
  });

  const redMaterial = new THREE.MeshStandardMaterial({
    color: "#c62828",
    roughness: 0.3,
    metalness: 0.1,
  });
  const whiteMaterial = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    roughness: 0.8,
  });
  const blackMaterial = new THREE.MeshStandardMaterial({
    color: "#1a1a1a",
    roughness: 0.8,
  });

  return (
    <group
      rotation={[0, -Math.PI / 6, 0]} // Slight angle
    >
      {/* Search Body */}
      <mesh
        position={[0, 0, 0]}
        castShadow
        receiveShadow
        material={redMaterial}
      >
        <boxGeometry args={[1.8, 1.2, 1]} />
      </mesh>

      {/* White spots/decorations on body - Simplified as simple geometries for now */}
      <mesh
        position={[0, 0.2, 0.51]}
        material={whiteMaterial}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
      </mesh>
      <mesh
        position={[-0.5, -0.2, 0.51]}
        material={whiteMaterial}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
      </mesh>
      <mesh
        position={[0.5, -0.2, 0.51]}
        material={whiteMaterial}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.6, -0.8, 0.3]} material={redMaterial} castShadow>
        <cylinderGeometry args={[0.15, 0.1, 0.6]} />
      </mesh>
      <mesh position={[0.6, -0.8, 0.3]} material={redMaterial} castShadow>
        <cylinderGeometry args={[0.15, 0.1, 0.6]} />
      </mesh>
      <mesh position={[-0.6, -0.8, -0.3]} material={redMaterial} castShadow>
        <cylinderGeometry args={[0.15, 0.1, 0.6]} />
      </mesh>
      <mesh position={[0.6, -0.8, -0.3]} material={redMaterial} castShadow>
        <cylinderGeometry args={[0.15, 0.1, 0.6]} />
      </mesh>

      {/* Neck Joint */}
      <group ref={neckRef} position={[-0.9, 0.2, 0]}>
        {/* Head Group - Pivots around neck */}
        <group ref={headRef} position={[-0.4, 0.3, 0]}>
          {/* Head Main Box */}
          <mesh material={redMaterial} castShadow>
            <boxGeometry args={[0.8, 0.8, 0.7]} />
          </mesh>

          {/* Snout */}
          <mesh position={[-0.4, -0.2, 0]} material={redMaterial}>
            <boxGeometry args={[0.3, 0.4, 0.5]} />
          </mesh>

          {/* Ears */}
          <mesh
            position={[0, 0.5, 0.3]}
            rotation={[0, 0, -0.2]}
            material={redMaterial}
          >
            <boxGeometry args={[0.2, 0.3, 0.1]} />
          </mesh>
          <mesh
            position={[0, 0.5, -0.3]}
            rotation={[0, 0, -0.2]}
            material={redMaterial}
          >
            <boxGeometry args={[0.2, 0.3, 0.1]} />
          </mesh>

          {/* Eyes */}
          <mesh position={[-0.1, 0.1, 0.36]} material={blackMaterial}>
            <sphereGeometry args={[0.08]} />
          </mesh>
          <mesh position={[-0.1, 0.1, -0.36]} material={blackMaterial}>
            <sphereGeometry args={[0.08]} />
          </mesh>

          {/* White pattern on face */}
          <mesh
            position={[-0.41, 0.1, 0]}
            rotation={[0, Math.PI / 2, 0]}
            material={whiteMaterial}
          >
            <circleGeometry args={[0.15]} />
          </mesh>
        </group>
      </group>

      {/* Tail */}
      <mesh
        position={[0.9, 0.4, 0]}
        rotation={[0, 0, -0.5]}
        material={whiteMaterial}
      >
        <cylinderGeometry args={[0.05, 0.05, 0.4]} />
      </mesh>
    </group>
  );
}

export default function Akabeko3D() {
  return (
    <div className="w-full h-[500px] cursor-move">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
        <Environment preset="city" />
        <ambientLight intensity={0.5} color="#fff8e1" />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          shadow-mapSize={2048}
          castShadow
          intensity={1}
          color="#ffecb3"
        />

        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <AkabekoModel />
        </Float>

        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.4}
          scale={10}
          blur={2.5}
          far={4}
          color="#8d6e63"
        />
      </Canvas>
    </div>
  );
}
