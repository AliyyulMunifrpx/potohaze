"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const packages = [
  {
    name: "potoexclusive",
    price: "400K",
    fasilitas: [
      "Sesi Foto 90 Menit",
      "1 Orang",
      "Semua Softfile Mentah Tanpa Batas",
      "25 Foto Edit / Color Grading",
      "Penyimpanan File 14 Hari",
      "Pengiriman Resolusi Tinggi Terbaik",
    ],
    foto: [
      {
        src: "/assets/price/1 1.webp",
        alt: "Dokumentasi wisuda",
      },
      {
        src: "/assets/price/1 2.webp",
        alt: "Dokumentasi wisuda",
      },
      {
        src: "/assets/price/1 3.webp",
        alt: "Dokumentasi wisuda",
      },
    ],
  },
  {
    name: "potoessential",
    price: "325K",
    fasilitas: [
      "Sesi Foto 60 Menit",
      "1 Orang",
      "Semua Softfile Mentah Tanpa Batas",
      "15 Foto Edit / Color Grading",
      "Penyimpanan File 14 Hari",
    ],
    foto: [
      {
        src: "/assets/price/2 1.webp",
        alt: "Dokumentasi wisuda",
      },
      {
        src: "/assets/price/2 2.webp",
        alt: "Dokumentasi wisuda",
      },
      {
        src: "/assets/price/2 3.webp",
        alt: "Dokumentasi wisuda",
      },
      {
        src: "/assets/price/2 4.webp",
        alt: "Dokumentasi wisuda",
      },
    ],
  },
];

// Easing kustom untuk feel luxury/premium
const LUXURY_EASE = [0.16, 1, 0.3, 1];

// Parent Variant mengatur urutan animasi (stagger)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Jeda antar elemen (teks -> teks -> list -> foto)
    },
  },
};

// Child Variant (Curtain reveal)
const itemVariants = {
  hidden: {
    clipPath: "inset(100% 0% 0% 0%)",
    y: 40,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    y: 0,
    transition: {
      duration: 0.85,
      ease: LUXURY_EASE,
    },
  },
};

function PackageCard({ packageData }) {
  const photoCount = packageData.foto.length;

  return (
    // motion.article sebagai trigger utama saat card masuk layar
    <motion.article
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }} // Animasi jalan saat 15% bagian card masuk layar
      className="grid h-[90dvh] w-full grid-cols-2"
    >
      {/* =========================
          INFO
      ========================== */}
      <div className="mt-auto flex flex-col justify-center p-24 text-white">
        <motion.h3 variants={itemVariants} className="font-sans text-3xl">
          {packageData.name}
        </motion.h3>
        <motion.p variants={itemVariants} className="text-7xl">
          {packageData.price}
        </motion.p>
        <ul className="text-md mt-8 space-y-2 font-sans">
          {packageData.fasilitas.map((item) => (
            // Animasi untuk setiap list item fasilitas
            <motion.li variants={itemVariants} key={item}>
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* =========================
          FOTO
      ========================== */}
      <div className="grid h-full min-h-0 w-full grid-cols-2 grid-rows-2 overflow-hidden">
        {packageData.foto.map((image, index) => {
          let layout = "";

          // 3 FOTO
          if (photoCount === 3) {
            if (index === 0) layout = "col-start-1 row-start-1 row-span-2";
            if (index === 1) layout = "col-start-2 row-start-1";
            if (index === 2) layout = "col-start-2 row-start-2";
          }

          // 4 FOTO
          if (photoCount === 4) {
            if (index === 0) layout = "col-start-1 row-start-1";
            if (index === 1) layout = "col-start-2 row-start-1";
            if (index === 2) layout = "col-start-1 row-start-2";
            if (index === 3) layout = "col-start-2 row-start-2";
          }

          return (
            // motion.div untuk menganimasikan setiap kotak foto
            <motion.div
              variants={itemVariants}
              key={`${image.src}-${index}`}
              className={`relative min-h-0 min-w-0 overflow-hidden ${layout}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          );
        })}
      </div>
    </motion.article>
  );
}

export default function PriceSection() {
  return (
    <section id="harga" className="bg-primary min-h-[100dvh] w-full px-4 py-16">
      {/* Tambahan animasi tipis untuk judul section utama */}
      <motion.h2
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="mb-8 w-full text-center text-5xl text-white"
      >
        Pilihan <span className="italic">Paket</span>
      </motion.h2>

      <div className="flex flex-col gap-4">
        {packages.map((packageData) => (
          <PackageCard key={packageData.name} packageData={packageData} />
        ))}
      </div>
    </section>
  );
}
