import { ArrowRight } from "lucide-react";

export default function CtaBand() {
  return (
    <section className="bg-bain-red text-white">
      <div className="flex flex-col md:flex-row">
        {/* Left: Contact */}
        <div className="flex-1 p-16 md:p-24 border-b md:border-b-0 md:border-r border-red-700 hover:bg-red-700 transition-colors cursor-pointer group">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact us</h2>
          <div className="flex items-center font-bold text-lg">
            お問い合わせ
            <ArrowRight
              size={24}
              className="ml-4 transform group-hover:translate-x-2 transition-transform"
            />
          </div>
        </div>

        {/* Right: Careers */}
        <div className="flex-1 p-16 md:p-24 hover:bg-red-700 transition-colors cursor-pointer group">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Careers</h2>
          <div className="flex items-center font-bold text-lg">
            採用情報
            <ArrowRight
              size={24}
              className="ml-4 transform group-hover:translate-x-2 transition-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
