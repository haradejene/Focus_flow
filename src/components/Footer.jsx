import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
        <div className="w-full h-[215px] bg-black mt-20 text-white flex justify-around items-center">
            <div className="flex flex-col justify-between"> 
                <h1 className="font-bold">Focus-Flow</h1>
                <h1>Designed for deep work and mindful productivity.</h1>
            </div>
            <div className="flex flex-col justify-between space-y-2">
                <Link to="/goalsetter" className="hover:text-[#8A46E2]">GoalSetter</Link>
                <Link to="/learning-log" className="hover:text-[#8A46E2]">Learning Log</Link>
                <Link to="/pomodoro" className="hover:text-[#8A46E2]">Pomodoro</Link>
            </div>
            <div className="flex flex-col justify-between space-y-2">
                <Link to="/signup" className="hover:text-[#8A46E2]">Signup</Link>
                <Link to="/login" className="hover:text-[#8A46E2]">Login</Link>
            </div>
            <div className="flex flex-col justify-between space-y-2">
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#8A46E2]">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#8A46E2]">Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#8A46E2]">LinkedIn</a>
            </div>
        </div>
        </>
    );
};
