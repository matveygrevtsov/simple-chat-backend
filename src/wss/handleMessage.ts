import { WebSocket } from "ws";

export function handleMessage(ws: WebSocket, message: string) {
  ws.send("Привет!");
}
