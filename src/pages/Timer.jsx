import React, { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom"; // if using React Router

export default function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(25 * 60); // default 25 minutes
  const [selectedMode, setSelectedMode] = useState("25/5");
  const [quote, setQuote] = useState("");
  const [customWork, setCustomWork] = useState(25);
  const [customBreak, setCustomBreak] = useState(5);
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
    if (!res.ok) throw new Error("Failed to fetch quote"); // ensures errors trigger catch
    const data = await res.json();
    setQuote(`"${data.content}" — ${data.author}`);
  } catch (err) {
    console.error("Quote fetch error:", err); // log the error
    // Optional: fallback quote
    setQuote("Keep going, you’re doing great!");
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

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-48 bg-[#f7f7f7] flex flex-col py-6 shadow-md">
        <button className="p-2 hover:bg-gray-200 rounded-lg mb-8 self-start ml-4">
          <Menu size={28} color="#8A46E2" />
        </button>

        <nav className="flex flex-col gap-4 ml-6">
          <Link to="/" className="text-gray-700 hover:text-black font-medium">
            Home
          </Link>
          <Link to="/goal-setter" className="text-gray-700 hover:text-black font-medium">
            Goal Setter
          </Link>
          <Link to="/learning-log" className="text-gray-700 hover:text-black font-medium">
            Learning Log
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-12 text-black">Pomodoro</h1>

        {/* Timer Circle */}
        <div
          className="flex items-center justify-center rounded-full text-black text-8xl border-[1px] border-black font-semibold shadow-lg"
          style={{
            backgroundColor: "rgba(138, 70, 226, 0.25)", // 25% opacity
            width: "514px",
            height: "514px",
          }}
        >
          {formatTime(time)}
        </div>

        {/* Quote Display (between circle and start button) */}
        {quote && (
          <div className="mt-6 max-w-md text-gray-600 italic px-4">
            {quote}
          </div>
        )}

        {/* Start/Stop Button */}
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="mt-6 px-10 py-3 rounded-full text-white text-lg font-medium shadow-md transition hover:opacity-90"
          style={{ backgroundColor: "#8A46E2" }}
        >
          {isRunning ? "Stop" : "Start"}
        </button>

        {/* Pomodoro Mode Options */}
        <div className="flex gap-4 mt-6">
          {["25/5", "50/10", "custom"].map((mode) => (
            <button
              key={mode}
              onClick={() => handleModeChange(mode)}
              className={`px-5 py-2 rounded-[6px] border border-black bg-white text-black transition hover:bg-[#8A46E2] hover:text-white`}
            >
              {mode}
            </button>
          ))}
        </div>

        {/* Custom Inputs */}
        {selectedMode === "custom" && (
          <div className="flex gap-4 mt-4 items-center justify-center">
            <div>
              <label className="block text-gray-700">Work (min)</label>
              <input
                type="number"
                value={customWork}
                onChange={(e) => setCustomWork(Number(e.target.value))}
                className="border rounded px-2 py-1 w-20 text-center"
              />
            </div>
            <div>
              <label className="block text-gray-700">Break (min)</label>
              <input
                type="number"
                value={customBreak}
                onChange={(e) => setCustomBreak(Number(e.target.value))}
                className="border rounded px-2 py-1 w-20 text-center"
              />
            </div>
            <button
              onClick={applyCustomTime}
              className="bg-[#8A46E2] text-white px-4 py-1 rounded"
            >
              Set
            </button>
          </div>
        )}
      </div>
    </div>
  );
}