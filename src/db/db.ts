import {
  dbHost,
  dbName,
  dbPassword,
  dbPort,
  dbUser,
} from "../constants/constants";
import { Client } from "pg";

export const db = new Client({
  user: dbUser,
  password: dbPassword,
  host: dbHost,
  database: dbName,
  port: dbPort,
});
