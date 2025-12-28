// app/contact-us/page.tsx
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OnlyQualityForClients from "@/components/OnlyQualityForClients";
import StatsSection from "@/components/StatsSection";
import React from "react";

const AboutPage: React.FC = () => {
    
    return (
        <>
            <Header />
            {/* SUBHEADER */}
            <section
                className="relative h-[320px] flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/background/subheader.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1 className="relative text-white text-4xl md:text-5xl font-semibold">
                    About Us
                </h1>
            </section>
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP CONTENT */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">

                        {/* LEFT HEADING */}
                        <div>
                            <h2 className="text-[#0b1c39] font-bold leading-tight text-3xl md:text-4xl lg:text-[42px]">
                                We offer customers a wide <br />
                                range of{" "}
                                <span className="text-[#1ecb15]">commercial cars</span> and{" "}
                                <span className="text-[#1ecb15]">luxury cars</span> for any occasion.
                            </h2>
                        </div>

                        {/* RIGHT TEXT */}
                        <div>
                            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                                Lorem ipsum non aliquip esse do eu ad amet laboris do labore
                                reprehenderit mollit exercitation cillum irure fugiat magna laboris
                                aliquip adipisicing consectetur officia dolor minim ea enim amet in ut
                                non non excepteur anim magna dolor nostrud commodo qui irure deserunt
                                adipisicing nisi ex nostrud sunt officia in aliquip velit anim id
                                aliqua qui do sed non ad qui sed in eu in aliqua sunt pariatur occaecat
                                in ullamco deserunt dolor consectetur laborum non duis occaecat nulla
                                ut sed qui sunt id ex sint sed eu excepteur minim nulla minim excepteur
                                exercitation.
                            </p>
                        </div>

                    </div>
                    <StatsSection/>

                    {/* STATS
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {[
                            { value: "15425", label: "Completed Orders" },
                            { value: "8745", label: "Happy Customers" },
                            { value: "235", label: "Vehicles Fleet" },
                            { value: "15", label: "Years Experience" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl shadow-sm px-10 py-12 text-center"
                            >
                                <div className="text-[#1ecb15] text-4xl font-bold mb-2">
                                    {item.value}
                                </div>
                                <div className="text-[#0b1c39] font-medium text-sm">
                                    {item.label}
                                </div>
                            </div>
                        ))}

                    </div> */}
                </div>
            </section>
            <section
                className="relative py-24"
                style={{
                    backgroundImage: "url('/images/background/8.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <h2 className="text-center text-white text-3xl md:text-4xl font-semibold mb-16">
                        Board of Directors
                    </h2>

                    {/* Team Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                        {[
                            {
                                img: "/images/team/1.jpg",
                                name: "Fynley Wilkinson",
                                role: "Chief Creative Officer",
                            },
                            {
                                img: "/images/team/2.jpg",
                                name: "Peter Welsh",
                                role: "Chief Technology Officer",
                            },
                            {
                                img: "/images/team/3.jpg",
                                name: "John Shepard",
                                role: "Chief Executive Officer",
                            },
                            {
                                img: "/images/team/4.jpg",
                                name: "Robyn Peel",
                                role: "Director of Finance",
                            },
                        ].map((member, i) => (
                            <div key={i} className="group text-center">

                                {/* Image */}
                                <div className="relative overflow-hidden rounded-xl mb-4">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Social Icons */}
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
                                        {["facebook-f", "twitter", "linkedin-in", "pinterest-p"].map(
                                            (icon) => (
                                                <a
                                                    key={icon}
                                                    href="#"
                                                    className="w-10 h-10 bg-[#1ecb15] rounded-md flex items-center justify-center text-white"
                                                >
                                                    <i className={`fa-brands fa-${icon}`} />
                                                </a>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Text */}
                                <h4 className="text-white font-semibold text-lg">
                                    {member.name}
                                </h4>
                                <p className="text-gray-300 text-sm">
                                    {member.role}
                                </p>

                            </div>
                        ))}

                    </div>
                </div>
            </section>
            <OnlyQualityForClients/>
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
            <Footer />
        </>
    );
};

export default AboutPage;