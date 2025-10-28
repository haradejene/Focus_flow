import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(25 * 60); // default 25 minutes
  const [selectedMode, setSelectedMode] = useState("25/5");
  const [quote, setQuote] = useState("");
  const [customWork, setCustomWork] = useState(25);
  const [customBreak, setCustomBreak] = useState(5);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev === 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            getQuote();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (!isRunning && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const getQuote = async () => {
    try {
      const res = await fetch("https://api.quotable.io/random", { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch quote");
      const data = await res.json();
      setQuote(`"${data.content}" — ${data.author}`);
    } catch (err) {
      console.error("Quote fetch error:", err);
      setQuote("Keep going, you're doing great!");
    }
  };

  const handleModeChange = (mode) => {
    setSelectedMode(mode);
    setQuote("");
    setIsRunning(false);

    if (mode === "25/5") setTime(25 * 60);
    else if (mode === "50/10") setTime(50 * 60);
    else if (mode === "custom") setTime(customWork * 60);
  };

  const applyCustomTime = () => {
    setTime(customWork * 60);
    setIsRunning(false);
    setQuote("");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 lg:w-48 bg-[#f7f7f7] flex flex-col py-6 shadow-md
        transform transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Close button for mobile */}
        <div className="flex justify-between items-center mb-8 px-4 lg:px-0">
          <button 
            className="p-2 hover:bg-gray-200 rounded-lg lg:self-start lg:ml-4"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <X size={28} color="#8A46E2" /> : <Menu size={28} color="#8A46E2" />}
          </button>
          {/* Show logo on mobile when sidebar is open */}
          {isSidebarOpen && (
            <Link to="/" className="font-bold text-xl text-[#8A46E2] lg:hidden">
              FocusFlow
            </Link>
          )}
        </div>

        <nav className="flex flex-col gap-4 ml-6 lg:ml-6">
          <Link 
            to="/" 
            className="text-gray-700 hover:text-black font-medium py-2"
            onClick={() => setIsSidebarOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/goals" 
            className="text-gray-700 hover:text-black font-medium py-2"
            onClick={() => setIsSidebarOpen(false)}
          >
            Goal Setter
          </Link>
          <Link 
            to="/learning-log" 
            className="text-gray-700 hover:text-black font-medium py-2"
            onClick={() => setIsSidebarOpen(false)}
          >
            Learning Log
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-6 lg:py-10 w-full">
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden absolute top-6 left-4 p-2 hover:bg-gray-100 rounded-lg z-30"
          onClick={toggleSidebar}
        >
          <Menu size={24} color="#8A46E2" />
        </button>

        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-6 lg:mb-12 text-black">Pomodoro</h1>

        {/* Timer Circle */}
        <div
          className="flex items-center justify-center rounded-full text-black font-semibold shadow-lg mx-auto"
          style={{
            backgroundColor: "rgba(138, 70, 226, 0.25)",
            width: "min(90vw, 400px, 514px)",
            height: "min(90vw, 400px, 514px)",
            fontSize: "clamp(3rem, 15vw, 6rem)",
          }}
        >
          {formatTime(time)}
        </div>

        {/* Quote Display */}
        {quote && (
          <div className="mt-4 lg:mt-6 max-w-md text-gray-600 italic px-4 text-sm sm:text-base">
            {quote}
          </div>
        )}

        {/* Start/Stop Button */}
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="mt-6 lg:mt-6 px-8 sm:px-10 py-3 rounded-full text-white text-base sm:text-lg font-medium shadow-md transition hover:opacity-90 w-[140px] sm:w-auto"
          style={{ backgroundColor: "#8A46E2" }}
        >
          {isRunning ? "Stop" : "Start"}
        </button>

        {/* Pomodoro Mode Options */}
        <div className="flex flex-wrap gap-2 sm:gap-4 mt-6 justify-center">
          {["25/5", "50/10", "custom"].map((mode) => (
            <button
              key={mode}
              onClick={() => handleModeChange(mode)}
              className={`px-4 sm:px-5 py-2 rounded-[6px] border border-black bg-white text-black transition hover:bg-[#8A46E2] hover:text-white text-sm sm:text-base ${
                selectedMode === mode ? 'bg-[#8A46E2] text-black' : ''
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        {/* Custom Inputs */}
        {selectedMode === "custom" && (
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 items-center justify-center w-full max-w-sm">
            <div className="flex flex-col items-center">
              <label className="block text-gray-700 text-sm sm:text-base">Work (min)</label>
              <input
                type="number"
                value={customWork}
                onChange={(e) => setCustomWork(Number(e.target.value))}
                className="border rounded px-2 py-1 w-16 sm:w-20 text-center text-sm sm:text-base"
                min="1"
                max="120"
              />
            </div>
            <div className="flex flex-col items-center">
              <label className="block text-gray-700 text-sm sm:text-base">Break (min)</label>
              <input
                type="number"
                value={customBreak}
                onChange={(e) => setCustomBreak(Number(e.target.value))}
                className="border rounded px-2 py-1 w-16 sm:w-20 text-center text-sm sm:text-base"
                min="1"
                max="60"
              />
            </div>
            <button
              onClick={applyCustomTime}
              className="bg-[#8A46E2] text-white px-4 py-2 rounded text-sm sm:text-base mt-2 sm:mt-6 w-16 sm:w-auto"
            >
              Set
            </button>
          </div>
        )}
      </div>
    </div>
  );
}