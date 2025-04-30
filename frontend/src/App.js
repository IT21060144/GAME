import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RegisterStudent from "./components/RegisterStudent";
import LoginStudent from "./components/LoginStudent";
import FaceLogin from "./components/FaceLogin";
import CourseSelector from "./components/CourseSelector";
import Leaderboard from "./components/Leaderboard";
import Game_3_5 from "./components/Game_3_5";
import Game_6_8 from "./components/Game_6_8";
import Game_9_15 from "./components/Game_9_15";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterStudent />} />
          <Route path="/login" element={<LoginStudent />} />
          <Route path="/face-login" element={<FaceLogin />} />
          <Route path="/courses" element={<CourseSelector />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/game-3-5" element={<Game_3_5 />} />
          <Route path="/game-6-8" element={<Game_6_8 />} />
          <Route path="/game-9-15" element={<Game_9_15 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
