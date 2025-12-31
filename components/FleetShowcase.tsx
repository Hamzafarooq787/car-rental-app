"use client";

import React from "react";
import Link from "next/link";

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
];

const FleetShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0b1c39]">
            Our Luxury Fleet
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Travel in style with our premium chauffeur-driven vehicles.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {cars.map((car, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="h-[260px] bg-gray-50 flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-105">
                <img
                  src={car.image}
                  alt={car.name}
                  className="max-h-full object-contain"
                />
              </div>

              {/* Name */}
              <div className="py-4 text-center bg-white">
                <h3 className="text-[#0b1c39] font-semibold text-lg">
                  {car.name}
                </h3>
              </div>

              {/* Hover */}
              <div className="absolute inset-0 bg-[#BF9B30]/95 text-white px-6 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition">
                <p className="text-sm leading-relaxed">
                  {car.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/cars"
            className="inline-block bg-[#BF9B30] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            View Full Fleet
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FleetShowcase;
