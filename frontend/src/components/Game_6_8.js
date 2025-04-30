// Game_6_8.js – Intermediate Math Game (6–8 Years)
import React, { useEffect, useState } from "react";

const questions = [
  {
    question: "What is 3 + 4?",
    options: ["5", "7", "6"],
    answer: "7",
  },
  {
    question: "What is 9 - 5?",
    options: ["3", "4", "5"],
    answer: "4",
  },
  {
    question: "Which number is greater? (6 or 2)",
    options: ["2", "6"],
    answer: "6",
  },
  {
    question: "What is 5 + 5?",
    options: ["10", "9", "11"],
    answer: "10",
  },
  {
    question: "What is 8 - 3?",
    options: ["6", "5", "4"],
    answer: "5",
  },
];

const Game_6_8 = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [student, setStudent] = useState("");

  useEffect(() => {
    const studentName = localStorage.getItem("currentStudent") || "Guest";
    setStudent(studentName);
  }, []);

  const handleAnswer = (option) => {
    if (option === questions[index].answer) {
      setScore(score + 1);
    }
    const next = index + 1;
    if (next < questions.length) {
      setIndex(next);
    } else {
      setShowResult(true);
      const scores = JSON.parse(localStorage.getItem("scores")) || {};
      scores[student] = score;
      localStorage.setItem("scores", JSON.stringify(scores));
    }
  };

  const restart = () => {
    setIndex(0);
    setScore(0);
    setShowResult(false);
  };

  const getEmojiReward = () => {
    if (score >= 4) return "🌟🌟🌟🌟";
    if (score >= 3) return "🌟🌟🌟";
    if (score >= 2) return "🌟🌟";
    return "🌟";
  };

  return (
    <div className="min-h-screen bg-green-100 p-6 flex flex-col items-center text-center">
      {!showResult ? (
        <div className="w-full max-w-lg bg-white p-6 rounded shadow">
          <h1 className="text-xl font-bold text-green-700 mb-4">
            {questions[index].question}
          </h1>
          <div className="flex flex-col gap-3">
            {questions[index].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(opt)}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow w-full max-w-md">
          <h2 className="text-2xl font-bold text-green-700 mb-2">🎉 Great Job, {student}!</h2>
          <p className="text-xl">You answered {score} out of {questions.length} correctly.</p>
          <p className="text-lg mt-2">Your Reward: {getEmojiReward()}</p>
          <button
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700"
            onClick={restart}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Game_6_8;
