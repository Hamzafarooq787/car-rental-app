"use client";

import { useState } from "react";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    pickupDate: "",
    pickupTime: "",
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

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="h-24" />
        <div className="h-24" />

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

        {/* CONTACT INFO (NO EMOJIS) */}
        <div className="text-gray-200 mb-8 space-y-2">
          <p>
            <a
              href="mailto:info@royalerides.co.uk"
              className="hover:underline text-lg"
            >
              info@royalerides.co.uk
            </a>
          </p>
          <p>
            <a
              href="tel:+447310236707"
              className="hover:underline text-lg"
            >
              +44 7310 236707
            </a>
          </p>
        </div>

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

     {/* FIXED SIDE ICONS */}
<div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
  <a
    href="https://wa.me/447310236707"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    title="Chat on WhatsApp"
  >
    {/* WhatsApp Icon */}
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 448 512" 
      className="w-5 h-5 fill-white"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
  </a>

  <a
    href="tel:+447310236707"
    className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    title="Call us"
  >
    {/* Phone Icon */}
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 512 512" 
      className="w-5 h-5 fill-white"
    >
      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
    </svg>
  </a>

  <a
    href="mailto:info@royalerides.co.uk"
    className="w-10 h-10 rounded-full bg-[#BF9B30] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    title="Email us"
  >
    {/* Email Icon */}
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 512 512" 
      className="w-5 h-5 fill-white"
    >
      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
    </svg>
  </a>
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
              className="absolute top-4 right-4 text-gray-600 text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-semibold mb-6 text-[#002462]">
              Check Availability
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsOpen(false);
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  required
                  placeholder="Pick-up location"
                  className="border rounded-md px-3 py-2"
                  onChange={(e) =>
                    setFormData({ ...formData, pickup: e.target.value })
                  }
                />

                <input
                  required
                  placeholder="Drop-off location"
                  className="border rounded-md px-3 py-2"
                  onChange={(e) =>
                    setFormData({ ...formData, dropoff: e.target.value })
                  }
                />

                <input
                  type="date"
                  required
                  className="border rounded-md px-3 py-2"
                  onChange={(e) =>
                    setFormData({ ...formData, pickupDate: e.target.value })
                  }
                />

                <input
                  type="time"
                  required
                  className="border rounded-md px-3 py-2"
                  onChange={(e) =>
                    setFormData({ ...formData, pickupTime: e.target.value })
                  }
                />
              </div>

              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="bg-[#BF9B30] text-white px-8 py-2 rounded-md font-semibold"
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
