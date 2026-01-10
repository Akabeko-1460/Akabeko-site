"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

type Language = "ja" | "en";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({
  children,
  translations,
}: {
  children: ReactNode;
  translations: Record<Language, Record<string, string>>;
}) {
  const [language, setLanguageState] = useState<Language>("ja");

  // 初期化時にlocalStorageから言語設定を読み込む
  // 初期化ロジックなのでuseEffect内でのsetStateは意図的
  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "ja" || saved === "en")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(saved);
    }
    document.documentElement.lang = saved || "ja";
  }, []);

  // 言語変更ハンドラー
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[language][key] || key;
    },
    [language, translations]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
