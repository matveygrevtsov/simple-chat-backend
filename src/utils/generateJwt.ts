import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN_MS } from "../constants";

export function generateJwt(email: string, password: string): string {
  return jwt.sign({ email, password }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN_MS,
  });
}
