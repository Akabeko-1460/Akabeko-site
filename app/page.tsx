"use client";

import Akabeko3D from "./components/Akabeko3D";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 md:py-24">
        {/* Text Area */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 order-2 md:order-1"
        >
          <div className="inline-block text-primary text-sm font-medium tracking-[0.2em] uppercase border-b border-primary/20 pb-1">
            Aspiring IT Consultant & PM
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight font-serif text-foreground tracking-tight">
            Strong & <br />
            Persistent <br />
            <span className="text-primary italic font-light">Like Akabeko</span>
          </h1>
          <p className="text-lg text-muted max-w-lg leading-loose font-serif pl-4 border-l-2 border-primary/10">
            粘り強く、愚直に。
            <br />
            会津の赤べこのように、どんな困難にも首を縦に振って頷きながら、周りに愛されるエンジニアを目指して。
          </p>

          <div className="pt-4">
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-full font-medium transition-all hover:shadow-lg border border-primary/10"
            >
              <span className="group-hover:translate-x-1 transition-transform">
                Learn More
              </span>{" "}
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>

        {/* 3D Model Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full min-h-[400px] flex items-center justify-center order-1 md:order-2 bg-gradient-to-br from-orange-50/50 to-transparent rounded-[3rem]"
        >
          <Akabeko3D />
        </motion.div>
      </section>

      {/* Tech Stack Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="w-full max-w-7xl px-4 py-12"
      >
        <div className="box-soft p-12 text-center">
          <p className="text-xs font-bold text-muted tracking-[0.2em] uppercase mb-8">
            Technical Proficiency
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 hover:opacity-100 transition-opacity duration-500">
            <span className="text-lg font-serif tracking-widest">
              TypeScript
            </span>
            <span className="text-lg font-serif tracking-widest">Next.js</span>
            <span className="text-lg font-serif tracking-widest">Tailwind</span>
            <span className="text-lg font-serif tracking-widest">React</span>
            <span className="text-lg font-serif tracking-widest">
              Framer Motion
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
