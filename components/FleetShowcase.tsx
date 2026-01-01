"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Users, Luggage, CheckCircle, Briefcase, ChevronDown, X } from "lucide-react";

type CarSpec = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

type Car = {
  name: string;
  image: string;
  specs: CarSpec[];
};

const cars: Car[] = [
  {
    name: "Range Rover",
    image: "/images/cars/range-rover.png",
    specs: [
      {
        label: "Passenger Capacity",
        value: "Up to 3 passengers",
        icon: <Users size={18} />,
      },
      {
        label: "Luggage Capacity",
        value: "2 large suitcases",
        icon: <Luggage size={18} />,
      },
      {
        label: "Interior Type",
        value: "Premium leather executive cabin",
        icon: <CheckCircle size={18} />,
      },
      {
        label: "Ideal For",
        value: "VIP & business travel",
        icon: <Briefcase size={18} />,
      },
    ],
  },
  {
    name: "Mercedes-Benz E-Class Saloon",
    image: "/images/cars/e-class-saloon.png",
    specs: [
      {
        label: "Passenger Capacity",
        value: "Up to 3 passengers",
        icon: <Users size={18} />,
      },
      {
        label: "Luggage Capacity",
        value: "2 medium suitcases",
        icon: <Luggage size={18} />,
      },
      {
        label: "Interior Type",
        value: "Luxury leather with ambient lighting",
        icon: <CheckCircle size={18} />,
      },
      {
        label: "Ideal For",
        value: "Corporate & airport transfers",
        icon: <Briefcase size={18} />,
      },
    ],
  },
  {
    name: "Mercedes-Benz V-Class",
    image: "/images/cars/v-class.png",
    specs: [
      {
        label: "Passenger Capacity",
        value: "Up to 6 passengers",
        icon: <Users size={18} />,
      },
      {
        label: "Luggage Capacity",
        value: "5 large suitcases",
        icon: <Luggage size={18} />,
      },
      {
        label: "Interior Type",
        value: "Spacious luxury MPV interior",
        icon: <CheckCircle size={18} />,
      },
      {
        label: "Ideal For",
        value: "Families & group travel",
        icon: <Briefcase size={18} />,
      },
    ],
  },
  {
    name: "Mercedes-Benz S-Class",
    image: "/images/cars/s-class.png",
    specs: [
      {
        label: "Passenger Capacity",
        value: "Up to 3 passengers",
        icon: <Users size={18} />,
      },
      {
        label: "Luggage Capacity",
        value: "2 large suitcases",
        icon: <Luggage size={18} />,
      },
      {
        label: "Interior Type",
        value: "Ultra-luxury with massage seats",
        icon: <CheckCircle size={18} />,
      },
      {
        label: "Ideal For",
        value: "Elite chauffeur experience",
        icon: <Briefcase size={18} />,
      },
    ],
  },
];

const FleetShowcase = () => {
  const [expandedCar, setExpandedCar] = useState<number | null>(null);

  const toggleCarExpansion = (index: number) => {
    if (expandedCar === index) {
      setExpandedCar(null);
    } else {
      setExpandedCar(index);
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0b1c39]">
            Our Luxury Fleet
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Travel in style with our premium chauffeur-driven vehicles.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {cars.map((car, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-lg"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative h-[220px] sm:h-[240px] md:h-[260px] bg-gray-50">
                {/* IMAGE */}
                <div className="h-full w-full flex items-center justify-center p-4 md:p-6">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* NAME - Always visible on image */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-4">
                  <h3 className="text-white font-semibold text-base md:text-lg">
                    {car.name}
                  </h3>
                </div>

                {/* MOBILE TOGGLE BUTTON - Top right corner */}
                <button
                  className="md:hidden absolute top-3 right-3 z-20 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#BF9B30] text-white hover:bg-[#a88728] transition shadow-lg"
                  onClick={() => toggleCarExpansion(index)}
                  aria-label={
                    expandedCar === index
                      ? "Hide specifications"
                      : "Show specifications"
                  }
                >
                  {expandedCar === index ? (
                    <X size={18} className="md:hidden" />
                  ) : (
                    <ChevronDown size={18} className="md:hidden" />
                  )}
                </button>

                {/* MOBILE SPECS OVERLAY - Same as desktop hover */}
                <div
                  className={`md:hidden absolute inset-0 bg-[#BF9B30]/95 p-4 md:p-6 transition-all duration-300 flex items-center ${
                    expandedCar === index
                      ? "opacity-100 z-10"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="w-full text-white max-h-full overflow-y-auto">
                    <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">
                      Vehicle Specifications
                    </h4>
                    <ul className="space-y-3 md:space-y-4 text-xs md:text-sm">
                      {car.specs.map((spec, i) => (
                        <li key={i} className="flex items-start gap-2 md:gap-3">
                          <span className="text-white mt-0.5 flex-shrink-0">
                            {spec.icon}
                          </span>
                          <div>
                            <p className="font-medium">{spec.label}</p>
                            <p className="text-white/80">{spec.value}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* DESKTOP HOVER SPECS */}
                <div className="hidden md:block absolute inset-0 bg-[#BF9B30]/95 px-4 md:px-6 py-4 md:py-8 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center">
                  <div className="w-full text-white">
                    <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-5 text-white">
                      Vehicle Specifications
                    </h4>
                    <ul className="space-y-3 md:space-y-4 text-xs md:text-sm">
                      {car.specs.map((spec, i) => (
                        <li key={i} className="flex items-start gap-2 md:gap-3">
                          <span className="text-white mt-0.5 flex-shrink-0">
                            {spec.icon}
                          </span>
                          <div>
                            <p className="font-medium">{spec.label}</p>
                            <p className="text-white/80">{spec.value}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-14">
          <Link
            href="/cars"
            className="inline-block bg-[#BF9B30] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-medium hover:opacity-90 transition text-sm md:text-base"
          >
            View Full Fleet
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FleetShowcase;