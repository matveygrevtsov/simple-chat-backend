import { dataBaseMessageController } from "../../db/controllers/dataBaseMessageController";
import { Request, Response } from "express";

class MessageRouterController {
  constructor() {}

  public async create(req: Request, res: Response) {
    const { text, dialogueId } = req.body;
    const message = await dataBaseMessageController.create(text, dialogueId);
    return res.json(message);
  }
}

export const messageRouterController = new MessageRouterController();
