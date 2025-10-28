import React, { useState, useEffect } from "react";

export default function GoalCard({ searchTerm, showGoalForm, onGoalAdded }) {
  const [goals, setGoals] = useState([]);
  const [achievedGoals, setAchievedGoals] = useState([]);
  const [goalText, setGoalText] = useState("");
  const [internalShowForm, setInternalShowForm] = useState(false);
  
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Sync with parent component's showGoalForm prop
  useEffect(() => {
    if (showGoalForm) {
      setInternalShowForm(true);
    }
  }, [showGoalForm]);

  const handleAddGoal = () => {
    if (goalText.trim() !== "") {
      const newGoal = {
        id: Date.now(),
        text: goalText.trim(),
        date: currentDate,
        status: "undone"
      };
      setGoals([...goals, newGoal]);
      setGoalText("");
      setInternalShowForm(false);
      if (onGoalAdded) {
        onGoalAdded();
      }
    }
  };

  const handleMarkDone = (goalId) => {
    const goalToMove = goals.find(goal => goal.id === goalId);
    if (goalToMove) {
      setAchievedGoals([...achievedGoals, { ...goalToMove, status: "done" }]);
      setGoals(goals.filter(goal => goal.id !== goalId));
    }
  };

  const handleDeleteGoal = (goalId) => {
    setAchievedGoals(achievedGoals.filter(goal => goal.id !== goalId));
  };

  const filteredGoals = goals.filter(goal => 
    goal.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAchievedGoals = achievedGoals.filter(goal =>
    goal.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mt-6 lg:mt-10 justify-center px-4 sm:px-6 lg:px-0">
      {/* ================= My Goals (Undone) ================= */}
      <div className="w-full lg:w-[500px] min-h-[300px] bg-white rounded-[10px] shadow-md flex flex-col items-center p-4 sm:p-6 transition">
        {/* Header Box */}
        <div className="w-full lg:w-[500px] h-[50px] sm:h-[60px] bg-[#f7f7f7] flex items-center justify-start px-4 sm:px-6 rounded-[6px] mb-4">
          <h2 className="text-black text-lg sm:text-xl font-medium">My Goals</h2>
        </div>

        {/* Goal Form - Show when Add Goal button is clicked */}
        {internalShowForm && (
          <div className="w-full max-w-[450px] min-h-[93px] bg-[#f7f7f7] rounded-[6px] p-4 flex flex-col justify-between relative shadow-sm mb-4">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
              <input
                type="text"
                value={goalText}
                onChange={(e) => setGoalText(e.target.value)}
                placeholder="Enter your goal"
                className="w-full sm:w-[320px] h-[35px] border border-gray-300 rounded-[4px] px-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#8A46E2] text-sm sm:text-base"
                autoFocus
              />
              <div className="w-[60px] h-[18px] bg-white border border-red-500 rounded-[4px] flex items-center justify-center text-[10px] sm:text-[12px] text-black font-medium self-end sm:self-start">
                Undone
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center mt-3 gap-2 sm:gap-0">
              <button
                type="button"
                onClick={handleAddGoal}
                className="w-full sm:w-[120px] h-[35px] sm:h-[25px] bg-[#8A46E2] text-white text-sm rounded-[6px] hover:opacity-90 transition"
              >
                Add Goal
              </button>
              <span className="text-gray-500 text-xs sm:text-sm">{currentDate}</span>
            </div>
          </div>
        )}

        {/* Display Goals List */}
        {filteredGoals.length > 0 ? (
          filteredGoals.map((goal) => (
            <div key={goal.id} className="w-full max-w-[450px] min-h-[93px] bg-[#f7f7f7] rounded-[6px] p-4 flex flex-col justify-between relative shadow-sm mb-4">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                <p className="text-gray-800 font-medium text-sm sm:text-base break-words flex-1">{goal.text}</p>
                <div className="w-[60px] h-[18px] bg-white border border-red-500 rounded-[4px] flex items-center justify-center text-[10px] sm:text-[12px] text-black font-medium self-end sm:self-start">
                  Undone
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center mt-3 gap-2 sm:gap-0">
                <button
                  type="button"
                  onClick={() => handleMarkDone(goal.id)}
                  className="w-full sm:w-[120px] h-[35px] sm:h-[25px] bg-[#8A46E2] text-white text-sm rounded-[6px] hover:opacity-90 transition"
                >
                  Mark as done
                </button>
                <span className="text-gray-500 text-xs sm:text-sm">{goal.date}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full max-w-[450px] min-h-[93px] bg-[#f7f7f7] rounded-[6px] flex items-center justify-center shadow-sm text-gray-500 italic text-sm sm:text-base px-4 text-center">
            {searchTerm ? "No goals match your search" : "No goals yet"}
          </div>
        )}
      </div>

      {/* ================= Achieved (Done) ================= */}
      <div className="w-full lg:w-[500px] min-h-[300px] bg-white rounded-[10px] shadow-md flex flex-col items-center p-4 sm:p-6 transition">
        {/* Header Box */}
        <div className="w-full lg:w-[500px] h-[50px] sm:h-[60px] bg-[#f7f7f7] flex items-center justify-center px-4 sm:px-6 rounded-[6px] mb-4">
          <h2 className="text-black text-lg sm:text-xl font-medium">Achieved</h2>
        </div>

        {/* Display Achieved Goals */}
        {filteredAchievedGoals.length > 0 ? (
          filteredAchievedGoals.map((goal) => (
            <div key={goal.id} className="w-full max-w-[450px] min-h-[93px] bg-[#f7f7f7] rounded-[6px] p-4 flex flex-col justify-between relative shadow-sm mb-4">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                <p className="text-gray-800 font-medium text-sm sm:text-base break-words flex-1">{goal.text}</p>
                <div className="flex items-center gap-2 self-end sm:self-start">
                  <div className="w-[60px] h-[18px] bg-white border border-green-500 rounded-[4px] flex items-center justify-center text-[10px] sm:text-[12px] text-black font-medium">
                    Done
                  </div>
                  <button
                    onClick={() => handleDeleteGoal(goal.id)}
                    className="w-6 h-6 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-full transition text-lg font-bold"
                  >
                    ×
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center mt-3 gap-1 sm:gap-0">
                <span className="text-gray-500 text-xs sm:text-sm italic text-center sm:text-left">
                  Completed Successfully 🎯
                </span>
                <span className="text-gray-500 text-xs sm:text-sm">{goal.date}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full max-w-[450px] min-h-[93px] bg-[#f7f7f7] rounded-[6px] flex items-center justify-center shadow-sm text-gray-500 italic text-sm sm:text-base px-4 text-center">
            {searchTerm ? "No achieved goals match your search" : "No achieved goals yet"}
          </div>
        )}
      </div>
    </div>
  );
}