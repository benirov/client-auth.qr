import React from 'react';

const Login = () => {
    return ( <div className='container'>
    <div className=""></div>
        <div className="register-form-container">
        <form action="">
            <h1 className="form-title">
            Sign Up
            </h1>
            <div className="form-fields">
                <div className="form-field">
                    <input type="email" name="email" placeholder="Email" required />
                </div>
                <div className="form-field">
                    <input type="password" name="password" placeholder="Password" required minlength="8" maxlength="128" />
                </div>
            </div>
            <div className="form-buttons">
                <button className="button" type='button'>Sign up</button>
                <div className="divider">or</div>
                <p  style={{"textAlign": "center"}} className="form-title">Login with QR code</p>
                <div style={{"textAlign": "center"}}>
                    <img style={{"textAlign": "center"}} className='img-container-login' src='https://i.blogs.es/32ee74/qrcode-xataka/450_1000.png' alt='qr-code'></img>
                    <br />
                    <p  style={{"textAlign": "center", "fontSize": "12px"}} className="form-title">Scan this code to log in instantly.</p>
                </div>
            </div>
        </form>
    </div>
</div> );
}
 
export default Login;