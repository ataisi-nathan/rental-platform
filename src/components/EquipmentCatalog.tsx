"use client";

import React, { useState, useMemo } from "react";
import equipmentData from "@/data/equipment.json";
import Image from "next/image";
import { Search, ShoppingBag, ShieldCheck, Check, AlertCircle, ArrowUpDown } from "lucide-react";

export interface Equipment {
  id: number;
  equipment: string;
  category: string;
  dailyPrice: string;
  qty: number;
  deposit: string;
  status: string;
  image: string;
}

export default function EquipmentCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"default" | "price-low" | "price-high">("default");

  // Extract unique categories dynamically from the JSON
  const categories = useMemo(() => {
    const unique = Array.from(new Set(equipmentData.map((item) => item.category)));
    return ["All", ...unique];
  }, []);

  // Helper function to extract numeric value from price string (e.g., "₦50,000/day" -> 50000)
  const parsePrice = (priceStr: string): number => {
    const cleanStr = priceStr.replace(/[^0-9.]/g, "");
    return parseFloat(cleanStr) || 0;
  };

  // Filter and sort equipment list
  const filteredEquipment = useMemo(() => {
    let result = equipmentData as Equipment[];

    // 1. Filter by category
    if (selectedCategory !== "All") {
      result = result.filter((item) => item.category === selectedCategory);
    }

    // 2. Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.equipment.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
      );
    }

    // 3. Apply sorting
    if (sortBy === "price-low") {
      result = [...result].sort((a, b) => parsePrice(a.dailyPrice) - parsePrice(b.dailyPrice));
    } else if (sortBy === "price-high") {
      result = [...result].sort((a, b) => parsePrice(b.dailyPrice) - parsePrice(a.dailyPrice));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section className="w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
            Verified Fleet
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1E3A8A] mt-1 tracking-tight">
            Equipment Rental Catalog
          </h2>
          <p className="text-sm text-gray-600 mt-1 max-w-xl">
            Select high-performance machinery and professional site tools ready for immediate dispatch.
          </p>
        </div>

        {/* Filter Controls: Search & Sort */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Search Input */}
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316] transition-all"
            />
          </div>

          {/* Price Sorting Toggle */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="appearance-none bg-white border border-gray-200 text-gray-700 text-xs sm:text-sm font-medium py-2 pl-3 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316] cursor-pointer"
            >
              <option value="default">Sort by</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ArrowUpDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Category Pills (Touch-scrollable on mobile) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none border-b border-gray-200/60">
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                isSelected
                  ? "bg-[#1E3A8A] text-white shadow-md shadow-blue-900/10"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Equipment Grid */}
      {filteredEquipment.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEquipment.map((item: Equipment) => {
            const isAvailable = item.status === "Available";

            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Section */}
                <div className="relative w-full h-52 bg-slate-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.equipment}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={item.id <= 4}
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="bg-[#1E3A8A]/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                      {item.category}
                    </span>

                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md shadow-sm ${
                        isAvailable
                          ? "bg-emerald-500/90 text-white"
                          : "bg-rose-500/90 text-white"
                      }`}
                    >
                      {isAvailable ? (
                        <>
                          <Check className="w-3 h-3 stroke-[3]" />
                          <span>Available</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-3 h-3 stroke-[3]" />
                          <span>Reserved</span>
                        </>
                      )}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1E3A8A] transition-colors line-clamp-1">
                      {item.equipment}
                    </h3>

                    {/* Pricing */}
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="text-xl sm:text-2xl font-black text-[#1E3A8A]">
                        {item.dailyPrice}
                      </span>
                      <span className="text-xs font-semibold text-gray-500">/ day</span>
                    </div>
                  </div>

                  {/* Specification Breakdown */}
                  <div className="mt-4 pt-3 border-t border-gray-100 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-gray-600">
                      <span className="text-gray-500">Units Available:</span>
                      <span className="font-bold text-gray-800 bg-gray-100 px-2 py-0.5 rounded">
                        {item.qty} units
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-gray-600">
                      <span className="text-gray-500">Security Deposit:</span>
                      <span className="font-semibold text-gray-800">{item.deposit}</span>
                    </div>
                  </div>

                  {/* Reserve Button */}
                  <button
                    disabled={!isAvailable}
                    className={`mt-5 w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                      isAvailable
                        ? "bg-[#F97316] hover:bg-orange-600 text-white shadow-md shadow-orange-500/20 active:scale-[0.98]"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{isAvailable ? "Reserve Equipment" : "Currently Unavailable"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center max-w-md mx-auto my-8">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 text-gray-400">
            <Search className="w-6 h-6" />
          </div>
          <h4 className="text-base font-bold text-gray-800">No equipment found</h4>
          <p className="text-xs text-gray-500 mt-1">
            Try resetting your search query or selecting a different category.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-4 px-4 py-2 bg-[#1E3A8A] text-white text-xs font-semibold rounded-lg hover:bg-blue-900 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}