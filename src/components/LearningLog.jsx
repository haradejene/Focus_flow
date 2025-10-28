import React, { useState, useEffect } from "react";

export default function LearningLog({ searchTerm, showCourseForm, onCourseAdded }) {
  const [ongoingCourses, setOngoingCourses] = useState([]);
  const [completedCourses, setCompletedCourses] = useState([]);
  const [courseText, setCourseText] = useState("");
  const [internalShowForm, setInternalShowForm] = useState(false);
  
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Sync with parent component's showCourseForm prop
  useEffect(() => {
    if (showCourseForm) {
      setInternalShowForm(true);
    }
  }, [showCourseForm]);

  const handleAddCourse = () => {
    if (courseText.trim() !== "") {
      const newCourse = {
        id: Date.now(),
        text: courseText.trim(),
        date: currentDate,
        status: "ongoing"
      };
      setOngoingCourses([...ongoingCourses, newCourse]);
      setCourseText("");
      setInternalShowForm(false);
      if (onCourseAdded) {
        onCourseAdded();
      }
    }
  };

  const handleMarkCompleted = (courseId) => {
    const courseToMove = ongoingCourses.find(course => course.id === courseId);
    if (courseToMove) {
      setCompletedCourses([...completedCourses, { ...courseToMove, status: "completed" }]);
      setOngoingCourses(ongoingCourses.filter(course => course.id !== courseId));
    }
  };

  const handleDeleteCourse = (courseId) => {
    setCompletedCourses(completedCourses.filter(course => course.id !== courseId));
  };

  const filteredOngoingCourses = ongoingCourses.filter(course => 
    course.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCompletedCourses = completedCourses.filter(course =>
    course.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mt-6 lg:mt-10 justify-center px-4 sm:px-6 lg:px-0">
      {/* ================= On going ================= */}
      <div className="w-full lg:w-[500px] min-h-[300px] bg-white rounded-[10px] shadow-md flex flex-col items-center p-4 sm:p-6 transition">
        {/* Header Box */}
        <div className="w-full lg:w-[500px] h-[50px] sm:h-[60px] bg-[#f7f7f7] flex items-center justify-start px-4 sm:px-6 rounded-[6px] mb-4">
          <h2 className="text-black text-lg sm:text-xl font-medium">On going</h2>
        </div>

        {/* Course Form - Show when Add Course button is clicked */}
        {internalShowForm && (
          <div className="w-full max-w-[450px] min-h-[93px] bg-[#f7f7f7] rounded-[6px] p-4 flex flex-col justify-between relative shadow-sm mb-4">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
              <input
                type="text"
                value={courseText}
                onChange={(e) => setCourseText(e.target.value)}
                placeholder="Enter course name"
                className="w-full sm:w-[320px] h-[35px] border border-gray-300 rounded-[4px] px-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#8A46E2] text-sm sm:text-base"
                autoFocus
              />
              <div className="w-[60px] h-[18px] bg-white border border-red-500 rounded-[4px] flex items-center justify-center text-[10px] sm:text-[12px] text-black font-medium self-end sm:self-start">
                On going
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center mt-3 gap-2 sm:gap-0">
              <button
                type="button"
                onClick={handleAddCourse}
                className="w-full sm:w-[120px] h-[35px] sm:h-[25px] bg-[#8A46E2] text-white text-sm rounded-[6px] hover:opacity-90 transition"
              >
                Add Course
              </button>
              <span className="text-gray-500 text-xs sm:text-sm">{currentDate}</span>
            </div>
          </div>
        )}

        {/* Display Ongoing Courses List */}
        {filteredOngoingCourses.length > 0 ? (
          filteredOngoingCourses.map((course) => (
            <div key={course.id} className="w-full max-w-[450px] min-h-[93px] bg-[#f7f7f7] rounded-[6px] p-4 flex flex-col justify-between relative shadow-sm mb-4">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                <p className="text-gray-800 font-medium text-sm sm:text-base break-words flex-1">{course.text}</p>
                <div className="w-[60px] h-[18px] bg-white border border-red-500 rounded-[4px] flex items-center justify-center text-[10px] sm:text-[12px] text-black font-medium self-end sm:self-start">
                  On going
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center mt-3 gap-2 sm:gap-0">
                <button
                  type="button"
                  onClick={() => handleMarkCompleted(course.id)}
                  className="w-full sm:w-[120px] h-[35px] sm:h-[25px] bg-[#8A46E2] text-white text-sm rounded-[6px] hover:opacity-90 transition"
                >
                  Mark completed
                </button>
                <span className="text-gray-500 text-xs sm:text-sm">{course.date}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full max-w-[450px] min-h-[93px] bg-[#f7f7f7] rounded-[6px] flex items-center justify-center shadow-sm text-gray-500 italic text-sm sm:text-base px-4 text-center">
            {searchTerm ? "No courses match your search" : "No ongoing courses"}
          </div>
        )}
      </div>

      {/* ================= Completed ================= */}
      <div className="w-full lg:w-[500px] min-h-[300px] bg-white rounded-[10px] shadow-md flex flex-col items-center p-4 sm:p-6 transition">
        {/* Header Box */}
        <div className="w-full lg:w-[500px] h-[50px] sm:h-[60px] bg-[#f7f7f7] flex items-center justify-center px-4 sm:px-6 rounded-[6px] mb-4">
          <h2 className="text-black text-lg sm:text-xl font-medium">Completed</h2>
        </div>

        {/* Display Completed Courses */}
        {filteredCompletedCourses.length > 0 ? (
          filteredCompletedCourses.map((course) => (
            <div key={course.id} className="w-full max-w-[450px] min-h-[93px] bg-[#f7f7f7] rounded-[6px] p-4 flex flex-col justify-between relative shadow-sm mb-4">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                <p className="text-gray-800 font-medium text-sm sm:text-base break-words flex-1">{course.text}</p>
                <div className="flex items-center gap-2 self-end sm:self-start">
                  <div className="w-[60px] h-[18px] bg-white border border-green-500 rounded-[4px] flex items-center justify-center text-[10px] sm:text-[12px] text-black font-medium">
                    Completed
                  </div>
                  <button
                    onClick={() => handleDeleteCourse(course.id)}
                    className="w-6 h-6 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-full transition text-lg font-bold"
                  >
                    ×
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center mt-3 gap-1 sm:gap-0">
                <span className="text-gray-500 text-xs sm:text-sm italic text-center sm:text-left">
                  Course Completed 🎓
                </span>
                <span className="text-gray-500 text-xs sm:text-sm">{course.date}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full max-w-[450px] min-h-[93px] bg-[#f7f7f7] rounded-[6px] flex items-center justify-center shadow-sm text-gray-500 italic text-sm sm:text-base px-4 text-center">
            {searchTerm ? "No completed courses match your search" : "No completed courses yet"}
          </div>
        )}
      </div>
    </div>
  );
}