import React, { useState, useEffect } from "react";

const questions = [
  {
    question: "What is 5 + 3?",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
  {
    question: "What is 4 x 2?",
    options: ["6", "8", "9", "10"],
    answer: "8",
  },
  {
    question: "What is 10 - 4?",
    options: ["6", "5", "7", "4"],
    answer: "6",
  },
];

const GamePage = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [student, setStudent] = useState("");

  useEffect(() => {
    const currentStudent = localStorage.getItem("currentStudent");
    setStudent(currentStudent || "Guest");
  }, []);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);

      // Save score to localStorage
      const scores = JSON.parse(localStorage.getItem("scores")) || {};
      scores[student] = score + (option === questions[current].answer ? 1 : 0); // final answer count
      localStorage.setItem("scores", JSON.stringify(scores));
    }
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-blue-100 p-6 flex flex-col items-center justify-center text-center">
      {!showResult ? (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-bold mb-4 text-blue-700">
            {questions[current].question}
          </h2>
          <div className="grid gap-4">
            {questions[current].options.map((opt, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(opt)}
                className="bg-blue-400 text-white py-2 rounded hover:bg-blue-600 transition"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-xl font-bold text-blue-800 text-center">
          <p>🎉 {student}, you got {score} out of {questions.length} correct!</p>
          <button
            onClick={restart}
            className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default GamePage;
