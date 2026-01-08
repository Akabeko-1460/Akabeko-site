"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useCursor, ContactShadows, Float } from "@react-three/drei";
import * as THREE from "three";

function AkabekoModel(props: JSX.IntrinsicElements["group"]) {
  const headRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);

  useCursor(hovered);

  useFrame((state) => {
    if (headRef.current) {
      // Smoothly make the head look at the mouse position
      const targetX = (state.pointer.x * Math.PI) / 4;
      const targetY = (state.pointer.y * Math.PI) / 4;

      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        targetX,
        0.1
      );
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        -targetY,
        0.1
      );

      // Bobble effect
      headRef.current.position.y =
        0.6 + Math.sin(state.clock.elapsedTime * 8) * 0.05;
    }
  });

  return (
    <group
      {...props}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {/* Body */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.8, 1, 1]} />
        <meshStandardMaterial color="#FF1010" />
      </mesh>

      {/* White spots on body */}
      <mesh position={[0.5, 0.51, 0.3]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.15, 32]} />
        <meshBasicMaterial color="white" />
      </mesh>
      <mesh position={[-0.5, 0.51, -0.3]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.15, 32]} />
        <meshBasicMaterial color="white" />
      </mesh>

      {/* Neck Connector */}
      <mesh position={[-1, 0.3, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.6]} />
        <meshStandardMaterial color="#a30000" />
      </mesh>

      {/* Head Group (Animated) */}
      <group ref={headRef} position={[-1.3, 0.6, 0]}>
        {/* Face */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.8, 0.7, 0.7]} />
          <meshStandardMaterial color="#FF1010" />
        </mesh>

        {/* Nose/Snout */}
        <mesh position={[-0.45, -0.1, 0]}>
          <boxGeometry args={[0.2, 0.3, 0.4]} />
          <meshStandardMaterial color="#FF1010" />
        </mesh>

        {/* Eyes (Black) */}
        <mesh position={[-0.41, 0.1, 0.25]}>
          <circleGeometry args={[0.05]} />
          <meshBasicMaterial color="black" />
        </mesh>
        <mesh position={[-0.41, 0.1, -0.25]}>
          <circleGeometry args={[0.05]} />
          <meshBasicMaterial color="black" />
        </mesh>

        {/* Eyes (White) */}
        <mesh position={[-0.41, 0.12, 0.27]}>
          <circleGeometry args={[0.02]} />
          <meshBasicMaterial color="white" />
        </mesh>
        <mesh position={[-0.41, 0.12, -0.23]}>
          <circleGeometry args={[0.02]} />
          <meshBasicMaterial color="white" />
        </mesh>

        {/* Ears */}
        <mesh position={[0.1, 0.4, 0.25]} rotation={[0, 0, -0.2]}>
          <boxGeometry args={[0.2, 0.3, 0.1]} />
          <meshStandardMaterial color="#FF1010" />
        </mesh>
        <mesh position={[0.1, 0.4, -0.25]} rotation={[0, 0, -0.2]}>
          <boxGeometry args={[0.2, 0.3, 0.1]} />
          <meshStandardMaterial color="#FF1010" />
        </mesh>
      </group>

      {/* Legs */}
      <mesh position={[-0.6, -0.7, 0.3]}>
        <cylinderGeometry args={[0.15, 0.15, 0.6]} />
        <meshStandardMaterial color="#FF1010" />
      </mesh>
      <mesh position={[-0.6, -0.7, -0.3]}>
        <cylinderGeometry args={[0.15, 0.15, 0.6]} />
        <meshStandardMaterial color="#FF1010" />
      </mesh>
      <mesh position={[0.6, -0.7, 0.3]}>
        <cylinderGeometry args={[0.15, 0.15, 0.6]} />
        <meshStandardMaterial color="#FF1010" />
      </mesh>
      <mesh position={[0.6, -0.7, -0.3]}>
        <cylinderGeometry args={[0.15, 0.15, 0.6]} />
        <meshStandardMaterial color="#FF1010" />
      </mesh>
    </group>
  );
}

export default function Akabeko3D() {
  return (
    <div className="w-full h-[50vh] md:h-[60vh] cursor-pointer">
      <Canvas shadows camera={{ position: [0, 2, 6], fov: 45 }}>
        <color attach="background" args={["#fffaf0"]} />

        <ambientLight intensity={0.7} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <AkabekoModel rotation={[0, Math.PI / 4, 0]} />
        </Float>

        <ContactShadows
          position={[0, -1.4, 0]}
          opacity={0.4}
          scale={10}
          blur={2.5}
          far={4}
        />
        {/* <Environment preset="city" /> */}
      </Canvas>
    </div>
  );
}
