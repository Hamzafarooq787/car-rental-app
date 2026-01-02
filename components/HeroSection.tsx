"use client";

import { useState } from "react";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
  });

  return (
    <section
      id="section-hero"
      className="relative bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/images/background/1.jpeg')",
        backgroundPosition: "60% 60%",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="h-24" />
        <div className="h-24" />

        {/* HERO CONTENT */}
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4 leading-snug">
          Executive Chauffeur Service
          <br />
          <span className="text-[#BF9B30] font-semibold">
            crafted for comfort and discretion
          </span>
        </h1>


        <p className="text-gray-300 max-w-2xl mb-6 text-sm md:text-base leading-relaxed">
          Travel with confidence using our premium chauffeur-driven vehicles.
          Every journey is managed by experienced professionals who prioritise
          punctuality, privacy, and refined service.
        </p>


        {/* CONTACT INFO WITH EMOJI */}
        <div className="text-gray-200 mb-8 space-y-2">
          <p>
            📧{" "}
            <a
              href="mailto:info@royalerides.co.uk"
              className="hover:underline text-2xl"
            >
              info@royalerides.co.uk
            </a>
          </p>
          <p>
            📞{" "}
            <a
              href="tel:+447310236707"
              className="hover:underline text-2xl"
            >
              +44 7310 236707
            </a>
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#BF9B30] text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition"
        >
          Check Availability
        </button>

        <div className="h-24" />

        {/* TIMELINE */}
        <div className="relative text-white mt-20">
          <div className="hidden md:block absolute top-5 left-0 w-full h-[2px] bg-[#BF9B30]" />

          <ul className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
            {[
              { step: "1", title: "Select Vehicle", text: "Choose from our luxury fleet." },
              { step: "2", title: "Set Details", text: "Pickup, destination, date & time." },
              { step: "3", title: "Confirm Booking", text: "Clear pricing, no surprises." },
              { step: "4", title: "Enjoy the Journey", text: "Relax with professional service." },
            ].map((item) => (
              <li key={item.step}>
                <div className="w-10 h-10 mx-auto mb-6 rounded bg-[#BF9B30] flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <h4 className="font-semibold mb-3">{item.title}</h4>
                <p className="text-sm text-gray-100">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="h-24" />
      </div>

      {/* POPUP FORM */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative bg-white w-full max-w-3xl mx-4 rounded-xl shadow-2xl p-6 md:p-8 z-10">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-semibold mb-6 text-[#002462]">
              Check Availability
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(formData);
                setIsOpen(false);
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <input
                  required
                  placeholder="Pick-up location"
                  className="border rounded-md px-3 py-2 text-black placeholder-gray-500"
                  onChange={(e) =>
                    setFormData({ ...formData, pickup: e.target.value })
                  }
                />

                <input
                  required
                  placeholder="Drop-off location"
                  className="border rounded-md px-3 py-2 text-black placeholder-gray-500"
                  onChange={(e) =>
                    setFormData({ ...formData, dropoff: e.target.value })
                  }
                />

                <input
                  type="date"
                  required
                  className="border rounded-md px-3 py-2 text-black"
                  onChange={(e) =>
                    setFormData({ ...formData, pickupDate: e.target.value })
                  }
                />

                <input
                  type="time"
                  required
                  className="border rounded-md px-3 py-2 text-black"
                  onChange={(e) =>
                    setFormData({ ...formData, pickupTime: e.target.value })
                  }
                />

              </div>

              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="bg-[#BF9B30] text-white px-8 py-2 rounded-md font-semibold hover:opacity-90 transition"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>

  );
}
