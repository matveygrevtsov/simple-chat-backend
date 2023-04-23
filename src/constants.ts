import dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/.env` });

export const IS_PROD: boolean = process.env.NODE_ENV === "production";
export const PORT: number = parseInt(
  IS_PROD ? process.env.APP_PORT : process.env.DEV_APP_PORT
);
