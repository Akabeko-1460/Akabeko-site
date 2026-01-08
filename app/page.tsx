"use client";

import Image from "next/image";
import Akabeko3D from "./components/Akabeko3D";
import { ArrowRight } from "lucide-react";
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
import Link from "next/link";

const CustomCLogo = ({ className }: { className?: string }) => (
  // Using img tag to ensure visibility avoiding next/image layout constraints temporarily
  <div
    className={`w-8 h-8 flex items-center justify-center ${className || ""}`}
  >
    <img src="/c-logo.png" alt="C" className="w-full h-full object-contain" />
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with 3D */}
      <section className="relative w-full flex flex-col items-center justify-center pt-8 pb-0">
        <Akabeko3D />
      </section>

      {/* Tech Stack / Introduction */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold mb-6 border-l-4 border-bain-red pl-4">
                あいさつ
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                こんにちは！紅べこです。みんなからはべこと呼ばれています。
                <br />
                サイトを見に来てくれて本当にありがとうございます！
                <br />
                今は大学で情報科学を専攻していて、ITコンサル、PMを目指して勉強中です。
              </p>

              <div className="grid grid-cols-4 gap-4 mb-8">
                {[
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
                ].map((tech) => (
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

              <Link
                href="/about"
                className="inline-flex items-center text-white bg-black px-6 py-3 font-bold uppercase text-xs tracking-wider hover:bg-bain-red transition-colors"
              >
                More About Me <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <Link
                href="/books"
                className="group block bg-gray-50 h-[200px] relative overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
              >
                {/* Image Banner Layer */}
                <div className="absolute top-0 left-0 w-full h-[75%] z-0">
                  <Image
                    src="/books.jpg"
                    alt="Books"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-bain-red opacity-0 group-hover:opacity-10 transition-opacity" />
                </div>

                <div className="absolute inset-0 bg-transparent z-10" />

                <div className="absolute bottom-4 left-4 z-20">
                  <h4 className="text-xl font-bold">Books</h4>
                </div>
                <ArrowRight className="absolute top-4 right-4 text-white drop-shadow-md group-hover:text-bain-red transition-colors z-20" />
              </Link>

              <Link
                href="/life"
                className="group block bg-gray-50 h-[200px] relative overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
              >
                {/* Image Banner Layer */}
                <div className="absolute top-0 left-0 w-full h-[75%] z-0">
                  <Image
                    src="/life.jpg"
                    alt="Life"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-bain-red opacity-0 group-hover:opacity-10 transition-opacity" />
                </div>

                <div className="absolute inset-0 bg-transparent z-10" />

                <div className="absolute bottom-4 left-4 z-20">
                  <h4 className="text-xl font-bold">Life</h4>
                </div>
                <ArrowRight className="absolute top-4 right-4 text-white drop-shadow-md group-hover:text-bain-red transition-colors z-20" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
