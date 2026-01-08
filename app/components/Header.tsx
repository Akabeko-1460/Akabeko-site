"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "../lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-warm-bg/95 backdrop-blur-sm transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container-custom h-20 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-transparent group-hover:border-bain-red transition-all">
            <Image
              src="/akabeko.jpg"
              alt="Akabeko Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="font-serif text-xl font-bold tracking-tight text-text-main">
            紅<span className="text-black">べこ</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Split links into two groups for visual balance if needed, or mapping normally. 
              The original design had 2 on left, 2 on right. 
              We can just map them all linearly or keep the split if strictly required.
              However, to simplify maintenance, let's map them.
              Original had space-x-10 between pairs and gap-12 between groups.
              Let's maximize simplicity while maintaining the look.
          */}
          <div className="flex items-center gap-10">
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

        {/* Icons / Social */}
        <div className="flex items-center space-x-4 text-gray-600">
          <button
            aria-label="Menu"
            className="md:hidden hover:text-bain-red transition-colors z-[60]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-[70px] right-4 bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-white/20 p-4 w-48 flex flex-col space-y-3 md:hidden animate-in fade-in zoom-in-95 duration-200 z-[50]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-gray-700 hover:text-bain-red hover:bg-gray-50 px-3 py-2 rounded-lg transition-all uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
