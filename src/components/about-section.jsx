import Image from "next/image.js";

export default function AboutSection() {
  return (
    <div className="h-[100dvh] w-full bg-white grid grid-cols-3 grid-rows-1">
      <div className="mt-32 col-start-1 row-start-1 col-end-2">
        <h2 className="text-5xl text-black text-end">
          Tentang <br />
          <span className="italic">Saya</span>
        </h2>
      </div>
      <div className="col-start-2 col-end-3 row-start-1 flex flex-col p-16 h-full items-center justify-center">
        <Image
          alt="Sulhan Hanafi, fotografer"
          src="/assets/about/photographer.webp"
          width={700}
          height={1125}
        />
        <div className="h-8 w-full">
          <div className="h-full w-[50%] bg-primary"></div>
        </div>
      </div>
      <div className="mt-auto flex flex-col gap-8 pr-16 mb-32 col-start-3 col-end-4 row-start-1">
        <p className="text-5xl text-black text-start">
          Hi, saya <span className="italic"></span>Hann.
        </p>
        <p className="text-md text-black text-end font-sans">
          Saya seorang fotografer berbasis di [Nama Kota]. Fokus saya adalah
          menangkap emosi, kebanggaan, dan tawa natural di hari kelulusanmu,
          tanpa pose yang kaku. Mari ciptakan memori yang akan kamu kenang
          selamanya.
        </p>
      </div>
    </div>
  );
}
