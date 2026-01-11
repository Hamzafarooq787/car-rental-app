"use client";
import React from "react";

export default function FloatingContactIcons() {
  const phoneNumber = "+447310236707";
  const displayNumber = "+44 7310 236707";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber.replace(/[^0-9+]/g, "")}?text=Hello%20Royalerides,%20I%20would%20like%20to%20inquire%20about%20your%20chauffeur%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition"
        aria-label="WhatsApp Chat"
      >
        <i className="fab fa-whatsapp text-white text-3xl"></i>
      </a>

      {/* Call */}
      <a
        href={`tel:${displayNumber.replace(/\s/g, "")}`}
        className="w-14 h-14 rounded-full bg-[#BF9B30] flex items-center justify-center shadow-lg hover:scale-110 transition"
        aria-label="Call Now"
      >
        <i className="fas fa-phone text-white text-2xl"></i>
      </a>

    </div>
  );
}
