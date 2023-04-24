import { DB_CONNECTION_STRING } from "../constants";
import { Sequelize } from "sequelize";

export const db = new Sequelize(DB_CONNECTION_STRING, {
  dialect: "postgres",
});
