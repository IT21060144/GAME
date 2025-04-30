import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginStudent = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    if (students.includes(name)) {
      localStorage.setItem("currentStudent", name);
      navigate("/courses");
    } else {
      setError("Student not found. Please register.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">🔐 Student Login</h1>
      <input
        type="text"
        placeholder="Enter your name"
        className="p-3 rounded shadow w-full max-w-md mb-4"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-800"
      >
        Login
      </button>
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
};

export default LoginStudent;
