import { db } from "./db";
import { DataTypes } from "sequelize";

const message = db.define("message", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.STRING },
});

const dialogue = db.define("dialogue", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const user = db.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
});

const userDialogue = db.define("userDialogue", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

user.hasMany(message);
message.belongsTo(user);

dialogue.hasMany(message);
message.belongsTo(dialogue);

dialogue.belongsToMany(user, { through: "userDialogue" }); // Каждый диалог принадлежит каким-либо двум юзерам.
user.belongsToMany(dialogue, { through: "userDialogue" }); // Каждый юзер участвует в нескольких диалогах.

export const models = {
  message,
  dialogue,
  user,
  userDialogue,
};
