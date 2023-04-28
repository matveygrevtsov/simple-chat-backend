import express from "express";
import { router } from "./router/rootRouter";

export const server = express();

server.use(express.json()); // Чтобы наше приложение могло парсить JSON-формат.
server.use("/api", router);

server.get("/", (req, res) => {
  res.send("Hello, world!");
});
