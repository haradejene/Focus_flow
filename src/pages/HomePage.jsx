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

      {/* Hero Section */}
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 justify-center items-center mt-16 sm:mt-20 mb-16 sm:mb-20 overflow-x-hidden px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-thin text-center">Stay Focused. Flow Effortlessly.</h1>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center">Focus-Flow</h1>

        {/* Circles Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-24 xl:gap-36">
          <div
            onClick={() => scrollToSection(goalCardRef)}
            className="relative flex items-center justify-center w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] lg:w-[276px] lg:h-[276px] shrink-0 rounded-full border-[1px] border-black shadow-[0_0_20px_#8A46E2] sm:shadow-[0_0_30px_#8A46E2] lg:shadow-[0_0_40px_#8A46E2] cursor-pointer hover:scale-105 sm:hover:scale-110 transition-transform duration-300"
          >
            <span className="absolute text-lg sm:text-xl lg:text-2xl font-semibold text-black text-center px-2">
              GoalSetter
            </span>
          </div>

          <div
            onClick={() => scrollToSection(logCardRef)}
            className="relative flex items-center justify-center w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] lg:w-[276px] lg:h-[276px] shrink-0 rounded-full border-[1px] border-black shadow-[0_0_20px_#8A46E2] sm:shadow-[0_0_30px_#8A46E2] lg:shadow-[0_0_40px_#8A46E2] cursor-pointer hover:scale-105 sm:hover:scale-110 transition-transform duration-300"
          >
            <span className="absolute text-lg sm:text-xl lg:text-2xl font-semibold text-black text-center px-2">
              Learning Log
            </span>
          </div>

          <div
            onClick={() => scrollToSection(pomoCardRef)}
            className="relative flex items-center justify-center w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] lg:w-[276px] lg:h-[276px] shrink-0 rounded-full border-[1px] border-black shadow-[0_0_20px_#8A46E2] sm:shadow-[0_0_30px_#8A46E2] lg:shadow-[0_0_40px_#8A46E2] cursor-pointer hover:scale-105 sm:hover:scale-110 transition-transform duration-300"
          >
            <span className="absolute text-lg sm:text-xl lg:text-2xl font-semibold text-black text-center px-2">
              Pomodoro
            </span>
          </div>
        </div>

        {/* Description */}
        <h1 className="w-full max-w-[850px] min-h-[100px] sm:min-h-[120px] lg:min-h-[146px] text-base sm:text-lg lg:text-2xl flex justify-center items-center text-center px-4 sm:px-6">
          Build better habits and get more done with Focus Flow — your personal
          space for deep work and distraction-free productivity.
        </h1>

        {/* Button */}
        <button
          onClick={() => scrollToSection(cardsSectionRef)}
          className="w-[160px] sm:w-[170px] lg:w-[184px] h-[60px] sm:h-[65px] lg:h-[72px] bg-[#000000] rounded-[6px] flex items-center justify-center hover:bg-[#8A46E2] transition-all duration-300"
        >
          <span className="text-lg sm:text-xl font-bold text-white">Get Started</span>
        </button>
      </div>

      {/* Glowing line */}
      <div className="w-full overflow-visible px-4 sm:px-6 lg:px-0">
        <div className="w-full h-2 sm:h-3 bg-[#8A46E2] rounded-full shadow-[0_0_20px_5px_rgba(138,70,226,0.6),_0_0_40px_10px_rgba(138,70,226,0.4),_0_0_60px_20px_rgba(138,70,226,0.25)] sm:shadow-[0_0_30px_8px_rgba(138,70,226,0.6),_0_0_60px_15px_rgba(138,70,226,0.4),_0_0_90px_30px_rgba(138,70,226,0.25)] lg:shadow-[0_0_40px_10px_rgba(138,70,226,0.6),_0_0_80px_20px_rgba(138,70,226,0.4),_0_0_120px_40px_rgba(138,70,226,0.25)]"></div>
      </div>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mt-6 sm:mt-8 mb-8 sm:mb-10 lg:mb-14 flex justify-center items-center text-center px-4 sm:px-6">
        Ready to focus? Pick your flow.
      </h1>

      {/* Cards Section */}
      <div ref={cardsSectionRef} className="flex flex-col items-center sm:items-start space-y-8 sm:space-y-10 px-4 sm:px-8 lg:pl-[130px] lg:pr-8">
        {/* Card 1 */}
        <div
          ref={goalCardRef}
          className="relative bg-white border border-[#8A46E2] rounded-lg p-4 sm:p-6 sm:pl-32 lg:pl-36 w-full max-w-[800px] transform transition-all duration-300 hover:translate-x-4 sm:hover:translate-x-8 lg:hover:translate-x-20 hover:scale-[1.02] sm:hover:scale-105"
        >
          <h1 className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 pl-0 sm:pl-0">
            Set meaningful goals and break them into clear, achievable steps. Focus Flow's Goal Setter helps you plan what truly matters — so you can track progress and stay motivated as you move forward.
          </h1>
          <div className="flex justify-end">
            <Link
              to="/goals"
              className="bg-[#8A46E2] text-white px-4 sm:px-6 py-2 rounded-md hover:bg-[#6d32c9] transition-all duration-300 text-sm sm:text-base"
            >
              Start Here
            </Link>
          </div>

          {/* Circles */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 flex items-center justify-center">
            <div className="absolute w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] lg:w-[168px] lg:h-[168px] rounded-full bg-[#f7f7f7] -translate-x-1/2 flex items-center justify-center"></div>
            <div className="relative w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[140px] lg:h-[140px] bg-white rounded-full border border-[#8A46E2] flex items-center justify-center -translate-x-1/2">
              <span className="text-sm sm:text-lg lg:text-2xl font-semibold text-black text-center px-1">
                GoalSetter
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          ref={logCardRef}
          className="relative bg-white border border-[#8A46E2] rounded-lg p-4 sm:p-6 sm:pl-32 lg:pl-36 w-full max-w-[800px] transform transition-all duration-300 hover:translate-x-4 sm:hover:translate-x-8 lg:hover:translate-x-20 hover:scale-[1.02] sm:hover:scale-105"
        >
          <h1 className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 pl-0 sm:pl-0">
            Capture what you learn every day and turn insights into growth. The Learning Log keeps your notes, reflections, and lessons organized, helping you see how far you've come and where to improve next.
          </h1>
          <div className="flex justify-end">
            <Link
              to="/learning"
              className="bg-[#8A46E2] text-white px-4 sm:px-6 py-2 rounded-md hover:bg-[#6d32c9] transition-all duration-300 text-sm sm:text-base"
            >
              Start Here
            </Link>
          </div>

          {/* Circles */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 flex items-center justify-center">
            <div className="absolute w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] lg:w-[168px] lg:h-[168px] rounded-full bg-[#f7f7f7] -translate-x-1/2 flex items-center justify-center"></div>
            <div className="relative w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[140px] lg:h-[140px] bg-white rounded-full border border-[#8A46E2] flex items-center justify-center -translate-x-1/2">
              <span className="text-sm sm:text-lg lg:text-2xl font-semibold text-black text-center px-1">
                Learning Log
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          ref={pomoCardRef}
          className="relative bg-white border border-[#8A46E2] rounded-lg p-4 sm:p-6 sm:pl-32 lg:pl-36 w-full max-w-[800px] transform transition-all duration-300 hover:translate-x-4 sm:hover:translate-x-8 lg:hover:translate-x-20 hover:scale-[1.02] sm:hover:scale-105"
        >
          <h1 className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 pl-0 sm:pl-0">
            Work with focus and rest with purpose. The Pomodoro timer guides your sessions into short, productive bursts, helping you stay consistent and avoid burnout.
          </h1>
          <div className="flex justify-end">
            <Link
              to="/timer"
              className="bg-[#8A46E2] text-white px-4 sm:px-6 py-2 rounded-md hover:bg-[#6d32c9] transition-all duration-300 text-sm sm:text-base"
            >
              Start Here
            </Link>
          </div>

          {/* Circles */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 flex items-center justify-center">
            <div className="absolute w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] lg:w-[168px] lg:h-[168px] rounded-full bg-[#f7f7f7] -translate-x-1/2 flex items-center justify-center"></div>
            <div className="relative w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[140px] lg:h-[140px] bg-white rounded-full border border-[#8A46E2] flex items-center justify-center -translate-x-1/2">
              <span className="text-sm sm:text-lg lg:text-2xl font-semibold text-black text-center px-1">
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