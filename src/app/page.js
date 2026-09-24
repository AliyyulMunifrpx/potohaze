import AboutSection from "../components/about-section.jsx";
import GalerySection from "../components/galery-section.jsx";
import MainSection from "../components/main-section.jsx";
import PriceSection from "../components/price-section.jsx";

export default function Home() {
  return (
    <main className="w-full min-h-[100dvh] bg-white">
      <section id="beranda">
        <MainSection></MainSection>
      </section>
      <section id="tentang-saya">
        <AboutSection></AboutSection>
      </section>
      <section id="galery">
        <GalerySection />{" "}
      </section>
      <section id="harga">
        <PriceSection />{" "}
      </section>
    </main>
  );
}
