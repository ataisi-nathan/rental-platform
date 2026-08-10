import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function AccountBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 sm:my-16">
      <div className="bg-[#1E3A8A] text-white py-8 sm:py-12 px-5 sm:px-8 lg:px-12 rounded-xl sm:rounded-2xl shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Header */}
          <div className="text-center lg:text-left">
            <span className="text-xs uppercase tracking-wider font-bold text-[#F97316]">
              Get Started Today
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">
              Create an Account to <span className="text-[#F97316] block sm:inline">Manage, Rent & Pay</span>
            </h3>
          </div>

          {/* Features checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-blue-100">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0" />
                <span>Access reports & dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0" />
                <span>Set up notifications</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0" />
                <span>Save payment methods</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0" />
                <span>Manage active rentals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0" />
                <span>Quick-reorder equipment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0" />
                <span>24/7 Priority support</span>
              </div>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col items-center lg:items-end justify-center gap-2 sm:gap-3">
            <Link
              href="/signup"
              className="w-full sm:w-auto px-6 py-3 bg-[#F97316] hover:bg-orange-600 text-white font-semibold rounded-lg text-center shadow transition-colors text-sm sm:text-base"
            >
              Create Account
            </Link>
            <div className="text-xs text-blue-200 flex items-center gap-1 mt-1">
              <span>Already have an account?</span>
              <Link href="/login" className="text-[#F97316] hover:underline font-semibold">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}