"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../contexts/LanguageContext";

// EmailJSの初期化
emailjs.init("u-u4c3W0au7T-X-tm");

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
    <footer className="bg-black text-white py-20">
      <div className="container-custom text-center">
        <h3 className="text-3xl font-bold mb-12 tracking-widest text-white">
          {t("footer.contact")}
        </h3>

        {status === "success" ? (
          <div className="max-w-lg mx-auto text-center mb-16">
            <div className="text-6xl mb-4">✉️</div>
            <h4 className="text-2xl font-bold text-white mb-4">
              {t("footer.success.title")}
            </h4>
            <p className="text-gray-400 mb-8">
              {t("footer.success.message1")}
              <br />
              {t("footer.success.message2")}
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="px-8 py-3 border border-bain-red text-white hover:bg-bain-red transition-all duration-300 rounded-sm text-sm tracking-widest"
            >
              {t("footer.success.newMessage")}
            </button>
          </div>
        ) : (
          <form className="max-w-lg mx-auto text-left mb-16">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-xs font-bold text-gray-400 mb-2"
              >
                {t("footer.form.name")}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-bain-red transition-colors rounded-sm"
                placeholder={t("footer.form.namePlaceholder")}
                disabled={status === "sending"}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-xs font-bold text-gray-400 mb-2"
              >
                {t("footer.form.email")}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-bain-red transition-colors rounded-sm"
                placeholder={t("footer.form.emailPlaceholder")}
                disabled={status === "sending"}
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="message"
                className="block text-xs font-bold text-gray-400 mb-2"
              >
                {t("footer.form.message")}
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-bain-red transition-colors rounded-sm"
                placeholder={t("footer.form.messagePlaceholder")}
                disabled={status === "sending"}
              ></textarea>
            </div>

            {status === "error" && (
              <div className="text-center text-red-500 text-sm mb-4">
                {t("footer.form.error")}
              </div>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={status === "sending"}
              className={`w-full bg-bain-red hover:bg-red-700 text-white font-bold py-4 uppercase tracking-widest transition-colors rounded-sm ${
                status === "sending" ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {status === "sending"
                ? t("footer.form.sending")
                : t("footer.form.submit")}
            </button>
          </form>
        )}
      </div>
    </footer>
  );
}
