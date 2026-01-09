"use client";

import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// ローディング画面用の赤べこモデル
function LoadingAkabekoModel(props: ThreeElements["group"]) {
  const headRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (headRef.current) {
      // マウス追従
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

      // 首振りアニメーション
      headRef.current.position.y =
        0.6 + Math.sin(state.clock.elapsedTime * 8) * 0.05;
    }
  });

  return (
    <group {...props}>
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

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // ロード進捗のシミュレーション
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // 進捗をランダムに増加
        const increment = Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    // ページロード完了を検知
    const handleLoad = () => {
      setProgress(100);
      clearInterval(interval);
    };

    if (document.readyState === "complete") {
      // すでにロード完了している場合は少し待ってから100%に
      setTimeout(() => setProgress(100), 800);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // 100%になったらフェードアウト
  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
        // フェードアウト完了後に非表示
        setTimeout(() => setIsVisible(false), 600);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#fffaf0] transition-opacity duration-500 ${
        isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* 3D赤べこ */}
      <div className="w-full h-[40vh] md:h-[50vh]">
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
            <LoadingAkabekoModel rotation={[0, Math.PI / 4, 0]} />
          </Float>
        </Canvas>
      </div>

      {/* ロード進捗表示 */}
      <div className="flex flex-col items-center gap-4 mt-4">
        {/* パーセンテージ */}
        <div className="text-4xl md:text-5xl font-bold text-[#FF1010]">
          {Math.round(progress)}%
        </div>

        {/* プログレスバー */}
        <div className="w-64 md:w-80 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#FF1010] rounded-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* ローディングテキスト */}
        <p className="text-gray-500 text-sm">Loading...</p>
      </div>
    </div>
  );
}
