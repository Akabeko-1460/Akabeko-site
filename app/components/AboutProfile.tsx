"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

type AboutProfileProps = {
  detailContentJa: string;
  detailContentEn: string;
};

export default function AboutProfile({
  detailContentJa,
  detailContentEn,
}: AboutProfileProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language, t } = useLanguage();

  const detailContent = language === "ja" ? detailContentJa : detailContentEn;

  return (
    <section className="bg-white p-8 md:p-12 shadow-sm border-t-4 border-bain-red mb-16 flex flex-col md:flex-row items-center gap-8">
      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 border-4 border-gray-50">
        <Image src="/akabeko.jpg" className="object-cover" alt="Profile" fill />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl font-bold mb-2">{t("about.profile.name")}</h1>
        <p className="text-bain-red font-bold uppercase tracking-widest text-xs mb-4">
          Aspiring IT Consultant / PM
        </p>
        <div className="text-gray-600 leading-relaxed text-sm">
          <p>
            {t("about.profile.desc1")}
            <br />
            {t("about.profile.desc2")}
          </p>

          {isExpanded && (
            <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300 whitespace-pre-wrap">
              {detailContent}
            </div>
          )}

          <div className="flex justify-end mt-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center text-gray-400 font-bold text-xs hover:text-gray-600 transition-colors focus:outline-none"
            >
              {isExpanded ? (
                <>
                  Close <ChevronUp size={16} className="ml-1" />
                </>
              ) : (
                <>
                  More <ChevronDown size={16} className="ml-1" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
