import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import LearningLog from "../components/LearningLog";

export default function Learning() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showCourseForm, setShowCourseForm] = useState(false);

  const handleAddCourseClick = () => {
    setShowCourseForm(true);
  };

  const handleCourseAdded = () => {
    setShowCourseForm(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
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
          <Link
            to="/timer"
            className="text-gray-700 hover:text-black font-medium"
          >
            Pomodoro
          </Link>
          <Link
            to="/goals"
            className="text-gray-700 hover:text-black font-medium"
          >
            Goals
          </Link>
        </nav>
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col px-12 py-10">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-[64px] font-normal text-black">
            Learning Log
          </h1>

          <div className="flex gap-6">
            {/* Search Course Input */}
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search Course"
                className="h-[46px] w-[217px] border border-black bg-white text-black rounded-[6px] font-medium px-4 focus:outline-none focus:ring-1 focus:ring-[#8A46E2]"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
                >
                  ×
                </button>
              )}
            </div>

            {/* Add Course Button */}
            <button
              className="h-[46px] w-[154px] border border-black bg-black text-white rounded-[6px] font-medium transition duration-200 hover:bg-white hover:text-black"
              onClick={handleAddCourseClick}
            >
              Add Course
            </button>
          </div>
        </div>

        {/* Content Placeholder */}
        <div className="flex-1">
          <LearningLog 
            searchTerm={searchTerm}
            showCourseForm={showCourseForm}
            onCourseAdded={handleCourseAdded}
          />
        </div>
      </div>
    </div>
  );
}