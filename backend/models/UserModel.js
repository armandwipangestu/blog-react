import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define(
  "users",
  {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Users;

(async () => {
  await db.sync();
})();
