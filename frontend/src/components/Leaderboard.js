import React, { useEffect, useState } from "react";

const Leaderboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const names = JSON.parse(localStorage.getItem("students")) || [];
    const scores = JSON.parse(localStorage.getItem("scores")) || {};
    const result = names.map(name => ({
      name,
      score: scores[name] || 0,
    }));
    setStudents(result);
  }, []);

  const getReward = (score) => {
    if (score >= 80) return "🥇 Gold";
    if (score >= 50) return "🥈 Silver";
    if (score > 40) return "🥉 Bronze";
    if (score > 30) return "⭐️⭐️⭐️⭐️⭐️";
    if (score > 20) return "⭐️⭐️⭐️";
    if (score > 10) return "⭐️";
    return "💤";
  };

  return (
    <div className="min-h-screen bg-blue-100 p-8 text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">🏆 Leaderboard</h1>
      <div className="overflow-x-auto">
        <table className="w-full max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-300 text-white">
            <tr>
              <th className="p-4">Photo</th>
              <th className="p-4">Name</th>
              <th className="p-4">Score</th>
              <th className="p-4">Reward</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, index) => (
              <tr key={index} className="border-t text-blue-800 font-medium">
                <td className="p-4">
                  <img src={localStorage.getItem(`photo_${s.name}`)} alt="" className="w-12 h-12 rounded-full object-cover" />
                </td>
                <td className="p-4">{s.name}</td>
                <td className="p-4">{s.score}</td>
                <td className="p-4">{getReward(s.score)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;