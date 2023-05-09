import { dataBaseDialogueController } from "../../db/controllers/dataBaseDialogueController";
import { Request, Response } from "express";

class DialogueRouterController {
  constructor() {}

  public async create(req: Request, res: Response) {
    const { firstUserId, secondUserId } = req.body;
    try {
      const message = await dataBaseDialogueController.create(
        firstUserId,
        secondUserId
      );
      return res.json(message);
    } catch (error) {
      return res.json(error);
    }
  }

  public async getDialoguesByUserId(req: Request, res: Response) {
    const { userId } = req.body;
    const dialogues = await dataBaseDialogueController.getDialogsByUserId(
      userId
    );
    return res.json(dialogues);
  }
}

export const dialogueRouterController = new DialogueRouterController();
