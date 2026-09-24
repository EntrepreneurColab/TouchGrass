import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import staffRoutes from "./routes/staffRoutes.js";
import contactRoutes from "./routes/contactRoutes.js"

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/contact", contactRoutes);

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "TouchGrass backend is running 🌱",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`TouchGrass backend running on port ${PORT}`);
});