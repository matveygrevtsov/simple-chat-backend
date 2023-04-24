import { dbModels } from "../models";

// По этим данным юзер регистрируется
export interface UserCredentials {
  email: string;
  password: string;
}

// В таком виде юзер хранится в БД
export interface UserInDataBase {
  id: string;
  email: string;
  password: string; // захэшированный пароль
}

class DbUserController {
  /**
   * Создание юзера.
   *
   * @param userCredentials Данные юзера.
   */
  public async create(
    userCredentials: UserCredentials
  ): Promise<UserInDataBase> {
    const user = await dbModels.user.create({ ...userCredentials });
    return user as unknown as UserInDataBase;
  }

  /**
   * Возвращает массив всех юзеров.
   */
  public async findAll() {
    const users = await dbModels.user.findAll();
    return users as unknown as UserInDataBase[];
  }

  /**
   * Возвращает данные юзера по email.
   *
   * @param email Электронная почта юзера.
   */
  public async findOne(email: string) {
    const user = await dbModels.user.findOne({
      where: { email },
    });
    return user as unknown as UserInDataBase | null;
  }
}

export const dbUserController = new DbUserController();
