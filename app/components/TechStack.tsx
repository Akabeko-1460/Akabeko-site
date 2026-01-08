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
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const CustomCLogo = ({ className }: { className?: string }) => (
  <div
    className={`w-8 h-8 flex items-center justify-center ${className || ""}`}
  >
    <img src="/c-logo.png" alt="C" className="w-full h-full object-contain" />
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
    color: "text-[#A8B9CC]",
  },
  {
    icon: SiUnity,
    name: "Unity",
    color: "text-[#000000]",
  },
];

export default function TechStack() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      {TECH_ITEMS.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <tech.icon className={`text-3xl mb-2 ${tech.color}`} />
          <span className="text-[10px] font-bold text-gray-700">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
}
