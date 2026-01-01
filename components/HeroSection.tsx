"use client";

import { useState } from "react";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    carType: "Executive", // default selected so form never blocks
    pickup: "",
    dropoff: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
  });

  return (
    <>
      <section
        id="section-hero"
        className="relative bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/background/1.jpeg')",
          backgroundPosition: "50% 50%",
        }}
      >
        {/* Overlay */}
<div className="absolute inset-0 bg-[black]/80" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="h-24" />
          <div className="h-24" />

          {/* Heading */}
          <h1 className="text-white text-4xl md:text-5xl font-semibold mb-5 leading-tight">
            Premium{" "}
            <span className="text-[#BF9B30]">chauffeur-driven vehicles</span>
            <br />
            for refined journeys.
          </h1>

          <p className="text-gray-200 max-w-2xl mb-8">
            Experience discreet, reliable and luxurious chauffeur services
            tailored for business and special occasions.
          </p>


        {/* FORM BOX */}
<div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
  <form
    onSubmit={(e) => {
      e.preventDefault();
      alert("Availability request submitted");
      console.log(formData);
    }}
  >
    <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">

      {/* INPUTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* PICKUP */}
        <div>
          <h5 className="font-semibold mb-2 text-[#002462]">
            Pick-up Location
          </h5>
          <input
            type="text"
            required
            placeholder="Enter pickup location"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-black focus:outline-none"
            onChange={(e) =>
              setFormData({ ...formData, pickup: e.target.value })
            }
          />
        </div>

        {/* DROPOFF */}
        <div>
          <h5 className="font-semibold mb-2 text-[#002462]">
            Drop-off Location
          </h5>
          <input
            type="text"
            required
            placeholder="Enter destination"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-black focus:outline-none"
            onChange={(e) =>
              setFormData({ ...formData, dropoff: e.target.value })
            }
          />
        </div>

        {/* PICKUP DATE TIME */}
        <div>
          <h5 className="font-semibold mb-2 text-[#002462]">
            Pick-up Date & Time
          </h5>
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <input
              type="date"
              required
              className="w-full px-3 py-2 text-gray-900 focus:outline-none"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  pickupDate: e.target.value,
                })
              }
            />
            <select
              required
              className="border-l border-gray-300 px-3 text-gray-900 focus:outline-none"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  pickupTime: e.target.value,
                })
              }
            >
              <option value="">Time</option>
              {Array.from({ length: 11 }, (_, i) => (
                <option key={i}>{`${i + 8}:00`}</option>
              ))}
            </select>
          </div>
        </div>

        {/* RETURN DATE TIME */}
        <div>
          <h5 className="font-semibold mb-2 text-[#002462]">
            Return Date & Time
          </h5>
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <input
              type="date"
              required
              className="w-full px-3 py-2 text-gray-900 focus:outline-none"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  returnDate: e.target.value,
                })
              }
            />
            <select
              required
              className="border-l border-gray-300 px-3 text-gray-900 focus:outline-none"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  returnTime: e.target.value,
                })
              }
            >
              <option value="">Time</option>
              {Array.from({ length: 11 }, (_, i) => (
                <option key={i}>{`${i + 8}:00`}</option>
              ))}
            </select>
          </div>
        </div>

      </div>

    </div>

    {/* SUBMIT */}
    <div className="mt-6 text-center">
      <button
        type="submit"
        className="bg-[#BF9B30] text-white px-8 py-2 rounded-md font-semibold hover:opacity-90 transition"
      >
        Check Availability
      </button>
    </div>
  </form>
</div>

          <div className="h-24" />

          {/* TIMELINE */}
          <div className="relative text-white mt-20">
            <div className="hidden md:block absolute top-5 left-0 w-full h-[2px] bg-[#BF9B30]" />

            <ul className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center relative">
              {[
                { step: "1", title: "Select Vehicle", text: "Choose from our luxury chauffeur fleet." },
                { step: "2", title: "Set Details", text: "Define route, date and time." },
                { step: "3", title: "Confirm Booking", text: "Clear pricing and confirmation." },
                { step: "4", title: "Enjoy the Journey", text: "Relax with professional service." },
              ].map((item) => (
                <li key={item.step} className="relative px-4">
                  <div className="relative z-10 w-10 h-10 mx-auto mb-6 rounded bg-[#BF9B30] flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <h4 className="font-semibold mb-3">{item.title}</h4>
                  <p className="text-sm text-gray-100 leading-relaxed">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-24" />
        </div>
      </section>
    </>
  );
}
