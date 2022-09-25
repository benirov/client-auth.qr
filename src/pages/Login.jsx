import React, {useState, useRef, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import authContext from '../context/auth/authContext';
import QRCode from "react-qr-code";
//import ConectionSockect  from '../services/sockect'
import { useFormik } from 'formik';
import Alert from '../components/Alert';
import Dashboard from './Dashboard';
import * as Yup from 'yup';

const Login = () => {
    //acceder al state
    const AuthContext = useContext(authContext);

    const {
        sockect,
        message,
        loginUser,
        authenticate,
        authorized
      } = AuthContext;


      useEffect(() => {

      }, [sockect, authorized, authenticate]);

      //formulario y validacion con formik
  const formik = useFormik({
        initialValues : {
        email: '',
        password: '',
        },
            validationSchema: Yup.object({
            email: Yup.string()
                    .email("The email is not valid")
                    .required("Email  is required"),
            password: Yup.string()
                    .required("The password is required")
                    .min(6, "password must be to less six letters"),
            }),
            onSubmit: (valores, { resetForm }) => {
                loginUser(valores);
            }
    });

    if(authenticate) return <Dashboard />
    


    return ( <div className='container'>
    <div className=""></div>
        <div className="register-form-container">
        <form 
            onSubmit={formik.handleSubmit}
        >
            <h1 className="form-title">
            Sign in
            </h1>
            { message && (<Alert />)}
            <div className="form-fields">
                <div className="form-field">
                    <input type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    { formik.touched.email && formik.errors.email ? (
                        <div className="message-error">
                            <p className="font-bold">Error</p>
                            <p>{formik.errors.email}</p>
                        </div>
                        ) : null
                    }
                </div>
                <div className="form-field">
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        minLength="8" 
                        maxLength="128" 
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                     { formik.touched.password && formik.errors.password ? (
                        <div className="message-error">
                            <p className="font-bold">Error</p>
                            <p>{formik.errors.password}</p>
                        </div>
                        ) : null
                    }
                </div>
            </div>

            {authorized && (<div><p  style={{"textAlign": "center"}} className="form-title">Authorized, redirecting in three seconds</p></div>)}
            <div className="form-buttons">
                <input className="button" type='submit' value="Sign up"/>
                <div className="divider">or</div>
                <p  style={{"textAlign": "center"}} className="form-title">Sign in with QR code</p>
                <div style={{"textAlign": "center"}}>
                        <QRCode size={100} value={sockect} />
                    <br />
                    <p  style={{"textAlign": "center", "fontSize": "12px"}} className="form-title">Scan this code to sign in instantly.</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className='text-center'><Link  to={`/register`} >Don't Have an account ? Sign in</Link></div>
                </div>
            </div>
        </form>
    </div>
</div> );
}
 
export default Login;