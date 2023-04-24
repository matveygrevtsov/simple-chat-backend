import { FrontendErrors, FrontendErrorsStatus } from "../../constants/errors";
import { dbUserController } from "../../db/controllers/dbUserController";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { hashPassword } from "../../utils/hashPassword";
import { generateJwt } from "../../utils/generateJwt";

class UserRouterController {
  public async registration(req: Request, res: Response) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(FrontendErrorsStatus.AccessDenied).json({
        errorCode: FrontendErrors.AccessDenied,
      });
    }
    // Проверяем не был ли уже зареган юзер с такими данными
    const candidate = await dbUserController.findOne(email);
    if (candidate) {
      return res
        .status(FrontendErrorsStatus.UserWithTheSameEmailAlreadyExists)
        .json({
          errorCode: FrontendErrors.UserWithTheSameEmailAlreadyExists,
        });
    }
    const hashedPassword = await hashPassword(password);
    const user = await dbUserController.create({
      email,
      password: hashedPassword,
    });
    const token = generateJwt(user.id, user.email);
    return res.json(token);
  }

  public async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await dbUserController.findOne(email);
    if (!user) {
      return res.status(FrontendErrorsStatus.AccessDenied).json({
        errorCode: FrontendErrors.AccessDenied,
      });
    }
    // сравниваем пароль из запроса с захэшированным паролем из БД
    const comparePassword = bcrypt.compareSync(password, user.password);
    // Если пароли не совпали
    if (!comparePassword) {
      return res.status(FrontendErrorsStatus.AccessDenied).json({
        errorCode: FrontendErrors.AccessDenied,
      });
    }
    const token = generateJwt(user.id, user.email);
    return res.json(token);
  }

  public async getAll(_: Request, res: Response) {
    const users = await dbUserController.findAll();
    return res.json(users);
  }
}

export const userRouterController = new UserRouterController();
