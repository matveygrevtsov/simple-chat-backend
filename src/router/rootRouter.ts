import express from "express";
import { userRouter } from "./routers/userRouter";
import { messageRouter } from "./routers/messageRouter";
import { dialogueRouter } from "./routers/dialogueRouter";

export const router = express.Router();

router.use("/user", userRouter);
router.use("/message", messageRouter);
router.use("/dialogue", dialogueRouter);
