import dotenv from "dotenv";
dotenv.config({ path: `${process.cwd()}/.env.dev` });

// Достаём значения env-переменных из файла .env.dev
const {
  DEV_APP_PORT,
  DEV_JWT_SECRET,
  DEV_JWT_EXPIRES_IN_MS,
  DEV_PASSWORD_HASH_ROUNDS,
  DEV_DB_USER,
  DEV_DB_PASSWORD,
  DEV_DB_NAME,
  DEV_DB_PORT,
  DEV_DB_HOST,
} = process.env;

// Достаём значения env-переменных из process
const {
  NODE_ENV,
  APP_PORT,
  JWT_SECRET,
  JWT_EXPIRES_IN_MS,
  PASSWORD_HASH_ROUNDS,
} = process.env;

export const isProd = NODE_ENV === "prod";
export const appPort = parseInt(isProd ? APP_PORT : DEV_APP_PORT);
export const jwtSecret = isProd ? JWT_SECRET : DEV_JWT_SECRET;
export const jwtExpiresInMs = parseInt(
  isProd ? JWT_EXPIRES_IN_MS : DEV_JWT_EXPIRES_IN_MS
);
export const passwordHashRounds = parseInt(
  isProd ? PASSWORD_HASH_ROUNDS : DEV_PASSWORD_HASH_ROUNDS
);

export const dbUser = DEV_DB_USER;
export const dbPassword = DEV_DB_PASSWORD;
export const dbName = DEV_DB_NAME;
export const dbPort = parseInt(DEV_DB_PORT);
export const dbHost = DEV_DB_HOST;
