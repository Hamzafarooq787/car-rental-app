"use client";

import { useState, useEffect, useRef } from "react";
import { Calendar, Clock, MapPin, ChevronDown, Search } from "lucide-react";

export default function BookingSection() {
  const [tab, setTab] = useState<"oneway" | "hour">("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [hours, setHours] = useState("1 Hour");
  const [dateTime, setDateTime] = useState("");
  const [isDateFocused, setIsDateFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [activeInput, setActiveInput] = useState<"from" | "to" | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const dateDisplayRef = useRef<HTMLDivElement>(null);

  // Common locations for suggestions
  const commonLocations = [
    "Dubai Airport (DXB)",
    "Dubai Mall",
    "Burj Khalifa",
    "Palm Jumeirah",
    "Dubai Marina",
    "Abu Dhabi Airport (AUH)",
    "Sharjah Airport (SHJ)",
    "Jumeirah Beach",
    "Business Bay",
    "Deira City Centre",
    "Mall of the Emirates",
    "Dubai Creek",
    "Al Maktoum Airport (DWC)",
  ];

  // Set default date/time on component mount
  useEffect(() => {
    const now = new Date();
    // Add 1 hour to current time
    now.setHours(now.getHours() + 1);
    const formattedDateTime = now.toISOString().slice(0, 16);
    setDateTime(formattedDateTime);
  }, []);

  // Handle input focus and suggestions
  const handleInputFocus = (inputType: "from" | "to") => {
    setActiveInput(inputType);
    setSuggestions(commonLocations);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setActiveInput(null);
      setSuggestions([]);
    }, 200);
  };

  const handleSuggestionClick = (location: string) => {
    if (activeInput === "from") {
      setFrom(location);
    } else if (activeInput === "to") {
      setTo(location);
    }
    setActiveInput(null);
    setSuggestions([]);
  };

  const handleSearch = () => {
    const bookingData = {
      type: tab,
      from,
      to: tab === "oneway" ? to : undefined,
      hours: tab === "hour" ? hours : undefined,
      dateTime,
    };
    console.log("Booking Data:", bookingData);
    alert(`Booking search submitted!\nType: ${tab.toUpperCase()}\nFrom: ${from}\n${tab === "oneway" ? `To: ${to}` : `Hours: ${hours}`}\nDate/Time: ${new Date(dateTime).toLocaleString()}`);
  };

  // Format date for display
  const formatDateDisplay = (dateTimeString: string) => {
    if (!dateTimeString) return "Select Date & Time";
    const date = new Date(dateTimeString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Handle custom date picker click
  const handleDateDisplayClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.focus();
      dateInputRef.current.showPicker();
    }
  };

 return (
  <section className="bg-gradient-to-r from-white to-gray-50 shadow-xl rounded-xl overflow-hidden border border-gray-200">
    <div className="max-w-6xl mx-auto px-4 py-8">

      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Book Your Luxury Chauffeur Ride
        </h2>
        <p className="text-gray-600">
          Premium chauffeur-driven travel across Dubai
        </p>
      </div>

      {/* TABS */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg overflow-hidden border border-gray-300 bg-gray-100">
          <button
            onClick={() => setTab("oneway")}
            className={`px-8 md:px-12 py-3 text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              tab === "oneway"
                ? "bg-gradient-to-r from-[#BF9B30] to-[#a88425] text-white shadow-lg"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <MapPin size={16} />
            ONE WAY
          </button>

          <button
            onClick={() => setTab("hour")}
            className={`px-8 md:px-12 py-3 text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              tab === "hour"
                ? "bg-gradient-to-r from-[#BF9B30] to-[#a88425] text-white shadow-lg"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Clock size={16} />
            BY HOUR
          </button>
        </div>
      </div>

      {/* FORM */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

          {/* FROM */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
              <MapPin size={14} className="inline mr-1" />
              Pickup Location
            </label>

            <div className="relative">
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                onFocus={() => handleInputFocus("from")}
                onBlur={handleInputBlur}
                placeholder="Enter pickup location"
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 pl-10 text-gray-700 focus:outline-none focus:border-[#BF9B30] focus:ring-2 focus:ring-[#BF9B30]/20 transition-all placeholder:text-gray-400"
              />
              <MapPin size={18} className="absolute left-3 top-3.5 text-gray-400" />
            </div>

            {activeInput === "from" && suggestions.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {suggestions.map((location, index) => (
                  <div
                    key={index}
                    onClick={() => handleSuggestionClick(location)}
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin size={14} className="text-gray-400" />
                      <span className="text-gray-700">{location}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* TO / HOURS */}
          {tab === "oneway" ? (
            <div className="relative">
              <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                <MapPin size={14} className="inline mr-1" />
                Drop-off Location
              </label>

              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                onFocus={() => handleInputFocus("to")}
                onBlur={handleInputBlur}
                placeholder="Enter destination"
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 pl-10 text-gray-700 focus:outline-none focus:border-[#BF9B30] focus:ring-2 focus:ring-[#BF9B30]/20 transition-all placeholder:text-gray-400"
              />
              <MapPin size={18} className="absolute left-3 top-11 text-gray-400" />
            </div>
          ) : (
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                <Clock size={14} className="inline mr-1" />
                Duration
              </label>

              <div className="relative">
                <select
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 pl-10 pr-10 text-gray-700 focus:outline-none focus:border-[#BF9B30] focus:ring-2 focus:ring-[#BF9B30]/20 appearance-none transition-all"
                >
                  <option>1 Hour</option>
                  <option>2 Hours</option>
                  <option>3 Hours</option>
                  <option>4 Hours</option>
                  <option>5 Hours</option>
                  <option>6 Hours</option>
                  <option>8 Hours</option>
                  <option>10 Hours</option>
                  <option>12 Hours</option>
                  <option>24 Hours</option>
                </select>
                <Clock size={18} className="absolute left-3 top-3.5 text-gray-400" />
                <ChevronDown size={18} className="absolute right-3 top-3.5 text-gray-400" />
              </div>
            </div>
          )}

          {/* DATE */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
              <Calendar size={14} className="inline mr-1" />
              Pickup Date & Time
            </label>

            <div
              onClick={handleDateDisplayClick}
              className={`w-full border-2 rounded-lg px-4 py-3 pl-10 cursor-pointer flex justify-between items-center transition-all ${
                isDateFocused
                  ? "border-[#BF9B30] ring-2 ring-[#BF9B30]/20"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-gray-400" />
                <span className={dateTime ? "text-gray-800" : "text-gray-500"}>
                  {formatDateDisplay(dateTime)}
                </span>
              </div>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>

          {/* SEARCH */}
          <div className="flex items-end">
            <button
              onClick={handleSearch}
              disabled={!from || (tab === "oneway" && !to)}
              className="w-full bg-gradient-to-r from-[#BF9B30] to-[#a88425] text-white font-semibold py-3 rounded-lg hover:opacity-90 disabled:opacity-50 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Search size={20} />
              SEARCH VEHICLES
            </button>
          </div>
        </div>

        {/* FEATURES */}
        <div className="flex flex-wrap gap-4 justify-center pt-4 border-t border-gray-200">
          {[
            "24/7 Chauffeur Service",
            "Complimentary Waiting Time",
            "Licensed Professional Drivers",
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 rounded-full bg-[#BF9B30]" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);
}