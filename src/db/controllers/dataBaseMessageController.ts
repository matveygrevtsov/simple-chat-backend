import { models } from "../models";

interface MessageInDataBase {
  id: string;
  dialogueId: string;
  text: string;
}

class DataBaseMessageController {
  /**
   * Создаёт новое сообщение.
   * @param dialogueId Айдишник диалога.
   * @param text текст сообщения.
   */
  public async create(
    userId: number,
    dialogueId: number,
    text: string
  ): Promise<MessageInDataBase> {
    const message = await models.message.create({ text, userId, dialogueId });
    return message as unknown as MessageInDataBase;
  }

  /**
   * Возвращает массив всех сообщений из диалога.
   * @param dialogueId Айдишник диалога.
   */
  public async getMessagesFromDialog(
    dialogueId: number
  ): Promise<MessageInDataBase[]> {
    const messages = (await models.message.findAll({
      where: { dialogueId },
    })) as unknown as MessageInDataBase[];
    return messages;
  }
}

export const dataBaseMessageController = new DataBaseMessageController();
