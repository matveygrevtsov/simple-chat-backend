import express from "express";
import { messageRouterController } from "../controllers/messageRouterController";

export const messageRouter = express.Router();

messageRouter.post("/create", messageRouterController.create);
