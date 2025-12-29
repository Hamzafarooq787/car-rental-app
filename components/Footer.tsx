import React from "react";

export default function Footer() {
  return (
    <>
      {/* CTA SECTION (NO CHANGE) */}
      <section className="bg-[#BF9B30] py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <span className="inline-block bg-white/20 text-white text-xs px-4 py-1 rounded-full mb-4 tracking-wide">
              Premium Chauffeur Support
            </span>

            <h2 className="text-white text-2xl md:text-3xl font-bold leading-snug">
              Our chauffeur team is available <br />
              to assist you 24/7.
            </h2>
          </div>

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

      {/* MAIN FOOTER */}
      <footer className="bg-[#111111] text-gray-300 pt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">

          {/* ABOUT */}
          <div>
            <p className="text-sm leading-relaxed mb-6">
              Travel with confidence with our luxury chauffeur service. We provide
              dependable city transfers and long-distance journeys across the UK,
              ensuring comfort, punctuality and professional service every time.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4">
              {["facebook-f", "linkedin-in", "pinterest-p", "instagram"].map(
                (icon) => (
                  <a
                    key={icon}
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#BF9B30] hover:bg-[#222] transition"
                  >
                    <i className={`fa-brands fa-${icon}`} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* AIRPORT TRANSFERS */}
          <div>
            <h4 className="text-[#BF9B30] font-semibold mb-5">
              Airport Transfers
            </h4>
            <ul className="space-y-3 text-sm">
              <li>Heathrow Airport Transfer</li>
              <li>Gatwick Airport Transfer</li>
              <li>Stansted Airport Transfer</li>
              <li>London Airport Transfer</li>
              <li>Luton Airport Transfer</li>
              <li>Farnborough Airport Transfer</li>
              <li>Biggin Hill Airport Transfer</li>
              <li>London City</li>
              <li>Oxshott City Transfer</li>
            </ul>
          </div>

          {/* AREAS WE COVER */}
          <div>
            <h4 className="text-[#BF9B30] font-semibold mb-5">
              Areas We Cover
            </h4>
            <ul className="space-y-3 text-sm">
              <li>Aldershot Transfers</li>
              <li>Ascot Transfers</li>
              <li>Camberley Transfers</li>
              <li>Farnborough Transfers</li>
              <li>Farnham Transfers</li>
              <li>Weybridge Transfers</li>
              <li>Woking Transfers</li>
              <li>Virginia Water Transfer</li>
              <li>Guildford City</li>
              <li>Godalming City</li>
            </ul>
          </div>

          {/* BOOK TRANSFERS */}
          <div>
            <h4 className="text-[#BF9B30] font-semibold mb-5">
              Book Chauffeur Transfers
            </h4>
            <ul className="space-y-3 text-sm">
              <li>Woking to Birmingham</li>
              <li>Woking to Bristol</li>
              <li>Woking to Edinburgh</li>
              <li>Woking to Glasgow</li>
              <li>Woking to Leeds</li>
              <li>Woking to Liverpool</li>
              <li>Woking to Manchester</li>
              <li>Woking to Newcastle</li>
              <li>Woking to Nottingham</li>
              <li>Woking to Sheffield</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 py-6">
          <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Ai Luxe Limited. All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
}
