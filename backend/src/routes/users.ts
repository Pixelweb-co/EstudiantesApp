import { Router } from 'express'
import { list,create, deleteUser,LoginUser,getUser,updateUser } from '../controllers/user.controller'


export const userRouter = Router()

userRouter.get('/', list)
userRouter.get('/get/:id', getUser)
userRouter.post('/',create)
userRouter.delete('/:id',deleteUser)
userRouter.post('/auth',LoginUser)
userRouter.post('/signup',create) 
userRouter.put('/:id',updateUser) 

export default userRouter