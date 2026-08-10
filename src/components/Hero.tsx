import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#1E3A8A] text-white py-10 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Content */}
        <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Rent Professional Equipment Without the Hassle
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-blue-100 max-w-xl mx-auto lg:mx-0">
            From power tools to heavy-duty construction machinery, PrimeLift Equipment Rentals makes it easy to find, reserve, and manage equipment—all in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
            <Link
              href="/browse"
              className="w-full sm:w-auto px-6 py-3 bg-[#F97316] hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition-colors text-center text-sm sm:text-base"
            >
              Browse Equipment
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-[#1E3A8A] text-white font-semibold rounded-lg transition-colors text-center text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-64 sm:h-80 lg:h-100 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-2 sm:border-4 border-blue-800">
          <Image
            src="/images/equipment-rental.jpg"
            alt="PrimeLift Heavy Equipment"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}