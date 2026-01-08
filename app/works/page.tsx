"use client";

import { motion } from "framer-motion";

export default function Works() {
  const works = [
    { id: 1, year: 2025, title: "Afterglow", color: "bg-orange-100" },
    { id: 2, year: 2025, title: "Morning Dew", color: "bg-blue-100" },
    { id: 3, year: 2025, title: "Fragments", color: "bg-rose-100" },
    { id: 4, year: 2024, title: "Silence", color: "bg-gray-100" },
    { id: 5, year: 2024, title: "Bloom", color: "bg-pink-100" },
    { id: 6, year: 2024, title: "Drift", color: "bg-amber-100" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-20 max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-serif text-center mb-16 text-[#ffd1dc] drop-shadow-sm"
      >
        Works
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {works.map((work) => (
          <motion.div
            key={work.id}
            variants={item}
            className="group cursor-pointer"
          >
            <div
              className={`aspect-square ${work.color} rounded-sm shadow-sm relative overflow-hidden transition-transform duration-500 hover:-translate-y-2`}
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs tracking-widest text-[#5d5d5d] mb-1">
                  {work.year}
                </p>
                <h3 className="font-serif text-lg text-[#5d5d5d]">
                  {work.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
