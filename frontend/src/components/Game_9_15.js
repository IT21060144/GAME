// Game_9_15.js – Advanced Math Game (9–15 Years)
import React, { useEffect, useState } from "react";

const questions = [
  {
    question: "What is 12 x 3?",
    options: ["36", "30", "24"],
    answer: "36",
  },
  {
    question: "A bag has 25 apples, 5 are eaten. How many left?",
    options: ["20", "15", "30"],
    answer: "20",
  },
  {
    question: "What is the square of 5?",
    options: ["20", "25", "15"],
    answer: "25",
  },
  {
    question: "What is 100 ÷ 4?",
    options: ["25", "30", "20"],
    answer: "25",
  },
  {
    question: "Sara ran 3km a day for 5 days. Total?",
    options: ["15km", "12km", "18km"],
    answer: "15km",
  },
];

const Game_9_15 = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [showResult, setShowResult] = useState(false);
  const [student, setStudent] = useState("");

  useEffect(() => {
    const studentName = localStorage.getItem("currentStudent") || "Guest";
    setStudent(studentName);
  }, []);

  useEffect(() => {
    if (!showResult && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      nextQuestion();
    }
  }, [timeLeft, showResult]);

  const handleAnswer = (option) => {
    if (option === questions[index].answer) {
      setScore(score + 10); // 10 XP per correct answer
    }
    nextQuestion();
  };

  const nextQuestion = () => {
    const next = index + 1;
    if (next < questions.length) {
      setIndex(next);
      setTimeLeft(10);
    } else {
      setShowResult(true);
      const scores = JSON.parse(localStorage.getItem("scores")) || {};
      scores[student] = score;
      localStorage.setItem("scores", JSON.stringify(scores));
    }
  };

  const getBadge = () => {
    if (score >= 40) return "🥇 Gold";
    if (score >= 30) return "🥈 Silver";
    if (score >= 20) return "🥉 Bronze";
    return "⭐ Keep practicing!";
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6 flex flex-col items-center text-center">
      {!showResult ? (
        <div className="w-full max-w-lg bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Time Left: {timeLeft}s</h2>
          <h1 className="text-xl font-bold text-blue-700 mb-4">
            {questions[index].question}
          </h1>
          <div className="flex flex-col gap-3">
            {questions[index].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(opt)}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow w-full max-w-md">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">🎉 Well done, {student}!</h2>
          <p className="text-xl">Your XP: {score}</p>
          <p className="text-lg mt-2">Badge Earned: {getBadge()}</p>
          <button
            className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700"
            onClick={() => window.location.reload()}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Game_9_15;
