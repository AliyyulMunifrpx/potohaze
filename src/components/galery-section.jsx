"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const gallery = [
  {
    src: "/assets/gallery/1.webp",
    alt: "Dokumentasi wisuda",
    width: 1200,
    height: 1800,
    className: "col-start-1 row-start-1 col-span-2 row-span-3",
  },
  {
    src: "/assets/gallery/2.webp",
    alt: "Dokumentasi wisuda",
    width: 1800,
    height: 1200,
    className: "col-start-3 row-start-1 col-span-1 row-span-2",
  },
  {
    src: "/assets/gallery/3.webp",
    alt: "Dokumentasi wisuda",
    width: 1200,
    height: 1800,
    className: "col-start-4 row-start-1 col-span-1 row-span-2",
  },
  {
    src: "/assets/gallery/4.webp",
    alt: "Dokumentasi wisuda",
    width: 1800,
    height: 1200,
    className: "col-start-3 row-start-3 col-span-2 row-span-2",
  },
  {
    src: "/assets/gallery/5.webp",
    alt: "Dokumentasi wisuda",
    width: 1200,
    height: 1800,
    className: "col-start-1 row-start-4 col-span-1 row-span-3",
  },
  {
    src: "/assets/gallery/6.webp",
    alt: "Dokumentasi wisuda",
    width: 1200,
    height: 1800,
    className: "col-start-2 row-start-4 col-span-1 row-span-3",
  },
  {
    src: "/assets/gallery/7.webp",
    alt: "Dokumentasi wisuda",
    width: 1800,
    height: 1200,
    className: "col-start-3 row-start-5 col-span-2 row-span-2",
  },
];

const LUXURY_EASE = [0.16, 1, 0.3, 1];

// Parent Variant mengatur urutan/stagger animasi anak
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08, // Delay giliran antar foto
    },
  },
};

// Child Variant (Curtain reveal tanpa opacity/scale)
const itemVariants = {
  hidden: {
    clipPath: "inset(100% 0% 0% 0%)",
    y: 50,
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

export default function GallerySection() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const previewRef = useRef(null);
  const animationFrameRef = useRef(null);

  const mousePositionRef = useRef({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    mousePositionRef.current = {
      x: e.clientX,
      y: e.clientY,
    };

    if (animationFrameRef.current) return;

    animationFrameRef.current = requestAnimationFrame(() => {
      if (!previewRef.current) {
        animationFrameRef.current = null;
        return;
      }

      const { x, y } = mousePositionRef.current;

      const previewWidth = previewRef.current.offsetWidth;
      const previewHeight = previewRef.current.offsetHeight;

      const offset = 24;

      let left = x + offset;
      let top = y + offset;

      if (left + previewWidth > window.innerWidth - 16) {
        left = x - previewWidth - offset;
      }

      if (top + previewHeight > window.innerHeight - 16) {
        top = y - previewHeight - offset;
      }

      left = Math.max(16, left);
      top = Math.max(16, top);

      previewRef.current.style.transform = `translate3d(${left}px, ${top}px, 0)`;

      animationFrameRef.current = null;
    });
  };

  const handleMouseEnter = (image, e) => {
    setHoveredImage(image);

    mousePositionRef.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage]);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      <section
        id="gallery"
        className="flex min-h-[100dvh] w-full flex-col gap-8 px-4 pt-16 lg:px-8"
      >
        <h2 className="text-center text-5xl text-black">gallery</h2>

        {/* Parent Grid Kontrol Utama Animasi */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid h-[calc(100dvh-10rem)] min-h-0 w-full grid-cols-4 grid-rows-7 overflow-hidden"
        >
          {gallery.map((image) => (
            <motion.button
              key={image.src}
              type="button"
              aria-label={`Lihat ${image.alt}`}
              variants={itemVariants}
              className={`group relative min-h-0 min-w-0 overflow-hidden ${image.className}`}
              onMouseEnter={(e) => handleMouseEnter(image, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* DESKTOP HOVER PREVIEW */}
      {hoveredImage && (
        <div
          ref={previewRef}
          className="pointer-events-none fixed left-0 top-0 z-[100] hidden overflow-hidden lg:block"
          style={{
            width: "min(40vw, 560px)",
            maxHeight: "65vh",
          }}
        >
          <div
            className="relative w-full"
            style={{
              aspectRatio: `${hoveredImage.width} / ${hoveredImage.height}`,
              maxHeight: "65vh",
            }}
          >
            <Image
              src={hoveredImage.src}
              alt={hoveredImage.alt}
              fill
              sizes="40vw"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* MOBILE / TABLET MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Tutup foto"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 font-sans text-2xl text-white"
          >
            ×
          </button>

          <div
            className="relative h-[90vh] w-[92vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="92vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
