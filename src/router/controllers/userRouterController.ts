import { FrontendErrors, FrontendErrorsStatus } from "../../constants/errors";
import { Request, Response } from "express";
import { comparePasswords, hashPassword } from "../../utils/hashPassword";
import { generateJwt } from "../../utils/generateJwt";
import { dataBaseUserController } from "../../db/controllers/dataBaseUserController";

class UserRouterController {
  /**
   * Регистрирует юзера по логину и паролю, в случае успеха возвращает jwt.
   */
  public async registration(req: Request, res: Response) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(FrontendErrorsStatus.AccessDenied).json({
        errorCode: FrontendErrors.AccessDenied,
      });
    }
    // Проверяем не был ли уже зареган юзер с такими данными
    const candidate = await dataBaseUserController.findOne(email);
    if (candidate) {
      return res
        .status(FrontendErrorsStatus.UserWithTheSameEmailAlreadyExists)
        .json({
          errorCode: FrontendErrors.UserWithTheSameEmailAlreadyExists,
        });
    }
    const hashedPassword = await hashPassword(password);
    const user = await dataBaseUserController.create(email, hashedPassword);
    const token = generateJwt({ id: user.id, email: user.email });
    return res.json(token);
  }

  /**
   * Логинит юзера по логину и паролю, в случае успеха возвращает jwt.
   */
  public async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await dataBaseUserController.findOne(email);
    if (!user) {
      return res.status(FrontendErrorsStatus.AccessDenied).json({
        errorCode: FrontendErrors.AccessDenied,
      });
    }
    // сравниваем пароль из запроса с захэшированным паролем из БД
    const comparePassword = comparePasswords(password, user.password);
    // Если пароли не совпали
    if (!comparePassword) {
      return res.status(FrontendErrorsStatus.AccessDenied).json({
        errorCode: FrontendErrors.AccessDenied,
      });
    }
    const token = generateJwt({ id: user.id, email: user.email });
    return res.json(token);
  }

  public async getAll(req: Request, res: Response) {
    const users = (await dataBaseUserController.findAll()).map(
      ({ id, email }) => ({ id, email })
    );
    return res.json(users);
  }
}

export const userRouterController = new UserRouterController();
