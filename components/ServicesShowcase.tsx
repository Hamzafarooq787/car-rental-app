"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Service = {
  title: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Executive Chauffeur Service",
    image: "/images/services/Executive-Chaffeur.jpg",
  },
  {
    title: "Professional Chauffeur Hire",
    image: "/images/services/Professional-chauffeur.jpg",
  },
  {
    title: "Luxury MPV & Van Service",
    image: "/images/services/MPV-Van.jpg",
  },
  {
    title: "Airport Transfers",
    image: "/images/services/Laury-airport.jpeg",
  },
];

const ServicesShowcase = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0b1c39]">
            Our Chauffeur Services
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Premium chauffeur services tailored for comfort, reliability, and style.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              <div className="relative h-[220px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-[#0b1c39]">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/services"
            className="inline-block bg-[#BF9B30] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
