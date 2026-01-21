"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Service = {
  title: string;
  desc?: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Executive Chauffeur Service",
    desc: "Tailored rides for business or personal travel, ensuring punctuality and privacy.",
    image: "/images/services/Chaffeur.jpeg",
  },
  {
    title: "Professional Chauffeur Hire",
    desc: "Hire highly trained drivers for flexible schedules and seamless journeys.",
    image: "/images/services/Professional-chauffeur.jpg",
  },
  {
    title: "Luxury MPV & Van Service",
    desc: "Spacious vehicles for groups or families with premium comfort and style.",
    image: "/images/services/MPV-Van.jpeg",
  },
  {
    title: "Airport Transfers",
    desc: "Smooth, timely, and stress-free transfers for business or leisure travelers.",
    image: "/images/services/luxury-airport-transfer.jpeg",
  },
  {
    title: "Private Chauffeur Experiences",
    desc: "Personalized journeys with a dedicated driver, tailored to your itinerary.",
    image: "/images/services/private-chuffeure.webp",
  },
  {
    title: "Executive Group Transport",
    desc: "Professional transport solutions for corporate events and private gatherings.",
    image: "/images/services/Executive_group.jpeg",
  },
];

const ServicesShowcase = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1c39]">
            Our Chauffeur Services
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg font-medium">
            Premium chauffeur services tailored for comfort, reliability, and style. Explore our wide range of luxury options designed for every journey.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 + index * 0.1 }}
              className="group rounded-2xl overflow-hidden shadow-lg bg-white relative hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="relative h-[220px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-black/70 group-hover:via-black/30 group-hover:to-transparent transition-all" />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-lg md:text-xl font-bold text-[#BF9B30]">
                  {service.title}
                </h3>
                {service.desc && (
                  <p className="mt-2 text-gray-700 text-sm md:text-base font-medium leading-relaxed">
                    {service.desc}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <Link
            href="/services"
            className="inline-block bg-[#BF9B30] text-white px-10 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-transform duration-300 hover:scale-105 shadow-lg"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
