"use client";

import Link from "next/link.js";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { name: "Beranda", href: "#beranda" },
    { name: "Tentang Saya", href: "#tentang-saya" },
    { name: "Galery", href: "#galery" },
    { name: "Harga", href: "#harga" },
    { name: "S&K", href: "#syarat-ketentuan" },
    { name: "Contact", href: "#contact" },
  ];

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link
          href="#beranda"
          onClick={handleMenuClick}
          className="text-xl font-bold italic text-black"
        >
          Potohaze
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 font-sans text-sm text-black md:flex">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-opacity hover:opacity-60"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Burger */}
        <button
          type="button"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-black transition-transform duration-300 ${
              isOpen ? "translate-y-[4px] rotate-45" : ""
            }`}
          />

          <span
            className={`h-[2px] w-6 bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-[2px] w-6 bg-black transition-transform duration-300 ${
              isOpen ? "-translate-y-[4px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-white transition-all duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="flex min-h-screen flex-col items-center justify-center gap-8 font-sans text-lg text-black">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleMenuClick}
              className="transition-opacity hover:opacity-50"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
