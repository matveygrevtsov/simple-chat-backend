import { dataBaseMessageController } from "../../db/controllers/dataBaseMessageController";
import { Request, Response } from "express";

class MessageRouterController {
  constructor() {}

  public async create(req: Request, res: Response) {
    const { text, dialogueId, userId } = req.body;
    const message = await dataBaseMessageController.create(
      userId,
      dialogueId,
      text
    );
    return res.json(message);
  }

  public async getMessagesByDialogueId(req: Request, res: Response) {
    const { dialogueId } = req.body;
    const messages = await dataBaseMessageController.getMessagesFromDialog(
      dialogueId
    );
    return res.json(messages);
  }
}

export const messageRouterController = new MessageRouterController();
