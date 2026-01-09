"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export default function LifePage() {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-20 bg-warm-bg min-h-screen flex items-center justify-center">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-8xl mb-8">🚧</div>
          <h1 className="text-4xl font-bold mb-4">{t("life.title")}</h1>
          <p className="text-xl text-gray-500 mb-8">{t("life.status")}</p>
          <p className="text-gray-400">{t("life.coming")}</p>
        </motion.div>
      </div>
    </div>
  );
}
