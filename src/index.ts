import dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/.env` });

console.log(`Message: ${process.env.MESSAGE}`);
