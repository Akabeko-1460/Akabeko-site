"use client";

import { motion } from "framer-motion";
import AboutProfile from "../components/AboutProfile";
import AboutTimeline from "../components/AboutTimeline";
import { useLanguage } from "../contexts/LanguageContext";

type AboutPageClientProps = {
  detailContentJa: string;
  detailContentEn: string;
};

// Animation variants
const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 20,
    },
  },
};

export default function AboutPageClient({
  detailContentJa,
  detailContentEn,
}: AboutPageClientProps) {
  const { t } = useLanguage();

  const qualifications = [
    t("about.qualifications.fe"),
    t("about.qualifications.toeic"),
    t("about.qualifications.calligraphy"),
    t("about.qualifications.driver"),
    t("about.qualifications.bookkeeping"),
  ];

  return (
    <motion.div
      className="pt-24 pb-20 bg-warm-bg min-h-screen"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <div className="container-custom max-w-[800px]">
        {/* Profile Card */}
        <AboutProfile
          detailContentJa={detailContentJa}
          detailContentEn={detailContentEn}
        />

        {/* Timeline Section */}
        <motion.div variants={sectionVariants}>
          <AboutTimeline />
        </motion.div>

        {/* Qualifications */}
        <motion.section className="mt-20" variants={sectionVariants}>
          <motion.h2
            className="text-2xl font-bold mb-8 text-center relative inline-block left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("about.qualifications.title")}
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-bain-red/20"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ originX: 0 }}
            />
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {qualifications.map((q, i) => (
              <motion.div
                key={i}
                className="bg-white p-4 border-l-4 border-gray-800 flex items-center"
                variants={cardVariants}
              >
                <div className="w-2 h-2 bg-bain-red rounded-full mr-3" />
                <span className="font-bold text-gray-700">{q}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
}
