"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="pt-20 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-serif text-center mb-16 text-[#ffd1dc] drop-shadow-sm">
          お問い合わせ
        </h1>

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-[#5d5d5d]">
              お名前
            </label>
            <input
              type="text"
              className="w-full bg-white/50 border-b border-[#ffd1dc] p-2 focus:outline-none focus:border-[#cce4ff] transition-colors font-sans text-[#5d5d5d]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-[#5d5d5d]">
              メールアドレス
            </label>
            <input
              type="email"
              className="w-full bg-white/50 border-b border-[#ffd1dc] p-2 focus:outline-none focus:border-[#cce4ff] transition-colors font-sans text-[#5d5d5d]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-[#5d5d5d]">
              メッセージ
            </label>
            <textarea
              rows={6}
              className="w-full bg-white/50 border-b border-[#ffd1dc] p-2 focus:outline-none focus:border-[#cce4ff] transition-colors font-sans text-[#5d5d5d] resize-none"
            />
          </div>

          <div className="text-center pt-8">
            <button className="px-12 py-3 border border-[#ffd1dc] text-[#5d5d5d] hover:bg-[#ffd1dc] hover:text-white transition-all duration-300 rounded-full text-sm tracking-widest uppercase">
              送信
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
