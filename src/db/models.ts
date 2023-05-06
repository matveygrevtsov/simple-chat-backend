import { db } from "./db";
import { DataTypes } from "sequelize";

const user = db.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
});

export const models = {
  user,
};
