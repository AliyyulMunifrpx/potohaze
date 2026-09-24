import Image from "next/image.js";

const gallery = [
  {
    src: "/assets/gallery/1.webp",
    alt: "Dokumentasi wisuda",
    className: "col-span-2 row-span-3",
  },
  {
    src: "/assets/gallery/2.webp",
    alt: "Dokumentasi wisuda",
    className: "col-span-1 row-span-2",
  },
  {
    src: "/assets/gallery/3.webp",
    alt: "Dokumentasi wisuda",
    className: "col-span-1 row-span-2",
  },
  {
    src: "/assets/gallery/4.webp",
    alt: "Dokumentasi wisuda",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/assets/gallery/5.webp",
    alt: "Dokumentasi wisuda",
    className: "col-span-1 row-span-3",
  },
  {
    src: "/assets/gallery/6.webp",
    alt: "Dokumentasi wisuda",
    className: "col-span-1 row-span-2",
  },
  {
    src: "/assets/gallery/7.webp",
    alt: "Dokumentasi wisuda",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/assets/gallery/8.webp",
    alt: "Dokumentasi wisuda",
    className: "col-span-1 row-span-2",
  },
];

export default function GalerySection() {
  return (
    <section className="min-h-[100dvh] flex flex-col gap-8 w-full px-8 pt-16">
      <h2 className="mb-8 text-center text-5xl text-black">Galery</h2>

      <div className="grid h-[calc(100dvh-10rem)] grid-cols-4 grid-rows-6 gap-3">
        {gallery.map((image) => (
          <div
            key={image.src}
            className={`relative overflow-hidden ${image.className}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
