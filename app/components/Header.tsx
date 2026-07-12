"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "../lib/constants";
import { useLanguage } from "../contexts/LanguageContext";

function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`flex items-center border border-gray-300 rounded-full overflow-hidden text-xs font-bold ${className}`}
    >
      <button
        onClick={() => setLanguage("ja")}
        className={`px-3 py-1.5 transition-colors ${
          language === "ja"
            ? "bg-bain-red text-white"
            : "bg-white text-gray-600 hover:bg-gray-100"
        }`}
      >
        JP
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 transition-colors ${
          language === "en"
            ? "bg-bain-red text-white"
            : "bg-white text-gray-600 hover:bg-gray-100"
        }`}
      >
        EN
      </button>
    </div>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ページ遷移時はメニューを閉じる
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // メニュー表示中は背景のスクロールを固定する
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // 回転などで md 以上の幅になったらメニューを閉じる
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setIsMobileMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-warm-bg/95 backdrop-blur-sm transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="container-custom h-20 flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-transparent group-hover:border-bain-red transition-all">
              <Image
                src="/akabeko.jpg"
                alt="Akabeko Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="font-serif text-xl font-bold tracking-tight text-text-main">
              {language === "ja" ? (
                <>
                  紅<span className="text-black">べこ</span>
                </>
              ) : (
                <span className="text-black">Akabeko</span>
              )}
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center absolute left-[48%] top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center gap-8 lg:gap-14">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-wider text-gray-600 hover:text-bain-red transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-bain-red transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>
          </nav>

          {/* Icons / Social / Language */}
          <div className="flex items-center gap-3 sm:gap-4 text-gray-600">
            <a
              href="https://github.com/Akabeko-1460"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-bain-red transition-colors"
            >
              <Github size={22} />
            </a>

            {/* Language Switcher（スマホではドロワー内に表示） */}
            <LanguageSwitcher className="hidden sm:flex" />

            <button
              aria-label="Menu"
              aria-expanded={isMobileMenuOpen}
              className="md:hidden p-2 -mr-2 hover:text-bain-red transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* 背景オーバーレイ */}
            <motion.div
              className="fixed inset-0 z-[60] bg-black/35 backdrop-blur-[2px] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* ドロワー本体 */}
            <motion.nav
              className="fixed top-0 right-0 bottom-0 z-[70] w-[80vw] max-w-[320px] md:hidden flex flex-col bg-warm-bg rounded-l-2xl shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Mobile navigation"
            >
              {/* 赤べこカラーのアクセントライン */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-bain-red via-bain-red/60 to-transparent" />

              {/* ヘッダー行 */}
              <div className="flex items-center justify-between px-6 pb-2 pt-[max(1.5rem,env(safe-area-inset-top))]">
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400">
                  Menu
                </span>
                <button
                  aria-label="Close menu"
                  className="p-2 -mr-2 text-gray-500 hover:text-bain-red transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={26} />
                </button>
              </div>

              {/* ナビリンク */}
              <div className="flex-1 flex flex-col justify-center px-7">
                {NAV_LINKS.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 32 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 16 }}
                      transition={{
                        delay: 0.08 + i * 0.06,
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex items-center gap-4 py-4 border-b border-black/5 active:bg-black/[0.03] transition-colors"
                      >
                        <span className="text-[11px] font-bold tracking-widest text-bain-red/60">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`font-serif text-2xl font-bold tracking-wide transition-colors group-hover:text-bain-red ${
                            isActive ? "text-bain-red" : "text-text-main"
                          }`}
                        >
                          {link.label}
                        </span>
                        {isActive && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-bain-red" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* フッター行：言語切替 + GitHub */}
              <motion.div
                className="px-7 pb-[max(1.75rem,env(safe-area-inset-bottom))]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <div className="flex items-center justify-between pt-5 border-t border-black/10">
                  <LanguageSwitcher />
                  <a
                    href="https://github.com/Akabeko-1460"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-600 hover:text-white hover:bg-bain-red hover:border-bain-red transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
                <p className="mt-5 font-serif text-xs text-gray-400 tracking-widest">
                  紅べこ — Akabeko
                </p>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
