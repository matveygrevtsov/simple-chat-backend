import dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/.env_dev` });

const {
  NODE_ENV,
  APP_PORT,
  DEV_APP_PORT,
  JWT_SECRET,
  DEV_JWT_SECRET,
  JWT_EXPIRES_IN_MS,
  DEV_JWT_EXPIRES_IN_MS,
  DB_CONNECTION_STRING,
  DEV_DB_CONNECTION_STRING,
  IS_APP_LAUNCHED_FROM_DOCKER_CONTAINER,
  DEV_DB_CONNECTION_DOCKER_STRING,
  PASSWORD_HASH_ROUNDS,
  DEV_PASSWORD_HASH_ROUNDS,
} = process.env;

export const appPort: number = parseInt(APP_PORT || DEV_APP_PORT);

export const jwtSecret = JWT_SECRET || DEV_JWT_SECRET;

export const jwtExpiresInMs: number = parseInt(
  JWT_EXPIRES_IN_MS || DEV_JWT_EXPIRES_IN_MS
);

const getDbConnectionString = () => {
  if (IS_APP_LAUNCHED_FROM_DOCKER_CONTAINER === "true" && NODE_ENV === "dev") {
    return DEV_DB_CONNECTION_DOCKER_STRING;
  }
  return DB_CONNECTION_STRING || DEV_DB_CONNECTION_STRING;
};

export const dbConnectionString = getDbConnectionString();

export const passwordHashRounds = parseInt(
  PASSWORD_HASH_ROUNDS || DEV_PASSWORD_HASH_ROUNDS
);
