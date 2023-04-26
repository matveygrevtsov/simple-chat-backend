import jwt from "jsonwebtoken";
import { jwtSecret, jwtExpiresInMs } from "../constants/constants";

export function generateJwt(email: string, password: string): string {
  return jwt.sign({ email, password }, jwtSecret, {
    expiresIn: jwtExpiresInMs,
  });
}
