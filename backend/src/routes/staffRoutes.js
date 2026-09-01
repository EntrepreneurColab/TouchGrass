const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const {
  registerStaff,
} = require("../controllers/staffController");

const router = express.Router();

router.post(
  "/register",
  authMiddleware,
  registerStaff
);

module.exports = router;