"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

type AboutProfileProps = {
  detailContentJa: string;
  detailContentEn: string;
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 20,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function AboutProfile({
  detailContentJa,
  detailContentEn,
}: AboutProfileProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language, t } = useLanguage();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const detailContent = language === "ja" ? detailContentJa : detailContentEn;

  const handleToggle = () => {
    if (isExpanded) {
      // 閉じる場合：セクションの上部にスクロールして維持
      const sectionTop = sectionRef.current?.getBoundingClientRect().top ?? 0;
      const scrollTop = window.scrollY;

      setIsExpanded(false);

      // 次フレームでスクロール位置を調整
      requestAnimationFrame(() => {
        const newSectionTop =
          sectionRef.current?.getBoundingClientRect().top ?? 0;
        const diff = newSectionTop - sectionTop;
        if (Math.abs(diff) > 10) {
          window.scrollTo({
            top: scrollTop + diff,
            behavior: "instant",
          });
        }
      });
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="bg-white p-8 md:p-12 shadow-sm border-t-4 border-bain-red mb-16 flex flex-col md:flex-row items-center gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.div
        className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 border-4 border-gray-50 cursor-pointer"
        variants={imageVariants}
        whileHover={{
          scale: 1.05,
          rotate: 5,
          boxShadow: "0 10px 30px rgba(204, 0, 0, 0.2)",
          transition: { duration: 0.3 },
        }}
      >
        <Image src="/akabeko.jpg" className="object-cover" alt="Profile" fill />
      </motion.div>

      <motion.div
        className="flex-1 text-center md:text-left"
        variants={contentVariants}
      >
        <motion.h1
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {t("about.profile.name")}
        </motion.h1>

        <motion.p
          className="text-bain-red font-bold uppercase tracking-widest text-xs mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Aspiring IT Consultant / PM
        </motion.p>

        <motion.div
          className="text-gray-600 leading-relaxed text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>
            {t("about.profile.desc1")}
            <br />
            {t("about.profile.desc2")}
          </p>

          <AnimatePresence mode="wait">
            {isExpanded && (
              <motion.div
                key="detail-content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-4 whitespace-pre-wrap">{detailContent}</div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-end mt-2">
            <motion.button
              ref={buttonRef}
              onClick={handleToggle}
              className="flex items-center text-gray-400 font-bold text-xs hover:text-bain-red transition-colors focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? (
                <>
                  Close
                  <motion.span
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ChevronUp size={16} className="ml-1" />
                  </motion.span>
                </>
              ) : (
                <>
                  More
                  <motion.span
                    animate={{ y: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ChevronDown size={16} className="ml-1" />
                  </motion.span>
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
