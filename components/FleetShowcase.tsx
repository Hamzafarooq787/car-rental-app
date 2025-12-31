"use client";

import React from "react";
import Link from "next/link";
import { Users, Luggage, CheckCircle, Briefcase } from "lucide-react";

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

              {/* Hover Specs */}
              <div className="absolute inset-0 bg-[#0b1c39]/95 px-6 py-8 opacity-0 group-hover:opacity-100 transition flex items-center">
                <div className="w-full text-white">
                  <h4 className="text-lg font-semibold mb-5 text-[#BF9B30]">
                    Vehicle Specifications
                  </h4>

                  <ul className="space-y-4 text-sm">
                    {car.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#BF9B30] mt-0.5">
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
