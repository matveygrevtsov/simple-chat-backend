import { appPort } from "./constants/constants";
import { server } from "./server";

const start = async () => {
  try {
    server.listen(appPort, () =>
      console.log(`Сервер успешно стартовал на порту ${appPort}`)
    );
  } catch (error) {
    console.log(
      `Не удалось запустить сервер на порту ${appPort} по причине: ${error}`
    );
  }
};

start();
