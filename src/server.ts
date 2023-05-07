import { router } from "./router/rootRouter";
import express from "express";
import cors from "cors";

export const server = express();

server.use(cors());
server.use(express.json()); // Чтобы наше приложение могло парсить JSON-формат.
server.use("/api", router);

server.get("/", (req, res) => {
  res.send("Hello, world!");
});
