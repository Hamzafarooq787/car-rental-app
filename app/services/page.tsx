"use client";

import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { motion } from "framer-motion";

type Service = {
  title: string;
  desc: string;
  price: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Rent a Car With Driver in Dubai",
    desc: "Executive chauffeur-driven vehicles for business events, exhibitions and corporate travel across Dubai.",
    price: "From 90 AED / hour",
    image: "/images/s1webp.webp",
  },
  {
    title: "Chauffeur Service Dubai",
    desc: "Professional, background-verified chauffeurs with flexible hourly and full-day packages.",
    price: "From 75 AED",
    image: "/images/s2.webp",
  },
  {
    title: "Van Rental Dubai",
    desc: "Luxury vans for families, airport transfers and intercity travel with premium interiors.",
    price: "From 100 AED",
    image: "/images/s3.webp",
  },
  {
    title: "Abu Dhabi City Tour",
    desc: "Explore Abu Dhabi landmarks with comfortable transport and experienced drivers.",
    price: "From 400 AED",
    image: "/images/s6.webp",
  },
  {
    title: "Airport Transfer Dubai",
    desc: "24/7 luxury airport pickup and drop-off services with punctual drivers.",
    price: "From 100 AED",
    image: "/images/s8.webp",
  },
  {
    title: "Bus Rental Dubai",
    desc: "Luxury 20, 30 & 50 seater buses for corporate events, tours and group transport.",
    price: "From 200 AED",
    image: "/images/s7.webp",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[320px] md:h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/background/subheader.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative text-white text-4xl md:text-5xl font-bold">
          Services
        </h1>
      </section>

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
            const isEven = index % 2 === 0; // Changed logic
            const isOdd = index % 2 === 1; // For odd indices
            const bgColor = isEven ? "bg-white" : "bg-[#1ecb15]";
            const textColor = isEven ? "text-[#1ecb15]" : "text-white";
            // Even index: image left, text right | Odd index: image right, text left
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
                {/* Image - Always takes left side for even, right side for odd */}
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
                      isEven ? "bg-green-600 text-white" : "bg-[#f7941d] text-white"
                    }`}
                  >
                    {service.price}
                  </span>
                </div>

                {/* Content - Always takes opposite side of image */}
                <div className={`w-full md:w-1/2 space-y-4 p-6 md:p-12 ${textColor}`}>
                  <h2 className="text-2xl md:text-3xl font-bold uppercase">
                    {service.title}
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed">{service.desc}</p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <button
                      className={`px-5 py-2 font-semibold rounded transition transform hover:scale-105 ${
                        isEven
                          ? "bg-green-600 text-white hover:bg-green-700"
                          : "bg-white text-green-600 hover:bg-green-700 hover:text-white"
                      }`}
                    >
                      Book Now
                    </button>
                    <button
                      className={`px-5 py-2 font-semibold rounded border transition transform hover:scale-105 ${
                        isEven
                          ? "border-white text-white hover:bg-white hover:text-green-600"
                          : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                      }`}
                    >
                      Read More
                    </button>
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