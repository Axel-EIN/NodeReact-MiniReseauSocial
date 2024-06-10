import express from "express";

import {
    getAllMessages,
   
    addMessage
} from "../controllers/inbox.controller.js";
import verifyToken from "../services/auth.js";

const router = express.Router();


router.post("/add/:id", verifyToken, addMessage);
router.get("/all", verifyToken, getAllMessages);

export default router;