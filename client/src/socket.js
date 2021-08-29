import { io } from "socket.io-client"

let socket=null

function createconnection(){
    socket= io('http://localhost:9110/')
}

export  {socket,createconnection}