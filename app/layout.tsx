import type { Metadata } from "next";
import { Yuji_Syuku } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const yuji = Yuji_Syuku({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yuji",
  preload: false,
});

export const metadata: Metadata = {
  title: "紅べこ",
  description: "Traditional x Tech Portfolio of Kurenaibeko",
  icons: {
    icon: "/akabeko.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${yuji.variable} antialiased min-h-screen relative flex flex-col pt-20 md:pt-28 font-sans`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
