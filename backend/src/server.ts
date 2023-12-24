import app from './app'


app.listen(app.get("port"),() =>{
    console.log(`APi server iniciado en puerto ${(app.get("port"))}`)
})