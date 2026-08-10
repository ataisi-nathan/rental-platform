import React from "react";
import Link from "next/link";
import Logo from "@/components/ui/logo";
import { Mail, Send, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Floating Callout Banner / Newsletter Section */}
        <div className="bg-[#11245A] border border-blue-700/50 rounded-2xl p-6 sm:p-8 mb-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Need custom rental rates for long-term projects?
            </h3>
            <p className="text-xs sm:text-sm text-blue-200">
              Subscribe to get commercial fleet pricing and instant equipment updates.
            </p>
          </div>

          <form className="flex w-full lg:w-auto items-center gap-2 max-w-md">
            <div className="relative flex-1">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white text-gray-900 pl-10 pr-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#F97316] hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-1.5 transition-colors shrink-0"
            >
              <span>Join</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* 4-Column Navigation Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-blue-800/80">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Logo />
            <p className="text-xs text-blue-200 leading-relaxed">
              Seamless machinery sourcing, logistics, and site equipment management.
            </p>
            <a
              href="tel:+2348135135008"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#F97316] hover:underline"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>081-3513-5008</span>
            </a>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F97316] mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-blue-100">
              <li><Link href="/browse" className="hover:text-white transition-colors">Rent Equipment</Link></li>
              <li><Link href="/buy" className="hover:text-white transition-colors">Buy Equipment</Link></li>
              <li><Link href="/locations" className="hover:text-white transition-colors">Locations</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F97316] mb-3">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-blue-100">
              <li><Link href="/training" className="hover:text-white transition-colors">Operator Training</Link></li>
              <li><Link href="/safety" className="hover:text-white transition-colors">Safety First</Link></li>
              <li><Link href="/payments" className="hover:text-white transition-colors">Receipts & Billing</Link></li>
              <li><Link href="/protection" className="hover:text-white transition-colors">Protection Plan</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F97316] mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-blue-100">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/legal" className="hover:text-white transition-colors">Legal Notices</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 text-center text-xs text-blue-300">
          <p>© {new Date().getFullYear()} PrimeLift Equipment Rentals. Engineered for reliability.</p>
        </div>

      </div>
    </footer>
  );
}