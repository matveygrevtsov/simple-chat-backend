import { models } from "../models";

interface MessageInDataBase {
  id: string;
  dialogueId: string;
  text: string;
}

class DataBaseMessageController {
  /**
   * Записывает юзера в базу данных.
   * @param email электронная почта.
   * @param hashedPassword захэшированный пароль.
   */
  public async create(
    text: string,
    dialogueId: number
  ): Promise<MessageInDataBase> {
    const message = await models.message.create({ text, dialogueId });
    return message as unknown as MessageInDataBase;
  }
}

export const dataBaseMessageController = new DataBaseMessageController();
