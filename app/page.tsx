"use client";

import { motion } from "framer-motion";
import Akabeko3D from "./components/Akabeko3D";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import TechStack from "./components/TechStack";
import CategoryCards from "./components/CategoryCards";
import { useLanguage } from "./contexts/LanguageContext";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with 3D */}
      <motion.section
        className="relative w-full flex flex-col items-center justify-center pt-8 pb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Akabeko3D />
      </motion.section>

      {/* Tech Stack / Introduction */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="flex flex-col md:flex-row gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="w-full md:w-1/2" variants={fadeInLeft}>
              <motion.h3
                className="text-3xl font-bold mb-6 border-l-4 border-bain-red pl-4"
                variants={fadeInUp}
              >
                {t("home.greeting.title")}
              </motion.h3>

              <motion.p
                className="text-gray-600 leading-relaxed mb-6"
                variants={fadeInUp}
              >
                {t("home.greeting.text1")}
                <br />
                {t("home.greeting.text2")}
                <br />
                {t("home.greeting.text3")}
              </motion.p>

              <motion.div variants={fadeInUp}>
                <TechStack />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link
                  href="/about"
                  className="group inline-flex items-center text-white bg-black px-6 py-3 font-bold uppercase text-xs tracking-wider hover:bg-bain-red transition-all duration-300 relative overflow-hidden btn-shine"
                >
                  <span className="relative z-10 flex items-center">
                    {t("home.moreAbout")}
                    <motion.span
                      className="ml-2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowRight size={16} />
                    </motion.span>
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            <CategoryCards />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
