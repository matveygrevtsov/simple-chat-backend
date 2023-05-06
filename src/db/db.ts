import {
  dbHost,
  dbName,
  dbPassword,
  dbPort,
  dbUser,
} from "../constants/constants";
import { Sequelize } from "sequelize";

export const db = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "postgres",
  host: dbHost,
  port: dbPort,
});
