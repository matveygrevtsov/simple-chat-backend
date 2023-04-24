import { PORT } from "./constants";
import express from "express";
const app = express();

app.listen(PORT, () =>
  console.log(`Сервер успешно стартовал на порту ${PORT}`)
);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});
