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
      delay: 0.9,
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
  const { t, language } = useLanguage();

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
    {
      year: "Univ 3rd",
      titleKey: "about.timeline.univ3.title",
      descKey: "about.timeline.univ3.desc",
    },
  ];

  return (
    <>
      <motion.h2
        className="text-3xl font-bold mb-10 text-left relative w-fit"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleVariants}
      >
        {t("about.timeline.title")}
        <motion.span
          className="absolute -bottom-2 left-0 w-full h-1 bg-bain-red"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ originX: 0 }}
        />
      </motion.h2>

      <div className="relative">
        {/* Bridge the heading margin to meet the underline's bottom edge. */}
        <motion.div
          className="absolute left-8 -ml-px -top-8 bottom-0 w-0.5 bg-bain-red/30"
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
              className="relative pl-20 py-3 mb-6 group rounded-lg transition-colors duration-200 hover:bg-bain-red/5"
              variants={itemVariants}
            >
              {/* Marker - Animated */}
              <motion.div
                className="absolute left-8 -ml-2 top-3 w-4 h-4 bg-bain-red rounded-full border-4 border-white shadow-sm z-10 mt-1 transition-shadow duration-200 group-hover:shadow-[0_0_15px_rgba(204,0,0,0.5)]"
                variants={markerVariants}
              />

              {/* Content */}
              <div className="w-full text-left">
                <motion.span
                  className={`text-bain-red font-bold font-serif ${language === "ja" ? "text-base" : "text-xl"} block`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.4 }}
                >
                  {item.year}
                </motion.span>
                {language === "ja" && (
                  <motion.h3
                    className="text-xl font-bold mt-1 text-gray-800"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.5 }}
                  >
                    {t(item.titleKey)}
                  </motion.h3>
                )}
                <motion.p
                  className="text-gray-500 text-[0.95rem] mt-2 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.6 }}
                >
                  {t(item.descKey)}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
