import { RequestHandler } from "express"
import { UserModel } from "../models/user.model" 

export const getUser: RequestHandler = async (req, res) => {
    var idSt = req.params.id
    await UserModel.findByPk(idSt).then(data => {
        if(data) {

            return res.status(200).json({"result":"success", "data": data })
        }else{
            return res.status(401).json({"result":"error", "message": "Usuario / contraseña invalidos" })    
        }
    }).catch(error =>{
        return res.status(500).json({ "message": "Hubo un error", "error": error })
    })


}

export const list: RequestHandler = async (req, res) => {
    
        await UserModel.findAll().then(data => {
            if(data.length > 0) {

                return res.status(200).json({"result":"success", "data": data })
            }else{
                return res.status(401).json({"result":"error", "message": "Usuario / contraseña invalidos" })    
            }
        }).catch(error =>{
            return res.status(500).json({ "message": "Hubo un error", "error": error })
        })
        
}

export const create: RequestHandler = async (req, res) => {
    
    await UserModel.create({ ...req.body,roleUser:'student' }).then((data) => {
        return res.status(200).json({"result":"success", "message": "Usuario registrao" })
    }).catch((error) => {

        console.log(error)
        return res.status(500).json({"result":"error", "message": "Hubo un error", "error": error })

    })}

export const updateUser: RequestHandler= async (req,res) => {
    const { id } = req.params
    await UserModel.update({ ...req.body }, {where: { id: id }}).then((data) => {
        return res.status(200).json({"result":"success", "message": "Usuario actualizado" })
    }).catch((error) => {

        console.log(error)
        return res.status(500).json({"result":"error", "message": "Hubo un error", "error": error })

    })
}

export const LoginUser: RequestHandler = async (req, res) =>{
    
const { username, password } = req.body

const userHaveLogin = await UserModel.findAll({
    where:{username: username, password: password}
}).then((data) => {
    if(data.length > 0) {

        return res.status(200).json({"result":"success", "message": "Usuario logueado",user: data[0]});
    }else{
        return res.status(200).json({"result":"error", "message": "Usuario / contraseña invalidos" })    
    }
}).catch((error) => {
    return res.status(500).json({"result":"error", "message": "Hubo un error", "error": error })
})

}

export const SignupUser: RequestHandler = async (req, res)=>{
    await UserModel.create({ ...req.body }).then((data) => {
        return res.status(200).json({"result":"success", "message": "Usuario registrado" })

    }).catch((error) => {

        return res.status(200).json({"result":"error", "message": "hubo un error" })

    })
}

export const deleteUser: RequestHandler = async (req, res) => {
    const { id } = req.params
    try {
        await UserModel.destroy({ where: { id } })
        return res.status(200).json({"result":"success", "message": "Usuario eliminado." })
    } catch (error) {
        return res.status(500).json({"result":"success", "message": "Hubo un error", "error": error })
    }
}

