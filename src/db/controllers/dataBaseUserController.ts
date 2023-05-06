import { models } from "../models";

// В таком виде юзер хранится в БД
interface UserInDataBase {
  id: string;
  email: string;
  password: string; // захэшированный пароль
}

class DataBaseUserController {
  /**
   * Записывает юзера в базу данных.
   * @param email электронная почта.
   * @param hashedPassword захэшированный пароль.
   */
  public async create(
    email: string,
    hashedPassword: string
  ): Promise<UserInDataBase> {
    const user = await models.user.create({ email, password: hashedPassword });
    return user as unknown as UserInDataBase;
  }

  /**
   * Возвращает данные юзера из базы данных по его email, либо null, если таков не был найден.
   * @param email электронная почта.
   */
  public async findOne(email: string): Promise<UserInDataBase> {
    const user = await models.user.findOne({
      where: { email },
    });
    return user as unknown as UserInDataBase | null;
  }

  /**
   * Возвращает массив всех юзеров.
   */
  public async findAll(): Promise<UserInDataBase[]> {
    const users = await models.user.findAll();
    return users as unknown as UserInDataBase[];
  }
}

export const dataBaseUserController = new DataBaseUserController();
