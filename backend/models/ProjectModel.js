import { DataTypes } from "sequelize";
import db from "../config/Databases.js";

const Project = db.define('projects', {
    title:{
        type: DataTypes.STRING  
    },
    Image: {
        type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING
    },
    description: {
        type:  DataTypes.TEXT
    },
    stack: {
        type: DataTypes.JSON,
    },
    source: {
        type: DataTypes.STRING,
    },
}, {
    freezeTableName: true
});

export default Project;

db.sync()