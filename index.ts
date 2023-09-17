// import statments
import express from "express"
import dotenv from "dotenv"
// config
dotenv.config()
const port:number = parseInt(process.env.PORT!) || 5000



// server init
const server=express()


// server middlewares



//server routes or services





//server start
server.listen(port,()=> console.log(`server running on port ${port}`))
