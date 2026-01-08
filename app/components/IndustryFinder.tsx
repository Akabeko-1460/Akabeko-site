const industries = [
  "ストラテジー",
  "M&Aと統合",
  "トランスフォーメーション",
  "デジタル",
  "サステナビリティ",
  "プライベート・エクイティ",
  "顧客体験 (CX)",
  "組織・人材",
  "さらに表示...",
];

export default function IndustryFinder() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 border-l-4 border-bain-red pl-4">
          どのような支援をご希望ですか？
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-200">
          {industries.map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="flex items-center p-8 border-r border-b border-gray-200 hover:bg-gray-50 hover:pl-10 transition-all cursor-pointer group"
            >
              <span className="text-lg font-bold text-gray-800 group-hover:text-bain-red transition-colors">
                {item}
              </span>
              <span className="ml-auto text-bain-red opacity-0 group-hover:opacity-100 transition-opacity">
                &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
