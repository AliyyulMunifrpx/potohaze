"use client";

import Link from "next/link.js";
import { motion } from "framer-motion";

// Easing kustom untuk efek premium/smooth deceleration
const LUXURY_EASE = [0.16, 1, 0.3, 1];

// Parent trigger: Mengatur jeda (stagger) kemunculan elemen
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Varian khusus Judul
const titleVariants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", y: 60 },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    y: 0,
    transition: { duration: 1, ease: LUXURY_EASE },
  },
};

// Varian khusus Kotak Aksen (menggantikan -translate-y-[15%])
const boxVariants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", y: "15%" }, // Mulai sedikit lebih rendah
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    y: "-15%", // Titik akhir persis sama dengan Tailwind aslinya
    transition: { duration: 1, ease: LUXURY_EASE },
  },
};

// Varian khusus Tombol Bulat (menggantikan -translate-y-[130%])
const btnVariants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", y: "-80%" }, // Mulai sedikit lebih rendah dari target
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    y: "-130%", // Titik akhir persis sama dengan Tailwind aslinya
    transition: { duration: 1, ease: LUXURY_EASE },
  },
};

export default function MainSection() {
  return (
    // motion.div pembungkus utama yang men-trigger seluruh elemen secara berurutan
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid min-h-[100dvh] w-full grid-cols-1 grid-rows-2"
    >
      {/* JUDUL */}
      <motion.h1
        variants={titleVariants}
        className="row-start-1 mt-auto w-full text-center text-5xl text-black z-10 lg:text-7xl"
      >
        Cerita Wisudamu, <br />
        <span className="italic"> Diabadikan Sempurna.</span>
      </motion.h1>

      {/* KOTAK AKSEN (Class -translate-y-[15%] sudah dipindah ke variants) */}
      <motion.div
        variants={boxVariants}
        className="col-start-1 row-start-2 row-end-3 mx-auto mb-auto aspect-[3/4] h-64 bg-primary z-0"
      ></motion.div>

      {/* TOMBOL LINK (Class -translate-y-[130%] sudah dipindah ke variants) */}
      <motion.div
        variants={btnVariants}
        className="group col-start-1 row-start-2 row-end-3 mx-auto mt-auto flex aspect-square w-16 items-center justify-center rounded-full border border-black transition ease-out hover:border-none hover:bg-primary"
      >
        <Link
          href="#gallery"
          className="flex h-full w-full items-center justify-center font-sans text-center"
        >
          gallery
        </Link>
      </motion.div>
    </motion.div>
  );
}
