import * as path from "node:path";
import Dotenv from "dotenv-webpack"; // Плагин для использования .env-переменных.
import { Configuration } from "webpack";

const config: Configuration = {
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
  },
  target: "node", // Чтобы webpack генерировал код для node.js-среды.
  mode: "production",
  module: {
    rules: [{ use: "ts-loader", exclude: /node_modules/ }],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new Dotenv({
      path: "./src/constants/.env",
    }),
  ],
};

export default config;
