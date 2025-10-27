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
    <div className="flex gap-10 mt-10 justify-center flex-wrap">
      {/* ================= On going ================= */}
      <div className="w-[500px] min-h-[300px] bg-white rounded-[10px] shadow-md flex flex-col items-center p-4 transition">
        {/* Header Box */}
        <div className="w-[500px] h-[60px] bg-[#f7f7f7] flex items-center justify-start px-6 rounded-[6px] mb-4">
          <h2 className="text-black text-xl font-medium">On going</h2>
        </div>

        {/* Course Form - Show when Add Course button is clicked */}
        {internalShowForm && (
          <div className="w-[450px] h-[93px] bg-[#f7f7f7] rounded-[6px] p-4 flex flex-col justify-between relative shadow-sm mb-4">
            <div className="flex justify-between items-start">
              <input
                type="text"
                value={courseText}
                onChange={(e) => setCourseText(e.target.value)}
                placeholder="Enter course name"
                className="w-[320px] h-[35px] border border-gray-300 rounded-[4px] px-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#8A46E2]"
                autoFocus
              />
              <div className="w-[60px] h-[18px] bg-white border border-red-500 rounded-[4px] flex items-center justify-center text-[12px] text-black font-medium">
                On going
              </div>
            </div>

            <div className="flex justify-between items-center mt-2">
              <button
                type="button"
                onClick={handleAddCourse}
                className="w-[120px] h-[25px] bg-[#8A46E2] text-white text-sm rounded-[6px] hover:opacity-90 transition"
              >
                Add Course
              </button>
              <span className="text-gray-500 text-sm">{currentDate}</span>
            </div>
          </div>
        )}

        {/* Display Ongoing Courses List */}
        {filteredOngoingCourses.length > 0 ? (
          filteredOngoingCourses.map((course) => (
            <div key={course.id} className="w-[450px] h-[93px] bg-[#f7f7f7] rounded-[6px] p-4 flex flex-col justify-between relative shadow-sm mb-4">
              <div className="flex justify-between items-start">
                <p className="text-gray-800 font-medium">{course.text}</p>
                <div className="w-[60px] h-[18px] bg-white border border-red-500 rounded-[4px] flex items-center justify-center text-[12px] text-black font-medium">
                  On going
                </div>
              </div>

              <div className="flex justify-between items-center mt-2">
                <button
                  type="button"
                  onClick={() => handleMarkCompleted(course.id)}
                  className="w-[120px] h-[25px] bg-[#8A46E2] text-white text-sm rounded-[6px] hover:opacity-90 transition"
                >
                  Mark completed
                </button>
                <span className="text-gray-500 text-sm">{course.date}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="w-[450px] h-[93px] bg-[#f7f7f7] rounded-[6px] flex items-center justify-center shadow-sm text-gray-500 italic">
            {searchTerm ? "No courses match your search" : "No ongoing courses"}
          </div>
        )}
      </div>

      {/* ================= Completed ================= */}
      <div className="w-[500px] min-h-[300px] bg-white rounded-[10px] shadow-md flex flex-col items-center p-4 transition">
        {/* Header Box */}
        <div className="w-[500px] h-[60px] bg-[#f7f7f7] flex items-center justify-center px-6 rounded-[6px] mb-4">
          <h2 className="text-black text-xl font-medium">Completed</h2>
        </div>

        {/* Display Completed Courses */}
        {filteredCompletedCourses.length > 0 ? (
          filteredCompletedCourses.map((course) => (
            <div key={course.id} className="w-[450px] h-[93px] bg-[#f7f7f7] rounded-[6px] p-4 flex flex-col justify-between relative shadow-sm mb-4">
              <div className="flex justify-between items-start">
                <p className="text-gray-800 font-medium">{course.text}</p>
                <div className="flex items-center gap-2">
                  <div className="w-[60px] h-[18px] bg-white border border-green-500 rounded-[4px] flex items-center justify-center text-[12px] text-black font-medium">
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

              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-500 text-sm italic">
                  Course Completed 🎓
                </span>
                <span className="text-gray-500 text-sm">{course.date}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="w-[450px] h-[93px] bg-[#f7f7f7] rounded-[6px] flex items-center justify-center shadow-sm text-gray-500 italic">
            {searchTerm ? "No completed courses match your search" : "No completed courses yet"}
          </div>
        )}
      </div>
    </div>
  );
}