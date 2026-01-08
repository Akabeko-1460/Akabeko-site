"use client";

import { ArrowRight } from "lucide-react";

export default function BrandMoment() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row shadow-xl overflow-hidden">
          {/* Image Side */}
          <div className="w-full md:w-3/5 h-[300px] md:h-[500px] bg-gray-200 relative">
            <img
              src="/brand-handshake.png"
              alt="Brand Moment"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Side */}
          <div className="w-full md:w-2/5 bg-white p-8 md:p-12 flex flex-col justify-center relative">
            <div className="absolute left-0 top-12 bottom-12 w-1 bg-bain-red hidden md:block"></div>

            <h6 className="text-gray-500 font-bold uppercase tracking-widest mb-4 text-xs">
              Client Results
            </h6>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 leading-tight">
              最高の結果を、
              <br />
              ともに。
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              私たちはクライアントの皆様と同じ野心を抱き、同じ視点に立って、かつてない成果を追求します。
            </p>

            <a
              href="#"
              className="text-bain-red font-bold uppercase text-sm flex items-center hover:underline"
            >
              ケーススタディを読む <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
