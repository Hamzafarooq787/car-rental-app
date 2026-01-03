'use client';
import React from "react";
import Link from "next/link";

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

            <Link
              href="/contact-us"
              className="inline-block bg-white text-[#BF9B30] px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <footer className="bg-[#111111] text-gray-300 pt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">

          {/* Logo aur About section */}
<div className="flex flex-col items-start">
  {/* Logo */}
   <Link href="/" className="flex items-center mb-6"> {/* mb-4 se mb-6 (more space) */}
    <img
      src="/images/logo-2.png"
      alt="Luxury Chauffeur Service"
      className="block h-[90px] w-auto object-contain" /* h-[70px] se h-[90px] bara kiya */
    />
  </Link>

  {/* ABOUT */}
  <div>
    <p className="text-sm leading-relaxed mb-6">
      Royalerides provides premium chauffeur-driven transport across the UK.
      We focus on punctuality, discretion, and comfort for every journey.
    </p>
  </div>
</div>

          {/* AIRPORT TRANSFERS */}
          <div>
            <h4 className="text-[#BF9B30] font-semibold mb-5">
              Airport Transfers
            </h4>
          <ul className="space-y-3 text-sm">
  <li><Link href="/services">From Manchester to Heathrow Airport (London)</Link></li>
  <li><Link href="/services">From Manchester to Gatwick Airport (London)</Link></li>
  <li><Link href="/services">From Manchester to Birmingham Airport</Link></li>
  <li><Link href="/services">From Manchester to Liverpool John Lennon Airport</Link></li>
  <li><Link href="/services">From Manchester to Leeds Bradford Airport</Link></li>
  <li><Link href="/services">From Manchester to Newcastle International Airport</Link></li>
  <li><Link href="/services">From Manchester to Glasgow Airport</Link></li>
  <li><Link href="/services">From Manchester to Edinburgh Airport</Link></li>
</ul>

          </div>

          {/* CHAUFFEUR SERVICES */}
          <div>
            <h4 className="text-[#BF9B30] font-semibold mb-5">
              Chauffeur Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services">Airport Chauffeur Service</Link></li>
              <li><Link href="/services">Corporate Travel</Link></li>
              <li><Link href="/services">Long Distance Transfers</Link></li>
              <li><Link href="/services">Executive Chauffeur Hire</Link></li>
              <li><Link href="/services">Event & Business Travel</Link></li>
            </ul>
          </div>

          {/* CONTACT DETAILS */}
          <div>
            <h4 className="text-[#BF9B30] font-semibold mb-5">
              Contact Details
            </h4>

            <div className="space-y-3 text-sm">
              <Link href="/contact-us">  <p>
                <br /><strong className="text-[#BF9B30]">Address:</strong><br />
                Manchester, UK
              </p>
              </Link>
              <p>
                <strong className="text-[#BF9B30]">Email:</strong><br />
                <Link href="/contact-us">info@royalerides.co.uk</Link>
              </p>

              <p>
                <strong className="text-[#BF9B30]">Phone:</strong><br />
                <Link href="/contact-us">+44 7310 236707</Link>
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
