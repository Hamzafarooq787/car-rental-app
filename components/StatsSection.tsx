"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15425, label: "Completed Orders" },
  { value: 8745, label: "Happy Customers" },
  { value: 235, label: "Vehicles Fleet" },
  { value: 15, label: "Years Experience" },
];

export default function StatsSection() {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            stats.forEach((stat, index) => {
              let start = 0;
              const end = stat.value;
              const duration = 2000; // 2 seconds
              const increment = Math.ceil(end / (duration / 50)); // update every 50ms

              const interval = setInterval(() => {
                start += increment;
                if (start >= end) {
                  start = end;
                  clearInterval(interval);
                }
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = start;
                  return newCounts;
                });
              }, 50);
            });
            observer.disconnect();
          }
        },
        { threshold: 0.3 } // section enters viewport
      );
      observer.observe(ref.current);
    }
    return () => observer && observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center"
          >
            <div className="text-[#1ecb15] text-4xl font-semibold mb-1">
              {counts[index]}
            </div>
            <p className="text-gray-600 text-xs">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
