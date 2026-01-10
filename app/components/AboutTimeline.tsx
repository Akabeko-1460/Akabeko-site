"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

// Animation variants
const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 150,
      damping: 20,
    },
  },
};

const markerVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 15,
    },
  },
};

export default function AboutTimeline() {
  const { t } = useLanguage();

  const historyData = [
    {
      year: "Elementary",
      titleKey: "about.timeline.elementary.title",
      descKey: "about.timeline.elementary.desc",
    },
    {
      year: "Middle School",
      titleKey: "about.timeline.middle.title",
      descKey: "about.timeline.middle.desc",
    },
    {
      year: "High School",
      titleKey: "about.timeline.high.title",
      descKey: "about.timeline.high.desc",
    },
    {
      year: "Univ 1st",
      titleKey: "about.timeline.univ1.title",
      descKey: "about.timeline.univ1.desc",
    },
    {
      year: "Univ 2nd",
      titleKey: "about.timeline.univ2.title",
      descKey: "about.timeline.univ2.desc",
    },
  ];

  return (
    <>
      <motion.h2
        className="text-2xl font-bold mb-10 text-center relative inline-block left-1/2 transform -translate-x-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleVariants}
      >
        {t("about.timeline.title")}
        <motion.span
          className="absolute -bottom-2 left-0 w-full h-1 bg-bain-red/20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ originX: 0 }}
        />
      </motion.h2>

      <div className="relative">
        {/* Left Line - Animated */}
        <motion.div
          className="absolute left-8 top-0 bottom-0 w-px bg-gray-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={lineVariants}
          style={{ originY: 0 }}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {historyData.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative pl-20 mb-12 group"
              variants={itemVariants}
            >
              {/* Marker - Animated */}
              <motion.div
                className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-bain-red rounded-full border-4 border-white shadow-sm z-10 mt-1"
                variants={markerVariants}
                whileHover={{
                  scale: 1.5,
                  boxShadow: "0 0 15px rgba(204, 0, 0, 0.5)",
                }}
              />

              {/* Content */}
              <motion.div
                className="w-full text-left"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  className="text-bain-red font-bold font-serif text-xl block"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.4 }}
                >
                  {item.year}
                </motion.span>
                <motion.h3
                  className="text-lg font-bold mt-1 text-gray-800 group-hover:text-bain-red transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.5 }}
                >
                  {t(item.titleKey)}
                </motion.h3>
                <motion.p
                  className="text-gray-500 text-sm mt-2 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.6 }}
                >
                  {t(item.descKey)}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
