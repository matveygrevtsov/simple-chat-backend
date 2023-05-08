import { appPort } from "./constants/constants";
import { router } from "./router/rootRouter";
import { WebSocket } from "ws";
import express from "express";
import http from "node:http";
import { db } from "./db/db";
import cors from "cors";
import { handleConnection } from "./wss/handleConnection";

const app = express();

app.use(cors());
app.use(express.json()); // Чтобы наше приложение могло парсить JSON-формат.
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on("connection", handleConnection);

const start = async () => {
  try {
    await db.authenticate();
    await db.sync();
    server.listen(appPort, () =>
      console.log(`Сервер успешно стартовал на порту ${appPort}!`)
    );
  } catch (error) {
    console.log(
      `Не удалось запустить сервер на порту ${appPort} по причине: ${error}`
    );
  }
};

start();
