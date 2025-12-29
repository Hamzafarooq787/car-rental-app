"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const cars = [
  { name: "Lexus ES Chauffeur Collection", image: "/images/cars/c1.webp" },
  { name: "Mercedes-Benz E-Class Executive Series", image: "/images/cars/c2webp.webp" },
  { name: "Mercedes-Benz S-Class Luxury Sedan", image: "/images/cars/c3.webp" },
  { name: "Mercedes-Benz V-Class Premium MPV", image: "/images/cars/c4.webp" },
  { name: "GMC Yukon Full-Size SUV", image: "/images/cars/c5.webp" },
  { name: "Toyota Land Cruiser Iconic SUV", image: "/images/cars/c6.webp" },
  { name: "Toyota Hiace Executive Van", image: "/images/cars/c7.webp" },
  { name: "Rolls-Royce Ghost Signature Series", image: "/images/cars/c8.webp" },
  { name: "Cadillac Escalade Luxury SUV", image: "/images/cars/c9.webp" },
  { name: "Toyota Highlander Premium SUV", image: "/images/cars/c10.webp" },
  { name: "Toyota Coaster 22-Seater Coach", image: "/images/cars/c11.webp" },
  { name: "King Kong 50-Seater Luxury Bus", image: "/images/cars/c12.webp" },
  { name: "Mercedes Sprinter Executive Transport", image: "/images/cars/c13.webp" },
  { name: "Toyota Prado Premium SUV", image: "/images/cars/c14.webp" },
  { name: "BMW 7 Series Luxury Saloon", image: "/images/cars/c15.webp" },
  { name: "Bentley Continental Luxury Sedan", image: "/images/cars/c16.webp" },
  { name: "Rolls-Royce Cullinan Ultra-Luxury SUV", image: "/images/cars/c17.webp" },
  { name: "Toyota Previa Executive MPV", image: "/images/cars/c18.webp" },
    { name: "Rolls Royce Phantom", image: "/images/cars/c19.webp" },

];

const CarPage: React.FC = () => {
  return (
    <>
      <Header />

      {/* SUBHEADER */}
      <section
        className="relative h-[320px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/background/our-fleet.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative text-white text-4xl md:text-5xl font-semibold">
          Our Luxury Fleet
        </h1>
      </section>

      {/* CARS GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {cars.map((car, index) => (
              <div
                key={index}
                className="w-full max-w-[320px] bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                {/* Image */}
                <div className="h-52 flex items-center justify-center p-5 bg-gray-50">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Name */}
                <div className="p-4 text-center">
                  <h3 className="text-[#0b1c39] font-semibold text-sm leading-snug">
                    {car.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default CarPage;
