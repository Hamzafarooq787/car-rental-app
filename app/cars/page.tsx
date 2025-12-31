"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import {
  Users,
  Luggage,
  CheckCircle,
  Briefcase,
  Bus,
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
                className={`w-full max-w-[460px] relative group overflow-hidden rounded-2xl shadow-lg ${
                  cars.length % 2 !== 0 && index === cars.length - 1
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

                {/* NAME */}
                <div className="py-5 text-center bg-white">
                  <h3 className="text-[#0b1c39] font-semibold text-xl">
                    {car.name}
                  </h3>
                </div>

                {/* HOVER SPECS */}
                <div className="absolute inset-0 bg-[#BF9B30]/95 px-10 py-8 opacity-0 group-hover:opacity-100 transition flex items-center">
                  <div className="w-full text-white">
                    <h4 className="text-xl font-semibold mb-6 text-[#ffffff]">
                      Vehicle Specifications
                    </h4>

                    <ul className="space-y-4 text-sm">
                      {car.specs.map((spec, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-[#ffffff] mt-0.5">
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
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CarPage;
