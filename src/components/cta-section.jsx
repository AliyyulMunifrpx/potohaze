"use client";

import Link from "next/link.js";
import { motion } from "framer-motion";

// Easing kustom premium
const LUXURY_EASE = [0.16, 1, 0.3, 1];

// Parent trigger: Mengatur jeda kemunculan elemen secara berurutan
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Varian Judul
const titleVariants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", y: 60 },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    y: 0,
    transition: { duration: 1, ease: LUXURY_EASE },
  },
};

// Varian Kotak Aksen
// Menggantikan class: translate-x-[-110%] translate-y-[15%]
const boxVariants = {
  hidden: {
    clipPath: "inset(100% 0% 0% 0%)",
    x: "-110%",
    y: "45%", // Mulai sedikit lebih rendah
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    x: "-110%",
    y: "15%", // Kembali ke titik persis Tailwind aslinya
    transition: { duration: 1, ease: LUXURY_EASE },
  },
};

// Varian Tombol
// Menggantikan class: -translate-y-[130%]
const btnVariants = {
  hidden: {
    clipPath: "inset(100% 0% 0% 0%)",
    y: "-80%", // Mulai dari posisi yang lebih rendah dari target
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    y: "-130%", // Kembali ke titik persis Tailwind aslinya
    transition: { duration: 1, ease: LUXURY_EASE },
  },
};

export default function CtaSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Animasi terpicu saat 30% area ini masuk layar
      className="grid min-h-[100dvh] w-full grid-cols-1 grid-rows-3 px-8 text-center lg:px-16"
    >
      {/* JUDUL */}
      <motion.h2
        variants={titleVariants}
        className="z-10 col-start-1 row-start-2 row-end-3 text-5xl text-black lg:text-7xl"
      >
        Siap Mengabadikan <br />
        <span className="italic">Momenmu?</span>
      </motion.h2>

      {/* KOTAK AKSEN (Class translasi dipindah ke boxVariants) */}
      <motion.div
        variants={boxVariants}
        className="z-0 col-start-1 row-start-1 row-end-2 ml-auto aspect-[3/4] w-56 bg-primary"
      />

      {/* TOMBOL (Class translasi dipindah ke btnVariants) */}
      <motion.div
        variants={btnVariants}
        className="group z-20 col-start-1 row-start-3 mx-auto flex aspect-square w-20 items-center justify-center rounded-full border border-black transition hover:border-none hover:bg-primary"
      >
        <Link
          href="#contact"
          className="flex h-full w-full items-center justify-center font-sans"
        >
          Booking
        </Link>
      </motion.div>
    </motion.div>
  );
}
