import { db } from "./db/db";
import { appPort, dbConnectionString } from "./constants/constants";
import { server } from "./server";

const start = async () => {
  try {
    await db.authenticate(); // При помощи этого метода устанавливается подключение к БД.
    await db.sync(); // Данный метод сверяет состояние базы данных со схемой, которую мы описали в models.
    server.listen(appPort, () =>
      console.log(`Сервер успешно стартовал на порту ${appPort}`)
    );
  } catch (error) {
    console.log(
      `Не удалось запустить сервер (APP_PORT=${appPort}, dbConnectionString=${dbConnectionString}): ${error}`
    );
  }
};

start();
