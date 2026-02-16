"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Life content data
const lifeContent = [
  {
    id: "strawberry-life",
    title: "StrawberryLife",
    titleJa: "いちごタルト日記",
    titleEn: "Strawberry Tart Blog",
    description:
      "いちごタルトのある幸せな日常を綴る日記。甘酸っぱい香りに包まれるようなひとときをお届けします。",
    descriptionEn:
      "A blog about the happy moments with strawberry tarts. Sharing sweet and sour moments that wrap you in fragrant delight.",
    url: "https://tarte-aux-fraises.vercel.app/",
    emoji: "🍓",
    gradient: "from-pink-400 via-rose-400 to-red-400",
    bgGradient: "from-pink-50 to-rose-50",
    accentColor: "text-rose-600",
    hoverColor: "group-hover:text-rose-700",
  },
  {
    id: "othello-practice",
    title: "Othello Practice",
    titleJa: "オセロ特訓",
    titleEn: "Othello Training",
    description:
      "実戦で使える戦略を身につけて、オセロの実力を着実に伸ばすためのアプリ。4段階のCPU対戦や攻略ガイドで特訓！",
    descriptionEn:
      "An app to steadily improve your Othello skills with practical strategies. Practice with 4 CPU levels and a strategy guide!",
    url: "https://othello-practice.vercel.app/",
    emoji: "⚫",
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    bgGradient: "from-emerald-50 to-green-50",
    accentColor: "text-emerald-600",
    hoverColor: "group-hover:text-emerald-700",
  },
  {
    id: "chess-learning",
    title: "Chess Learning",
    titleJa: "チェス学習",
    titleEn: "Chess Learning",
    description:
      "チェスをステップバイステップで学ぼう。インタラクティブなレッスンでルール・戦略を楽しく学び、CPU対戦で腕を磨けます。",
    descriptionEn:
      "Learn chess step by step. Master rules and strategies through interactive lessons, and sharpen your skills with CPU matches.",
    url: "https://chess-learning.vercel.app/",
    emoji: "♟️",
    gradient: "from-blue-500 via-indigo-500 to-sky-500",
    bgGradient: "from-blue-50 to-indigo-50",
    accentColor: "text-blue-600",
    hoverColor: "group-hover:text-blue-700",
  },
  {
    id: "hanabi",
    title: "HANABI",
    titleJa: "花火SNS",
    titleEn: "Fireworks SNS",
    description:
      "言葉も花火も、消えるから美しい。あなたの言葉を夜空に打ち上げ、10秒間だけ輝く刹那を楽しむSNS。ハッカソンで製作。",
    descriptionEn:
      "Words and fireworks are beautiful because they fade. A SNS where your words light up the night sky for just 10 seconds. Made at a hackathon.",
    url: "https://sigma-icon-476001-g8.web.app/",
    emoji: "🎆",
    gradient: "from-orange-400 via-amber-500 to-red-500",
    bgGradient: "from-orange-50 to-amber-50",
    accentColor: "text-orange-600",
    hoverColor: "group-hover:text-orange-700",
  },
];

export default function LifePage() {
  const { t, language } = useLanguage();

  return (
    <div className="pt-24 pb-20 bg-warm-bg min-h-screen">
      <div className="container-custom">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4 border-b-4 border-bain-red inline-block pb-2">
            {t("life.title")}
          </h1>
          <p className="text-gray-500 mt-4">
            {language === "ja"
              ? "趣味や日常の記録をまとめています"
              : "A collection of hobbies and daily life records"}
          </p>
        </motion.div>{" "}
        {/* Content Cards */}
        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {lifeContent.map((item) => (
            <motion.div key={item.id} variants={fadeInUp}>
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${item.bgGradient} border border-pink-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1`}
                >
                  {/* Decorative gradient bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.gradient}`}
                  />

                  <div className="flex flex-col md:flex-row items-stretch">
                    {/* Left: Emoji/Icon Section */}
                    <div
                      className={`flex items-center justify-center p-8 md:p-12 bg-gradient-to-br ${item.gradient} text-white w-full md:w-[180px] flex-shrink-0`}
                    >
                      <div className="text-center">
                        <span className="text-6xl md:text-7xl block drop-shadow-lg">
                          {item.emoji}
                        </span>
                      </div>
                    </div>

                    {/* Right: Content Section */}
                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h2
                            className={`text-2xl md:text-3xl font-bold ${item.accentColor} ${item.hoverColor} transition-colors duration-300`}
                            style={{
                              fontFamily:
                                "'Comic Sans MS', var(--font-comic-neue), cursive",
                              letterSpacing: "0.02em",
                            }}
                          >
                            {item.title}
                          </h2>
                          <p className="text-sm text-gray-500 mt-1">
                            {language === "ja" ? item.titleJa : item.titleEn}
                          </p>
                        </div>
                        <ExternalLink
                          className={`w-5 h-5 ${item.accentColor} opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300`}
                        />
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-4">
                        {language === "ja"
                          ? item.description
                          : item.descriptionEn}
                      </p>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div
                    className="absolute -bottom-6 -right-6 w-24 h-24 bg-pink-200/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"
                    style={{ WebkitFilter: "blur(40px)" }}
                  />
                  <div
                    className="absolute -top-6 -left-6 w-20 h-20 bg-rose-200/20 rounded-full blur-xl"
                    style={{ WebkitFilter: "blur(24px)" }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        {/* Coming Soon Section */}
        <motion.div
          className="text-center mt-16 pt-12 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="text-4xl mb-4">🚀</div>
          <p className="text-gray-400 text-sm">
            {language === "ja"
              ? "他のコンテンツも準備中です..."
              : "More content coming soon..."}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
