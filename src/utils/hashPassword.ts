import bcrypt from "bcrypt";
import { PASSWORD_HASH_ROUNDS } from "../constants/constants";

export function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, PASSWORD_HASH_ROUNDS);
}
