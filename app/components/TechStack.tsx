"use client";

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

const CustomCLogo = ({ className }: { className?: string }) => (
  <div
    className={`w-8 h-8 flex items-center justify-center relative ${
      className || ""
    }`}
  >
    <Image src="/c-logo.png" alt="C" fill className="object-contain" />
  </div>
);

const TECH_ITEMS = [
  {
    icon: SiNextdotjs,
    name: "Next.js",
    color: "text-black",
  },
  {
    icon: SiReact,
    name: "React",
    color: "text-[#61DAFB]",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    color: "text-[#3178C6]",
  },
  {
    icon: SiJavascript,
    name: "JavaScript",
    color: "text-[#F7DF1E]",
  },
  {
    icon: SiPython,
    name: "Python",
    color: "text-[#3776AB]",
  },
  {
    icon: SiDjango,
    name: "Django",
    color: "text-[#092E20]",
  },
  {
    icon: SiHtml5,
    name: "HTML",
    color: "text-[#E34F26]",
  },
  {
    icon: SiCss3,
    name: "CSS",
    color: "text-[#1572B6]",
  },
  {
    icon: SiBootstrap,
    name: "BootStrap",
    color: "text-[#7952B3]",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    color: "text-[#06B6D4]",
  },
  {
    icon: FaJava,
    name: "Java",
    color: "text-[#007396]",
  },
  {
    icon: CustomCLogo,
    name: "C",
    color: "text-[#00599C]",
  },
  {
    icon: SiUnity,
    name: "Unity",
    color: "text-[#000000]",
  },
  {
    icon: SiBlender,
    name: "Blender",
    color: "text-[#F5792A]",
  },
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
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.8,
  },
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
        <motion.div
          key={tech.name}
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
          className="flex flex-col items-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm cursor-pointer group"
          style={{
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
          }}
        >
          <div className="transition-transform duration-300 group-hover:scale-110">
            <tech.icon
              className={`text-3xl mb-2 ${tech.color} transition-all duration-300 group-hover:drop-shadow-lg`}
            />
          </div>
          <span className="text-[10px] font-bold text-gray-700 group-hover:text-bain-red transition-colors">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
