import express from "express";
import { userRouter } from "./routers/userRouter";

export const router = express.Router();

router.use("/user", userRouter);
