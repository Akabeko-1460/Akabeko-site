"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const books = [
  // 1. リーダブルコード
  {
    id: 1,
    title: "リーダブルコード",
    subtitle: "より良いコードを書くためのシンプルで実践的なテクニック",
    author: "Dustin Boswell 他",
    publisher: "オライリー",
    color: "#8ecae6",
    textColor: "#1a3a52",
    url: "https://www.amazon.co.jp/dp/4873115655",
  },
  // 2. 20字に削ぎ落とせ
  {
    id: 2,
    title: "20字に削ぎ落とせ",
    subtitle: "ワンビッグメッセージで相手を動かす",
    author: "リップシャッツ信元夏代",
    publisher: "朝日新聞出版",
    color: "#ffffff",
    textColor: "#333333",
    url: "https://www.amazon.co.jp/dp/4023317985",
  },
  // 3. ゼロ秒思考
  {
    id: 3,
    title: "ゼロ秒思考",
    subtitle: "頭がよくなる世界一シンプルなトレーニング",
    author: "赤羽 雄二",
    publisher: "ダイヤモンド社",
    color: "#ffffff",
    textColor: "#1a1a1a",
    url: "https://www.amazon.co.jp/dp/447802099X",
  },
  // 4. ゼロ秒思考 行動編
  {
    id: 4,
    title: "ゼロ秒思考 行動編",
    subtitle: "即断即決、即実行のトレーニング",
    author: "赤羽 雄二",
    publisher: "ダイヤモンド社",
    color: "#ffffff",
    textColor: "#1a1a1a",
    url: "https://www.amazon.co.jp/dp/4478068208",
  },
  // 5. ロジカル・シンキング練習帳
  {
    id: 5,
    title: "ロジカル・シンキング練習帳",
    subtitle: "入社1年目から差がつく",
    author: "グロービス / 岡 重文",
    publisher: "東洋経済新聞社",
    color: "#e6d5b8",
    textColor: "#3d3d3d",
    url: "https://www.amazon.co.jp/dp/4492534245",
  },
  // 6. コンサル一年目が学ぶこと
  {
    id: 6,
    title: "コンサル一年目が学ぶこと",
    subtitle: "",
    author: "大石 哲之",
    publisher: "ディスカヴァー",
    color: "#1a4ba0",
    textColor: "#ffffff",
    url: "https://www.amazon.co.jp/dp/4799315323",
  },
  // 7. リーダーの仮面
  {
    id: 7,
    title: "リーダーの仮面",
    subtitle: "「いちプレーヤー」から「マネジャー」に頭を切り替える思考法",
    author: "安藤 広大",
    publisher: "ダイヤモンド社",
    color: "#1e3a5f",
    textColor: "#e8e8e8",
    url: "https://www.amazon.co.jp/dp/4478110514",
  },
  // 8. プロジェクトマネジメントの基本が全部わかる本
  {
    id: 8,
    title: "プロジェクトマネジメントの基本が全部わかる本",
    subtitle: "",
    author: "橋本 将功",
    publisher: "翔泳社",
    color: "#f8f8f8",
    textColor: "#00a99d",
    url: "https://www.amazon.co.jp/dp/4798177415",
  },
  // 9. イシューからはじめよ
  {
    id: 9,
    title: "イシューからはじめよ",
    subtitle: "知的生産の「シンプルな本質」",
    author: "安宅 和人",
    publisher: "英治出版",
    color: "#d4c5a9",
    textColor: "#2d2926",
    url: "https://www.amazon.co.jp/dp/4862763561",
  },
  // 10. ルドルフとイッパイアッテナ
  {
    id: 10,
    title: "ルドルフとイッパイアッテナ",
    subtitle: "",
    author: "斉藤 洋",
    publisher: "講談社",
    color: "#c0392b",
    textColor: "#ffffff",
    url: "https://www.amazon.co.jp/dp/4061335057",
  },
  // 11. ルドルフともだちひとりだち
  {
    id: 11,
    title: "ルドルフともだちひとりだち",
    subtitle: "",
    author: "斉藤 洋",
    publisher: "講談社",
    color: "#e91e8c",
    textColor: "#ffffff",
    url: "https://www.amazon.co.jp/dp/406133509X",
  },
  // 12. ルドルフとスノーホワイト
  {
    id: 12,
    title: "ルドルフとスノーホワイト",
    subtitle: "",
    author: "斉藤 洋",
    publisher: "講談社",
    color: "#b8c5d6",
    textColor: "#2c3e50",
    url: "https://www.amazon.co.jp/dp/4061335227",
  },
  // 13. ロジカルな話し方超入門
  {
    id: 13,
    title: "ロジカルな話し方超入門",
    subtitle: "「お前の言うことはわけがわからん」と言わせない",
    author: "別所 栄吾",
    publisher: "ディスカヴァー",
    color: "#fff8e1",
    textColor: "#1976d2",
    url: "https://www.amazon.co.jp/dp/4799324683",
  },
  // 14. 言葉にできるは武器になる。
  {
    id: 14,
    title: "言葉にできるは武器になる。",
    subtitle: "",
    author: "梅田 悟司",
    publisher: "日本経済新聞出版",
    color: "#2e86ab",
    textColor: "#ffffff",
    url: "https://www.amazon.co.jp/dp/4532320755",
  },
  // 15. マインドフルネス瞑想入門
  {
    id: 15,
    title: "マインドフルネス瞑想入門",
    subtitle: "1日10分で自分を浄化する方法",
    author: "吉田 昌生",
    publisher: "WAVE出版",
    color: "#87ceeb",
    textColor: "#2c3e50",
    url: "https://www.amazon.co.jp/dp/4872907310",
  },
  // 16. 確実内定
  {
    id: 16,
    title: "確実内定",
    subtitle: "就職活動が面白いほどうまくいく",
    author: "トイアンナ",
    publisher: "KADOKAWA",
    color: "#fff176",
    textColor: "#333333",
    url: "https://www.amazon.co.jp/dp/4046068221",
  },
  // 17. マンガでわかる最強の株入門
  {
    id: 17,
    title: "マンガでわかる最強の株入門",
    subtitle: "",
    author: "安恒 理",
    publisher: "新星出版社",
    color: "#e8d5f0",
    textColor: "#6a1b9a",
    url: "https://www.amazon.co.jp/dp/4405102961",
  },
  // 18. 80パターンで英語が止まらない！
  {
    id: 18,
    title: "80パターンで英語が止まらない！",
    subtitle: "ネイティブなら12歳までに覚える",
    author: "塚本 亮",
    publisher: "高橋書店",
    color: "#fff8f0",
    textColor: "#e91e63",
    url: "https://www.amazon.co.jp/dp/4471113402",
  },
  // 19. 東京都同情塔
  {
    id: 19,
    title: "東京都同情塔",
    subtitle: "",
    author: "九段 理江",
    publisher: "新潮社",
    color: "#4fc3f7",
    textColor: "#1a237e",
    url: "https://www.amazon.co.jp/dp/4103555114",
  },
  // 20. 世界のエリートが学んでいる教養書必読100冊を1冊にまとめてみた
  {
    id: 20,
    title: "世界のエリートが学んでいる教養書必読100冊を1冊にまとめてみた",
    subtitle: "",
    author: "永井 孝尚",
    publisher: "KADOKAWA",
    color: "#3e2723",
    textColor: "#ffd54f",
    url: "https://www.amazon.co.jp/dp/4046055529",
  },
  // 21. スティグリッツ入門経済学 第4版
  {
    id: 21,
    title: "スティグリッツ入門経済学",
    subtitle: "第4版",
    author: "J.E.スティグリッツ / C.E.ウォルシュ",
    publisher: "東洋経済新報社",
    color: "#f5f0e1",
    textColor: "#5d4e37",
    url: "https://www.amazon.co.jp/dp/4492314199",
  },
];

