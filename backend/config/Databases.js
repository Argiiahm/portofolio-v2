import { Sequelize } from "sequelize";

const db = new Sequelize('lexpress','root','', {
    host: "localhost",
    dialect: "mysql"
});
    
export default db