import express from 'express'
import cors from 'cors'
import { createServer } from 'http';
import {Server} from 'socket.io'

var app =express()
app.use(cors())
var options={
    cors:true,
    origin:["*"],
}

const httpServer=createServer(app)

//socket connections
const io = new Server(httpServer,options)
io.on('connection', (socket) => {
    console.log(socket.id);
    socket.on('changed',(url,color)=>{
        socket.broadcast.emit('changed', url,color);
    })

})

httpServer.listen(9110,function(){
    console.log('Server started')
})