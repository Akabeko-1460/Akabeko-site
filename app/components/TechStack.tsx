"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiDjango,
  SiUnity,
  SiBlender,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import Image from "next/image";

// Vercelロゴコンポーネント（黒い丸背景に白三角形）
const VercelLogo = ({ className }: { className?: string }) => (
  <div
    className={`relative flex items-center justify-center rounded-full bg-black ${
      className || ""
    }`}
    style={{ width: 32, height: 32 }}
  >
    <svg width="16" height="14" viewBox="0 0 24 21" fill="none">
      <path d="M12 0L24 21H0L12 0Z" fill="white" />
    </svg>
  </div>
);

// Firebaseロゴコンポーネント（拡大版）
const FirebaseLogo = ({ className }: { className?: string }) => (
  <div
    className={`relative w-9 h-9 flex items-center justify-center ${
      className || ""
    }`}
  >
    <Image
      src="/icons/Logomark_Full Color.svg"
      alt="Firebase"
      fill
      className="object-contain"
    />
  </div>
);

// CSSベースのC言語ロゴコンポーネント（縮小版）
const CustomCLogo = ({ className }: { className?: string }) => (
  <div
    className={`relative flex items-center justify-center rounded-full bg-[#3949AB] text-white font-sans font-bold ${
      className || ""
    }`}
    style={{
      width: 26,
      height: 26,
      fontSize: 15,
      boxShadow: "2px 4px 6px rgba(0,0,0,0.3)",
    }}
    aria-label="C Language"
  >
    {/* 光沢（ハイライト） */}
    <div
      className="absolute top-0 left-0 w-full h-full rounded-full opacity-20 pointer-events-none"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 50%)",
      }}
    />
    {/* 文字本体 */}
    <span
      style={{
        marginTop: -1,
        marginLeft: -1,
        textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
      }}
    >
      C
    </span>
  </div>
);

// Next.jsロゴ（拡大版）
const NextjsLogo = ({ className }: { className?: string }) => (
  <SiNextdotjs className={`text-4xl ${className || ""}`} />
);

// Reactロゴ（拡大版）
const ReactLogo = ({ className }: { className?: string }) => (
  <SiReact className={`text-4xl ${className || ""}`} />
);

const TECH_ITEMS = [
  { icon: VercelLogo, name: "Vercel", color: "text-black" },
  { icon: FirebaseLogo, name: "Firebase", color: "" },
  { icon: NextjsLogo, name: "Next.js", color: "text-black" },
  { icon: ReactLogo, name: "React", color: "text-[#61DAFB]" },
  { icon: SiTypescript, name: "TypeScript", color: "text-[#3178C6]" },
  { icon: SiJavascript, name: "JavaScript", color: "text-[#F7DF1E]" },
  { icon: SiPython, name: "Python", color: "text-[#3776AB]" },
  { icon: SiDjango, name: "Django", color: "text-[#092E20]" },
  { icon: SiHtml5, name: "HTML", color: "text-[#E34F26]" },
  { icon: SiCss3, name: "CSS", color: "text-[#1572B6]" },
  { icon: SiBootstrap, name: "BootStrap", color: "text-[#7952B3]" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-[#06B6D4]" },
  { icon: FaJava, name: "Java", color: "text-[#007396]" },
  { icon: CustomCLogo, name: "C", color: "text-[#00599C]" },
  { icon: SiUnity, name: "Unity", color: "text-[#000000]" },
  { icon: SiBlender, name: "Blender", color: "text-[#F5792A]" },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

/**
 * TechCard - マウス追従回転アニメーション付きカード
 */
function TechCard({
  icon: Icon,
  name,
  color,
}: {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  color: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // カーソル位置からアイコンの回転角度を計算
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const degrees = (angle * 180) / Math.PI;

    setRotation((degrees + 90) * 0.5); // 回転角を半分に
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation(0);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      whileHover={{
        y: -8,
        scale: 1.05,
        boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col items-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm cursor-pointer group"
      style={{
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
      }}
    >
      <motion.div
        animate={{
          rotate: isHovering ? rotation : 0,
          scale: isHovering ? 1.15 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <Icon
          className={`text-3xl mb-2 ${color} transition-all duration-200 ${
            isHovering ? "drop-shadow-lg" : ""
          }`}
        />
      </motion.div>
      <span className="text-[10px] font-bold text-gray-700 group-hover:text-bain-red transition-colors">
        {name}
      </span>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <motion.div
      className="grid grid-cols-4 gap-4 mb-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {TECH_ITEMS.map((tech) => (
        <TechCard
          key={tech.name}
          icon={tech.icon}
          name={tech.name}
          color={tech.color}
        />
      ))}
    </motion.div>
  );
}
