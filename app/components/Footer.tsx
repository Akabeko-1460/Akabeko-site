"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../contexts/LanguageContext";

// EmailJSの初期化
emailjs.init("u-u4c3W0au7T-X-tm");

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const successVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

export default function Footer() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async () => {
    // 入力チェック
    if (!formData.name || !formData.email || !formData.message) {
      alert(t("footer.form.allFieldsRequired"));
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send("service_rpdxj7d", "template_6ikbyiy", {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,
      });

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("メール送信エラー:", error);
      setStatus("error");
    }
  };

  return (
    <footer className="bg-black text-white py-20 overflow-hidden">
      <motion.div
        className="container-custom text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h3
          className="text-3xl font-bold mb-12 tracking-widest text-white"
          variants={itemVariants}
        >
          {t("footer.contact")}
        </motion.h3>

        {status === "success" ? (
          <motion.div
            className="max-w-lg mx-auto text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={successVariants}
          >
            <motion.div
              className="text-6xl mb-4"
              animate={{
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >
              ✉️
            </motion.div>
            <motion.h4
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t("footer.success.title")}
            </motion.h4>
            <motion.p
              className="text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t("footer.success.message1")}
              <br />
              {t("footer.success.message2")}
            </motion.p>
            <motion.button
              onClick={() => setStatus("idle")}
              className="px-8 py-3 border border-bain-red text-white hover:bg-bain-red transition-all duration-300 rounded-sm text-sm tracking-widest"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(204, 0, 0, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t("footer.success.newMessage")}
            </motion.button>
          </motion.div>
        ) : (
          <motion.form
            className="max-w-lg mx-auto text-left mb-16"
            variants={containerVariants}
          >
            <motion.div className="mb-6" variants={itemVariants}>
              <label
                htmlFor="name"
                className="block text-xs font-bold text-gray-400 mb-2"
              >
                {t("footer.form.name")}
              </label>
              <motion.input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-bain-red transition-colors rounded-sm"
                placeholder={t("footer.form.namePlaceholder")}
                disabled={status === "sending"}
                whileFocus={{
                  scale: 1.01,
                  borderColor: "#cc0000",
                  boxShadow: "0 0 10px rgba(204, 0, 0, 0.2)",
                }}
              />
            </motion.div>

            <motion.div className="mb-6" variants={itemVariants}>
              <label
                htmlFor="email"
                className="block text-xs font-bold text-gray-400 mb-2"
              >
                {t("footer.form.email")}
              </label>
              <motion.input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-bain-red transition-colors rounded-sm"
                placeholder={t("footer.form.emailPlaceholder")}
                disabled={status === "sending"}
                whileFocus={{
                  scale: 1.01,
                  borderColor: "#cc0000",
                  boxShadow: "0 0 10px rgba(204, 0, 0, 0.2)",
                }}
              />
            </motion.div>

            <motion.div className="mb-8" variants={itemVariants}>
              <label
                htmlFor="message"
                className="block text-xs font-bold text-gray-400 mb-2"
              >
                {t("footer.form.message")}
              </label>
              <motion.textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-bain-red transition-colors rounded-sm resize-none"
                placeholder={t("footer.form.messagePlaceholder")}
                disabled={status === "sending"}
                whileFocus={{
                  scale: 1.01,
                  borderColor: "#cc0000",
                  boxShadow: "0 0 10px rgba(204, 0, 0, 0.2)",
                }}
              ></motion.textarea>
            </motion.div>

            {status === "error" && (
              <motion.div
                className="text-center text-red-500 text-sm mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {t("footer.form.error")}
              </motion.div>
            )}

            <motion.button
              type="button"
              onClick={handleSubmit}
              disabled={status === "sending"}
              className={`w-full bg-bain-red hover:bg-red-700 text-white font-bold py-4 uppercase tracking-widest transition-colors rounded-sm relative overflow-hidden ${
                status === "sending" ? "opacity-50 cursor-not-allowed" : ""
              }`}
              variants={itemVariants}
              whileHover={{
                scale: status === "sending" ? 1 : 1.02,
                boxShadow:
                  status === "sending"
                    ? "none"
                    : "0 10px 30px rgba(204, 0, 0, 0.4)",
              }}
              whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
            >
              {status === "sending" ? (
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  {t("footer.form.sending")}
                </motion.span>
              ) : (
                t("footer.form.submit")
              )}
            </motion.button>
          </motion.form>
        )}
      </motion.div>
    </footer>
  );
}
