import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4000";


const ConectionSockect = () => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("connection", data => {
        console.log('data', data);
    });
    
}

export default ConectionSockect;