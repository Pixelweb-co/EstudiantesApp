import { RequestHandler } from "express"
import { Sequelize } from 'sequelize-typescript';
import {UserModel} from "../models/user.model"

const connection = new Sequelize({
    dialect:"mysql",
    host:"localhost",
    username:"root",
    password:"rd#T453%",
    database:"usersystem",
    logging:false,
    models:[UserModel]
})


