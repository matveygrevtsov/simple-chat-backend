import dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/.env_dev` });

const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  APP_PORT,
  JWT_SECRET,
  JWT_EXPIRES_IN_MS,
  PASSWORD_HASH_ROUNDS,
} = process.env;

export const dbConnectionString = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

export const appPort: number = parseInt(APP_PORT);
export const jwtSecret = JWT_SECRET;
export const jwtExpiresInMs: number = parseInt(JWT_EXPIRES_IN_MS);

export const passwordHashRounds = parseInt(PASSWORD_HASH_ROUNDS);
