import AboutSection from "../components/about-section.jsx";
import ActiveSectionHandler from "../components/active-section-handler.js";
import ContactSection from "../components/contact-section.jsx";
import CtaSection from "../components/cta-section.jsx";
import GallerySection from "../components/galery-section.jsx";
import MainSection from "../components/main-section.jsx";
import PriceSection from "../components/price-section.jsx";
import TermsSection from "../components/terms-section.jsx";

export default function Home() {
  return (
    <main className="w-full min-h-[100dvh] bg-white">
      <ActiveSectionHandler />

      <section id="beranda">
        <MainSection></MainSection>
      </section>
      <section id="tentang-saya">
        <AboutSection></AboutSection>
      </section>
      <section id="gallery">
        <GallerySection />{" "}
      </section>
      <section id="harga">
        <PriceSection />{" "}
      </section>
      <section id="syarat-ketentuan">
        <TermsSection />{" "}
      </section>
      <section id="">
        <CtaSection />{" "}
      </section>
      <section id="kontak">
        <ContactSection></ContactSection>
      </section>
    </main>
  );
}
