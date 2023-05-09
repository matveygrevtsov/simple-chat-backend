import { models } from "../models";

interface DialogueInDataBase {
  id: number;
}

class DataBaseDialogueController {
  /**
   * Записывает юзера в базу данных.
   * @param email электронная почта.
   * @param hashedPassword захэшированный пароль.
   */
  public async create(
    firstUserId: number,
    secondUserId: number
  ): Promise<DialogueInDataBase> {
    const dialogue =
      (await models.dialogue.create()) as unknown as DialogueInDataBase;
    const promise1 = models.userDialogue.create({
      userId: firstUserId,
      dialogueId: dialogue.id,
    });
    const promise2 = models.userDialogue.create({
      userId: secondUserId,
      dialogueId: dialogue.id,
    });
    await Promise.all([promise1, promise2]);
    return dialogue;
  }
}

export const dataBaseDialogueController = new DataBaseDialogueController();
