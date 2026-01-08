export default function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="container-custom text-center">
        <h3 className="text-3xl font-bold mb-12 tracking-widest text-white">
          連絡先
        </h3>

        <form className="max-w-lg mx-auto text-left mb-16">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-xs font-bold text-gray-400 mb-2"
            >
              お名前
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-bain-red transition-colors rounded-sm"
              placeholder="あなたのお名前"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-xs font-bold text-gray-400 mb-2"
            >
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-bain-red transition-colors rounded-sm"
              placeholder="あなたのメールアドレス"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="message"
              className="block text-xs font-bold text-gray-400 mb-2"
            >
              メッセージ
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-bain-red transition-colors rounded-sm"
              placeholder="メッセージを入力してください"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-bain-red hover:bg-red-700 text-white font-bold py-4 uppercase tracking-widest transition-colors rounded-sm"
          >
            送信
          </button>
        </form>

        <p className="text-gray-500 text-sm mb-4">
          または直接メールでお問い合わせ
        </p>
        <a
          href="mailto:b1024247@fun.ac.jp"
          className="text-lg font-light tracking-wide hover:text-bain-red transition-colors border-b border-transparent hover:border-bain-red pb-1 inline-block"
        >
          b1024247@fun.ac.jp
        </a>
      </div>
    </footer>
  );
}
