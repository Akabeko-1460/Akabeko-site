"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-[500px] md:h-[600px] w-full bg-gray-900 overflow-hidden text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/hero-office.png')" }}
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
        <div className="container-custom h-full flex flex-col justify-center max-w-[800px] ml-[10%]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            本質的な価値を生む、
            <br />
            変革のパートナー
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-light mb-8 max-w-2xl"
          >
            私たちはクライアントとともに、未来を定義し、持続的な成果を創出します。
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-fit border-2 border-white hover:bg-bain-red hover:border-bain-red text-white py-3 px-8 font-bold text-sm uppercase transition-colors flex items-center"
          >
            詳しく見る <ArrowRight size={16} className="ml-2" />
          </motion.button>
        </div>
      </div>

      {/* Carousel Indicators (Static for now) */}
      <div className="absolute bottom-0 left-0 w-full flex">
        <div className="flex-1 h-2 bg-bain-red"></div>
        <div className="flex-1 h-2 bg-gray-600 hover:bg-gray-500 cursor-pointer transition-colors"></div>
        <div className="flex-1 h-2 bg-gray-600 hover:bg-gray-500 cursor-pointer transition-colors"></div>
      </div>
    </section>
  );
}
