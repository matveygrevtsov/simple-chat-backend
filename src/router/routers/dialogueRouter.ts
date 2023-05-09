import express from "express";
import { dialogueRouterController } from "../controllers/dialogueRouterController";

export const dialogueRouter = express.Router();

dialogueRouter.post("/create", dialogueRouterController.create);
