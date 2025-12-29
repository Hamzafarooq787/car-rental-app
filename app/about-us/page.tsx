import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OnlyQualityForClients from "@/components/OnlyQualityForClients";
import StatsSection from "@/components/StatsSection";
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />

      {/* SUBHEADER */}
      <section
        className="relative h-[320px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/background/subheader.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative text-white text-4xl md:text-5xl font-semibold">
          About Us
        </h1>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">

            {/* LEFT */}
            <div>
              <h2 className="text-[#0b1c39] font-bold leading-tight text-3xl md:text-4xl lg:text-[42px]">
                A refined selection of{" "}
                <span className="text-[#BF9B30]">executive</span> and{" "}
                <span className="text-[#BF9B30]">luxury chauffeur vehicles</span>{" "}
                tailored for every journey.
              </h2>
            </div>

            {/* RIGHT */}
            <div>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                We specialise in premium chauffeur-driven transport, delivering
                seamless experiences for business travel, airport transfers,
                corporate events, and private occasions. Our approach is built
                around professionalism, discretion, and uncompromising attention
                to detail. Every journey is carefully planned and executed to
                ensure comfort, reliability, and peace of mind from start to
                finish.
              </p>
            </div>

          </div>

          <StatsSection />
        </div>
      </section>

      {/* BOARD */}
      <section
        className="relative py-24"
        style={{
          backgroundImage: "url('/images/background/8.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-7xl mx-auto px-6">

          <h2 className="text-center text-white text-3xl md:text-4xl font-semibold mb-16">
            We specialise in premium chauffeur-driven transport, delivering seamless experiences for business travel, airport transfers, corporate events, and private occasions.
          </h2>

          
        </div>
      </section>

      <OnlyQualityForClients />

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-4xl font-bold text-[#0b1c39] mb-3">
              Our Chauffeur Standards
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Every detail is carefully considered to deliver a premium travel experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10">

            {/* LEFT */}
            <div className="space-y-10">
              <Feature
                icon="fa-trophy"
                title="First-Class Chauffeur Service"
                text="Professional chauffeurs delivering excellence, discretion, and reliability."
              />
              <Feature
                icon="fa-road"
                title="24/7 Chauffeur Availability"
                text="Available day and night to support your travel needs without compromise."
              />
            </div>

            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src="/images/misc/car.png"
                alt="Luxury Vehicle"
                className="max-w-[85%] md:max-w-[75%] lg:max-w-[80%] h-auto"
              />
            </div>

            {/* RIGHT */}
            <div className="space-y-10">
              <Feature
                icon="fa-tag"
                title="Transparent Premium Pricing"
                text="Clear pricing with no hidden costs, reflecting true value."
                reverse
              />
              <Feature
                icon="fa-location-dot"
                title="Door-to-Door Convenience"
                text="Seamless pickup and drop-off tailored to your schedule."
                reverse
              />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;

/* Feature Block */
function Feature({ icon, title, text, reverse = false }: any) {
  return (
    <div className={`flex gap-4 items-start ${reverse ? "flex-row-reverse text-right" : ""}`}>
      <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-[#BF9B30] text-white text-lg">
        <i className={`fa-solid ${icon}`} />
      </div>
      <div>
        <h4 className="font-semibold text-[#0b1c39] mb-1">{title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
