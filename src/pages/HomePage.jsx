import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  const cardsSectionRef = useRef(null);
  const goalCardRef = useRef(null);
  const logCardRef = useRef(null);
  const pomoCardRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

      <div className="flex flex-col gap-10 justify-center items-center mt-20 mb-20 overflow-x-hidden">
        <h1 className="text-3xl font-thin">Stay Focused. Flow Effortlessly.</h1>
        <h1 className="text-5xl font-bold mb-10">Focus-Flow</h1>

        {/* Circles Section */}
        <div className="flex justify-center items-center gap-36">
          <div
            onClick={() => scrollToSection(goalCardRef)}
            className="relative flex items-center justify-center w-[276px] h-[276px] shrink-0 rounded-full border-[1px] border-black shadow-[0_0_40px_#8A46E2] cursor-pointer hover:scale-110 transition-transform duration-300"
          >
            <span className="absolute text-2xl font-semibold text-black text-center">
              GoalSetter
            </span>
          </div>

          <div
            onClick={() => scrollToSection(logCardRef)}
            className="relative flex items-center justify-center w-[276px] h-[276px] shrink-0 rounded-full border-[1px] border-black shadow-[0_0_40px_#8A46E2] cursor-pointer hover:scale-110 transition-transform duration-300"
          >
            <span className="absolute text-2xl font-semibold text-black text-center">
              Learning Log
            </span>
          </div>

          <div
            onClick={() => scrollToSection(pomoCardRef)}
            className="relative flex items-center justify-center w-[276px] h-[276px] shrink-0 rounded-full border-[1px] border-black shadow-[0_0_40px_#8A46E2] cursor-pointer hover:scale-110 transition-transform duration-300"
          >
            <span className="absolute text-2xl font-semibold text-black text-center">
              Pomodoro
            </span>
          </div>
        </div>

        {/* Description */}
        <h1 className="w-[850px] max-w-full h-[146px] text-2xl flex justify-center items-center text-center px-4">
          Build better habits and get more done with Focus Flow — your personal
          space for deep work and distraction-free productivity.
        </h1>

        {/* Button */}
        <button
          onClick={() => scrollToSection(cardsSectionRef)}
          className="w-[184px] h-[72px] bg-[#000000] rounded-[6px] flex items-center justify-center hover:bg-[#8A46E2] transition-all duration-300"
        >
          <span className="text-xl font-bold text-white">Get Started</span>
        </button>
      </div>

      {/* Glowing line */}
      <div className="w-full overflow-visible">
        <div className="w-full h-3 bg-[#8A46E2] rounded-full shadow-[0_0_40px_10px_rgba(138,70,226,0.6),_0_0_80px_20px_rgba(138,70,226,0.4),_0_0_120px_40px_rgba(138,70,226,0.25)]"></div>
      </div>

      <h1 className="text-5xl mt-8 mb-14 flex justify-center items-center">
        Ready to focus? Pick your flow.
      </h1>

      {/* Cards Section */}
      <div ref={cardsSectionRef} className="flex flex-col items-start space-y-10 pl-[130px]">
        {/* Card 1 */}
        <div
          ref={goalCardRef}
          className="relative bg-white border border-[#8A46E2] rounded-lg p-6 pl-36 max-w-[800px] transform transition-all duration-300 hover:translate-x-20 hover:scale-105"
        >
          <h1 className="text-xl mb-6">
            Set meaningful goals and break them into clear, achievable steps. Focus Flow’s Goal Setter helps you plan what truly matters — so you can track progress and stay motivated as you move forward.
          </h1>
          <div className="flex justify-end">
            <Link
              to="/goals"
              className="bg-[#8A46E2] text-white px-6 py-2 rounded-md hover:bg-[#6d32c9] transition-all duration-300"
            >
              Start Here
            </Link>
          </div>

          {/* Circles */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 flex items-center justify-center">
            <div className="absolute w-[168px] h-[168px] rounded-full bg-[#f7f7f7] -translate-x-1/2 flex items-center justify-center"></div>
            <div className="relative w-[140px] h-[140px] bg-white rounded-full border border-[#8A46E2] flex items-center justify-center -translate-x-1/2">
              <span className="text-2xl font-semibold text-black text-center">
                GoalSetter
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          ref={logCardRef}
          className="relative bg-white border border-[#8A46E2] rounded-lg p-6 pl-36 max-w-[800px] transform transition-all duration-300 hover:translate-x-20 hover:scale-105"
        >
          <h1 className="text-xl mb-6">
            Capture what you learn every day and turn insights into growth. The Learning Log keeps your notes, reflections, and lessons organized, helping you see how far you’ve come and where to improve next.
          </h1>
          <div className="flex justify-end">
            <Link
              to="/learning"
              className="bg-[#8A46E2] text-white px-6 py-2 rounded-md hover:bg-[#6d32c9] transition-all duration-300"
            >
              Start Here
            </Link>
          </div>

          {/* Circles */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 flex items-center justify-center">
            <div className="absolute w-[168px] h-[168px] rounded-full bg-[#f7f7f7] -translate-x-1/2 flex items-center justify-center"></div>
            <div className="relative w-[140px] h-[140px] bg-white rounded-full border border-[#8A46E2] flex items-center justify-center -translate-x-1/2">
              <span className="text-2xl font-semibold text-black text-center">
                Learning Log
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          ref={pomoCardRef}
          className="relative bg-white border border-[#8A46E2] rounded-lg p-6 pl-36 max-w-[800px] transform transition-all duration-300 hover:translate-x-20 hover:scale-105"
        >
          <h1 className="text-xl mb-6">
            Work with focus and rest with purpose. The Pomodoro timer guides your sessions into short, productive bursts, helping you stay consistent and avoid burnout.
          </h1>
          <div className="flex justify-end">
            <Link
              to="/timer"
              className="bg-[#8A46E2] text-white px-6 py-2 rounded-md hover:bg-[#6d32c9] transition-all duration-300"
            >
              Start Here
            </Link>
          </div>

          {/* Circles */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 flex items-center justify-center">
            <div className="absolute w-[168px] h-[168px] rounded-full bg-[#f7f7f7] -translate-x-1/2 flex items-center justify-center"></div>
            <div className="relative w-[140px] h-[140px] bg-white rounded-full border border-[#8A46E2] flex items-center justify-center -translate-x-1/2">
              <span className="text-2xl font-semibold text-black text-center">
                Pomodoro
              </span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
