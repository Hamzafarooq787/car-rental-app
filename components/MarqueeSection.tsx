"use client";

import StatsSection from "./StatsSection";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";



export default function MarqueeSection() {
  return (
    <>
     

      {/* FEATURES */}
     <section className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-2xl mx-auto mb-16">
      <h2 className="text-4xl font-bold text-[#0b1c39] mb-4">
        Our Chauffeur Standards
      </h2>
      <p className="text-gray-500 text-base leading-relaxed">
        Premium chauffeur services delivered with precision, discretion and consistency.
      </p>
    </div>

    {/* Modern Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="group p-6 rounded-2xl border border-gray-100 hover:border-[#BF9B30] transition">
        <div className="w-10 h-10 mb-5 flex items-center justify-center rounded-full bg-[#BF9B30]/10 text-[#BF9B30]">
          <i className="fa-solid fa-trophy text-sm"></i>
        </div>
        <h4 className="font-semibold text-[#0b1c39] mb-2">
          First-Class Chauffeur Service
        </h4>
        <p className="text-gray-500 text-sm leading-relaxed">
          Every journey delivered with professionalism, polish and attention to detail.
        </p>
      </div>

      <div className="group p-6 rounded-2xl border border-gray-100 hover:border-[#BF9B30] transition">
        <div className="w-10 h-10 mb-5 flex items-center justify-center rounded-full bg-[#BF9B30]/10 text-[#BF9B30]">
          <i className="fa-solid fa-clock text-sm"></i>
        </div>
        <h4 className="font-semibold text-[#0b1c39] mb-2">
          24/7 Availability
        </h4>
        <p className="text-gray-500 text-sm leading-relaxed">
          Chauffeur services available around the clock, whenever you need them.
        </p>
      </div>

      <div className="group p-6 rounded-2xl border border-gray-100 hover:border-[#BF9B30] transition">
        <div className="w-10 h-10 mb-5 flex items-center justify-center rounded-full bg-[#BF9B30]/10 text-[#BF9B30]">
          <i className="fa-solid fa-tag text-sm"></i>
        </div>
        <h4 className="font-semibold text-[#0b1c39] mb-2">
          Transparent Pricing
        </h4>
        <p className="text-gray-500 text-sm leading-relaxed">
          Clear, premium pricing with no hidden charges or surprises.
        </p>
      </div>

      <div className="group p-6 rounded-2xl border border-gray-100 hover:border-[#BF9B30] transition">
        <div className="w-10 h-10 mb-5 flex items-center justify-center rounded-full bg-[#BF9B30]/10 text-[#BF9B30]">
          <i className="fa-solid fa-location-dot text-sm"></i>
        </div>
        <h4 className="font-semibold text-[#0b1c39] mb-2">
          Door-to-Door Convenience
        </h4>
        <p className="text-gray-500 text-sm leading-relaxed">
          Seamless pickup and drop-off designed around your schedule.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* STATS */}
      <section
        className="relative py-20"
        style={{
          backgroundImage: "url('/images/background/2.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">
            <h2 className="text-white text-3xl md:text-4xl font-semibold">
              A refined fleet of{" "}
              <span className="text-[#BF9B30]">executive</span> and{" "}
              <span className="text-[#BF9B30]">luxury chauffeur vehicles</span>
            </h2>

            <p className="text-gray-300 text-sm md:text-base">
              Designed for business travel, airport transfers and private journeys.
            </p>
          </div>

          <StatsSection />
        </div>
      </section>
    </>
  );
}
