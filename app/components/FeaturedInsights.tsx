import { ArrowRight } from "lucide-react";

export default function FeaturedInsights() {
  const insights = [
    {
      category: "Technology Report",
      title: "生成AI：実験から実践へ",
      desc: "企業はいかにして生成AIをスケールさせ、実質的な価値を生み出すか。",
      img: "/insight-tech.png",
    },
    {
      category: "Brief",
      title: "日本企業の再創造",
      desc: "グローバル競争力を取り戻すための経営課題とアプローチ。",
      img: "https://placehold.co/600x400/333/fff?text=Japan+Market",
    },
    {
      category: "Private Equity",
      title: "グローバルPEレポート 2026",
      desc: "不確実な市場環境下での投資戦略と出口戦略。",
      img: "https://placehold.co/600x400/666/fff?text=PE+Report",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Insights
          </h2>
          <a
            href="#"
            className="text-bain-red font-bold uppercase text-sm hover:underline flex items-center"
          >
            View all insights <ArrowRight size={16} className="ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((item, idx) => (
            <div
              key={idx}
              className="group cursor-pointer bg-white shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-0 left-0 bg-bain-red text-white text-xs font-bold px-3 py-1 uppercase">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-bain-red transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.desc}
                </p>
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-bain-red group-hover:border-bain-red transition-colors">
                  <ArrowRight
                    size={16}
                    className="text-gray-400 group-hover:text-white"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
