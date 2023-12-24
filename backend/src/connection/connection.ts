import { Sequelize } from 'sequelize-typescript';
import {UserModel} from "../models/user.model"


const connection = new Sequelize({
    dialect:"mysql",
    host:"192.168.20.20",
        //host:"localhost",
    port:3306,
    username:"root",
    password:"rd#T453%",
    database:"usersystem",
    logging:false,
    models:[UserModel]
})

async function connectionDB(): Promise<void> {
    try {
        await connection.sync();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    } 
}

export default connectionDB;
