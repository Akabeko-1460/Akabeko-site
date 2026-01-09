"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function BooksPage() {
  const books = [
    // Technology
    {
      title: "リーダブルコード",
      author: "著：Dustin Boswell / Trevor Foucher",
      cat: "Technology",
      color: "bg-blue-50",
      image: "/book-covers/readable_code_v3.jpg",
      url: "https://www.amazon.co.jp/%E3%83%AA%E3%83%BC%E3%83%80%E3%83%96%E3%83%AB%E3%82%B3%E3%83%BC%E3%83%89-Dustin-Boswell/dp/4873115655",
    },
    // Business
    {
      title: "20字に削ぎ落とせ",
      author: "著：信元 夏代",
      cat: "Business",
      color: "bg-red-50",
      image: "/book-covers/20character_limit.jpg",
      url: "https://www.amazon.co.jp/dp/B0B6J4W65R",
    },
    {
      title: "ゼロ秒思考",
      author: "著：赤羽 雄二",
      cat: "Business",
      color: "bg-red-50",
      image: "/book-covers/zerosecondsthinking.jpg",
      url: "https://www.amazon.co.jp/dp/4478025802",
    },
    {
      title: "ゼロ秒思考 行動編",
      author: "著：赤羽 雄二",
      cat: "Business",
      color: "bg-red-50",
      image: "/book-covers/zerosecondsthinking_exercisepart.jpg",
      url: "https://www.amazon.co.jp/dp/B0182T2J2Q",
    },
    {
      title: "ロジカル・シンキング練習帳",
      author: "著：岡 重文",
      cat: "Business",
      color: "bg-red-50",
      image: "/book-covers/logicalthinking_practicenote.jpg",
      url: "https://www.amazon.co.jp/dp/4492554171",
    },
    {
      title: "コンサル一年目が学ぶこと",
      author: "著：大石 哲之",
      cat: "Business",
      color: "bg-red-50",
      image: "/book-covers/consultant_first_year_v3.jpg",
      url: "https://www.amazon.co.jp/%E3%82%B3%E3%83%B3%E3%82%B5%E3%83%AB%E4%B8%80%E5%B9%B4%E7%9B%AE%E3%81%8C%E5%AD%A6%E3%81%B6%E3%81%93%E3%81%A8-%E5%A4%A7%E7%9F%B3-%E5%93%B2%E4%B9%8B/dp/4799315323",
    },
    {
      title: "リーダーの仮面",
      author: "著：安藤 広大",
      cat: "Business",
      color: "bg-red-50",
      image: "/book-covers/leadersmasc.jpg",
      url: "https://www.amazon.co.jp/dp/4478112020",
    },
    {
      title: "プロジェクトマネジメントの基本が全部わかる本",
      author: "著：橋本 将功",
      cat: "Business",
      color: "bg-red-50",
      image: "/book-covers/projectmanagementbasicknowledge.jpg",
      url: "https://www.amazon.co.jp/dp/B0BNKT4N74",
    },
    {
      title: "イシューからはじめよ",
      author: "著：安宅 和人",
      cat: "Business",
      color: "bg-red-50",
      image: "/book-covers/issue_first_v2.jpg",
      url: "https://www.amazon.co.jp/%E3%82%A4%E3%82%B7%E3%83%A5%E3%83%BC%E3%81%8B%E3%82%89%E3%81%AF%E3%81%98%E3%82%81%E3%82%88-%E5%AE%89%E5%AE%85-%E5%92%8C%E4%BA%BA/dp/4862763560",
    },
    // General
    {
      title: "ルドルフとイッパイアッテナ",
      author: "著：斉藤 洋",
      cat: "General",
      color: "bg-yellow-50",
      image: "/book-covers/rudoruhutoixtupaiaxtutena.jpg",
      url: "https://www.amazon.co.jp/dp/4061335029",
    },
    {
      title: "ルドルフともだちひとりだち",
      author: "著：斉藤 洋",
      cat: "General",
      color: "bg-yellow-50",
      image: "/book-covers/rudoruhutomodachihitoridachi.jpg",
      url: "https://www.amazon.co.jp/dp/4061335096",
    },
    {
      title: "ルドルフとスノーホワイト",
      author: "著：斉藤 洋",
      cat: "General",
      color: "bg-yellow-50",
      image: "/book-covers/rudoruhutosuno-howaito.jpg",
      url: "https://www.amazon.co.jp/dp/4061335266",
    },
    {
      title: "言葉にできるは武器になる。",
      author: "著：梅田 悟司",
      cat: "General",
      color: "bg-yellow-50",
      image: "/book-covers/kotobanidekiruhabukininaru.jpg",
      url: "https://www.amazon.co.jp/dp/453232075X",
    },
    {
      title: "マインドフルネス瞑想入門",
      author: "著：吉田 昌生",
      cat: "General",
      color: "bg-yellow-50",
      image: "/book-covers/maindohurunesumeisounyuumon.jpg",
      url: "https://www.amazon.co.jp/dp/4872906470",
    },
    {
      title: "確実内定",
      author: "著：トイアンナ",
      cat: "General",
      color: "bg-yellow-50",
      image: "/book-covers/kakuzitsunaitei.jpg",
      url: "https://www.amazon.co.jp/dp/4046023577",
    },
    {
      title: "マンガでわかる最強の株入門",
      author: "著：安恒 理",
      cat: "General",
      color: "bg-yellow-50",
      image: "/book-covers/mangadewakarusaikyounokabunyuumon.jpg",
      url: "https://www.amazon.co.jp/dp/4405102636",
    },
    {
      title: "80パターンで英語が止まらない！",
      author: "著：塚本 亮",
      cat: "General",
      color: "bg-yellow-50",
      image: "/book-covers/80pata-ndeeigogatomaranai.jpg",
      url: "https://www.amazon.co.jp/dp/4471113220",
    },
    {
      title: "東京都同情塔",
      author: "著：九段 理江",
      cat: "General",
      color: "bg-yellow-50",
      image: "/book-covers/tokyo-to_dojo-to.jpg",
      url: "https://www.amazon.co.jp/dp/4103555114",
    },
    {
      title: "世界のエリートが学んでいる教養書必読100冊を1冊にまとめてみた",
      author: "著：永井 孝尚",
      cat: "General",
      color: "bg-yellow-50",
      image: "/book-covers/liberalarts.jpg",
      url: "https://www.amazon.co.jp/dp/4046043969",
    },
    {
      title: "スティグリッツ入門経済学 第4版",
      author: "著：J.E.スティグリッツ 他",
      cat: "General",
      color: "bg-yellow-50",
      image: "/book-covers/Stiglitz_Introduction_to_Economics.jpg",
      url: "https://www.amazon.co.jp/dp/4492314197",
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
