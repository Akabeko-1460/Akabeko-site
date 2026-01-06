export default function Footer() {
  return (
    <footer className="bg-white/50 border-t border-red-900/10 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} Akabeko. All rights reserved.
        </p>
        <div className="mt-2 text-xs text-foreground/40 font-mono">
          Designed with ❤️ and 🔴
        </div>
      </div>
    </footer>
  );
}
