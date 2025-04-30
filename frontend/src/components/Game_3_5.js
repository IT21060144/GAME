// Game_3_5.js – Fun Counting Game (3–5 Years)
import React, { useEffect, useState } from "react";

const questions = [
  {
    question: "How many apples? 🍎🍎🍎",
    options: ["2", "3", "4"],
    answer: "3",
  },
  {
    question: "Which number is bigger? (2 or 5)",
    options: ["2", "5"],
    answer: "5",
  },
  {
    question: "How many stars? ⭐⭐",
    options: ["3", "2", "1"],
    answer: "2",
  },
  {
    question: "What comes after 4?",
    options: ["3", "5", "6"],
    answer: "5",
  },
  {
    question: "How many ducks? 🦆🦆🦆🦆",
    options: ["3", "4", "5"],
    answer: "4",
  },
];

const Game_3_5 = () => {
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
    if (score >= 4) return "🎉🎉🎉🎉";
    if (score >= 3) return "🎉🎉🎉";
    if (score >= 2) return "🎉🎉";
    return "🎉";
  };

  return (
    <div className="min-h-screen bg-yellow-100 p-6 flex flex-col items-center text-center">
      {!showResult ? (
        <div className="w-full max-w-lg bg-white p-6 rounded shadow">
          <h1 className="text-xl font-bold text-yellow-700 mb-4">
            {questions[index].question}
          </h1>
          <div className="flex flex-col gap-3">
            {questions[index].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(opt)}
                className="bg-yellow-400 text-white py-2 px-4 rounded hover:bg-yellow-600"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow w-full max-w-md">
          <h2 className="text-2xl font-bold text-yellow-700 mb-2">🎈 Well done, {student}!</h2>
          <p className="text-xl">You got {score} out of {questions.length} right!</p>
          <p className="text-lg mt-2">Your Reward: {getEmojiReward()}</p>
          <button
            className="mt-4 bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-700"
            onClick={restart}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Game_3_5;
