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
    { name: "About US", path: "/about-us" },
    { name: "Cars", path: "/cars" },
    { name: "Contact US", path: "/contact-us" },
    { name: "Services", path: "/services" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/images/logo.png" alt="Rentaly" className="h-8 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm font-medium transition ${
                  pathname === item.path
                    ? "text-green-500"
                    : scrolled
                    ? "text-gray-900"
                    : "text-white"
                } hover:text-green-500`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Link
              href="/signin"
              className={`hidden lg:inline-flex px-5 py-2 rounded-md text-sm font-semibold transition ${
                pathname === "/signin"
                  ? "bg-green-600 text-white"
                  : "bg-green-500 text-white hover:bg-green-600"
              }`}
            >
              Sign In
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden text-2xl font-bold transition ${
                scrolled ? "text-black" : "text-white"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="flex flex-col px-6 py-4 gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm font-medium transition ${
                  pathname === item.path ? "text-green-500" : "text-gray-800"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
         
          </div>
        </div>
      )}
    </header>
  );
}
