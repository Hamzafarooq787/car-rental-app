"use client";

import { useState } from "react";

const HomeBookingSection = () => {
    const [formData, setFormData] = useState({
        pickup: "",
        dropoff: "",
        pickupDate: "",
        pickupTime: "",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await fetch("/api/booking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await res.json();

        if (!res.ok) {
            console.error(result);
            alert("Something went wrong. Email not sent ❌");
            return;
        }

        alert("Booking request sent successfully ✅");

        setFormData({
            pickup: "",
            dropoff: "",
            pickupDate: "",
            pickupTime: "",
        });

    } catch (error) {
        console.error(error);
        alert("Server error ❌");
    }
};


    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">

                    {/* Heading */}
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-[#002462]">
                            Check Availability
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Book your luxury chauffeur ride in seconds
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                            {/* Pick-up */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Pick-up Location
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Enter pick-up address"
                                    className="w-full  text-black border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#BF9B30]"
                                    value={formData.pickup}
                                    onChange={(e) =>
                                        setFormData({ ...formData, pickup: e.target.value })
                                    }
                                />

                            </div>

                            {/* Drop-off */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Drop-off Location
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Enter drop-off address"
                                    className="w-full  text-black border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#BF9B30]"
                                    value={formData.dropoff}
                                    onChange={(e) =>
                                        setFormData({ ...formData, dropoff: e.target.value })
                                    }
                                />
                            </div>

                            {/* Date */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Pick-up Date
                                </label>
                                <input
                                    required
                                    type="date"
                                    className="w-full  text-black border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#BF9B30]"
                                    value={formData.pickupDate}
                                    onChange={(e) =>
                                        setFormData({ ...formData, pickupDate: e.target.value })
                                    }
                                />
                            </div>

                            {/* Time */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Pick-up Time
                                </label>
                                <input
                                    required
                                    type="time"
                                    className="w-full  text-black border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#BF9B30]"
                                    value={formData.pickupTime}
                                    onChange={(e) =>
                                        setFormData({ ...formData, pickupTime: e.target.value })
                                    }
                                />
                            </div>
                        </div>

                        {/* Button */}
                        <div className="mt-8 text-center">
                            <button
                                type="submit"
                                className="bg-[#BF9B30] text-white px-10 py-3 rounded-md font-semibold hover:bg-[#a88528] transition"
                            >
                                Make Booking
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default HomeBookingSection;
