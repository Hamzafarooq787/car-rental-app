"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menu items
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Fleet", path: "/cars" },
    { name: "Contact", path: "/contact-us" },
        { name: "Areas", path: "/areas" },

  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Luxury Chauffeur Service"
              className="h-8 w-auto brightness-0 text-[#Bf9b30] sepia saturate-[400%] hue-rotate-[20deg]"
            />
          </Link>


          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-sm font-medium transition-all relative ${isActive
                      ? "text-[#BF9B30]"
                      : scrolled
                        ? "text-gray-900"
                        : "text-white"
                    } hover:text-[#BF9B30]`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#BF9B30]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact-us"
              className="hidden lg:inline-flex px-6 py-2 rounded-md text-sm font-semibold bg-[#BF9B30] text-white hover:opacity-90 transition"
            >
              Book Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden text-2xl font-bold transition ${scrolled ? "text-black" : "text-white"
                }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md border-t border-gray-100">
          <div className="flex flex-col px-6 py-6 gap-5">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm font-medium transition ${pathname === item.path
                    ? "text-[#BF9B30]"
                    : "text-gray-800"
                  }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact-us"
              className="mt-4 inline-flex justify-center px-6 py-2 rounded-md text-sm font-semibold bg-[#BF9B30] text-white hover:opacity-90 transition"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
