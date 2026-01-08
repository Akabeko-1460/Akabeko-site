# Akabeko Site (Curenaibeko)

IT コンサルタント、PM を目指す情報科学専攻の学生 **Akabeko (紅べこ)** のポートフォリオサイトです。

## 特徴

- **3D ヒーローセクション**: `@react-three/fiber` を使用したインタラクティブな赤べこの 3D モデル。
- **テックスタック表示**: Next.js, React, TypeScript, Python などのスキル一覧。
- **ナビゲーションカード**: "Books" と "Life" セクションへのビジュアルリンク。
- **レスポンシブデザイン**: Tailwind CSS を使用し、モバイルとデスクトップに対応。

## 使用技術 (Tech Stack)

- **フレームワーク**: [Next.js](https://nextjs.org) (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **3D グラフィックス**: Three.js / React Three Fiber
- **アイコン**: React Icons, Lucide React

## 始め方 (Getting Started)

1.  **リポジトリのクローン:**

    ```bash
    git clone https://github.com/your-username/curenaibeko-site.git
    cd curenaibeko-site
    ```

2.  **依存関係のインストール:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **開発サーバーの起動:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  **ブラウザで開く:**
    [http://localhost:3000](http://localhost:3000) を開いてサイトを確認してください。

## ディレクトリ構成

- `app/`: Next.js App Router のページとレイアウト。
  - `components/`: 再利用可能な UI コンポーネント。
  - `lib/`: 共通のロジックや定数。
- `public/`: 静的アセット (画像, 3D モデル)。

## ライセンス

[MIT](LICENSE)
