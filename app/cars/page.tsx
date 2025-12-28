// app/contact-us/page.tsx
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const cars = [
    { name: "Bentley", image: "/images/cars/bentley.jpg" },
    { name: "BMW M5", image: "/images/cars/bmw-m5.jpg" },
    { name: "Chevrolet Camaro", image: "/images/cars/chevrolet-camaro.jpg" },
    { name: "Ferrari Enzo", image: "/images/cars/ferrari-enzo.jpg" },
    { name: "Ford Raptor", image: "/images/cars/ford-raptor.jpg" },
    { name: "Hyundai Staria", image: "/images/cars/hyundai-staria.jpg" },
    { name: "Jeep Renegade", image: "/images/cars/jeep-renegade.jpg" },
    { name: "Lexus", image: "/images/cars/lexus.jpg" },
    { name: "Mini Cooper", image: "/images/cars/mini-cooper.jpg" },
    { name: "Range Rover", image: "/images/cars/range-rover.jpg" },
    { name: "Toyota RAV4", image: "/images/cars/toyota-rav.jpg" },
    { name: "VW Polo", image: "/images/cars/vw-polo.jpg" },
];

const CarPage: React.FC = () => {
    return (
        <>
            <Header />

            {/* SUBHEADER */}
            <section
                className="relative h-[320px] flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/background/2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1 className="relative text-white text-4xl md:text-5xl font-semibold">
                    Cars
                </h1>
            </section>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {cars.map((car, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
                            >
                                <div className="h-52 overflow-hidden">
                                    <img
                                        src={car.image}
                                        alt={car.name}
                                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                    />
                                </div>

                                <div className="p-4 text-center">
                                    <h3 className="text-[#0b1c39] font-semibold text-lg">
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
