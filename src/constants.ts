import dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/.env` });

export const IS_PROD: boolean = process.env.NODE_ENV === "production";
export const PORT: number = parseInt(
  IS_PROD ? process.env.APP_PORT : process.env.DEV_APP_PORT
);
export const JWT_SECRET = IS_PROD
  ? process.env.JWT_SECRET
  : process.env.DEV_JWT_SECRET;
export const JWT_EXPIRES_IN_MS: number = parseInt(
  IS_PROD ? process.env.JWT_EXPIRES_IN_MS : process.env.DEV_JWT_EXPIRES_IN_MS
);
export const DB_CONNECTION_STRING = IS_PROD
  ? process.env.DB_CONNECTION_STRING
  : process.env.DEV_DB_CONNECTION_STRING;
