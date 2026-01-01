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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-4xl font-bold text-[#0b1c39] mb-3">
              Our Chauffeur Standards
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Premium chauffeur services designed around comfort, reliability and discretion.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10">

            {/* LEFT */}
            <div className="space-y-10">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#BF9B30] text-white text-lg">
                  <i className="fa-solid fa-trophy"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b1c39] mb-1">
                    First-Class Chauffeur Service
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Every journey delivered with professionalism and attention to detail.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#BF9B30] text-white text-lg">
                  <i className="fa-solid fa-road"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b1c39] mb-1">
                    24/7 Chauffeur Availability
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Reliable service available day and night.
                  </p>
                </div>
              </div>
            </div>

            {/* CENTER IMAGE */}
            <div className="flex justify-center">
              <img
                src="/images/cars/mid.png"
                alt="Luxury Vehicle"
                className="max-w-[85%] md:max-w-[75%] lg:max-w-[80%]"
              />
            </div>

            {/* RIGHT */}
            <div className="space-y-10">
              <div className="flex gap-4 items-start flex-row-reverse text-right">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#BF9B30] text-white text-lg">
                  <i className="fa-solid fa-tag"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b1c39] mb-1">
                    Transparent Premium Pricing
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Clear pricing with no hidden costs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start flex-row-reverse text-right">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#BF9B30] text-white text-lg">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b1c39] mb-1">
                    Door-to-Door Convenience
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Seamless pickup and drop-off around your schedule.
                  </p>
                </div>
              </div>
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
