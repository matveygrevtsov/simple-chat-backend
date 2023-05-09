import { dataBaseDialogueController } from "../../db/controllers/dataBaseDialogueController";
import { Request, Response } from "express";

class DialogueRouterController {
  constructor() {}

  public async create(req: Request, res: Response) {
    const { firstUserId, secondUserId } = req.body;
    const message = await dataBaseDialogueController.create(
      firstUserId,
      secondUserId
    );
    return res.json(message);
  }
}

export const dialogueRouterController = new DialogueRouterController();
