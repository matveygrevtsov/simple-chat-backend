import express from "express";
import { userRouterController } from "../controllers/userRouterController";

export const userRouter = express.Router();

userRouter.post("/sign-up", userRouterController.registration);
userRouter.post("/sign-in", userRouterController.login);
