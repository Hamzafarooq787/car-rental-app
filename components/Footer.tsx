import React from "react";

export default function Footer() {
    return (
        <>
            {/* CTA SECTION */}
            <section className="bg-[#1ecb15] py-10">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-6">

                    {/* Left */}
                    <div>
                        <span className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full mb-3">
                            Call us for further information
                        </span>

                        <h2 className="text-white text-2xl md:text-3xl font-bold leading-snug">
                            Rentaly customer care <br />
                            is here to help you anytime.
                        </h2>
                    </div>

                    {/* Right */}
                    <div className="text-left md:text-right">
                        <div className="flex md:justify-end items-center gap-3 mb-2">
                            <i className="fa-solid fa-phone text-white text-xl" />
                            <span className="text-white uppercase tracking-widest text-xs">
                                Call Us Now
                            </span>
                        </div>

                        <div className="text-white text-3xl font-bold mb-3">
                            1200 333 800
                        </div>

                        <a
                            href="/contact-us"
                            className="inline-block bg-white text-[#1ecb15] px-6 py-2 rounded-md text-sm font-semibold"
                        >
                            Contact Us
                        </a>
                    </div>

                </div>
            </section>


            {/* FOOTER */}
            <footer className="bg-[#111111] text-gray-400 pt-20">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">

                    {/* About */}
                    <div>
                        <h4 className="text-white font-semibold mb-5">About Rentaly</h4>
                        <p className="text-sm leading-relaxed">
                            Where quality meets affordability. We understand the importance of a
                            smooth and enjoyable journey without the burden of excessive costs.
                            That's why we have meticulously crafted our offerings to provide you
                            with top-notch vehicles at minimum expense.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-5">Contact Info</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3">
                                <i className="fa-solid fa-location-dot text-[#1ecb15]" />
                                08 W 36th St, New York, NY 10001
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="fa-solid fa-phone text-[#1ecb15]" />
                                +1 333 9296
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="fa-solid fa-envelope text-[#1ecb15]" />
                                <a href="mailto:contact@example.com">
                                    contact@example.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="fa-solid fa-download text-[#1ecb15]" />
                                <a href="/brochure.pdf">Download Brochure</a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-5">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="/about">About</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/news">News</a></li>
                            <li><a href="/partners">Partners</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-white font-semibold mb-5">Social Network</h4>
                        <div className="flex gap-3">
                            {["facebook-f", "twitter", "linkedin-in", "pinterest-p", "rss"].map(
                                (icon) => (
                                    <a
                                        key={icon}
                                        href="#"
                                        className="w-10 h-10 bg-[#1a1a1a] flex items-center justify-center rounded-md text-[#1ecb15]"
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
                        <span>Copyright 2025 - Rentaly by Designesia</span>
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
