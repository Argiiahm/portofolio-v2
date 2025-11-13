import { DataTypes } from "sequelize";
import db from "../config/Databases.js";

const Articles = db.define('articles',{
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    author: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Articles

db.sync()