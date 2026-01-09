"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

export default function CategoryCards() {
  return (
    <motion.div
      className="w-full md:w-1/2 grid grid-cols-2 gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div variants={cardVariants}>
        <Link
          href="/books"
          className="group block bg-gray-50 h-[200px] relative overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-bain-red/30"
        >
          {/* Image Banner Layer */}
          <div className="absolute top-0 left-0 w-full h-[75%] z-0 overflow-hidden">
            <Image
              src="/books.jpg"
              alt="Books"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <motion.div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-bain-red opacity-0 group-hover:opacity-15 transition-opacity duration-300" />
          </div>

          <div className="absolute inset-0 bg-transparent z-10" />

          <motion.div
            className="absolute bottom-4 left-4 z-20"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="text-xl font-bold group-hover:text-bain-red transition-colors duration-300">
              Books
            </h4>
          </motion.div>

          <motion.div
            className="absolute top-4 right-4 z-20"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <ArrowRight className="text-white drop-shadow-md group-hover:text-bain-red transition-colors duration-300" />
          </motion.div>
        </Link>
      </motion.div>

      <motion.div variants={cardVariants}>
        <Link
          href="/life"
          className="group block bg-gray-50 h-[200px] relative overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-bain-red/30"
        >
          {/* Image Banner Layer */}
          <div className="absolute top-0 left-0 w-full h-[75%] z-0 overflow-hidden">
            <Image
              src="/life.jpg"
              alt="Life"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <motion.div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-bain-red opacity-0 group-hover:opacity-15 transition-opacity duration-300" />
          </div>

          <div className="absolute inset-0 bg-transparent z-10" />

          <motion.div
            className="absolute bottom-4 left-4 z-20"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h4 className="text-xl font-bold group-hover:text-bain-red transition-colors duration-300">
              Life
            </h4>
          </motion.div>

          <motion.div
            className="absolute top-4 right-4 z-20"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <ArrowRight className="text-white drop-shadow-md group-hover:text-bain-red transition-colors duration-300" />
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
