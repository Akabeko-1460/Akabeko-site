"use client";

import { motion } from "framer-motion";

const books = [
  { title: "エンジニアリング組織論への招待", author: "広木 大地" },
  { title: "UIデザインの教科書", author: "原田 秀司" },
  { title: "リーダブルコード", author: "Dustin Boswell" },
  { title: "失敗の本質", author: "戸部 良一 他" },
  { title: "イシューからはじめよ", author: "安宅 和人" },
  { title: "FACTFULNESS", author: "Hans Rosling" },
];

export default function Books() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Books</h1>
        <p className="text-muted">私を構成する書籍たち。</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group box-soft p-8 text-center hover:-translate-y-2"
          >
            <div className="h-48 bg-gray-50 mb-6 rounded-lg flex items-center justify-center text-gray-300 font-mono text-xs shadow-inner">
              {/* Placeholder for book cover */}
              NO IMAGE
            </div>
            <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors font-serif">
              {book.title}
            </h3>
            <p className="text-xs text-muted font-serif tracking-widest uppercase">
              {book.author}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
