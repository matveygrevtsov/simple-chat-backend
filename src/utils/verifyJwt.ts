import { jwtSecret } from "../constants/constants";
import { UserCredentials } from "../types";
import jwt from "jsonwebtoken";

/**
 * Принимает JWT и возвращает декодированные данные юзера (если JWT валидный), либо null - в противном случае.
 */
export function verifyJwt(jsonWebToken: string): UserCredentials | null {
  let result: UserCredentials | null = null;
  jwt.verify(jsonWebToken, jwtSecret, (err, decoded: UserCredentials) => {
    if (!err) {
      result = decoded;
    }
  });
  return result;
}
