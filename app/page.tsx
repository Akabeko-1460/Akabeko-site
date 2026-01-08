"use client";

import Akabeko3D from "./components/Akabeko3D";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import TechStack from "./components/TechStack";
import CategoryCards from "./components/CategoryCards";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with 3D */}
      <section className="relative w-full flex flex-col items-center justify-center pt-8 pb-0">
        <Akabeko3D />
      </section>

      {/* Tech Stack / Introduction */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold mb-6 border-l-4 border-bain-red pl-4">
                あいさつ
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                こんにちは！紅べこです。みんなからはべこと呼ばれています。
                <br />
                サイトを見に来てくれて本当にありがとうございます！
                <br />
                今は大学で情報科学を専攻していて、ITコンサル、PMを目指して勉強中です。
              </p>

              <TechStack />

              <Link
                href="/about"
                className="inline-flex items-center text-white bg-black px-6 py-3 font-bold uppercase text-xs tracking-wider hover:bg-bain-red transition-colors"
              >
                More About Me <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <CategoryCards />
          </div>
        </div>
      </section>
    </div>
  );
}
