"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import EquipmentCatalog from "@/components/EquipmentCatalog";
import AccountBanner from "@/components/AccountBanner";
import SupportBanner from "@/components/SupportBanner";
import Footer from "@/components/Footer";

export default function Home() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      <Header onToggleMobileNav={() => setIsMobileNavOpen(!isMobileNavOpen)} />
      <Navbar
        isMobileOpen={isMobileNavOpen}
        onCloseMobile={() => setIsMobileNavOpen(false)}
      />

      <main className="grow">
        <Hero />
        <WhyChooseUs />

        <section className="py-10 sm:py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <EquipmentCatalog />
          </div>
        </section>

        <section className="py-10 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E3A8A]">
              PrimeLift is always ready when you are.
            </h2>
            <p className="text-xs sm:text-base text-gray-600 leading-relaxed">
              PrimeLift Equipment Rentals provides reliable construction, industrial, landscaping, and event equipment to individuals, contractors, and businesses. We focus on making equipment rental simple through transparent pricing, dependable equipment, and responsive customer service.
            </p>
            <p className="text-xs sm:text-base text-gray-600 leading-relaxed">
              Whether it's a one-day rental or a long-term commercial project, we ensure you get the tools you need without the heavy burden of equipment ownership.
            </p>
          </div>
        </section>

        <AccountBanner />
        <SupportBanner />
      </main>

      <Footer />
    </div>
  );
}