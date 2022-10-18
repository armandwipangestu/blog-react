import { Sequelize } from "sequelize";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const database = process.env.DB_NAME;
const host = process.env.DB_HOST;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const vendor = process.env.DB_VENDOR;

const db = new Sequelize(database, username, password, {
  host,
  dialect: vendor,
});

export default db;
