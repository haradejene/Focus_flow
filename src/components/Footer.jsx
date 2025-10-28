import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
        <div className="w-full bg-black mt-20 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="flex flex-col space-y-4 lg:space-y-6 text-center md:text-left">
                        <h1 className="font-bold text-xl lg:text-2xl">Focus-Flow</h1>
                        <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                            Designed for deep work and mindful productivity.
                        </p>
                    </div>

                    {/* Features Links */}
                    <div className="flex flex-col space-y-3 lg:space-y-4 text-center md:text-left">
                        <h3 className="font-semibold text-lg mb-2 lg:mb-4 text-[#8A46E2]">Features</h3>
                        <Link 
                            to="/goals" 
                            className="hover:text-[#8A46E2] transition-colors duration-200 text-sm lg:text-base py-1"
                        >
                            GoalSetter
                        </Link>
                        <Link 
                            to="/learning" 
                            className="hover:text-[#8A46E2] transition-colors duration-200 text-sm lg:text-base py-1"
                        >
                            Learning Log
                        </Link>
                        <Link 
                            to="/timer" 
                            className="hover:text-[#8A46E2] transition-colors duration-200 text-sm lg:text-base py-1"
                        >
                            Pomodoro
                        </Link>
                    </div>

                    {/* Account Links */}
                    <div className="flex flex-col space-y-3 lg:space-y-4 text-center md:text-left">
                        <h3 className="font-semibold text-lg mb-2 lg:mb-4 text-[#8A46E2]">Account</h3>
                        <Link 
                            to="/signuppage" 
                            className="hover:text-[#8A46E2] transition-colors duration-200 text-sm lg:text-base py-1"
                        >
                            Signup
                        </Link>
                        <Link 
                            to="/loginpage" 
                            className="hover:text-[#8A46E2] transition-colors duration-200 text-sm lg:text-base py-1"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col space-y-3 lg:space-y-4 text-center md:text-left">
                        <h3 className="font-semibold text-lg mb-2 lg:mb-4 text-[#8A46E2]">Follow Us</h3>
                        <a 
                            href="https://twitter.com" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="hover:text-[#8A46E2] transition-colors duration-200 text-sm lg:text-base py-1"
                        >
                            Twitter
                        </a>
                        <a 
                            href="https://instagram.com" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="hover:text-[#8A46E2] transition-colors duration-200 text-sm lg:text-base py-1"
                        >
                            Instagram
                        </a>
                        <a 
                            href="https://linkedin.com" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="hover:text-[#8A46E2] transition-colors duration-200 text-sm lg:text-base py-1"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Bottom Section - Copyright */}
                <div className="border-t border-gray-700 mt-8 lg:mt-12 pt-6 lg:pt-8 text-center">
                    <p className="text-gray-400 text-xs lg:text-sm">
                        © {new Date().getFullYear()} Focus-Flow. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
};