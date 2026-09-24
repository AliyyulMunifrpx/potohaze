"use client";

import Image from "next/image";
import { useState } from "react";
import { data } from "../../data/person.js";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [form, setForm] = useState({
    nama: "",
    whatsapp: "",
    tanggal: "",
    paket: "",
    pesan: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Halo ${data.name}, saya ingin melakukan booking fotografi wisuda.

Nama: ${form.nama}
Nomor WhatsApp: ${form.whatsapp}
Tanggal: ${form.tanggal}
Paket: ${form.paket}
Pesan: ${form.pesan || "-"}
    `.trim();

    const whatsappUrl = `https://wa.me/${data.whatsapp}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  // Easing kustom premium
  const LUXURY_EASE = [0.16, 1, 0.3, 1];

  // Parent trigger: Mengatur jeda kemunculan elemen (stagger)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // Jeda antar input form dan elemen lainnya
      },
    },
  };

  // Child Variant: Curtain reveal (tanpa opacity)
  const itemVariants = {
    hidden: { clipPath: "inset(100% 0% 0% 0%)", y: 40 },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      y: 0,
      transition: { duration: 1, ease: LUXURY_EASE },
    },
  };

  return (
    // Mengubah section menjadi motion.section sebagai trigger utama
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      id="contact"
      className="w-full p-4 py-16 text-black lg:px-8"
    >
      {/* JUDUL */}
      <motion.h2
        variants={itemVariants}
        className="mb-8 text-center text-5xl leading-none"
      >
        Mari <span className="italic">Bertemu.</span>
      </motion.h2>

      <div className="grid min-h-[80dvh] grid-cols-1 gap-16 lg:grid-cols-2">
        {/* PANEL KIRI (Gambar & Kontak) dianimasikan sebagai satu kesatuan */}
        <motion.div
          variants={itemVariants}
          className="relative grid h-56 grid-cols-2 gap-8 overflow-hidden p-4 font-sans text-sm lg:h-full lg:p-8"
        >
          <Image
            src="/assets/contact/contact-photo.webp"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />{" "}
          {/* Sedikit overlay opsional jika teks putih kurang terbaca */}
          {/* CONTACT OVERLAY */}
          <div className="relative z-10 mt-auto">
            <p className="mb-4 text-xs uppercase text-white">Contact</p>

            {data.whatsapp && (
              <a
                href={`https://wa.me/${data.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="block text-white transition-opacity hover:opacity-50"
              >
                +{data.whatsapp}
              </a>
            )}

            {data.email && (
              <a
                href={`mailto:${data.email}`}
                className="mt-2 block text-white transition-opacity hover:opacity-50"
              >
                {data.email}
              </a>
            )}
          </div>
          {/* SOCIAL OVERLAY */}
          <div className="relative z-10 mt-auto">
            <p className="mb-4 text-end text-xs uppercase text-white">Social</p>

            {data.instagram && (
              <a
                href={data.instagram}
                target="_blank"
                rel="noreferrer"
                className="block text-end text-white transition-opacity hover:opacity-50"
              >
                Instagram
              </a>
            )}

            {data.tiktok && (
              <a
                href={data.tiktok}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-end text-white transition-opacity hover:opacity-50"
              >
                TikTok
              </a>
            )}
          </div>
        </motion.div>

        {/* PANEL KANAN (Form) */}
        <div className="flex flex-col justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 font-sans"
          >
            {/* Mengubah input menjadi motion.input agar termunculkan berurutan */}
            <motion.input
              variants={itemVariants}
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              placeholder="Nama"
              required
              className="w-full rounded-full border border-black/20 bg-transparent px-4 py-4 text-sm outline-none placeholder:text-black/40 focus:border-black"
            />

            <motion.input
              variants={itemVariants}
              type="tel"
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
              placeholder="Nomor WhatsApp"
              required
              className="w-full rounded-full border border-black/20 bg-transparent px-4 py-4 text-sm outline-none placeholder:text-black/40 focus:border-black"
            />

            {/* Grup Tanggal & Paket dimunculkan bersamaan dalam satu blok */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 gap-8 sm:grid-cols-2"
            >
              <input
                type="date"
                name="tanggal"
                value={form.tanggal}
                onChange={handleChange}
                required
                className="w-full rounded-full border border-black/20 bg-transparent px-4 py-4 text-sm outline-none focus:border-black"
              />

              <select
                name="paket"
                value={form.paket}
                onChange={handleChange}
                required
                className="w-full rounded-full border border-black/20 bg-white px-4 py-4 text-sm outline-none focus:border-black"
              >
                <option value="" disabled hidden>
                  Pilih Paket
                </option>
                <option value="potoexclusive">potoexclusive</option>
                <option value="potoessential">potoessential</option>
              </select>
            </motion.div>

            <motion.textarea
              variants={itemVariants}
              name="pesan"
              value={form.pesan}
              onChange={handleChange}
              placeholder="Pesan (opsional)"
              rows={3}
              className="w-full resize-none rounded-3xl border border-black/20 bg-transparent px-4 py-4 text-sm outline-none placeholder:text-black/40 focus:border-black"
            />

            <motion.button
              variants={itemVariants}
              type="submit"
              className="cursor-pointer mt-4 w-full rounded-full bg-primary px-8 py-4 text-sm text-white transition-opacity hover:opacity-80"
            >
              Kirim Booking →
            </motion.button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
