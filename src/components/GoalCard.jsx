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
    <div className="flex gap-10 mt-10 justify-center flex-wrap">
      {/* ================= My Goals (Undone) ================= */}
      <div className="w-[500px] min-h-[300px] bg-white rounded-[10px] shadow-md flex flex-col items-center p-4 transition">
        {/* Header Box */}
        <div className="w-[500px] h-[60px] bg-[#f7f7f7] flex items-center justify-start px-6 rounded-[6px] mb-4">
          <h2 className="text-black text-xl font-medium">My Goals</h2>
        </div>

        {/* Goal Form - Show when Add Goal button is clicked */}
        {internalShowForm && (
          <div className="w-[450px] h-[93px] bg-[#f7f7f7] rounded-[6px] p-4 flex flex-col justify-between relative shadow-sm mb-4">
            <div className="flex justify-between items-start">
              <input
                type="text"
                value={goalText}
                onChange={(e) => setGoalText(e.target.value)}
                placeholder="Enter your goal"
                className="w-[320px] h-[35px] border border-gray-300 rounded-[4px] px-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#8A46E2]"
                autoFocus
              />
              <div className="w-[60px] h-[18px] bg-white border border-red-500 rounded-[4px] flex items-center justify-center text-[12px] text-black font-medium">
                Undone
              </div>
            </div>

            <div className="flex justify-between items-center mt-2">
              <button
                type="button"
                onClick={handleAddGoal}
                className="w-[120px] h-[25px] bg-[#8A46E2] text-white text-sm rounded-[6px] hover:opacity-90 transition"
              >
                Add Goal
              </button>
              <span className="text-gray-500 text-sm">{currentDate}</span>
            </div>
          </div>
        )}

        {/* Display Goals List */}
        {filteredGoals.length > 0 ? (
          filteredGoals.map((goal) => (
            <div key={goal.id} className="w-[450px] h-[93px] bg-[#f7f7f7] rounded-[6px] p-4 flex flex-col justify-between relative shadow-sm mb-4">
              <div className="flex justify-between items-start">
                <p className="text-gray-800 font-medium">{goal.text}</p>
                <div className="w-[60px] h-[18px] bg-white border border-red-500 rounded-[4px] flex items-center justify-center text-[12px] text-black font-medium">
                  Undone
                </div>
              </div>

              <div className="flex justify-between items-center mt-2">
                <button
                  type="button"
                  onClick={() => handleMarkDone(goal.id)}
                  className="w-[120px] h-[25px] bg-[#8A46E2] text-white text-sm rounded-[6px] hover:opacity-90 transition"
                >
                  Mark as done
                </button>
                <span className="text-gray-500 text-sm">{goal.date}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="w-[450px] h-[93px] bg-[#f7f7f7] rounded-[6px] flex items-center justify-center shadow-sm text-gray-500 italic">
            {searchTerm ? "No goals match your search" : "No goals yet"}
          </div>
        )}
      </div>

      {/* ================= Achieved (Done) ================= */}
      <div className="w-[500px] min-h-[300px] bg-white rounded-[10px] shadow-md flex flex-col items-center p-4 transition">
        {/* Header Box */}
        <div className="w-[500px] h-[60px] bg-[#f7f7f7] flex items-center justify-center px-6 rounded-[6px] mb-4">
          <h2 className="text-black text-xl font-medium">Achieved</h2>
        </div>

        {/* Display Achieved Goals */}
        {filteredAchievedGoals.length > 0 ? (
          filteredAchievedGoals.map((goal) => (
            <div key={goal.id} className="w-[450px] h-[93px] bg-[#f7f7f7] rounded-[6px] p-4 flex flex-col justify-between relative shadow-sm mb-4">
              <div className="flex justify-between items-start">
                <p className="text-gray-800 font-medium">{goal.text}</p>
                <div className="flex items-center gap-2">
                  <div className="w-[60px] h-[18px] bg-white border border-green-500 rounded-[4px] flex items-center justify-center text-[12px] text-black font-medium">
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

              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-500 text-sm italic">
                  Completed Successfully 🎯
                </span>
                <span className="text-gray-500 text-sm">{goal.date}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="w-[450px] h-[93px] bg-[#f7f7f7] rounded-[6px] flex items-center justify-center shadow-sm text-gray-500 italic">
            {searchTerm ? "No achieved goals match your search" : "No achieved goals yet"}
          </div>
        )}
      </div>
    </div>
  );
}