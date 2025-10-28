import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import LearningLog from "../components/LearningLog";

export default function Learning() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showCourseForm, setShowCourseForm] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleAddCourseClick = () => {
    setShowCourseForm(true);
  };

  const handleCourseAdded = () => {
    setShowCourseForm(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
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
            to="/timer"
            className="text-gray-700 hover:text-black font-medium py-2"
            onClick={() => setIsSidebarOpen(false)}
          >
            Pomodoro
          </Link>
          <Link
            to="/goals"
            className="text-gray-700 hover:text-black font-medium py-2"
            onClick={() => setIsSidebarOpen(false)}
          >
            Goals
          </Link>
        </nav>
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col px-4 sm:px-6 lg:px-12 py-6 lg:py-10 w-full">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0 mb-8 lg:mb-12">
          {/* Title and Mobile Menu Button */}
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <button 
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={toggleSidebar}
            >
              <Menu size={24} color="#8A46E2" />
            </button>
            <h1 className="text-3xl sm:text-4xl lg:text-[64px] font-normal text-black lg:flex-1">
              Learning Log
            </h1>
          </div>

          {/* Search and Add Course Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 w-full lg:w-auto">
            {/* Search Course Input */}
            <div className="relative flex-1 sm:flex-none">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search Course"
                className="h-[46px] w-full sm:w-[200px] lg:w-[217px] border border-black bg-white text-black rounded-[6px] font-medium px-4 focus:outline-none focus:ring-1 focus:ring-[#8A46E2] text-sm lg:text-base"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black text-lg"
                >
                  ×
                </button>
              )}
            </div>

            {/* Add Course Button */}
            <button
              className="h-[46px] w-full sm:w-[140px] lg:w-[154px] border border-black bg-black text-white rounded-[6px] font-medium transition duration-200 hover:bg-white hover:text-black text-sm lg:text-base"
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