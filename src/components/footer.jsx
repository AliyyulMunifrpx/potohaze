"use client";

import Link from "next/link.js";
import { data } from "../../data/person.js";
import { motion } from "framer-motion";

export default function Footer() {
  const menu = [
    { name: "Beranda", href: "#beranda" },
    { name: "Tentang Saya", href: "#tentang-saya" },
    { name: "Gallery", href: "#gallery" },
    { name: "Harga", href: "#harga" },
    { name: "S&K", href: "#syarat-ketentuan" },
    { name: "Contact", href: "#kontak" },
  ];

  const connect = [
    data.instagram && {
      name: "Instagram",
      href: data.instagram,
    },
    data.whatsapp && {
      name: "Whatsapp",
      href: `https://wa.me/${data.whatsapp}`,
    },
    data.tiktok && {
      name: "Tiktok",
      href: data.tiktok,
    },
    data.email && {
      name: "Email",
      href: `mailto:${data.email}`,
    },
  ].filter(Boolean);

  // Easing premium (Luxury)
  const LUXURY_EASE = [0.16, 1, 0.3, 1];

  // Container Variant: Mengatur urutan masuk seluruh elemen footer
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // Jeda kemunculan dibuat sedikit lebih cepat (0.1s)
      },
    },
  };

  // Item Variant: Curtain reveal murni tanpa opacity/scale
  const itemVariants = {
    hidden: { clipPath: "inset(100% 0% 0% 0%)", y: 40 },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      y: 0,
      transition: { duration: 1, ease: LUXURY_EASE },
    },
  };

  return (
    // Mengganti fragment <> dengan motion.footer agar bisa menjadi trigger in-view
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="flex w-full flex-col bg-[#101010]"
    >
      <div className="grid h-[80dvh] w-full grid-cols-5 grid-rows-3">
        {/* LOGO */}
        <motion.div
          variants={itemVariants}
          className="col-start-2 col-end-5 row-start-2 row-end-3 flex items-center"
        >
          <p className="w-full text-center text-[12rem] italic text-white">
            {data.name}
          </p>
        </motion.div>

        {/* MENU */}
        <div className="col-start-1 col-end-2 row-start-1 row-end-4 flex flex-col justify-center gap-16 pl-16 font-sans text-white">
          {menu.map((item) => (
            // Membungkus setiap link dengan motion.div agar muncul berurutan (stagger)
            <motion.div variants={itemVariants} key={item.name}>
              <Link
                href={item.href}
                className="transition-opacity hover:opacity-50"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* BOOKING BUTTON */}
        <motion.div
          variants={itemVariants}
          className="z-20 col-start-3 row-start-3 mx-auto flex aspect-square w-20 items-center justify-center rounded-full border border-white transition hover:border-none hover:bg-primary"
        >
          <Link
            href="#contact"
            className="flex h-full w-full items-center justify-center font-sans text-white"
          >
            Booking
          </Link>
        </motion.div>

        {/* SOCIAL */}
        <div className="col-start-5 col-end-6 row-start-1 row-end-4 flex flex-col items-end justify-center gap-16 pr-16 font-sans text-white">
          {connect.map((item) => (
            // Membungkus setiap social link dengan motion.div
            <motion.div variants={itemVariants} key={item.name}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="transition-opacity hover:opacity-50"
              >
                {item.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* COPYRIGHT */}
      <motion.div
        variants={itemVariants}
        className="flex h-24 w-full items-center justify-between border-t border-white/20 px-8 font-sans text-xs text-white"
      >
        <p>
          © {new Date().getFullYear()} {data.name}. Seluruh hak cipta dilindungi
          undang-undang.
        </p>

        <p>
          dibuat dengan ♥ oleh{" "}
          <a
            href="https://alymnf.my.id"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-primary"
          >
            alymnf
          </a>
        </p>
      </motion.div>
    </motion.footer>
  );
}
