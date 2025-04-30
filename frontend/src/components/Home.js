import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center px-6 py-12 text-center">
      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4 drop-shadow">
        🎮 Welcome to the Online Gamification Learning Platform
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-700 max-w-2xl mb-8">
        Explore fun, educational games and climb the leaderboard while learning!
      </p>

      {/* Centered Image */}
      <img
        src="/math.png"  // <-- make sure this image is in /public/home-banner.png
        alt="Learning Banner"
        className="w-72 h-72 rounded-xl shadow-lg"
      />
    </div>
  );
};

export default Home;
