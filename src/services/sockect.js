import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4000";


  
const ConectionSockect = async () => {

    return new Promise((resolve,reject) => {
        const socket =  socketIOClient(ENDPOINT);
        socket.on("connect", data => {   
    
            socket.emit('syncClient', { 
                "userAgent": navigator.userAgent,
                "appCodeName": navigator.appCodeName,
                "appName": navigator.appName,
                "platform": navigator.platform,
            });
            
            /*socket.on('SyncClient', (data) => {
                console.log("data SyncClient", data);
            });*/

            
            resolve({sockectid: socket.id, sockecObject: socket});
        });
        
     });
    
    
}

export default ConectionSockect;