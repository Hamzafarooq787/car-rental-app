"use client";

import StatsSection from "./StatsSection";


const items = [
  "SUV",
  "Hatchback",
  "Crossover",
  "Convertible",
  "Sedan",
  "Sports Car",
  "Coupe",
  "Minivan",
  "Station Wagon",
  "Truck",
  "Minivans",
  "Exotic Cars",
];

export default function MarqueeSection() {
  return (
    <>
     <section className="bg-[#111111] py-10 overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...items, ...items, ...items].map((item, i) => (
            <span
              key={i}
              className="mx-8 text-2xl md:text-3xl font-semibold text-[#1ecb15]"
            >
              {item} —
            </span>
          ))}
        </div>
      </div>
    </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-4xl font-bold text-[#0b1c39] mb-3">
              Our Features
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Discover a world of convenience, safety, and customization, paving the
              way for unforgettable adventures and seamless mobility solutions.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10">

            {/* LEFT FEATURES */}
            <div className="space-y-10">

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-[#1ecb15] text-white text-lg">
                  <i className="fa-solid fa-trophy"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b1c39] mb-1">
                    First class services
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Where luxury meets exceptional care, creating unforgettable
                    moments and exceeding your every expectation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-[#1ecb15] text-white text-lg">
                  <i className="fa-solid fa-road"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b1c39] mb-1">
                    24/7 road assistance
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Reliable support when you need it most, keeping you on the move
                    with confidence and peace of mind.
                  </p>
                </div>
              </div>

            </div>

            {/* CENTER IMAGE */}
            <div className="flex justify-center">
              <img
                src="/images/misc/car.png"
                alt="Car"
                className="max-w-[85%] md:max-w-[75%] lg:max-w-[80%] h-auto"
              />
            </div>

            {/* RIGHT FEATURES */}
            <div className="space-y-10">

              <div className="flex gap-4 items-start flex-row-reverse text-right">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-[#1ecb15] text-white text-lg">
                  <i className="fa-solid fa-tag"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b1c39] mb-1">
                    Quality at Minimum Expense
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Unlocking affordable brilliance with elevating quality while
                    minimizing costs for maximum value.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start flex-row-reverse text-right">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-[#1ecb15] text-white text-lg">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b1c39] mb-1">
                    Free Pick-Up & Drop-Off
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Enjoy free pickup and drop-off services, adding an extra layer of
                    ease to your car rental experience.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      <section
        className="relative py-20"
        style={{
          backgroundImage: "url('/images/background/2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative max-w-6xl mx-auto px-6">

          {/* Top Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">

            {/* Left Heading */}
            <h2 className="text-white text-3xl md:text-4xl font-semibold leading-snug">
              We offer customers a wide <br />
              range of{" "}
              <span className="text-[#1ecb15]">commercial cars</span> and{" "}
              <span className="text-[#1ecb15]">luxury cars</span> for any occasion.
            </h2>

            {/* Right Text */}
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              At our car rental agency, we believe that everyone deserves to
              experience the pleasure of driving a reliable and comfortable vehicle,
              regardless of their budget. We have curated a diverse fleet of
              well-maintained cars, ranging from sleek sedans to spacious SUVs, all
              at competitive prices. With our streamlined rental process, you can
              quickly and conveniently reserve your desired vehicle. Whether you
              need transportation for a business trip, family vacation, or simply
              want to enjoy a weekend getaway, we have flexible rental options to
              accommodate your schedule.
            </p>

          </div>
               <StatsSection/>
          {/* Stats
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center">
              <div className="text-[#1ecb15] text-2xl font-semibold mb-1">15425</div>
              <p className="text-gray-300 text-xs">Completed Orders</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center">
              <div className="text-[#1ecb15] text-2xl font-semibold mb-1">8745</div>
              <p className="text-gray-300 text-xs">Happy Customers</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center">
              <div className="text-[#1ecb15] text-2xl font-semibold mb-1">235</div>
              <p className="text-gray-300 text-xs">Vehicles Fleet</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center">
              <div className="text-[#1ecb15] text-2xl font-semibold mb-1">15</div>
              <p className="text-gray-300 text-xs">Years Experience</p>
            </div>

          </div> */}

        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1c39] mb-3">
              Our Vehicle Fleet
            </h2>
            <p className="text-gray-500 text-base md:text-lg">
              Driving your dreams to reality with an exquisite fleet of versatile
              vehicles for unforgettable journeys.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

            {/* CARD 1 */}
            <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
              <div className="relative">
                <img
                  src="/images/cars/jeep-renegade.jpg"
                  alt="Jeep Renegade"
                  className="w-full h-48 md:h-52 object-cover"
                />

                <button className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                  <i className="fa-solid fa-chevron-left text-xs"></i>
                </button>
                <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                  <i className="fa-solid fa-chevron-right text-xs"></i>
                </button>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-[#0b1c39] text-lg">
                    Jeep Renegade
                  </h4>
                  <span className="text-gray-400 text-sm flex items-center gap-1">
                    <i className="fa-regular fa-heart"></i> 74
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 text-[#1ecb15] text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <i className="fa-solid fa-user"></i> 5
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fa-solid fa-briefcase"></i> 2
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fa-solid fa-door-open"></i> 4
                  </span>
                  <span className="flex items-center gap-1 text-[#0b1c39]">
                    <i className="fa-solid fa-car-side text-[#1ecb15]"></i> SUV
                  </span>
                </div>

                <hr className="mb-4" />

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-400 text-xs">Daily rate from</p>
                    <p className="text-xl font-bold text-[#0b1c39]">$265</p>
                  </div>
                  <button className="bg-[#1ecb15] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-600 transition">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
              <img
                src="/images/cars/bmw-m5.jpg"
                alt="BMW M2"
                className="w-full h-48 md:h-52 object-cover"
              />

              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-[#0b1c39] text-lg">BMW M2</h4>
                  <span className="text-gray-400 text-sm flex items-center gap-1">
                    <i className="fa-regular fa-heart"></i> 36
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 text-[#1ecb15] text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <i className="fa-solid fa-user"></i> 5
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fa-solid fa-briefcase"></i> 2
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fa-solid fa-door-open"></i> 4
                  </span>
                  <span className="flex items-center gap-1 text-[#0b1c39]">
                    <i className="fa-solid fa-car-side text-[#1ecb15]"></i> Sedan
                  </span>
                </div>

                <hr className="mb-4" />

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-400 text-xs">Daily rate from</p>
                    <p className="text-xl font-bold text-[#0b1c39]">$244</p>
                  </div>
                  <button className="bg-[#1ecb15] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-600 transition">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
              <img
                src="/images/cars/ferrari-enzo.jpg"
                alt="Ferrari Enzo"
                className="w-full h-48 md:h-52 object-cover"
              />

              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-[#0b1c39] text-lg">
                    Ferrari Enzo
                  </h4>
                  <span className="text-gray-400 text-sm flex items-center gap-1">
                    <i className="fa-regular fa-heart"></i> 85
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 text-[#1ecb15] text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <i className="fa-solid fa-user"></i> 5
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fa-solid fa-briefcase"></i> 2
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fa-solid fa-door-open"></i> 4
                  </span>
                  <span className="flex items-center gap-1 text-[#0b1c39]">
                    <i className="fa-solid fa-car-side text-[#1ecb15]"></i> Exotic Car
                  </span>
                </div>

                <hr className="mb-4" />

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-400 text-xs">Daily rate from</p>
                    <p className="text-xl font-bold text-[#0b1c39]">$167</p>
                  </div>
                  <button className="bg-[#1ecb15] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-600 transition">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section
        className="relative w-full min-h-[50vh] md:min-h-[80vh] flex items-center"
        style={{
          backgroundImage: "url('/images/background/3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-center">
            {/* INNER CONTAINER TO CENTER EVERYTHING */}
            <div className="w-full max-w-6xl">

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div className="flex justify-center lg:justify-center">
                  <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-center lg:text-left max-w-sm">
                    <span className="block">Let’s Your</span>
                    <span className="block">Adventure</span>
                    <span className="block text-[#1ecb15]">Begin</span>
                  </h1>
                </div>

                {/* RIGHT FEATURES */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Feature 1 */}
                  <div className="text-center sm:text-left">
                    <div className="w-14 h-14 bg-[#1ecb15] rounded-lg flex items-center justify-center mx-auto sm:mx-0 mb-4">
                      <i className="fa-solid fa-trophy text-white text-xl"></i>
                    </div>
                    <h4 className="text-white font-semibold mb-2">
                      First Class Services
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Where luxury meets exceptional care, creating unforgettable moments.
                    </p>
                  </div>

                  {/* Feature 2 */}
                  <div className="text-center sm:text-left">
                    <div className="w-14 h-14 bg-[#1ecb15] rounded-lg flex items-center justify-center mx-auto sm:mx-0 mb-4">
                      <i className="fa-solid fa-road text-white text-xl"></i>
                    </div>
                    <h4 className="text-white font-semibold mb-2">
                      24/7 Road Assistance
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Reliable support whenever you need it, wherever you are.
                    </p>
                  </div>

                  {/* Feature 3 */}
                  <div className="text-center sm:text-left">
                    <div className="w-14 h-14 bg-[#1ecb15] rounded-lg flex items-center justify-center mx-auto sm:mx-0 mb-4">
                      <i className="fa-solid fa-key text-white text-xl"></i>
                    </div>
                    <h4 className="text-white font-semibold mb-2">
                      Free Pick-Up & Drop-Off
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Enjoy stress-free pickup and drop-off for extra convenience.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1c39] mb-3">
              Latest News
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Breaking news, fresh perspectives, and in-depth coverage - stay ahead
              with our latest news, insights, and analysis.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src="/images/news/pic-blog-1.jpg"
                  alt="Enjoy Best Travel Experience"
                  className="w-full h-56 object-cover scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#1ecb15] text-white rounded-md px-3 py-2 text-center text-xs font-semibold">
                  <div className="text-lg leading-none">10</div>
                  MAR
                </div>
              </div>

              <div className="p-6">
                <h4 className="font-semibold text-[#0b1c39] mb-2">
                  Enjoy Best Travel Experience
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  Dolore officia sint incididunt non excepteur ea mollit commodo ut
                  enim reprehenderit cupidatat labore ad laborum consectetur.
                </p>
                <button className="bg-[#1ecb15] text-white text-sm px-5 py-2 rounded-md font-semibold">
                  Read More
                </button>
              </div>

              <div className="h-[2px] bg-[#1ecb15]" />
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src="/images/news/pic-blog-2.jpg"
                  alt="The Future of Car Rent"
                  className="w-full h-56 object-cover scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#1ecb15] text-white rounded-md px-3 py-2 text-center text-xs font-semibold">
                  <div className="text-lg leading-none">12</div>
                  MAR
                </div>
              </div>

              <div className="p-6">
                <h4 className="font-semibold text-[#0b1c39] mb-2">
                  The Future of Car Rent
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  Dolore officia sint incididunt non excepteur ea mollit commodo ut
                  enim reprehenderit cupidatat labore ad laborum consectetur.
                </p>
                <button className="bg-[#1ecb15] text-white text-sm px-5 py-2 rounded-md font-semibold">
                  Read More
                </button>
              </div>

              <div className="h-[2px] bg-[#1ecb15]" />
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src="/images/news/pic-blog-3.jpg"
                  alt="Holiday Tips For Backpacker"
                  className="w-full h-56 object-cover scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#1ecb15] text-white rounded-md px-3 py-2 text-center text-xs font-semibold">
                  <div className="text-lg leading-none">14</div>
                  MAR
                </div>
              </div>

              <div className="p-6">
                <h4 className="font-semibold text-[#0b1c39] mb-2">
                  Holiday Tips For Backpacker
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  Dolore officia sint incididunt non excepteur ea mollit commodo ut
                  enim reprehenderit cupidatat labore ad laborum consectetur.
                </p>
                <button className="bg-[#1ecb15] text-white text-sm px-5 py-2 rounded-md font-semibold">
                  Read More
                </button>
              </div>

              <div className="h-[2px] bg-[#1ecb15]" />
            </div>

          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* CARD */}
            {[
              {
                img: "/images/testimonial/1.jpg",
                name: "Stepanie Hutchkiss",
                text:
                  "I have been using Rentaly for my Car Rental needs for over 5 years now. I have never had any problems with their service. Their customer support is always responsive and helpful. I would recommend Rentaly to anyone looking for a reliable Car Rental provider.",
              },
              {
                img: "/images/testimonial/2.jpg",
                name: "Jovan Reels",
                text:
                  "We have been using Rentaly for our trips needs for several years now and have always been happy with their service. Their customer support is excellent and always available to help with any issues. Their prices are very competitive.",
              },
              {
                img: "/images/testimonial/3.jpg",
                name: "Kanesha Keyton",
                text:
                  "Endorsed by industry experts, Rentaly is the Car Rental solution you can trust. With years of experience in the field, we provide fast, reliable and secure Car Rental services.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative h-[520px] rounded-2xl overflow-hidden bg-cover bg-center transition-transform duration-500 hover:scale-[1.02]"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-colors duration-300" />

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-[#1ecb15] text-6xl font-bold mb-4 leading-none">
                      “
                    </div>

                    <h4 className="text-white font-semibold mb-4 text-lg">
                      Excellent Service! Car Rent Service!
                    </h4>

                    <p className="text-gray-200 text-sm leading-relaxed max-w-[90%]">
                      {item.text}
                    </p>
                  </div>

                  <p className="text-gray-300 text-sm font-medium">
                    — {item.name}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


    </>
  );
}
