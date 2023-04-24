import { PORT } from "./constants";
import { server } from "./server";

server.listen(PORT, () =>
  console.log(`Сервер успешно стартовал на порту ${PORT}`)
);
