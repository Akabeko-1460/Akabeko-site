import { readFileSync } from "fs";
import { join } from "path";
import AboutPageClient from "./AboutPageClient";

// サーバーコンポーネント - ビルド時にマークダウンファイルを読み込む
export default function AboutPage() {
  // マークダウンファイルを読み込む
  const aboutDir = join(process.cwd(), "app", "about");

  const detailContentJa = readFileSync(
    join(aboutDir, "detailprofile.md"),
    "utf-8"
  );

  const detailContentEn = readFileSync(
    join(aboutDir, "detailprofile.en.md"),
    "utf-8"
  );

  return (
    <AboutPageClient
      detailContentJa={detailContentJa}
      detailContentEn={detailContentEn}
    />
  );
}
