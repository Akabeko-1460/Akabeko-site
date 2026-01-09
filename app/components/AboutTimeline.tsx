"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

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
      <h2 className="text-2xl font-bold mb-10 text-center relative inline-block left-1/2 transform -translate-x-1/2">
        {t("about.timeline.title")}
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-bain-red/20" />
      </h2>

      <div className="relative">
        {/* Left Line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-300" />

        {historyData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-20 mb-12"
          >
            {/* Marker */}
            <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-bain-red rounded-full border-4 border-white shadow-sm z-10 mt-1" />

            {/* Content */}
            <div className="w-full text-left">
              <span className="text-bain-red font-bold font-serif text-xl block">
                {item.year}
              </span>
              <h3 className="text-lg font-bold mt-1 text-gray-800">
                {t(item.titleKey)}
              </h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                {t(item.descKey)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
