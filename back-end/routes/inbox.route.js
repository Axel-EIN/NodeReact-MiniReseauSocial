import express from "express";

import {
    getAllMessages,
    addMessage,
} from "../controllers/inbox.controller.js";

const router = express.Router();

router.post("/all", getAllMessages);
router.get("/add", addMessage);

export default router;