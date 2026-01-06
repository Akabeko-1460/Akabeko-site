"use client";

import { motion } from "framer-motion";

const lifeEvents = [
  {
    date: "2025.12.31",
    title: "年越し",
    desc: "会津で年越し蕎麦を食べました。",
  },
  { date: "2025.10.15", title: "紅葉狩り", desc: "磐梯山の紅葉が綺麗でした。" },
  { date: "2025.08.20", title: "夏祭り", desc: "地元の夏祭りに参加。" },
];

export default function Life() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Life</h1>
        <p className="text-muted">日々の記録、趣味、その他。</p>
      </div>

      <div className="space-y-8">
        {lifeEvents.map((event, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col md:flex-row gap-8 box-soft p-8 items-start"
          >
            <div className="md:w-32 flex-shrink-0 pt-1">
              <span className="text-xs font-serif font-bold text-primary/60 tracking-widest block mb-1">
                DATE
              </span>
              <span className="text-lg font-serif font-medium text-foreground">
                {event.date}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 font-serif text-primary">
                {event.title}
              </h3>
              <p className="text-muted leading-relaxed font-serif text-sm">
                {event.desc}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
