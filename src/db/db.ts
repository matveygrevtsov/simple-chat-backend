import { dbConnectionString } from "../constants/constants";
import { Sequelize } from "sequelize";

export const db = new Sequelize(dbConnectionString, {
  dialect: "postgres",
});
