import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#F97316] mb-3 sm:mb-4">
              Find Equipment
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-blue-100">
              <li><Link href="/browse" className="hover:text-white transition-colors">Rent Equipment</Link></li>
              <li><Link href="/buy" className="hover:text-white transition-colors">Buy Equipment</Link></li>
              <li><Link href="/credit" className="hover:text-white transition-colors">Credit Application</Link></li>
              <li><Link href="/locations" className="hover:text-white transition-colors">Find a Location</Link></li>
              <li><Link href="/used" className="hover:text-white transition-colors">Purchase Used Equipment</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#F97316] mb-3 sm:mb-4">
              Customer Support
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-blue-100">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/tracker" className="hover:text-white transition-colors">Rental Tracker</Link></li>
              <li><Link href="/signup" className="hover:text-white transition-colors">Create Account</Link></li>
              <li><Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/protection" className="hover:text-white transition-colors">Rental Protection Plan</Link></li>
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-base sm:text-lg font-bold text-[#F97316] mb-3 sm:mb-4">
              About Us
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-blue-100">
              <li><Link href="/why-rent" className="hover:text-white transition-colors">Why Rent?</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About PrimeLift Rentals</Link></li>
              <li><Link href="/legal" className="hover:text-white transition-colors">Legal & Compliance</Link></li>
              <li><Link href="/investors" className="hover:text-white transition-colors">Investor Relations</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-blue-800 text-center text-xs text-blue-200">
          <p>© {new Date().getFullYear()} PrimeLift Equipment Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}