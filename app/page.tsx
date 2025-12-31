import FAQSection from "@/components/FAQSection";
import FleetShowcase from "@/components/FleetShowcase";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarqueeLuxury from "@/components/MarqueeLuxury";
import MarqueeSection from "@/components/MarqueeSection";
import ServicesShowcase from "@/components/ServicesShowcase";

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden">

      <Header />
      <HeroSection />
      <MarqueeLuxury/>
      <FleetShowcase />
      <ServicesShowcase />
      <MarqueeSection />
      <FAQSection />
      <Footer />


    </main>
  );
}
