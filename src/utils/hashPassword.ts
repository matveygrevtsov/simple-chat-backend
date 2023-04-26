import bcrypt from "bcrypt";
import { passwordHashRounds } from "../constants/constants";

export function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, passwordHashRounds);
}
