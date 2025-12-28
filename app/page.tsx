import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden">

      <Header />
      <HeroSection />
      <MarqueeSection />
      <FAQSection />
      <Footer />


    </main>
  );
}
