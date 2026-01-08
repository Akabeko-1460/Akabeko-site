"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function BooksPage() {
  const books = [
    {
      title: "エンジニアの知的生産術",
      author: "著：西尾泰和",
      cat: "Productivity",
      color: "bg-blue-50",
      image: "/book-covers/intellectual_production_v2.jpg",
      url: "https://www.amazon.co.jp/%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E3%81%AE%E7%9F%A5%E7%9A%84%E7%94%9F%E7%94%A3%E8%A1%93-%E8%A5%BF%E5%B0%BE-%E6%B3%B0%E5%92%8C/dp/4774198768",
    },
    {
      title: "リーダブルコード",
      author: "著：Dustin Boswell",
      cat: "Engineering",
      color: "bg-green-50",
      image: "/book-covers/readable_code_v3.jpg",
      url: "https://www.amazon.co.jp/%E3%83%AA%E3%83%BC%E3%83%80%E3%83%96%E3%83%AB%E3%82%B3%E3%83%BC%E3%83%89-Dustin-Boswell/dp/4873115655",
    },
    {
      title: "コンサル一年目が学ぶこと",
      author: "著：大石哲之",
      cat: "Business",
      color: "bg-red-50",
      image: "/book-covers/consultant_first_year_v3.jpg",
      url: "https://www.amazon.co.jp/%E3%82%B3%E3%83%B3%E3%82%B5%E3%83%AB%E4%B8%80%E5%B9%B4%E7%9B%AE%E3%81%8C%E5%AD%A6%E3%81%B6%E3%81%93%E3%81%A8-%E5%A4%A7%E7%9F%B3-%E5%93%B2%E4%B9%8B/dp/4799315323",
    },
    {
      title: "FACTFULNESS",
      author: "著：Hans Rosling",
      cat: "General",
      color: "bg-yellow-50",
      image: "/book-covers/factfulness_v2.jpg",
      url: "https://www.amazon.co.jp/FACTFULNESS-%E3%83%8F%E3%83%B3%E3%82%B9%E3%83%BB%E3%83%AD%E3%82%B9%E3%83%AA%E3%83%B3%E3%82%B0/dp/482228960X",
    },
    {
      title: "イシューからはじめよ",
      author: "著：安宅和人",
      cat: "Business",
      color: "bg-red-50",
      image: "/book-covers/issue_first_v2.jpg",
      url: "https://www.amazon.co.jp/%E3%82%A4%E3%82%B7%E3%83%A5%E3%83%BC%E3%81%8B%E3%82%89%E3%81%AF%E3%81%98%E3%82%81%E3%82%88-%E5%AE%89%E5%AE%85-%E5%92%8C%E4%BA%BA/dp/4862763560",
    },
    {
      title: "ユーザー中心設計入門",
      author: "著：S. Krug",
      cat: "Design",
      color: "bg-purple-50",
      image: "/book-covers/user_centered_design_v2.jpg",
      url: "https://www.amazon.co.jp/%E8%B6%85%E6%98%8E%E5%BF%AB-Web%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%93%E3%83%AA%E3%83%86%E3%82%A3-Steve-Krug/dp/4802510313",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-warm-bg min-h-screen">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-4 text-center">紅べこの本棚</h1>
        <p className="text-center text-gray-500 mb-12">
          私が読ませてもらった書籍たち。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {books.map((book, idx) => (
            <motion.a
              key={idx}
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`${book.color} p-4 flex flex-col justify-between relative group hover:shadow-lg transition-shadow border border-gray-100 cursor-pointer h-auto min-h-[350px] block`}
            >
              <div className="flex flex-col h-full">
                <span className="text-xs font-bold uppercase text-gray-400 tracking-wider bg-white/50 px-2 py-1 rounded-sm self-start">
                  {book.cat}
                </span>
                <h3 className="text-sm font-bold mt-2 leading-tight text-gray-800 group-hover:text-bain-red transition-colors">
                  {book.title}
                </h3>
                <p className="text-xs text-gray-600 mt-1 mb-2">{book.author}</p>

                <div className="relative w-full aspect-[2/3] mt-auto shadow-md overflow-hidden rounded-sm">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <ArrowUpRight className="absolute top-6 right-6 text-gray-300 group-hover:text-bain-red transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
