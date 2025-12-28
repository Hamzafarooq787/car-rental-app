"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I get started with Car Rental?",
    a: "Getting started is easy. Simply browse our available vehicles, select your preferred pickup location and date, and complete the booking online in just a few steps.",
  },
  {
    q: "Can I rent a car with a debit card?",
    a: "Yes, debit cards are accepted for most rentals. However, certain vehicle categories may require a credit card for security purposes.",
  },
  {
    q: "What kind of Car Rental do I need?",
    a: "It depends on your travel needs. Compact cars are ideal for city driving, SUVs for family trips, and luxury vehicles for business or special occasions.",
  },
  {
    q: "What is a rental car security deposit?",
    a: "A security deposit is a temporary hold on your payment method to cover any potential damages or additional charges during the rental period.",
  },
  {
    q: "Can I cancel or modify my reservation?",
    a: "Yes, reservations can be modified or cancelled before pickup time. Cancellation policies may vary depending on the booking type.",
  },
  {
    q: "Is it possible to extend my rental period?",
    a: "Absolutely. You can extend your rental by contacting customer support or updating your booking online, subject to vehicle availability.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0b1c39] mb-14">
          Have Any Questions?
        </h2>

        {/* FAQ Grid */}
        <Accordion
          type="single"
          collapsible
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6"
        >
          {faqs.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-200 pb-4"
            >
              <AccordionTrigger className="flex w-full items-center justify-between text-left hover:no-underline">
                <span className="text-[#0b1c39] font-medium">
                  {item.q}
                </span>
              </AccordionTrigger>

              <AccordionContent>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-[95%]">
                  {item.a}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
}
