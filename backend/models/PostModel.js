import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Posts = db.define(
  "posts",
  {
    title: DataTypes.TEXT,
    tag: DataTypes.TEXT,
    description: DataTypes.TEXT,
    content: DataTypes.TEXT,
    thumbnail: DataTypes.TEXT,
  },
  {
    freezeTableName: true,
  }
);

export default Posts;

(async () => {
  await db.sync();
})();
