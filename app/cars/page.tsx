"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Luggage, Briefcase, CheckCircle } from "lucide-react";

type Car = {
  name: string;
  subtitle: string;
  image: string;
  passengers: string;
  smallLuggage: string;
  mediumLuggage: string;
  features: string[];
};

const cars: Car[] = [
  {
    name: "Mercedes E-Class",
    subtitle: "Classic, Comfortable, Efficient",
    image: "/images/cars/e-class-saloon.png",
    passengers: "3 passengers",
    smallLuggage: "3 Small luggage",
    mediumLuggage: "2 Medium luggage",
    features: [
      "Includes meet and greet",
      "Complimentary bottled water",
      "WI-FI in vehicle",
    ],
  },
  {
    name: "Mercedes S-Class",
    subtitle: "Flagship Luxury Experience",
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
    subtitle: "Luxury SUV Comfort",
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
    subtitle: "Luxury Group Travel",
    image: "/images/cars/v-class.png",
    passengers: "6 passengers",
    smallLuggage: "5 Small luggage",
    mediumLuggage: "4 Medium luggage",
    features: [
      "Perfect for families & groups",
      "Spacious seating layout",
      "Ideal for airport transfers",
    ],
  },
];

export default function CarPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section
        className="relative h-[240px] sm:h-[280px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/background/our-fleet.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-white text-3xl sm:text-4xl font-semibold">
          Our Luxury Fleet
        </h1>
      </section>

      {/* CARS */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
            {cars.map((car, index) => (
              <div
                key={index}
                className="
                  w-full max-w-[360px]
                  bg-white
                  rounded-xl
                  border border-gray-200
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg
                "
              >
                {/* IMAGE */}
                <div className="h-[200px] sm:h-[220px] flex items-center justify-center p-4 bg-white">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="max-h-full object-contain"
                  />
                </div>

                {/* CONTENT */}
                <div className="relative px-6 py-8 text-center">
                  {/* GOLD VERTICAL BORDERS */}
                  <span className="absolute left-3 top-6 bottom-6 w-[2px] bg-[#BF9B30]" />
                  <span className="absolute right-3 top-6 bottom-6 w-[2px] bg-[#BF9B30]" />

                  {/* TITLE */}
                  <h3 className="text-xl font-semibold text-gray-900">
                    {car.name}
                  </h3>

                  {/* SUBTITLE */}
                  <p className="text-sm text-gray-600 mt-1">
                    {car.subtitle}
                  </p>

                  {/* ICON INFO */}
                  <div className="mt-6 space-y-3 text-sm text-gray-700">
                    <div className="flex justify-center items-center gap-2">
                      <Users size={16} />
                      <span>{car.passengers}</span>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                      <Luggage size={16} />
                      <span>{car.smallLuggage}</span>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                      <Briefcase size={16} />
                      <span>{car.mediumLuggage}</span>
                    </div>
                  </div>

                  {/* FEATURES */}
                  <ul className="mt-6 space-y-3 text-sm text-gray-700">
                    {car.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex justify-center items-center gap-2"
                      >
                        <CheckCircle
                          size={16}
                          className="text-[#BF9B30]"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
