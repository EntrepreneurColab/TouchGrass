import express from "express"

import authMiddleware from "../middleware/authMiddleware.js"

import {
  createContact,
  getContacts,
} from "../controllers/contactController.js"

const router = express.Router()

router.post("/", createContact)

router.get("/", authMiddleware, getContacts)

export default router