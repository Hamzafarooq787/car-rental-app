'use client';

import { useState } from 'react';

export default function OnlyQualityForClients() {
  const [active, setActive] = useState<'luxury' | 'comfort' | 'prestige'>('luxury');

  const content = {
    luxury:
      'Our luxury chauffeur vehicles are carefully selected to deliver elegance, performance, and an exceptional travel experience.',
    comfort:
      'Designed for relaxed journeys, our comfort-class vehicles offer spacious interiors, smooth rides, and premium amenities.',
    prestige:
      'Prestige vehicles are reserved for executives and special occasions, combining status, sophistication, and refined comfort.',
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
            Only Quality for Our Clients
          </h2>

          <div className="flex gap-4 mb-6">
            {['luxury', 'comfort', 'prestige'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab as any)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition
                  ${
                    active === tab
                      ? 'bg-[#BF9B30] text-white'
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
