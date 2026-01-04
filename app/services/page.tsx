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
  image: string;
};

const services: Service[] = [
  {
    title: "Executive Chauffeur Service",
    desc: "A refined chauffeur experience designed for professionals who value discretion, comfort, and reliability for every journey.",
    image: "/images/services/Executive-chaffeur.jpg",
  },
  {
    title: "Professional Chauffeur Hire",
    desc: "Highly trained, vetted chauffeurs offering flexible hire options to suit business schedules and private requirements.",
    image: "/images/services/Professional-chauffeur.jpg",
  },
  {
    title: "Luxury MPV & Van Chauffeur Service",
    desc: "Spacious and comfortable vehicles ideal for families, groups, or additional luggage, delivered with a premium service standard.",
    image: "/images/services/MPV-Van.jpeg",
  },
  {
    title: "Private Chauffeur Experiences",
    desc: "A calm, personalised travel experience with a dedicated chauffeur, tailored entirely around your plans and preferences.",
    image: "/images/services/private-chuffeure.webp",
  },
  {
    title: "Luxury Airport Transfers",
    desc: "Smooth and dependable airport transfers focused on punctuality, comfort, and a stress-free start or finish to your journey.",
    image: "/images/services/luxury-airport-transfer.jpeg",
  },
  {
    title: "Executive Group Transport",
    desc: "Professional chauffeur-led transport solutions for corporate groups, events, and private occasions with seamless coordination.",
    image: "/images/services/Executive_group.jpeg",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <FleetHeroCarousel />
{/* 
      Booking Section
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <BookingSection />
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const bgColor = isEven ? "bg-white" : "bg-[#BF9B30]";
            const textColor = isEven ? "text-[#0b1c39]" : "text-white";
            const flexDirection = isEven ? "" : "md:flex-row-reverse";

            return (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row ${flexDirection} ${bgColor} rounded-2xl overflow-hidden shadow-lg`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Image Container - Fixed */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-[380px]">
                  <div className="relative w-full h-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center space-y-5 ${textColor}`}
                >
                  <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
                    {service.title}
                  </h2>

                  <p className="text-base md:text-lg leading-relaxed opacity-95">
                    {service.desc}
                  </p>

                  <div className="pt-4">
                    <Link href="/contact-us">
                      <button
                        className={`px-6 py-3 rounded font-semibold transition-transform duration-300 hover:scale-105 ${isEven
                          ? "bg-[#BF9B30] text-white hover:opacity-90"
                          : "bg-white text-[#BF9B30] hover:bg-[#0b1c39] hover:text-white"
                          }`}
                      >
                        Book Your Chauffeur
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