"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

// EmailJSの初期化
emailjs.init("u-u4c3W0au7T-X-tm");

export default function Footer() {
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
          Contact
        </h3>

        {status === "success" ? (
          <div className="max-w-lg mx-auto text-center mb-16">
            <div className="text-6xl mb-4">✉️</div>
            <h4 className="text-2xl font-bold text-white mb-4">
              送信完了しました！
            </h4>
            <p className="text-gray-400 mb-8">
              お問い合わせいただきありがとうございます。
              <br />
              折り返しご連絡いたします。
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="px-8 py-3 border border-bain-red text-white hover:bg-bain-red transition-all duration-300 rounded-sm text-sm tracking-widest"
            >
              新しいメッセージを送る
            </button>
          </div>
        ) : (
          <form className="max-w-lg mx-auto text-left mb-16">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-xs font-bold text-gray-400 mb-2"
              >
                お名前
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-bain-red transition-colors rounded-sm"
                placeholder="あなたのお名前"
                disabled={status === "sending"}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-xs font-bold text-gray-400 mb-2"
              >
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-bain-red transition-colors rounded-sm"
                placeholder="あなたのメールアドレス"
                disabled={status === "sending"}
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="message"
                className="block text-xs font-bold text-gray-400 mb-2"
              >
                メッセージ
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-bain-red transition-colors rounded-sm"
                placeholder="メッセージを入力してください"
                disabled={status === "sending"}
              ></textarea>
            </div>

            {status === "error" && (
              <div className="text-center text-red-500 text-sm mb-4">
                送信に失敗しました。もう一度お試しください。
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
              {status === "sending" ? "送信中..." : "送信"}
            </button>
          </form>
        )}
      </div>
    </footer>
  );
}
