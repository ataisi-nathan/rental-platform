"use client";

import React, { useState, useMemo } from "react";
import equipmentData from "@/data/equipment.json";
import Image from "next/image";

// Type definition for the equipment item
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

  // Extract unique categories dynamically from the JSON
  const categories = useMemo(() => {
    const unique = Array.from(new Set(equipmentData.map((item) => item.category)));
    return ["All", ...unique];
  }, []);

  // Filter equipment based on selected category
  const filteredEquipment = useMemo(() => {
    if (selectedCategory === "All") return equipmentData;
    return equipmentData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Equipment Rental Catalog</h1>
        <p className="text-gray-600">Browse and filter equipment by category</p>
      </header>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-blue-600 text-white shadow"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Equipment Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredEquipment.map((item: Equipment) => (
          <div
            key={item.id}
            className="flex flex-col justify-between bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Local Image Rendering */}
            <div className="relative w-full h-48 bg-gray-100">
              <Image
                src={item.image}
                alt={item.equipment}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
                priority={item.id <= 4}
              />
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      item.status === "Available"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <h2 className="text-lg font-semibold text-gray-900 mb-2">{item.equipment}</h2>

                <div className="text-2xl font-bold text-gray-900 mb-4">
                  {item.dailyPrice} <span className="text-sm text-gray-500 font-normal">/ day</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-3 space-y-1.5 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Quantity Available:</span>
                  <span className="font-semibold text-gray-800">{item.qty}</span>
                </div>
                <div className="flex justify-between">
                  <span>Required Deposit:</span>
                  <span className="font-semibold text-gray-800">{item.deposit}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEquipment.length === 0 && (
        <p className="text-center text-gray-500 py-12">No equipment found for this category.</p>
      )}
    </div>
  );
}