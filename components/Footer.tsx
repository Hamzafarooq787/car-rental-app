'use client';
import React from "react";

export default function Footer() {
  return (
    <>
      {/* CTA SECTION */}
      <section className="bg-[#BF9B30] py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <span className="inline-block bg-white/20 text-white text-xs px-4 py-1 rounded-full mb-4 tracking-wide">
              Chauffeur Assistance
            </span>

            <h2 className="text-white text-2xl md:text-3xl font-bold leading-snug">
              Reliable chauffeur support <br />
              whenever you need it.
            </h2>
          </div>

          <div className="text-left md:text-right">
            <div className="flex md:justify-end items-center gap-3 mb-2">
              <i className="fa-solid fa-phone text-white text-xl" />
              <span className="text-white uppercase tracking-widest text-xs">
                Call Us
              </span>
            </div>

            <div className="text-white text-3xl font-bold mb-4">
              +44 7310 236707
            </div>

            <a
              href="/contact-us"
              className="inline-block bg-white text-[#BF9B30] px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <footer className="bg-[#111111] text-gray-300 pt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">

          {/* ABOUT */}
          <div>
            <p className="text-sm leading-relaxed mb-6">
              Royalerides provides premium chauffeur-driven transport across the UK.
              We focus on punctuality, discretion, and comfort for every journey.
            </p>
          </div>

          {/* AIRPORT TRANSFERS */}
          <div>
            <h4 className="text-[#BF9B30] font-semibold mb-5">
              Airport Transfers
            </h4>
            <ul className="space-y-3 text-sm">
              <li>Heathrow Airport</li>
              <li>Gatwick Airport</li>
              <li>Stansted Airport</li>
              <li>Luton Airport</li>
              <li>London City Airport</li>
            </ul>
          </div>

          {/* CHAUFFEUR SERVICES (moved here) */}
          <div>
            <h4 className="text-[#BF9B30] font-semibold mb-5">
              Chauffeur Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li>Airport Chauffeur Service</li>
              <li>Corporate Travel</li>
              <li>Long Distance Transfers</li>
              <li>Executive Chauffeur Hire</li>
              <li>Event & Business Travel</li>
            </ul>
          </div>

          {/* CONTACT DETAILS (moved here) */}
          <div>
            <h4 className="text-[#BF9B30] font-semibold mb-5">
              Contact Details
            </h4>

            <div className="space-y-3 text-sm">
              <p>
                <strong className="text-[#BF9B30]">Address:</strong><br />
                BL4 7LJ, Bolton<br />
                Manchester, UK
              </p>

              <p>
                <strong className="text-[#BF9B30]">Email:</strong><br />
                info@royalerides.co.uk
              </p>

              <p>
                <strong className="text-[#BF9B30]">Phone:</strong><br />
                +44 7310 236707
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 py-6">
          <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Royalerides. All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
}
