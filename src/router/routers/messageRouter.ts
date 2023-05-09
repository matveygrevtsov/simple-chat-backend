import { messageRouterController } from "../controllers/messageRouterController";
import express from "express";

export const messageRouter = express.Router();

messageRouter.post("/create", messageRouterController.create);
messageRouter.get("/", messageRouterController.getMessagesByDialogueId);
