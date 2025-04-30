import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterStudent = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (name.trim()) {
      const students = JSON.parse(localStorage.getItem("students")) || [];
      if (!students.includes(name)) {
        students.push(name);
        localStorage.setItem("students", JSON.stringify(students));
      }
      localStorage.setItem("currentStudent", name);
      navigate("/face-login");
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">📝 Register Student</h1>
      <input
        type="text"
        placeholder="Enter your name"
        className="p-3 rounded shadow w-full max-w-md mb-4"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={handleRegister}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800"
      >
        Register
      </button>
    </div>
  );
};

export default RegisterStudent;
