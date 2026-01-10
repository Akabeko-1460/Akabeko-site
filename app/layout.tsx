"use client";

import { LanguageProvider } from "./contexts/LanguageContext";
import { translations } from "./lib/translations";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import { Yuji_Syuku } from "next/font/google";
import "./globals.css";

const yuji = Yuji_Syuku({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yuji",
  preload: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <title>紅べこ</title>
        <meta
          name="description"
          content="Traditional x Tech Portfolio of Kurenaibeko"
        />
        <link rel="icon" href="/akabeko.jpg" />
      </head>
      <body
        className={`${yuji.variable} antialiased min-h-screen relative flex flex-col pt-20 md:pt-28 font-sans`}
      >
        <LanguageProvider translations={translations}>
          <LoadingScreen />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
