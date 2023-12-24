import express,{urlencoded} from 'express'
import cors from 'cors'
import { userRouter } from './routes/users'
import morgan from 'morgan'
import connectionDB from './connection/connection'

const app = express()

app.use(express.json())
app.use(cors())
app.use(urlencoded({ extended:false}))

app.use('/api/users', userRouter)
app.get('/ping',(_req,res)=>{
    console.log("pong")
    res.send("pong")

})

//app.use(tokenGuard())
app.use(morgan('dev'))


//connection
connectionDB()



//configuration
app.set("port",process.env.port || 2023)

export default app