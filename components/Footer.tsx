import React from "react";

export default function Footer() {
  return (
    <>
      {/* CTA SECTION */}
      <section className="bg-[#BF9B30] py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">

          {/* Left */}
          <div>
            <span className="inline-block bg-white/20 text-white text-xs px-4 py-1 rounded-full mb-4 tracking-wide">
              Premium Chauffeur Support
            </span>

            <h2 className="text-white text-2xl md:text-3xl font-bold leading-snug">
              Our chauffeur team is available <br />
              to assist you 24/7.
            </h2>
          </div>

          {/* Right */}
          <div className="text-left md:text-right">
            <div className="flex md:justify-end items-center gap-3 mb-2">
              <i className="fa-solid fa-phone text-white text-xl" />
              <span className="text-white uppercase tracking-widest text-xs">
                Call Us Anytime
              </span>
            </div>

            <div className="text-white text-3xl font-bold mb-4">
              +44 20 0000 0000
            </div>

            <a
              href="/contact"
              className="inline-block bg-white text-[#BF9B30] px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition"
            >
              Get in Touch
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b0b0b] text-gray-400 pt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">

          {/* About */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              About Our Chauffeur Service
            </h4>
            <p className="text-sm leading-relaxed">
              We provide luxury chauffeur-driven transport designed for comfort,
              discretion, and reliability. From airport transfers to executive
              travel, every journey is delivered with precision and elegance.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">Contact Information</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot text-[#BF9B30] mt-1" />
                London, United Kingdom
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-[#BF9B30]" />
                +44 20 0000 0000
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-[#BF9B30]" />
                <a href="mailto:info@yourdomain.com">
                  info@yourdomain.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-file-arrow-down text-[#BF9B30]" />
                <a href="/brochure.pdf">Download Company Brochure</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Our Services</a></li>
              <li><a href="/fleet">Our Fleet</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/faq">FAQs</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-5">Follow Us</h4>
            <div className="flex gap-3">
              {["facebook-f", "instagram", "linkedin-in", "twitter"].map(
                (icon) => (
                  <a
                    key={icon}
                    href="#"
                    className="w-10 h-10 bg-[#151515] flex items-center justify-center rounded-md text-[#BF9B30] hover:bg-[#1f1f1f] transition"
                  >
                    <i className={`fa-brands fa-${icon}`} />
                  </a>
                )
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
            <span>
              © {new Date().getFullYear()} Luxury Chauffeur Services. All rights reserved.
            </span>
            <div className="flex gap-6">
              <a href="/terms">Terms & Conditions</a>
              <a href="/privacy">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
