"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
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
      ease: "easeOut" as const,
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
  const closingButtonTopRef = useRef<number | null>(null);
  const scrollFrameRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (scrollFrameRef.current !== null) {
        cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

  const detailContent = language === "ja" ? detailContentJa : detailContentEn;

  const restoreButtonPosition = () => {
    if (closingButtonTopRef.current === null || !buttonRef.current) return;

    const offset =
      buttonRef.current.getBoundingClientRect().top - closingButtonTopRef.current;
    window.scrollTo({
      top: Math.max(0, window.scrollY + offset),
      behavior: "instant",
    });
  };

  const handleExitComplete = () => {
    if (closingButtonTopRef.current === null) return;
    if (scrollFrameRef.current !== null) {
      cancelAnimationFrame(scrollFrameRef.current);
    }

    // Wait for AnimatePresence to remove the exiting content from the layout.
    scrollFrameRef.current = requestAnimationFrame(() => {
      restoreButtonPosition();
      closingButtonTopRef.current = null;
      scrollFrameRef.current = null;
    });
  };

  const handleToggle = () => {
    if (scrollFrameRef.current !== null) {
      cancelAnimationFrame(scrollFrameRef.current);
      scrollFrameRef.current = null;
    }
    closingButtonTopRef.current = null;

    if (isExpanded) {
      closingButtonTopRef.current =
        buttonRef.current?.getBoundingClientRect().top ?? null;

      const trackButtonPosition = () => {
        if (closingButtonTopRef.current === null) return;
        restoreButtonPosition();
        scrollFrameRef.current = requestAnimationFrame(trackButtonPosition);
      };
      scrollFrameRef.current = requestAnimationFrame(trackButtonPosition);
    }

    setIsExpanded(!isExpanded);
  };

  return (
    <motion.section
      className="bg-white dark:bg-warm-gray p-8 md:p-12 shadow-sm border-t-4 border-bain-red dark:border-bain-red-light mb-16 grid grid-cols-[auto_1fr] gap-x-3 text-left md:flex md:flex-row md:items-center md:gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.div
        className="relative row-span-2 w-24 h-24 md:w-40 md:h-40 rounded-full bg-gray-200 dark:bg-dark-border overflow-hidden flex-shrink-0 border-4 border-gray-50 dark:border-dark-border cursor-pointer"
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
        className="contents min-w-0 text-left md:block md:flex-1"
        variants={contentVariants}
      >
        <motion.h1
          className="col-start-2 self-end min-w-0 text-3xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {t("about.profile.name")}
        </motion.h1>

        <motion.p
          className="col-start-2 self-start min-w-0 text-bain-red dark:text-bain-red-light font-bold uppercase tracking-widest text-xs md:mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Aspiring IT Consultant / PM
        </motion.p>

        <motion.div
          className="col-span-2 min-w-0 mt-6 md:mt-0 text-gray-600 dark:text-text-muted leading-relaxed text-sm"
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

          <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
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
              className="flex items-center text-gray-400 dark:text-text-muted font-bold text-xs hover:text-bain-red dark:hover:text-bain-red-light transition-colors focus:outline-none"
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
