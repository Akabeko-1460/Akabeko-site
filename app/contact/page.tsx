"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

// EmailJSの初期化
emailjs.init("u-u4c3W0au7T-X-tm");

export default function Contact() {
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
      alert("すべての項目を入力してください。");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        "service_rpdxj7d",
        "template_6ikbyiy",
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        "u-u4c3W0au7T-X-tm"
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("メール送信エラー:", error);
      setStatus("error");
    }
  };

  return (
    <div className="pt-20 max-w-2xl mx-auto px-4 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-serif text-center mb-16 text-[#ffd1dc] drop-shadow-sm">
          お問い合わせ
        </h1>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">✉️</div>
            <h2 className="text-2xl font-serif text-[#5d5d5d] mb-4">
              送信完了しました！
            </h2>
            <p className="text-[#5d5d5d] mb-8">
              お問い合わせいただきありがとうございます。
              <br />
              折り返しご連絡いたします。
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="px-8 py-2 border border-[#ffd1dc] text-[#5d5d5d] hover:bg-[#ffd1dc] hover:text-white transition-all duration-300 rounded-full text-sm tracking-widest"
            >
              新しいメッセージを送る
            </button>
          </motion.div>
        ) : (
          <form className="space-y-8">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-[#5d5d5d]">
                お名前
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-white/50 border-b border-[#ffd1dc] p-2 focus:outline-none focus:border-[#cce4ff] transition-colors font-sans text-[#5d5d5d]"
                disabled={status === "sending"}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-[#5d5d5d]">
                メールアドレス
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-white/50 border-b border-[#ffd1dc] p-2 focus:outline-none focus:border-[#cce4ff] transition-colors font-sans text-[#5d5d5d]"
                disabled={status === "sending"}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-[#5d5d5d]">
                メッセージ
              </label>
              <textarea
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-white/50 border-b border-[#ffd1dc] p-2 focus:outline-none focus:border-[#cce4ff] transition-colors font-sans text-[#5d5d5d] resize-none"
                disabled={status === "sending"}
              />
            </div>

            {status === "error" && (
              <div className="text-center text-red-500 text-sm">
                送信に失敗しました。もう一度お試しください。
              </div>
            )}

            <div className="text-center pt-8">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "sending"}
                className={`px-12 py-3 border border-[#ffd1dc] text-[#5d5d5d] hover:bg-[#ffd1dc] hover:text-white transition-all duration-300 rounded-full text-sm tracking-widest uppercase ${
                  status === "sending" ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {status === "sending" ? "送信中..." : "送信"}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
}
