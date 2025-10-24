import React from "react";
import Navbar from "../components/Navbar";
export default function Dashboard() {
  return (
    <>
    
    <div className="flex flex-col gap-10 justify-center items-center mt-20 mb-20">
      <Navbar />
      <h1 className="text-3xl  font-thin">Stay Focused. Flow Effortlessly.</h1>
      <h1 className="text-5xl font-bold ">Focus-Flow </h1>
      <div className="flex flex-row gap-36 justify-center items-center">
  <div className="relative flex items-center justify-center w-[276px] h-[276px] shrink-0 rounded-full border-[5px] border-black shadow-[0_0_40px_#8A46E2]">
    <span className="absolute text-2xl font-semibold text-black text-center">GoalSetter</span>
  </div>

  <div className="relative flex items-center justify-center w-[276px] h-[276px] shrink-0 rounded-full border-[5px] border-black shadow-[0_0_40px_#8A46E2]">
    <span className="absolute text-2xl font-semibold text-black text-center">Learning Log</span>
  </div>

  <div className="relative flex items-center justify-center w-[276px] h-[276px] shrink-0 rounded-full border-[5px] border-black shadow-[0_0_40px_#8A46E2]">
    <span className="absolute text-2xl font-semibold text-black text-center">Pomodoro</span>
  </div>
</div>
<h1 className="w-[850px] h-[146px] text-2xl flex justify-center items-center text-center">
  Build better habits and get more done with Focus Flow — your personal space for deep work and distraction-free productivity.
</h1>
<button>
  <div className="w-[284px] h-[82px] bg-[#000000] rounded-[6px] flex items-center justify-center">
    <span className="text-2xl text-bold text-white">Get Started</span>
  </div>
</button>


    </div>

    </>
  );
}