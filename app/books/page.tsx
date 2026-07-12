"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const books = [
  // 1. 世界一わかりやすいSAPの教科書 入門編
  {
    id: 1,
    title: "世界一わかりやすいSAPの教科書 入門編",
    subtitle: "",
    author: "とく",
    publisher: "",
    color: "#f0f4ff",
    textColor: "#1a3a8a",
  },
  // 2. リーダブルコード
  {
    id: 2,
    title: "リーダブルコード",
    subtitle: "より良いコードを書くためのシンプルで実践的なテクニック",
    author: "Dustin Boswell 他",
    publisher: "オライリー",
    color: "#8ecae6",
    textColor: "#1a3a52",
  },
  // 2. 20字に削ぎ落とせ
  {
    id: 3,
    title: "20字に削ぎ落とせ",
    subtitle: "ワンビッグメッセージで相手を動かす",
    author: "リップシャッツ信元夏代",
    publisher: "朝日新聞出版",
    color: "#ffffff",
    textColor: "#333333",
  },
  // 3. ゼロ秒思考
  {
    id: 4,
    title: "ゼロ秒思考",
    subtitle: "頭がよくなる世界一シンプルなトレーニング",
    author: "赤羽 雄二",
    publisher: "ダイヤモンド社",
    color: "#ffffff",
    textColor: "#1a1a1a",
  },
  // 4. ゼロ秒思考 行動編
  {
    id: 5,
    title: "ゼロ秒思考 行動編",
    subtitle: "即断即決、即実行のトレーニング",
    author: "赤羽 雄二",
    publisher: "ダイヤモンド社",
    color: "#ffffff",
    textColor: "#1a1a1a",
  },
  // 5. ロジカル・シンキング練習帳
  {
    id: 6,
    title: "ロジカル・シンキング練習帳",
    subtitle: "入社1年目から差がつく",
    author: "グロービス / 岡 重文",
    publisher: "東洋経済新報社",
    color: "#e6d5b8",
    textColor: "#3d3d3d",
  },
  // 6. コンサル一年目が学ぶこと
  {
    id: 7,
    title: "コンサル一年目が学ぶこと",
    subtitle: "",
    author: "大石 哲之",
    publisher: "ディスカヴァー",
    color: "#1a4ba0",
    textColor: "#ffffff",
  },
  // 7. 頭のいい人が話す前に考えていること
  {
    id: 8,
    title: "頭のいい人が話す前に考えていること",
    subtitle: "",
    author: "安達 裕哉",
    publisher: "ダイヤモンド社",
    color: "#87ceeb",
    textColor: "#ffffff",
  },
  // 8. 論点思考
  {
    id: 9,
    title: "論点思考",
    subtitle: "",
    author: "内田 和成",
    publisher: "東洋経済新報社",
    color: "#ffffff",
    textColor: "#c0392b",
  },
  // 9. パーフェクトな意思決定
  {
    id: 10,
    title: "パーフェクトな意思決定",
    subtitle: "",
    author: "安藤 広大",
    publisher: "ダイヤモンド社",
    color: "#2563eb",
    textColor: "#ffffff",
  },
  // 10. リーダーの仮面
  {
    id: 11,
    title: "リーダーの仮面",
    subtitle: "「いちプレーヤー」から「マネジャー」に頭を切り替える思考法",
    author: "安藤 広大",
    publisher: "ダイヤモンド社",
    color: "#1e3a5f",
    textColor: "#e8e8e8",
  },
  // 11. プロジェクトマネジメントの基本が全部わかる本
  {
    id: 12,
    title: "プロジェクトマネジメントの基本が全部わかる本",
    subtitle: "",
    author: "橋本 将功",
    publisher: "翔泳社",
    color: "#f8f8f8",
    textColor: "#00a99d",
  },
  // 12. イシューからはじめよ
  {
    id: 13,
    title: "イシューからはじめよ",
    subtitle: "知的生産の「シンプルな本質」",
    author: "安宅 和人",
    publisher: "英治出版",
    color: "#d4c5a9",
    textColor: "#2d2926",
  },
  // 13. ルドルフとイッパイアッテナ
  {
    id: 14,
    title: "ルドルフとイッパイアッテナ",
    subtitle: "",
    author: "斉藤 洋",
    publisher: "講談社",
    color: "#c0392b",
    textColor: "#ffffff",
  },
  // 14. ルドルフともだちひとりだち
  {
    id: 15,
    title: "ルドルフともだちひとりだち",
    subtitle: "",
    author: "斉藤 洋",
    publisher: "講談社",
    color: "#e91e8c",
    textColor: "#ffffff",
  },
  // 15. ルドルフとスノーホワイト
  {
    id: 16,
    title: "ルドルフとスノーホワイト",
    subtitle: "",
    author: "斉藤 洋",
    publisher: "講談社",
    color: "#b8c5d6",
    textColor: "#2c3e50",
  },
  // 16. ロジカルな話し方超入門
  {
    id: 17,
    title: "ロジカルな話し方超入門",
    subtitle: "「お前の言うことはわけがわからん」と言わせない",
    author: "別所 栄吾",
    publisher: "ディスカヴァー",
    color: "#fff8e1",
    textColor: "#1976d2",
  },
  // 17. 言葉にできるは武器になる。
  {
    id: 18,
    title: "言葉にできるは武器になる。",
    subtitle: "",
    author: "梅田 悟司",
    publisher: "日本経済新聞出版",
    color: "#2e86ab",
    textColor: "#ffffff",
  },
  // 18. マインドフルネス瞑想入門
  {
    id: 19,
    title: "マインドフルネス瞑想入門",
    subtitle: "1日10分で自分を浄化する方法",
    author: "吉田 昌生",
    publisher: "WAVE出版",
    color: "#87ceeb",
    textColor: "#2c3e50",
  },
  // 19. 確実内定
  {
    id: 20,
    title: "確実内定",
    subtitle: "就職活動が面白いほどうまくいく",
    author: "トイアンナ",
    publisher: "KADOKAWA",
    color: "#fff176",
    textColor: "#333333",
  },
  // 20. マンガでわかる最強の株入門
  {
    id: 21,
    title: "マンガでわかる最強の株入門",
    subtitle: "",
    author: "安恒 理",
    publisher: "新星出版社",
    color: "#e8d5f0",
    textColor: "#6a1b9a",
  },
  // 21. 80パターンで英語が止まらない！
  {
    id: 22,
    title: "80パターンで英語が止まらない！",
    subtitle: "ネイティブなら12歳までに覚える",
    author: "塚本 亮",
    publisher: "高橋書店",
    color: "#fff8f0",
    textColor: "#e91e63",
  },
  // 22. 世界のエリートが学んでいる教養書必読100冊を1冊にまとめてみた
  {
    id: 23,
    title: "世界のエリートが学んでいる教養書必読100冊を1冊にまとめてみた",
    subtitle: "",
    author: "永井 孝尚",
    publisher: "KADOKAWA",
    color: "#3e2723",
    textColor: "#ffd54f",
  },
  // 24. スティグリッツ入門経済学 第4版
  {
    id: 25,
    title: "スティグリッツ入門経済学",
    subtitle: "第4版",
    author: "J.E.スティグリッツ / C.E.ウォルシュ",
    publisher: "東洋経済新報社",
    color: "#f5f0e1",
    textColor: "#5d4e37",
  },
  // 25. フースラーメソード入門
  {
    id: 26,
    title: "フースラーメソード入門",
    subtitle: "",
    author: "武田 梵声",
    publisher: "日本実業出版社",
    color: "#fce4ec",
    textColor: "#880e4f",
  },
  // 26. 毒の科学 毒と人間のかかわり
  {
    id: 27,
    title: "毒の科学 毒と人間のかかわり",
    subtitle: "",
    author: "船山 信次",
    publisher: "ナツメ社",
    color: "#e8f5e9",
    textColor: "#1b5e20",
  },
  // 27. 元素楽章
  {
    id: 28,
    title: "元素楽章",
    subtitle: "擬人化でわかる元素の世界",
    author: "揚げ鶏々",
    publisher: "化学同人",
    color: "#ede7f6",
    textColor: "#4a148c",
  },
  // 28. 世界でいちばん素敵な元素の教室
  {
    id: 29,
    title: "世界でいちばん素敵な元素の教室",
    subtitle: "",
    author: "栗山恭直 / 山形大学",
    publisher: "三才ブックス",
    color: "#e3f2fd",
    textColor: "#0d47a1",
  },
  // 29. 東京都同情塔
  {
    id: 30,
    title: "東京都同情塔",
    subtitle: "",
    author: "九段 理江",
    publisher: "新潮社",
    color: "#4fc3f7",
    textColor: "#1a237e",
  },
  // 30. ピエロ伝道者
  {
    id: 31,
    title: "ピエロ伝道者",
    subtitle: "",
    author: "坂口 安吾",
    publisher: "青空文庫",
    color: "#fff3e0",
    textColor: "#e65100",
    url: "https://www.aozora.gr.jp/cards/001095/files/45716_23676.html",
  },
  // 31. 走れメロス
  {
    id: 32,
    title: "走れメロス",
    subtitle: "",
    author: "太宰 治",
    publisher: "青空文庫",
    color: "#e8eaf6",
    textColor: "#283593",
    url: "https://www.aozora.gr.jp/cards/000035/files/1567_14913.html",
  },
  // 32. 人間失格
  {
    id: 33,
    title: "人間失格",
    subtitle: "",
    author: "太宰 治",
    publisher: "青空文庫",
    color: "#212121",
    textColor: "#e0e0e0",
    url: "https://www.aozora.gr.jp/cards/000035/files/301_14912.html",
  },
  // 33. レ・ミゼラブル
  {
    id: 34,
    title: "レ・ミゼラブル",
    subtitle: "",
    author: "ヴィクトル・ユーゴー",
    publisher: "青空文庫",
    color: "#b71c1c",
    textColor: "#ffcdd2",
    url: "https://www.aozora.gr.jp/cards/001094/files/42600_25758.html",
  },
  // 34. 銀河鉄道の夜
  {
    id: 35,
    title: "銀河鉄道の夜",
    subtitle: "",
    author: "宮沢 賢治",
    publisher: "青空文庫",
    color: "#0d1b2a",
    textColor: "#90caf9",
    url: "https://www.aozora.gr.jp/cards/000081/files/456_15050.html",
  },
  // 35. 罪と罰
  {
    id: 36,
    title: "罪と罰",
    subtitle: "",
    author: "ドストエフスキー",
    publisher: "青空文庫",
    color: "#3e2723",
    textColor: "#d7ccc8",
    url: "https://www.aozora.gr.jp/cards/000363/files/56656_74440.html",
  },
  // 36. カラマーゾフの兄弟
  {
    id: 37,
    title: "カラマーゾフの兄弟",
    subtitle: "",
    author: "ドストエフスキー",
    publisher: "青空文庫",
    color: "#4e342e",
    textColor: "#ffab91",
    url: "https://www.aozora.gr.jp/cards/000363/files/42286_37300.html",
  },
  // 37. 星の王子さま - The Little Prince
  {
    id: 38,
    title: "星の王子さま - The Little Prince",
    subtitle: "",
    author: "サン＝テグジュペリ",
    publisher: "講談社英語文庫",
    color: "#1a237e",
    textColor: "#ffd740",
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
  url?: string;
}

function BookCard({ book, index }: { book: Book; index: number }) {
  const Wrapper = book.url ? motion.a : motion.div;
  const linkProps = book.url
    ? { href: book.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      className={`group relative w-full aspect-[3/4] transition-transform duration-300 hover:-translate-y-2 ${
        book.url ? "cursor-pointer" : ""
      }`}
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
    </Wrapper>
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
