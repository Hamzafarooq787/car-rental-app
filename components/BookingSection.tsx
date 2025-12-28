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
            Book Your Luxury Ride
          </h2>
          <p className="text-gray-600">
            Experience premium chauffeur service in Dubai
          </p>
        </div>

        {/* TABS */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg overflow-hidden border border-gray-300 bg-gray-100">
            <button
              onClick={() => setTab("oneway")}
              className={`px-8 md:px-12 py-3 text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                tab === "oneway"
                  ? "bg-gradient-to-r from-[#1ecb15] to-[#17a814] text-white shadow-lg"
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
                  ? "bg-gradient-to-r from-[#1ecb15] to-[#17a814] text-white shadow-lg"
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
            
            {/* FROM Input with Suggestions */}
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
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 pl-10 text-gray-700 focus:outline-none focus:border-[#1ecb15] focus:ring-2 focus:ring-[#1ecb15]/20 transition-all duration-300 placeholder:text-gray-400"
                />
                <MapPin size={18} className="absolute left-3 top-3.5 text-gray-400" />
              </div>
              
              {/* Suggestions Dropdown */}
              {activeInput === "from" && suggestions.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {suggestions.map((location, index) => (
                    <div
                      key={index}
                      onClick={() => handleSuggestionClick(location)}
                      className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors"
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

            {/* TO or HOURS */}
            {tab === "oneway" ? (
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                  <MapPin size={14} className="inline mr-1" />
                  Drop-off Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    onFocus={() => handleInputFocus("to")}
                    onBlur={handleInputBlur}
                    placeholder="Enter destination"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 pl-10 text-gray-700 focus:outline-none focus:border-[#1ecb15] focus:ring-2 focus:ring-[#1ecb15]/20 transition-all duration-300 placeholder:text-gray-400"
                  />
                  <MapPin size={18} className="absolute left-3 top-3.5 text-gray-400" />
                </div>
                
                {/* Suggestions Dropdown */}
                {activeInput === "to" && suggestions.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {suggestions.map((location, index) => (
                      <div
                        key={index}
                        onClick={() => handleSuggestionClick(location)}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors"
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
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 pl-10 pr-10 text-gray-700 focus:outline-none focus:border-[#1ecb15] focus:ring-2 focus:ring-[#1ecb15]/20 appearance-none transition-all duration-300"
                  >
                    <option value="1 Hour">1 Hour</option>
                    <option value="2 Hours">2 Hours</option>
                    <option value="3 Hours">3 Hours</option>
                    <option value="4 Hours">4 Hours</option>
                    <option value="5 Hours">5 Hours</option>
                    <option value="6 Hours">6 Hours</option>
                    <option value="8 Hours">8 Hours</option>
                    <option value="10 Hours">10 Hours</option>
                    <option value="12 Hours">12 Hours</option>
                    <option value="24 Hours">24 Hours</option>
                  </select>
                  <Clock size={18} className="absolute left-3 top-3.5 text-gray-400" />
                  <ChevronDown size={18} className="absolute right-3 top-3.5 text-gray-400" />
                </div>
              </div>
            )}

            {/* DATE TIME with custom styling - FIXED VERSION */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                <Calendar size={14} className="inline mr-1" />
                Pickup Date & Time
              </label>
              <div className="relative">
                {/* Hidden actual datetime input */}
                <input
                  ref={dateInputRef}
                  type="datetime-local"
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                  onFocus={() => setIsDateFocused(true)}
                  onBlur={() => setIsDateFocused(false)}
                  className="absolute opacity-0 w-0 h-0"
                  aria-hidden="true"
                />
                
                {/* Custom display that triggers the date picker */}
                <div
                  ref={dateDisplayRef}
                  onClick={handleDateDisplayClick}
                  className={`w-full border-2 rounded-lg px-4 py-3 pl-10 pr-4 text-gray-700 cursor-pointer transition-all duration-300 flex items-center justify-between ${
                    isDateFocused 
                      ? 'border-[#1ecb15] ring-2 ring-[#1ecb15]/20' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-gray-400" />
                    <span className={dateTime ? "text-gray-800" : "text-gray-500"}>
                      {formatDateDisplay(dateTime)}
                    </span>
                  </div>
                  <ChevronDown 
                    size={16} 
                    className={`text-gray-400 transition-transform duration-300 ${isDateFocused ? 'rotate-180' : ''}`} 
                  />
                </div>
              </div>
            </div>

            {/* SEARCH Button */}
            <div className="flex items-end">
              <button
                onClick={handleSearch}
                disabled={!from || (tab === "oneway" && !to)}
                className="w-full bg-gradient-to-r from-[#1ecb15] to-[#17a814] text-white font-semibold py-3 rounded-lg hover:from-[#17a814] hover:to-[#128a11] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                <Search size={20} className="group-hover:rotate-12 transition-transform" />
                SEARCH CARS
              </button>
            </div>

          </div>

          {/* Additional Features */}
          <div className="flex flex-wrap gap-4 justify-center pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 rounded-full bg-[#1ecb15]"></div>
              <span>24/7 Service Available</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 rounded-full bg-[#1ecb15]"></div>
              <span>Free Waiting Time</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 rounded-full bg-[#1ecb15]"></div>
              <span>Professional Chauffeurs</span>
            </div>
          </div>
        </div>

        {/* Quick Locations */}
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
            Popular Pickup Locations
          </h3>
          <div className="flex flex-wrap gap-2">
            {commonLocations.slice(0, 6).map((location, index) => (
              <button
                key={index}
                onClick={() => setFrom(location)}
                className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors border border-gray-300 hover:border-gray-400"
              >
                {location}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}