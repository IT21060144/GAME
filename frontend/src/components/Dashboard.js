// Dashboard.js - Enhanced Gamified Profile
import React from "react";

const Dashboard = () => {
  const student = {
    name: "Liya",
    score: 85,
    level: "Expert",
    stars: 5,
    badges: ["Math Genius", "Quick Solver"],
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 p-8 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">📊 Your Dashboard</h1>

      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2 text-blue-700">👧 Name: {student.name}</h2>
        <p className="mb-1">🎯 Score: <span className="font-bold">{student.score}</span></p>
        <p className="mb-1">🏅 Level: <span className="font-bold">{student.level}</span></p>
        <p className="mb-1">⭐️ Stars: {"⭐️".repeat(student.stars)}</p>
        <div className="mt-3">
          <p className="font-semibold text-blue-600 mb-1">🎖️ Badges:</p>
          <ul className="flex gap-2 justify-center">
            {student.badges.map((badge, idx) => (
              <li key={idx} className="bg-yellow-100 px-3 py-1 rounded-full shadow text-sm">
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
