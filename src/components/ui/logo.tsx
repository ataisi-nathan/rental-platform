import React from "react";

export default function Logo() {
  return (
    <div className="inline-flex items-center rounded-lg overflow-hidden border border-white/20 shadow-sm select-none font-sans">
      <div className="bg-[#1E3A8A] text-white font-extrabold text-sm sm:text-base px-3 py-1.5 tracking-tight flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#F97316] inline-block"></span>
        PRIMELIFT
      </div>
      <div className="bg-[#F97316] text-white font-bold text-[10px] sm:text-xs px-2.5 py-2 tracking-wider uppercase">
        Rentals
      </div>
    </div>
  );
}