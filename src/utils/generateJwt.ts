import { jwtSecret, jwtExpiresInMs } from "../constants/constants";
import { UserCredentials } from "../types";
import jwt from "jsonwebtoken";

export function generateJwt(userCredentials: UserCredentials): string {
  return jwt.sign(userCredentials, jwtSecret, {
    expiresIn: jwtExpiresInMs,
  });
}
