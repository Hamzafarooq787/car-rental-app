// app/contact-us/page.tsx
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const ContactPage: React.FC = () => {
  return (
    <>
      <Header />
      {/* SUBHEADER */}
      <section
        className="relative h-[320px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/background/subheader.jpg')",
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
              Do you have any question?
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-600 placeholder-gray-400 focus:text-black focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-600 placeholder-gray-400 focus:text-black focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-600 placeholder-gray-400 focus:text-black focus:outline-none"
                />
              </div>

              <textarea
                placeholder="Your Message"
                rows={7}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-600 placeholder-gray-400 focus:text-black focus:outline-none"
              />

              <button
                type="submit"
                className="bg-[#1ecb15] text-white px-10 py-3 rounded-md font-semibold text-sm"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT INFO */}
          <div className="space-y-8">

            {/* US OFFICE */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                US Office
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3 text-gray-800">
                  <i className="fa-solid fa-location-dot text-green-500" />
                  08 W 36th St, New York, NY 10001
                </li>
                <li className="flex gap-3 text-gray-800">
                  <i className="fa-solid fa-phone text-green-500" />
                  +1 333 9296
                </li>
                <li className="flex gap-3 text-gray-800">
                  <i className="fa-solid fa-envelope text-green-500" />
                  contact@example.com
                </li>
                <li className="flex gap-3 text-gray-800">
                  <i className="fa-solid fa-download text-green-500" />
                  Download Brochure
                </li>
              </ul>
            </div>

            {/* AU OFFICE */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                AU Office
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3 text-gray-800">
                  <i className="fa-solid fa-location-dot text-green-500" />
                  100 Mainstreet Center, Sydney
                </li>
                <li className="flex gap-3 text-gray-800">
                  <i className="fa-solid fa-phone text-green-500" />
                  +61 333 9296
                </li>
                <li className="flex gap-3 text-gray-800">
                  <i className="fa-solid fa-envelope text-green-500" />
                  contact@example.com
                </li>
                <li className="flex gap-3 text-gray-800">
                  <i className="fa-solid fa-download text-green-500" />
                  Download Brochure
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
