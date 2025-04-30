const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

const Student = require("./models/Student");

mongoose.connect(process.env.MONGO_URI || "mongodb+srv://onlinegame:game123@cluster0.1jis4ps.mongodb.net/gamification", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Save student photo from base64
app.post("/api/save-photo", (req, res) => {
  const { name, photo } = req.body;
  if (!name || !photo) return res.status(400).json({ message: "Missing name or photo" });

  const base64Data = photo.split(",")[1];
  const buffer = Buffer.from(base64Data, "base64");
  const filePath = path.join(__dirname, "photos", `${name}.jpg`);
  fs.writeFileSync(filePath, buffer);
  res.json({ message: "Photo saved" });
});

// Register or update score
app.post("/api/student", async (req, res) => {
  const { name, score } = req.body;
  if (!name || score === undefined) return res.status(400).json({ message: "Missing data" });

  let student = await Student.findOne({ name });
  if (!student) {
    student = new Student({ name, score });
  } else {
    student.score = score;
  }
  await student.save();
  res.json(student);
});

// Get leaderboard
app.get("/api/leaderboard", async (req, res) => {
  const list = await Student.find().sort({ score: -1 });
  res.json(list);
});

app.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
