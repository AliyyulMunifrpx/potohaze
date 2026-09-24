"use client";

import { motion } from "framer-motion";

export default function TermsSection() {
  const terms = [
    {
      number: "01",
      text: "Meminta Form Booking dan membayar DP 50% untuk tanggal dan waktu booking ke Admin. Harap ditransfer ke rekening BCA — 0000000000, a.n. Nama Pemilik.",
    },
    {
      number: "02",
      text: "DP yang sudah dibayarkan tidak dapat dikembalikan.",
    },
    {
      number: "03",
      text: "Pastikan tanggal dan waktu pemotretan sudah final.",
    },
    {
      number: "04",
      text: "Perubahan jadwal hanya dapat dilakukan maksimal H-7 dengan biaya tambahan Rp150.000.",
    },
    {
      number: "05",
      text: "Waktu sesi foto akan dimulai sesuai dengan perjanjian.",
    },
    {
      number: "06",
      text: "Kami tidak menerima permintaan khusus terkait tone warna foto dan tidak melakukan manipulasi foto seperti perubahan bentuk tubuh.",
    },
    {
      number: "07",
      text: "Mohon jangan tag akun kami jika mengunggah foto mentah atau hasil editan sendiri.",
    },
  ];

  // Easing kustom untuk feel luxury/premium
  const LUXURY_EASE = [0.16, 1, 0.3, 1];

  // Parent Variant mengatur urutan animasi (stagger)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // Jeda beruntun antar baris syarat & ketentuan
      },
    },
  };

  // Child Variant (Curtain reveal tanpa opacity/scale)
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

  return (
    <div className="grid min-h-[100dvh] w-full grid-cols-1 bg-white">
      {/* Background biru (primary) di bagian atas */}
      <div className="col-start-1 row-start-1 h-[70dvh] bg-primary"></div>

      {/* 
        Parent trigger utama (motion.div).
        Ketika div ini masuk 10% ke dalam layar, animasi stagger akan berjalan.
      */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="col-start-1 row-start-1 px-16"
      >
        {/* =========================
            JUDUL
        ========================== */}
        <motion.div variants={itemVariants} className="w-full pb-8 pt-16">
          <h2 className="w-full text-center text-5xl text-white">
            Syarat & <span className="italic">Ketentuan</span>
          </h2>
        </motion.div>

        {/* =========================
            LIST SYARAT & KETENTUAN
        ========================== */}
        <div className="flex flex-col bg-white p-16">
          {terms.map((term) => (
            // motion.div untuk menganimasikan setiap baris secara bergantian
            // Karena clip-path akan memotong hingga border, saat efek reveal,
            // garis border juga akan terlihat seolah-olah "terbuka" dari bawah.
            <motion.div
              variants={itemVariants}
              key={term.number}
              className="grid grid-cols-[auto_1fr] gap-8 border-b border-black/20 py-8 first:border-t"
            >
              <span className="font-sans text-sm text-primary">
                {term.number}
              </span>
              <p className="font-sans text-base leading-relaxed text-black">
                {term.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
