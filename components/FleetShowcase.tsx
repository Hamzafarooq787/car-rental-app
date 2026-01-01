"use client";

import React from "react";
import Link from "next/link";
import { Users, Luggage, Briefcase, CheckCircle } from "lucide-react";

type Car = {
  name: string;
  image: string;
  passengers: string;
  smallLuggage: string;
  mediumLuggage: string;
  features: string[];
};

const cars: Car[] = [
  {
    name: "Mercedes E-Class",
    image: "/images/cars/e-class-saloon.png",
    passengers: "3 passengers",
    smallLuggage: "3 Small luggage",
    mediumLuggage: "2 Medium luggage",
    features: [
      "Includes meet and greet",
      "Complimentary bottled water",
      "Wi-Fi in vehicle",
    ],
  },
  {
    name: "Mercedes S-Class",
    image: "/images/cars/s-class.png",
    passengers: "3 passengers",
    smallLuggage: "2 Small luggage",
    mediumLuggage: "2 Medium luggage",
    features: [
      "Executive chauffeur",
      "Luxury leather interior",
      "Ultra-smooth ride",
    ],
  },
  {
    name: "Range Rover",
    image: "/images/cars/range-rover.png",
    passengers: "3 passengers",
    smallLuggage: "2 Small luggage",
    mediumLuggage: "2 Medium luggage",
    features: [
      "VIP travel ready",
      "Spacious premium cabin",
      "Ideal for long journeys",
    ],
  },
  {
    name: "Mercedes V-Class",
    image: "/images/cars/v-class.png",
    passengers: "6 passengers",
    smallLuggage: "5 Small luggage",
    mediumLuggage: "4 Medium luggage",
    features: [
      "Ideal for families & groups",
      "Spacious seating layout",
      "Airport transfer ready",
    ],
  },
];

const FleetShowcase = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Our Luxury Fleet
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            Chauffeur-driven vehicles designed for comfort, elegance, and reliability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-xl
                border border-gray-200
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg
              "
            >
              {/* IMAGE */}
              <div className="h-[160px] flex items-center justify-center p-4">
                <img
                  src={car.image}
                  alt={car.name}
                  className="max-h-full object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="relative px-4 py-6 text-center">
                {/* GOLD SIDE LINES */}
                <span className="absolute left-2 top-4 bottom-4 w-[2px] bg-[#BF9B30]" />
                <span className="absolute right-2 top-4 bottom-4 w-[2px] bg-[#BF9B30]" />

                {/* TITLE */}
                <h3 className="text-base font-semibold text-gray-900">
                  {car.name}
                </h3>

                {/* SPECS */}
                <div className="mt-4 space-y-2 text-xs text-gray-700">
                  <div className="flex justify-center items-center gap-2">
                    <Users size={14} />
                    <span>{car.passengers}</span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Luggage size={14} />
                    <span>{car.smallLuggage}</span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Briefcase size={14} />
                    <span>{car.mediumLuggage}</span>
                  </div>
                </div>

                {/* FEATURES */}
                <ul className="mt-4 space-y-2 text-xs text-gray-700">
                  {car.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex justify-center items-center gap-2"
                    >
                      <CheckCircle size={14} className="text-[#BF9B30]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/cars"
            className="
              inline-block
              border border-[#BF9B30]
              text-[#BF9B30]
              px-6 py-2.5
              rounded-full
              text-sm font-medium
              hover:bg-[#BF9B30] hover:text-white
              transition
            "
          >
            View Full Fleet
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FleetShowcase;
