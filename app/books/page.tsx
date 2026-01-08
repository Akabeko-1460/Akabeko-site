"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function BooksPage() {
  const books = [
    {
      title: "エンジニアの知的生産術",
      author: "著：西尾泰和",
      cat: "Productivity",
      color: "bg-blue-50",
    },
    {
      title: "リーダブルコード",
      author: "著：Dustin Boswell",
      cat: "Engineering",
      color: "bg-green-50",
    },
    {
      title: "コンサル一年目が学ぶこと",
      author: "著：大石哲之",
      cat: "Business",
      color: "bg-red-50",
    },
    {
      title: "FACTFULNESS",
      author: "著：Hans Rosling",
      cat: "General",
      color: "bg-yellow-50",
    },
    {
      title: "イシューからはじめよ",
      author: "著：安宅和人",
      cat: "Business",
      color: "bg-red-50",
    },
    {
      title: "ユーザー中心設計入門",
      author: "著：S. Krug",
      cat: "Design",
      color: "bg-purple-50",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-warm-bg min-h-screen">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-4 text-center">Bookshelf</h1>
        <p className="text-center text-gray-500 mb-12">
          私が感銘を受けた書籍たち。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`${book.color} p-6 h-64 flex flex-col justify-between relative group hover:shadow-lg transition-shadow border border-gray-100 cursor-pointer`}
            >
              <div>
                <span className="text-xs font-bold uppercase text-gray-400 tracking-wider bg-white/50 px-2 py-1 rounded-sm">
                  {book.cat}
                </span>
                <h3 className="text-lg font-bold mt-4 leading-tight text-gray-800 group-hover:text-bain-red transition-colors">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{book.author}</p>
              </div>
              <ArrowUpRight className="self-end text-gray-300 group-hover:text-bain-red transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
