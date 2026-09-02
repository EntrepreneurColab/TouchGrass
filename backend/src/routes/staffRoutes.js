import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";
import { registerStaff } from "../controllers/staffController.js";

const router = express.Router();

router.post(
  "/register",
  authMiddleware,
  registerStaff
);

export default router;