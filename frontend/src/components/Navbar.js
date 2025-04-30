// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-80 text-blue-200 px-8 py-4 shadow-md">
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
        {/* Logo / Title */}
        <div className="text-2xl font-bold">🎮 Gamification System</div>

        {/* Nav Links */}
        <ul className="flex gap-8 text-lg font-medium">
          <li><Link to="/" className="hover:text-white"> Home </Link></li>
          <li><Link to="/register" className="hover:text-white">   Register  </Link></li>
          <li><Link to="/login" className="hover:text-white">  Login  </Link></li>
          <li><Link to="/courses" className="hover:text-white">  Courses  </Link></li>
          <li><Link to="/leaderboard" className="hover:text-white">  Leaderboard  </Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
