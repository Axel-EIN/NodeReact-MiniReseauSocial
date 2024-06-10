import express from "express";
import verifyToken from '../services/auth.js';

import {
  login,
  register,
  getAll,
  getById,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/add", register);
router.get("/all", getAll);
router.get("/:id", getById);
router.post("/sign", login);



export default router;