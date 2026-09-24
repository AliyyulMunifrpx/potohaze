"use client";

import Link from "next/link.js";
import { useState } from "react";
import { data } from "../../data/person.js";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { name: "Beranda", href: "#beranda" },
    { name: "Tentang Saya", href: "#tentang-saya" },
    { name: "gallery", href: "#gallery" },
    { name: "Harga", href: "#harga" },
    { name: "S&K", href: "#syarat-ketentuan" },
    { name: "Contact", href: "#kontak" },
  ];

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  // Easing premium (Luxury)
  const LUXURY_EASE = [0.16, 1, 0.3, 1];

  // Container Variant: Trigger saat halaman pertama kali load (Desktop & Logo)
  const navContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Item Variant: Curtain reveal murni untuk tiap teks / tombol
  const itemVariants = {
    hidden: { clipPath: "inset(100% 0% 0% 0%)", y: 40 },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      y: 0,
      transition: { duration: 1, ease: LUXURY_EASE },
    },
  };

  // Variant untuk Layar Mobile Menu (Background turun dari atas ke bawah)
  const mobileMenuVariants = {
    hidden: { clipPath: "inset(0% 0% 100% 0%)" },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        duration: 0.8,
        ease: LUXURY_EASE,
        staggerChildren: 0.1,
        delayChildren: 0.3, // Tunggu background turun sebentar baru munculkan teks
      },
    },
    exit: {
      clipPath: "inset(0% 0% 100% 0%)",
      transition: { duration: 0.6, ease: LUXURY_EASE },
    },
  };

  return (
    // Menggunakan motion.nav agar animasi load terpicu otomatis
    <motion.nav
      variants={navContainerVariants}
      initial="hidden"
      animate="visible"
      className="fixed left-0 top-0 z-50 w-full bg-white"
    >
      <div className="mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <motion.div variants={itemVariants}>
          <Link
            href="#beranda"
            onClick={handleMenuClick}
            className="text-xl font-bold italic text-black"
          >
            {data.name}
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 font-sans text-sm text-black md:flex">
          {menu.map((item) => (
            <motion.div variants={itemVariants} key={item.href}>
              <Link
                href={item.href}
                className="transition-opacity hover:opacity-60"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Burger Button */}
        <motion.button
          variants={itemVariants}
          type="button"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          {/* Animasi X pada burger murni menggunakan class Tailwind bawaan Anda */}
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
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {/* Mengganti class visibility/opacity dengan AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute left-0 top-0 w-full min-h-[100dvh] bg-white md:hidden"
          >
            <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-8 font-sans text-lg text-black">
              {menu.map((item) => (
                // Menggunakan ulang itemVariants agar teks muncul seperti tirai
                <motion.div variants={itemVariants} key={item.href}>
                  <Link
                    href={item.href}
                    onClick={handleMenuClick}
                    className="transition-opacity hover:opacity-50"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
