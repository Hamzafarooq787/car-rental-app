"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState } from "react";
import {
  Users,
  Luggage,
  CheckCircle,
  Briefcase,
  Bus,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";

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
  {
    name: "Mercedes Sprinter",
    image: "/images/cars/sprinter.png",
    specs: [
      {
        label: "Passenger Capacity",
        value: "Up to 12 passengers",
        icon: <Bus size={18} />,
      },
      {
        label: "Luggage Capacity",
        value: "Large group luggage space",
        icon: <Luggage size={18} />,
      },
      {
        label: "Interior Type",
        value: "High-roof spacious interior",
        icon: <CheckCircle size={18} />,
      },
      {
        label: "Ideal For",
        value: "Group & long-distance travel",
        icon: <Briefcase size={18} />,
      },
    ],
  },
];

const CarPage: React.FC = () => {
  const [expandedCar, setExpandedCar] = useState<number | null>(null);

  const toggleCarExpansion = (index: number) => {
    if (expandedCar === index) {
      setExpandedCar(null);
    } else {
      setExpandedCar(index);
    }
  };

  return (
    <>
      <Header />

      {/* SUBHEADER */}
      <section
        className="relative h-[280px] sm:h-[320px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/background/our-fleet.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative text-white text-3xl sm:text-4xl md:text-5xl font-semibold">
          Our Luxury Fleet
        </h1>
      </section>

      {/* CARS GRID */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-items-center">
            {cars.map((car, index) => (
              <div
                key={index}
                className={`w-full max-w-[460px] relative group overflow-hidden rounded-2xl shadow-lg ${
                  cars.length % 2 !== 0 && index === cars.length - 1
                    ? "md:col-span-2 mx-auto"
                    : ""
                }`}
              >
                {/* IMAGE CONTAINER */}
                <div className="relative h-[280px] sm:h-[320px] md:h-[420px] bg-gray-50">
                  {/* IMAGE */}
                  <div className="h-full w-full flex items-center justify-center p-6 md:p-8">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* NAME - Always visible on image */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg md:text-xl">
                      {car.name}
                    </h3>
                  </div>

                  {/* MOBILE TOGGLE BUTTON - Top right corner */}
                  <button
                    className="md:hidden absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-[#BF9B30] text-white hover:bg-[#a88728] transition shadow-lg"
                    onClick={() => toggleCarExpansion(index)}
                    aria-label={
                      expandedCar === index
                        ? "Hide specifications"
                        : "Show specifications"
                    }
                  >
                    {expandedCar === index ? (
                      <X size={22} />
                    ) : (
                      <ChevronDown size={22} />
                    )}
                  </button>

                  {/* MOBILE SPECS OVERLAY - Same as desktop hover */}
                  <div
                    className={`md:hidden absolute inset-0 bg-[#BF9B30]/95 p-6 transition-all duration-300 flex items-center ${
                      expandedCar === index
                        ? "opacity-100 z-10"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="w-full text-white max-h-full overflow-y-auto">
                      <h4 className="text-lg font-semibold mb-6 text-white">
                        Vehicle Specifications
                      </h4>
                      <ul className="space-y-4 text-sm">
                        {car.specs.map((spec, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-white mt-0.5">{spec.icon}</span>
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
                  <div className="hidden md:block absolute inset-0 bg-[#BF9B30]/95 px-8 md:px-10 py-6 md:py-8 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center">
                    <div className="w-full text-white">
                      <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-white">
                        Vehicle Specifications
                      </h4>
                      <ul className="space-y-3 md:space-y-4 text-sm">
                        {car.specs.map((spec, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-white mt-0.5">{spec.icon}</span>
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
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CarPage;