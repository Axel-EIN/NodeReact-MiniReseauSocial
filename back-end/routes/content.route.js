import express from "express";
import verifyToken from '../services/auth.js';

import {
  getAll,
  createTweet,
  getById,
  updateTweet,
  deleteTweet
} from "../controllers/content.controller.js";

const router = express.Router();

router.post("/add", verifyToken, createTweet);
router.get("/getAll", getAll);
router.get("/:id", getById);
router.put("/:id", verifyToken, updateTweet);
router.delete("/:id", verifyToken, deleteTweet);




export default router;