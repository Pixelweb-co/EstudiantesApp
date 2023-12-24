import {Table,Model,Column,DataType} from "sequelize-typescript"

    @Table({
        timestamps:false,
        tableName:"Estudiantes",
    })

export class UserModel extends Model<UserModel>{
    @Column({
        allowNull:true,
        type:DataType.STRING
    })
    firstName!:string

    @Column({
        allowNull:true,
        type:DataType.STRING
    })
    lastName!:string

    @Column({
        //allowNull:true,
        type:DataType.STRING
    })
    age_student!:string

    @Column({
        //allowNull:true,
        type:DataType.STRING,
        defaultValue:Date.now()
    })
    date_register!:string

    @Column({
        allowNull:true,
        type:DataType.STRING
    })
    email!:string

    @Column({
        allowNull:true,
        type:DataType.STRING,
        defaultValue:"nofoto.jpg",
    })
    foto!:string
    
    @Column({
        allowNull:true,
        type:DataType.STRING
    })
    username!:string

    @Column({
        allowNull:true,
        type:DataType.STRING
    })
    password!:string

    @Column({
        allowNull:true,
        type:DataType.STRING
    })
    userRole!:string
}