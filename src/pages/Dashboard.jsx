import React, {useState, useRef, useContext, useEffect} from 'react';
import authContext from '../context/auth/authContext';

//import QRCode from 'qrcode';
import QrReader from 'react-qr-reader';
import Login from './Login';
import socketIOClient from "socket.io-client";
const ENDPOINT = process.env.REACT_APP_BACKENDURL;

const socket =  socketIOClient(ENDPOINT);

const Dashboard = () => {

    //acceder al state
  const AuthContext = useContext(authContext);

    const {
        authenticate, 
        setSockect,
        infopermission,
        getInfoPermission,
        setPermission,
        userAuthorized,
        autenticateUser
      } = AuthContext;

    
    const [qrscanner, setQrScanner] = useState(false);
    

    const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on('connect', () => {
      setSockect(socket.id);
    });
    
    socket.emit('syncClient', { 
        "userAgent": navigator.userAgent,
        "appCodeName": navigator.appCodeName,
        "appName": navigator.appName,
        "platform": navigator.platform,
    });

    socket.on('SyncClient', (data) => {
        
        localStorage.setItem("token", data);
        userAuthorized();
        setTimeout(() => {
            autenticateUser();
        },3000)
        
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });
  }, []);

    if(!authenticate) return <Login />


    const handleScanWebCam = (result) => {
        if (result){
            getInfoPermission(result);
            setQrScanner(false);
            //setScanResultWebCam(result);
        }
       }

    const handleErrorWebCam = (error) => {
    }

    const buttonSetPermission = () => {
        setPermission(infopermission.idSockect);
    }


    return ( 
        <div className='container'>
            <div className=""></div>
                <div className="container-dashboard">
                    <h1 className="form-title">
                        You're Log In
                    </h1>
                    <br />
                    <br />
                    <p className="form-title-login">
                        click on the icon for Log In 
                    </p>
                    {
                        (infopermission && !qrscanner) && (
                            <div>
                                <label className="form-title-login">appCodeName: <b>{infopermission.appCodeName}</b></label><br />
                                <label className="form-title-login">platform: <b>{infopermission.platform}</b></label><br />
                                <label className="form-title-login">userAgent: <b>{infopermission.userAgent}</b></label><br /><br />
                                <div className='form-buttons'>
                                    <input class="button" onClick={() =>  { buttonSetPermission()}} type="button" value="Autorize" />
                                </div><br />
                            </div>
                        )
                    }
                    {  (qrscanner && !infopermission) && (<><div><p onClick={() =>  { setQrScanner(false)}} className="form-title-login touch">Cancel</p></div><QrReader
                         delay={300}
                         style={{width: '100%'}}
                         onError={handleErrorWebCam}
                         onScan={handleScanWebCam}
                         /></>)


                    }
                    <div className=''>
                    <img className='img-container' onClick={() =>  { setQrScanner(true)}} src='/assets/codigo-qr.png' alt='qr-code'></img>
                    </div>
                </div>
        </div>
     );
}
 
export default Dashboard;