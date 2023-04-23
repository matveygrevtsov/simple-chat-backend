import { PORT } from "./constants";
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () =>
  console.log(`Сервер успешно стартовал на порту ${PORT}`)
);
