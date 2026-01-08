import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CategoryCards() {
  return (
    <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
      <Link
        href="/books"
        className="group block bg-gray-50 h-[200px] relative overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
      >
        {/* Image Banner Layer */}
        <div className="absolute top-0 left-0 w-full h-[75%] z-0">
          <Image
            src="/books.jpg"
            alt="Books"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-bain-red opacity-0 group-hover:opacity-10 transition-opacity" />
        </div>

        <div className="absolute inset-0 bg-transparent z-10" />

        <div className="absolute bottom-4 left-4 z-20">
          <h4 className="text-xl font-bold">Books</h4>
        </div>
        <ArrowRight className="absolute top-4 right-4 text-white drop-shadow-md group-hover:text-bain-red transition-colors z-20" />
      </Link>

      <Link
        href="/life"
        className="group block bg-gray-50 h-[200px] relative overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
      >
        {/* Image Banner Layer */}
        <div className="absolute top-0 left-0 w-full h-[75%] z-0">
          <Image
            src="/life.jpg"
            alt="Life"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-bain-red opacity-0 group-hover:opacity-10 transition-opacity" />
        </div>

        <div className="absolute inset-0 bg-transparent z-10" />

        <div className="absolute bottom-4 left-4 z-20">
          <h4 className="text-xl font-bold">Life</h4>
        </div>
        <ArrowRight className="absolute top-4 right-4 text-white drop-shadow-md group-hover:text-bain-red transition-colors z-20" />
      </Link>
    </div>
  );
}
