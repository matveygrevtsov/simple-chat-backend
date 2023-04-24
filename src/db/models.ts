import { db } from "./db";
import { DataTypes } from "sequelize";

const user = db.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
});

const dialog = db.define("dialog", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const message = db.define("message", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  author: { type: DataTypes.STRING },
  text: { type: DataTypes.STRING },
});

user.hasMany(dialog); // Каждый юзер имеет несколько диалогов.
dialog.belongsToMany(user, { through: "user-dialog" }); // Каждый диалог принадлежит нескольким юзерам.

dialog.hasMany(message); // Диалог состоит из нескольких сообщений.
message.belongsTo(dialog); // Каждое сообщение принадлежит какому-то одному диалогу.

export const dbModels = {
  user,
  dialog,
  message,
};
