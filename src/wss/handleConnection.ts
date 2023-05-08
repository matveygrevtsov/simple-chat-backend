import { WebSocket } from "ws";
import { handleMessage } from "./handleMessage";

export function handleConnection(ws: WebSocket) {
  ws.on("message", (message: string) => handleMessage(ws, message));
  ws.send("Кто-то подключился по веб-сокету");
}
