"use client";

import Image from "next/image.js";
import { motion } from "framer-motion";
import { data } from "../../data/person.js";

export default function AboutSection() {
  return (
    <section className="h-[100dvh] w-full overflow-hidden bg-white">
      <div className="grid h-full w-full grid-cols-3 grid-rows-1">
        {/* TITLE */}
        <div className="col-start-1 col-end-2 row-start-1 mt-32 overflow-hidden">
          <motion.h2
            initial={{ y: 60 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-end text-5xl text-black"
          >
            Tentang <br />
            <span className="italic">Saya</span>
          </motion.h2>
        </div>

        {/* IMAGE */}
        <div className="col-start-2 col-end-3 row-start-1 flex h-full flex-col items-center justify-center overflow-hidden p-16">
          <motion.div
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full"
          >
            <Image
              alt="Sulhan Hanafi, fotografer"
              src="/assets/about/photographer.webp"
              width={700}
              height={1125}
              className="mx-auto h-auto max-h-[70vh] w-auto object-contain"
            />
          </motion.div>

          <div className="h-8 w-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full w-1/2 bg-primary"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="col-start-3 col-end-4 row-start-1 mb-32 mt-auto overflow-hidden pr-16">
          <motion.div
            initial={{ y: 60 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-8"
          >
            <p className="text-start text-5xl text-black">
              Hi, saya <span className="italic">Hann.</span>
            </p>

            <p className="text-end font-sans text-md text-black">
              Saya seorang fotografer berbasis di {data.location}. Fokus saya
              adalah menangkap emosi, kebanggaan, dan tawa natural di hari
              kelulusanmu, tanpa pose yang kaku. Mari ciptakan memori yang akan
              kamu kenang selamanya.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
