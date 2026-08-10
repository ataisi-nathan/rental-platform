"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/logo";
import { SearchIcon, User2Icon, ShoppingBasket, Menu, X } from "lucide-react";

interface HeaderProps {
  onToggleMobileNav?: () => void;
}

export default function Header({ onToggleMobileNav }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-[#1E3A8A] text-white sticky top-0 z-40 border-b border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Logo & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMobileNav}
            className="lg:hidden p-1.5 text-blue-100 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <Menu className="w-6 h-6" />
          </button>
          <Link href="/" className="flex items-center shrink-0">
            <Logo />
          </Link>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex flex-1 max-w-xl mx-4">
          <form className="relative flex items-center w-full">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="What equipment are you looking for?"
              className="w-full bg-white text-gray-900 pl-4 pr-10 py-2 sm:py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]"
            />
            <button
              type="submit"
              className="absolute right-2 p-1.5 text-gray-500 hover:text-[#1E3A8A] transition-colors"
              aria-label="Search"
            >
              <SearchIcon className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* User Navigation & Cart */}
        <div className="flex items-center gap-2 sm:gap-5 shrink-0">
          {/* Mobile Search Toggle Button */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="md:hidden p-2 text-blue-100 hover:text-white rounded-lg"
            aria-label="Search Toggle"
          >
            <SearchIcon className="w-5 h-5" />
          </button>

          <Link
            href="/login"
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium hover:text-[#F97316] transition-colors"
          >
            <User2Icon className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Log In / Sign Up</span>
          </Link>

          <Link
            href="/cart"
            className="p-2 bg-blue-800 hover:bg-[#F97316] rounded-lg transition-colors relative"
            aria-label="View Cart"
          >
            <ShoppingBasket className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>

      {/* Mobile Collapsible Search Input */}
      {isSearchOpen && (
        <div className="md:hidden px-4 pb-3 pt-1 border-t border-blue-800 bg-[#1E3A8A]">
          <form className="relative flex items-center w-full">
            <input
              type="search"
              name="search"
              placeholder="Search equipment..."
              className="w-full bg-white text-gray-900 pl-4 pr-10 py-2 rounded-lg text-sm focus:outline-none"
              autoFocus
            />
            <button
              type="submit"
              className="absolute right-2 p-1 text-gray-500"
            >
              <SearchIcon className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </header>
  );
}