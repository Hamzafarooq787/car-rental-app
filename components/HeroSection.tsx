'use client';
export default function HeroSection() {
    return (
        <>
            <section
                id="section-hero"
                className="relative bg-cover bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/background/1.jpg')",
                    backgroundPosition: "50% 50%",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20" />

                <div className="relative max-w-6xl mx-auto px-6">

                    {/* Spacers */}
                    <div className="h-24" />
                    <div className="h-24" />

                    {/* Heading */}
                    <h1 className="text-[white] text-4xl md:text-5xl font-semibold mb-4">
                        Looking for a{" "}
                        <span className="text-[#1ecb15]">vehicle</span>? You&apos;re at the
                        right place.
                    </h1>

                    <div className="h-6" />

                    {/* FORM BOX */}
                    <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
                        <form>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                                {/* LEFT: VEHICLE TYPE */}
                                <div>
                                    <h5 className="font-semibold mb-4 text-[#002462]">
                                        What is your vehicle type?
                                    </h5>

                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                        {[
                                            { id: "car", label: "Car", img: "/images/select-form/car.png" },
                                            { id: "van", label: "Van", img: "/images/select-form/van.png" },
                                            { id: "minibus", label: "Minibus", img: "/images/select-form/minibus.png" },
                                            { id: "prestige", label: "Prestige", img: "/images/select-form/sportscar.png" },
                                        ].map((v) => (
                                            <label
                                                key={v.id}
                                                className="bg-[#1ecb15] text-white rounded-xl p-4 text-center cursor-pointer hover:bg-green-600 transition"
                                            >
                                                <input
                                                    type="radio"
                                                    name="Car_Type"
                                                    className="hidden"
                                                />
                                                <img
                                                    src={v.img}
                                                    alt={v.label}
                                                    className="mx-auto mb-2 h-10"
                                                />
                                                <span className="font-semibold">{v.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* RIGHT: INPUTS */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                                    {/* Pick Up Location */}
                                    <div>
                                        <h5 className="font-semibold mb-2 text-[#002462]">
                                            Pick Up Location
                                        </h5>
                                        <input
                                            type="text"
                                            placeholder="Enter your pickup location"
                                            className="
        w-full
        border border-gray-300
        rounded-md
        px-3 py-2
        text-black
        placeholder-gray-400
        focus:outline-none
        focus:border-gray-300
      "
                                        />
                                    </div>

                                    {/* Drop Off Location */}
                                    <div>
                                        <h5 className="font-semibold mb-2 text-[#002462]">
                                            Drop Off Location
                                        </h5>
                                        <input
                                            type="text"
                                            placeholder="Enter your dropoff location"
                                            className="
        w-full
        border border-gray-300
        rounded-md
        px-3 py-2
        text-black
        placeholder-gray-400
        focus:outline-none
        focus:border-gray-300
      "
                                        />
                                    </div>

                                    {/* Pick Up Date & Time */}
                                    <div>
                                        <h5 className="font-semibold mb-2 text-[#002462]">
                                            Pick Up Date & Time
                                        </h5>
                                        <div className="flex border border-gray-300 rounded-md overflow-hidden">
                                            <input
                                                placeholder="Select date"
                                                className="
          w-full
          px-3 py-2
          text-gray-900
          placeholder-black
          focus:outline-none
        "
                                            />
                                            <select
                                                className="
          border-l border-gray-300
          px-3
          text-gray-900
          focus:outline-none
        "
                                            >
                                                <option>Time</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Return Date & Time */}
                                    <div>
                                        <h5 className="font-semibold mb-2 text-[#002462]">
                                            Return Date & Time
                                        </h5>
                                        <div className="flex border border-gray-300 rounded-md overflow-hidden">
                                            <input
                                                placeholder="Select date"
                                                className="
          w-full
          px-3 py-2
          text-gray-900
          placeholder-black
          focus:outline-none
        "
                                            />
                                            <select
                                                className="
          border-l border-gray-300
          px-3
          text-gray-900
          focus:outline-none
        "
                                            >
                                                <option>Time</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            {/* SUBMIT */}
                            <div className="mt-6 text-right">
                                <button
                                    type="submit"
                                    className="bg-[#1ecb15] text-white px-8 py-2 rounded-md font-semibold hover:bg-green-600 transition"
                                >
                                    Find a Vehicle
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Spacer */}
                    <div className="h-24" />

                    {/* TIMELINE */}
                    <div className="relative text-white mt-20">

                        {/* GREEN LINE */}
                        <div className="hidden md:block absolute top-5 left-0 w-full h-[2px] bg-[#1ecb15]" />

                        <ul className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center relative">

                            {[
                                {
                                    step: "1",
                                    title: "Choose a vehicle",
                                    text:
                                        "Unlock unparalleled adventures and memorable journeys with our vast fleet of vehicles tailored to suit every need, taste, and destination.",
                                },
                                {
                                    step: "2",
                                    title: "Pick location & date",
                                    text:
                                        "Pick your ideal location and date, and let us take you on a journey filled with convenience, flexibility, and unforgettable experiences.",
                                },
                                {
                                    step: "3",
                                    title: "Make a booking",
                                    text:
                                        "Secure your reservation with ease, unlocking a world of possibilities and embarking on your next adventure with confidence.",
                                },
                                {
                                    step: "4",
                                    title: "Sit back & relax",
                                    text:
                                        "Hassle-free convenience as we take care of every detail, allowing you to unwind and embrace a journey filled comfort.",
                                },
                            ].map((item) => (
                                <li key={item.step} className="relative px-4">

                                    {/* NUMBER BOX */}
                                    <div className="relative z-10 w-10 h-10 mx-auto mb-6 rounded bg-[#1ecb15] flex items-center justify-center font-bold">
                                        {item.step}
                                    </div>

                                    <h4 className="font-semibold mb-3">
                                        {item.title}
                                    </h4>

                                    <p className="text-sm text-gray-200 leading-relaxed">
                                        {item.text}
                                    </p>

                                </li>
                            ))}

                        </ul>
                    </div>


                    <div className="h-24" />
                </div>
            </section>

        </>
    );
}
