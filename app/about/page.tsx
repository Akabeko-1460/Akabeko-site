"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const history = [
    {
      year: "Elementary",
      title: "小学校時代",
      desc: "外でひたすらに走り回った。柔道、習字、水泳、ピアノを習う。将来企業の基幹システムを作りたいと漠然と思う。",
    },
    {
      year: "Middle School",
      title: "中学校時代",
      desc: "家で友達とゲームして遊ぶ。心理学、哲学、地理学のYoutubeに没頭。",
    },
    {
      year: "High School",
      title: "高校時代",
      desc: "カラオケ、スポッチャ、USJで遊ぶ。ITコンサル(ERPコンサル)、PMになるために理系へ転換。",
    },
    {
      year: "Univ 1st",
      title: "大学1年次",
      desc: "大学の勉強(主に解析学、線形代数学)を真面目にやった。デイトラPythonコースでプログラミングを学ぶ。基本情報技術者を取得。",
    },
    {
      year: "Univ 2nd",
      title: "大学2年次",
      desc: "メンバーを8人とメンター1人を集めてアプリ開発PJを立ち上げ。大学の勉強ではGPA3.88を獲得。後期はAI・Web・ゲーム開発に没頭し、TOEIC 750点取得、ハッカソン出場、簿記3級取得と多岐に活動。",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-warm-bg min-h-screen">
      <div className="container-custom max-w-[800px]">
        {/* Profile Card */}
        <section className="bg-white p-8 md:p-12 shadow-sm border-t-4 border-bain-red mb-16 flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 border-4 border-gray-50">
            <Image
              src="/akabeko.jpg"
              className="object-cover"
              alt="Profile"
              fill
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">紅べこ</h1>
            <p className="text-bain-red font-bold uppercase tracking-widest text-xs mb-4">
              Aspiring IT Consultant / PM
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              ITコンサルタント、プロジェクトマネージャーを目指して勉強中。
              <br />
              「赤べこ」のような強さと愛らしさを兼ね備えた、
              <br />
              信頼される人材を目指しています。
            </p>
            {/* Hashtags removed */}
          </div>
        </section>

        {/* Timeline Section */}
        <h2 className="text-2xl font-bold mb-10 text-center relative inline-block left-1/2 transform -translate-x-1/2">
          History
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-bain-red/20" />
        </h2>

        <div className="relative">
          {/* Left Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-300" />

          {history.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-20 mb-12"
            >
              {/* Marker */}
              <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-bain-red rounded-full border-4 border-white shadow-sm z-10 mt-1" />

              {/* Content */}
              <div className="w-full text-left">
                <span className="text-bain-red font-bold font-serif text-xl block">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold mt-1 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Qualifications */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Qualifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "基本情報技術者",
              "TOEIC L&R 750点",
              "日本習字 (学生の部八段 / 成人の部準初段)",
              "日商簿記3級",
              "普通自動車第一種運転免許",
            ].map((q, i) => (
              <div
                key={i}
                className="bg-white p-4 border-l-4 border-gray-800 shadow-sm flex items-center"
              >
                <div className="w-2 h-2 bg-bain-red rounded-full mr-3" />
                <span className="font-bold text-gray-700">{q}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
