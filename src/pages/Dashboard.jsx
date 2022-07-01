import React, {useState, useRef} from 'react';
//import QRCode from 'qrcode';
import QrReader from 'react-qr-reader';

const Dashboard = () => {

    const [scanResultWebCam, setScanResultWebCam] =  useState('');
    const [scanResultFile, setScanResultFile] = useState('');
    const handleErrorFile = (error) => {
        console.log(error);
    }
  const handleScanFile = (result) => {
        if (result) {
            setScanResultFile(result);
        }
    }

    const handleScanWebCam = (result) => {
        if (result){
            setScanResultWebCam(result);
        }
       }

       const handleErrorWebCam = (error) => {
        console.log(error);
      }


    return ( 
        <div className='container'>
            <div class=""></div>
                <div class="container-dashboard">
                    <h1 class="form-title">
                        You're Log In
                    </h1>
                    <br />
                    <br />
                    <p class="form-title-login">
                        click on the icon for Log In
                    </p>
                    <QrReader
                         delay={300}
                         style={{width: '100%'}}
                         onError={handleErrorWebCam}
                         onScan={handleScanWebCam}
                         />
                    <div className=''>
                    <img className='img-container' src='/assets/codigo-qr.png' alt='qr-code'></img>
                    </div>
                </div>
        </div>
     );
}
 
export default Dashboard;