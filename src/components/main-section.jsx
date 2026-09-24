import Link from "next/link.js";

export default function MainSection() {
  return (
    <div className="min-h-[100dvh] w-full grid grid-cols-1 grid-rows-2">
      <h1 className="row-start-1 mt-auto z-10 text-black text-7xl w-full text-center">
        Cerita Wisudamu, <br />
        <span className="italic"> Diabadikan Sempurna.</span>
      </h1>
      <div className="row-start-2 col-start-1 mb-auto h-64 z-0 mx-auto row-end-3 -translate-y-[15%] aspect-[3/4] bg-primary"></div>
      <div className="w-[4%] group hover:bg-primary hover:border-none transition ease-out flex items-center justify-center aspect-square border border-black rounded-full row-start-2 mt-auto -translate-y-[130%] mx-auto col-start-1 row-end-3">
        <Link
          href="#galery"
          className="font-sans flex w-full h-full items-center justify-center text-center"
        >
          Galery
        </Link>
      </div>
    </div>
  );
}
