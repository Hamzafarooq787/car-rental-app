"use client";

import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { motion } from "framer-motion";
import FleetHeroCarousel from "@/components/FleetHeroCarousel";
import Link from "next/link";

type Service = {
  title: string;
  desc: string;
  price: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Luxury Chauffeur Service in Dubai",
    desc: "Executive chauffeur-driven vehicles for corporate travel, business events, exhibitions, and VIP transportation across Dubai.",
    price: "From 90 AED / hour",
    image: "/images/s1webp.webp",
  },
  {
    title: "Professional Chauffeur Hire",
    desc: "Experienced, background-verified chauffeurs offering flexible hourly and full-day chauffeur packages.",
    price: "From 75 AED",
    image: "/images/s2.webp",
  },
  {
    title: "Luxury Van & MPV Chauffeur Service",
    desc: "Premium vans ideal for families, airport transfers, and intercity journeys with refined interiors.",
    price: "From 100 AED",
    image: "/images/s3.webp",
  },
  {
    title: "Abu Dhabi Chauffeur City Tour",
    desc: "Discover iconic Abu Dhabi landmarks with private chauffeur-driven comfort and local expertise.",
    price: "From 400 AED",
    image: "/images/s6.webp",
  },
  {
    title: "Luxury Airport Transfers Dubai",
    desc: "24/7 airport pickup and drop-off services delivered with punctuality, discretion, and comfort.",
    price: "From 100 AED",
    image: "/images/s8.webp",
  },
  {
    title: "Executive Bus & Coach Rental",
    desc: "Luxury 20, 30 & 50-seater buses for corporate events, tours, and group chauffeur transport.",
    price: "From 200 AED",
    image: "/images/s7.webp",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
     <FleetHeroCarousel/>

      {/* Booking Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <BookingSection />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const bgColor = isEven ? "bg-white" : "bg-[#BF9B30]";
            const textColor = isEven ? "text-[#BF9B30]" : "text-white";
            const imageFirst = isEven ? "" : "md:flex-row-reverse";

            return (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-0 ${imageFirst} ${bgColor} rounded-xl overflow-hidden shadow-lg`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Image */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span
                    className={`absolute bottom-0 left-0 px-4 py-2 font-semibold rounded-tr-lg ${
                      isEven
                        ? "bg-[#BF9B30] text-white"
                        : "bg-[#0b1c39] text-white"
                    }`}
                  >
                    {service.price}
                  </span>
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 space-y-4 p-6 md:p-12 ${textColor}`}>
                  <h2 className="text-2xl md:text-3xl font-bold uppercase">
                    {service.title}
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed">
                    {service.desc}
                  </p>
                 <div className="flex flex-wrap gap-4 mt-4">
  <Link href="/contact-us">
    <button
      className={`px-5 py-2 font-semibold rounded transition transform hover:scale-105 ${
        isEven
          ? "bg-[#BF9B30] text-white hover:opacity-90"
          : "bg-white text-[#BF9B30] hover:bg-[#0b1c39] hover:text-white"
      }`}
    >
      Book Now
    </button>
  </Link>
</div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
