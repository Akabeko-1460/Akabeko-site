"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LifePage() {
  const items = [
    {
      title: "Travel to Kyoto",
      date: "2024.11",
      type: "Travel",
      size: "col-span-2 row-span-2",
      img: "/hero-office.png",
    },
    {
      title: "Coffee Brewing",
      date: "Weekend Routine",
      type: "Hobby",
      size: "col-span-1 row-span-1",
      img: "https://placehold.co/400x400/efe/aaa?text=Coffee",
    },
    {
      title: "Film Photography",
      date: "Collection",
      type: "Hobby",
      size: "col-span-1 row-span-2",
      img: "https://placehold.co/400x800/eef/aaa?text=Camera",
    },
    {
      title: "Museum Visit",
      date: "2024.10",
      type: "Art",
      size: "col-span-1 row-span-1",
      img: "https://placehold.co/400x400/fee/aaa?text=Art",
    },
    {
      title: "My Desk Setup",
      date: "2025",
      type: "Tech",
      size: "col-span-2 row-span-1",
      img: "https://placehold.co/600x400/222/fff?text=Desk+Setup",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-warm-bg min-h-screen">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-4 text-center">Life & Gallery</h1>
        <p className="text-center text-gray-500 mb-12">
          プライベートの記録や趣味の世界。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`${item.size} relative group overflow-hidden bg-gray-200 cursor-pointer`}
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider mb-1 text-bain-red">
                  {item.type}
                </span>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-xs text-gray-300">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
