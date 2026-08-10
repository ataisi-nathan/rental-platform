import React from "react";
import { PhoneCall } from "lucide-react";

export default function SupportBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 bg-orange-100 text-[#F97316] rounded-xl flex items-center justify-center shrink-0">
            <PhoneCall className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
              Direct Support
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1E3A8A]">
              Need help finding the right equipment?
            </h3>
            <p className="text-gray-600 text-sm mt-0.5">
              Our technical team is standing by to recommend gear for your site specifications.
            </p>
          </div>
        </div>

        <a
          href="tel:+2348135135008"
          className="px-6 py-3.5 bg-[#1E3A8A] hover:bg-blue-900 text-white font-bold rounded-xl transition-colors shrink-0 text-center"
        >
          Call 081-3513-5008
        </a>
      </div>
    </section>
  );
}