interface Book {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  publisher: string;
  color: string;
  textColor: string;
  url: string;
}

function BookCard({ book, index }: { book: Book; index: number }) {
  return (
    <motion.a
      href={book.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      className="group relative w-full aspect-[3/4] cursor-pointer transition-transform duration-300 hover:-translate-y-2"
    >
      {/* 本の本体 */}
      <div
        className="relative w-full h-full rounded-r-md shadow-lg transition-all duration-300 group-hover:shadow-2xl overflow-hidden flex flex-col"
        style={{
          backgroundColor: book.color,
          boxShadow:
            "5px 5px 15px rgba(0,0,0,0.15), inset 1px 0px 2px rgba(255,255,255,0.3)",
        }}
      >
        {/* 背表紙の立体感 */}
        <div className="absolute top-0 left-0 w-5 h-full bg-gradient-to-r from-white/30 via-black/5 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-[1px] h-full bg-black/10 z-20"></div>

        {/* コンテンツエリア */}
        <div className="p-4 z-0 flex flex-col h-full relative">
          <div className="flex-1">
            {/* タイトル */}
            <h3
              className="font-bold leading-tight mb-2 line-clamp-4 text-sm"
              style={{ color: book.textColor }}
            >
              {book.title}
            </h3>
            {/* サブタイトル */}
            {book.subtitle && (
              <p
                className="text-[10px] leading-tight opacity-80 line-clamp-2 mb-2"
                style={{ color: book.textColor }}
              >
                {book.subtitle}
              </p>
            )}
          </div>

          {/* 著者名 */}
          <div className="mt-auto">
            <p
              className="text-[10px] opacity-70"
              style={{ color: book.textColor }}
            >
              {book.author}
            </p>
            {/* 出版社 */}
            <p
              className="text-[9px] opacity-50 mt-1"
              style={{ color: book.textColor }}
            >
              {book.publisher}
            </p>
          </div>
        </div>
      </div>

      {/* 本の厚み */}
      <div className="absolute top-[2px] left-0 w-[4px] h-[98%] bg-black/20 rounded-l-sm -z-10 translate-x-[-2px]"></div>
    </motion.a>
  );
}

export default function BooksPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-20 bg-warm-bg min-h-screen">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-4 text-center">
          {t("books.title")}
        </h1>
        <p className="text-center text-gray-500 mb-12">{t("books.subtitle")}</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
          {books.map((book, idx) => (
            <BookCard key={book.id} book={book} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
