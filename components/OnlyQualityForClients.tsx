'use client';

import { useState } from 'react';

export default function OnlyQualityForClients() {
  const [active, setActive] = useState<'luxury' | 'comfort' | 'prestige'>('luxury');

  const content = {
    luxury:
      'We offer a meticulously curated collection of luxury vehicles designed for elegance and performance.',
    comfort:
      'Our comfort vehicles provide smooth rides, spacious interiors, and premium features for relaxed journeys.',
    prestige:
      'Prestige vehicles are ideal for executives and special occasions, offering superior status and refinement.',
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        <div className="h-[420px] lg:h-[500px] rounded-xl overflow-hidden">
          <img
            src="/images/background/5.jpg"
            alt="Only Quality For Clients"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0b1c39] mb-6">
            Only Quality For Clients
          </h2>

          <div className="flex gap-4 mb-6">
            {['luxury', 'comfort', 'prestige'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab as any)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition
                  ${
                    active === tab
                      ? 'bg-[#1ecb15] text-white'
                      : 'border text-gray-500'
                  }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          <p className="text-gray-600 leading-relaxed max-w-xl">
            {content[active]}
          </p>
        </div>
      </div>
    </section>
  );
}
