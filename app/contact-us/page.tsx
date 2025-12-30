"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState } from "react";

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      alert("Your message has been sent successfully.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Header />

      {/* SUBHEADER */}
      <section
        className="relative h-[320px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/background/contact-us-banner.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative text-white text-4xl md:text-5xl font-semibold">
          Contact Us
        </h1>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT FORM */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Get in Touch With Our Chauffeur Team
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-4 py-3
                             text-gray-700 placeholder-gray-400
                             focus:outline-none focus:ring-2 focus:ring-[#BF9B30]
                             focus:text-gray-900"
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-4 py-3
                             text-gray-700 placeholder-gray-400
                             focus:outline-none focus:ring-2 focus:ring-[#BF9B30]
                             focus:text-gray-900"
                  required
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-4 py-3
                             text-gray-700 placeholder-gray-400
                             focus:outline-none focus:ring-2 focus:ring-[#BF9B30]
                             focus:text-gray-900"
                />
              </div>

              <textarea
                rows={7}
                placeholder="Tell us about your journey or requirements"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-4 py-3
                           text-gray-700 placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-[#BF9B30]
                           focus:text-gray-900"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-[#BF9B30] text-white px-10 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition"
              >
                {loading ? "Sending..." : "Send Enquiry"}
              </button>
            </form>
          </div>

          {/* RIGHT INFO */}
          <div className="space-y-8 text-gray-700">
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                London Office
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3 items-start">
                  <i className="fa-solid fa-location-dot text-[#BF9B30] text-lg mt-1" />
                  BL4 7LJ, Bolton, Manchester
                </li>
                <li className="flex gap-3 items-start">
                  <i className="fa-solid fa-phone text-[#BF9B30] text-lg mt-1" />
                  +44 7310 236707
                </li>
                <li className="flex gap-3 items-start">
                  <i className="fa-solid fa-envelope text-[#BF9B30] text-lg mt-1" />
                  Info@royalerides.co.uk
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;
