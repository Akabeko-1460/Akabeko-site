"use client";

import { motion } from "framer-motion";
import { Mail, Github, Twitter, MapPin } from "lucide-react";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-16"
      >
        {/* Profile Header */}
        <motion.section variants={item} className="text-center space-y-6">
          <div className="w-32 h-32 mx-auto bg-primary rounded-full flex items-center justify-center text-4xl shadow-2xl shadow-red-500/10 text-white font-bold ring-4 ring-white">
            赤
          </div>
          <div>
            <h1 className="text-4xl font-bold font-serif tracking-wide text-foreground mb-2">
              紅べこ{" "}
              <span className="text-lg text-muted font-normal">(Akabeko)</span>
            </h1>
            <p className="text-muted font-serif italic tracking-wider text-sm">
              Aspiring IT Consultant / Project Manager
            </p>
          </div>
          <div className="flex justify-center gap-4 text-muted text-sm tracking-widest">
            <span className="flex items-center gap-1">
              <MapPin size={14} /> AIZU
            </span>
            <span className="text-primary/30">―</span>
            <span className="flex items-center gap-1">TOKYO</span>
          </div>
        </motion.section>

        {/* Overview */}
        <motion.section
          variants={item}
          className="box-soft p-10 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -mr-8 -mt-8"></div>
          <h2 className="text-xl font-bold text-primary mb-8 font-serif tracking-widest">
            PROFILE
          </h2>
          <p className="leading-loose text-foreground/80 font-serif text-justify">
            民芸品の「赤べこ」が大好きな大学生です。
            ITコンサルタント、特にERP導入コンサルタントやPMを目指して、日々技術とマネジメントの勉強に励んでいます。
            <br />
            <br />
            「魔除け」や「幸福を運ぶ」とされる赤べこのように、プロジェクトにおける厄災(トラブル)を防ぎ、
            クライアントとチームに幸福(成功)をもたらす存在になりたいと考えています。
          </p>
        </motion.section>

        {/* Qualifications */}
        <motion.section variants={item} className="box-soft p-10 md:p-12">
          <h2 className="text-xl font-bold text-primary mb-8 font-serif tracking-widest">
            QUALIFICATIONS
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-foreground/80 font-serif ml-4">
            <li className="list-disc pl-2">基本情報技術者試験 (FE)</li>
            <li className="list-disc pl-2">応用情報技術者試験 (AP) - 勉強中</li>
            <li className="list-disc pl-2">TOEIC 800点</li>
            <li className="list-disc pl-2">日商簿記3級</li>
          </ul>
        </motion.section>

        {/* Biography / Timeline */}
        <motion.section variants={item}>
          <h2 className="text-2xl font-bold text-primary mb-8 flex items-center gap-2">
            <span className="w-2 h-8 bg-primary rounded-full"></span>
            History
          </h2>
          <div className="relative border-l-2 border-primary/20 ml-6 space-y-12 pb-12">
            {[
              {
                year: "2022",
                title: "大学入学",
                text: "情報工学を専攻。プログラミングの基礎と、地域課題解決プロジェクトに取り組む。",
              },
              {
                year: "2023",
                title: "Web開発インターン",
                text: "React/Next.jsを用いたフロントエンド開発を経験。チーム開発の難しさと面白さを知る。",
              },
              {
                year: "2024",
                title: "ITコンサルタントを目指す",
                text: "技術だけでなく、ビジネス視点での課題解決に興味を持ち、ERPやPMの勉強を開始。",
              },
              {
                year: "Future",
                title: "目指す姿",
                text: "顧客に寄り添い、確実な価値を提供する「信頼されるPM」へ。",
              },
            ].map((event, i) => (
              <div key={i} className="relative pl-8">
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm"></span>
                <span className="text-sm font-bold text-primary font-mono block mb-1">
                  {event.year}
                </span>
                <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {event.text}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section variants={item} className="text-center py-8">
          <h2 className="text-2xl font-bold mb-8">Contact Me</h2>
          <div className="flex justify-center gap-8">
            <a
              href="#"
              className="p-4 bg-white rounded-full shadow-sm hover:shadow-md hover:text-primary transition-all"
            >
              <Mail size={24} />
            </a>
            <a
              href="#"
              className="p-4 bg-white rounded-full shadow-sm hover:shadow-md hover:text-primary transition-all"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="p-4 bg-white rounded-full shadow-sm hover:shadow-md hover:text-primary transition-all"
            >
              <Twitter size={24} />
            </a>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
