"use client";

import React from "react";
import Link from "next/link";
import { X } from "lucide-react";

const navLinks = [
  { href: "/buy", label: "Buy" },
  { href: "/sell", label: "Sell" },
  { href: "/payments", label: "Payments & Receipt" },
  { href: "/locations", label: "Locations" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/training", label: "Training" },
  { href: "/safety", label: "Safety" },
  { href: "/company", label: "Company" },
];

interface NavbarProps {
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export default function Navbar({ isMobileOpen, onCloseMobile }: NavbarProps) {
  return (
    <>
      {/* Desktop Horizontal Navigation */}
      <nav className="bg-white border-b border-gray-200 shadow-sm hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-between py-3 text-sm font-semibold text-gray-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-[#F97316] transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={onCloseMobile}
          />

          {/* Drawer Menu */}
          <aside className="fixed top-0 left-0 bottom-0 w-4/5 max-w-xs bg-white z-50 p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <span className="font-bold text-[#1E3A8A] text-lg">Menu</span>
                <button
                  onClick={onCloseMobile}
                  className="p-1 text-gray-500 hover:text-gray-900"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onCloseMobile}
                      className="block py-2 text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <Link
                href="/login"
                onClick={onCloseMobile}
                className="block w-full py-2.5 text-center bg-[#1E3A8A] text-white font-semibold rounded-lg text-sm"
              >
                Log In / Sign Up
              </Link>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}