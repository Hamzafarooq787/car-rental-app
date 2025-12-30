"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState } from "react";

type Car = {
  name: string;
  image: string;
  details: string;
};

const cars: Car[] = [
  {
    name: "Range Rover",
    image: "/images/cars/range-rover.png",
    details:
      "Range Rover delivers top-tier luxury with premium leather seats, panoramic sunroof, advanced off-road capability, and a smooth, powerful ride — perfect for VIP and executive travel.",
  },
  {
    name: "Mercedes-Benz E-Class Saloon",
    image: "/images/cars/e-class-saloon.png",
    details:
      "Mercedes-Benz E-Class Saloon offers refined comfort, intelligent safety features, ambient lighting, and a quiet, elegant ride ideal for corporate and business-class chauffeur services.",
  },
  {
    name: "Mercedes-Benz V-Class",
    image: "/images/cars/v-class.png",
    details:
      "Mercedes-Benz V-Class is a luxury MPV with spacious seating, climate control, sliding doors, and premium interiors — ideal for families and group transportation.",
  },
  {
    name: "Mercedes-Benz S-Class",
    image: "/images/cars/s-class.png",
    details:
      "Mercedes-Benz S-Class defines ultimate luxury with cutting-edge technology, massaging seats, ambient lighting, and world-class comfort for elite chauffeur experiences.",
  },
  {
    name: "Mercedes Sprinter",
    image: "/images/cars/sprinter.png",
    details:
      "Mercedes Sprinter is designed for group travel, featuring high roof space, comfortable seating, air conditioning, and reliable performance for long-distance journeys.",
  },
];

const CarPage: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

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
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
            {cars.map((car, index) => (
              <div
                key={index}
                className={`w-full max-w-[460px] relative group overflow-hidden rounded-2xl shadow-lg ${cars.length % 2 !== 0 && index === cars.length - 1
                    ? "md:col-span-2 mx-auto"
                    : ""
                  }`}
              >
                {/* IMAGE */}
                <div className="h-[420px] bg-gray-50 flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* NAME ALWAYS VISIBLE */}
                <div className="py-5 text-center bg-white">
                  <h3 className="text-[#0b1c39] font-semibold text-xl">
                    {car.name}
                  </h3>
                </div>

                {/* HOVER DETAILS */}
                <div className="absolute inset-0 bg-[#BF9B30]/95 text-white flex flex-col items-center justify-center text-center px-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-2xl font-semibold mb-4">
                    {car.name}
                  </h3>
                  <p className="text-base leading-relaxed">
                    {car.details}
                  </p>
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
