import React, { useContext } from 'react';
import authContext from '../context/auth/authContext';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import Alert from '../components/Alert';
import * as Yup from 'yup';


const Register = () => {

    //acceder al state
  const AuthContext = useContext(authContext);

  const {
    userRegister, 
    message
  } = AuthContext;


  //formulario y validacion con formik
  const formik = useFormik({
    initialValues : {
    username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
              .required("the username is required"),
      email: Yup.string()
              .email("The email is not valid")
              .required("Email  is required"),
    password: Yup.string()
              .required("The password is required")
              .min(6, "password must be to less six letters"),
    }),
    onSubmit: (valores, { resetForm }) => {
        userRegister(valores);
        resetForm();
    }
});
    return ( 
        <div className='container'>
            <div class=""></div>
                <div class="register-form-container">
                    <form 
                        onSubmit={formik.handleSubmit}
                    >
                        <h1 class="form-title">
                        Sign up
                        </h1>
                        { message && (<Alert />)}
                        <div class="form-fields">
                            <div class="form-field">
                                <input 
                                    type="text" 
                                    name="username" 
                                    placeholder="Username" 
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                { formik.touched.username && formik.errors.username ? (
                                    <div className="message-error">
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.username}</p>
                                        </div>
                                    ) : null
                                }
                            </div>
                            <div class="form-field">
                                <input 
                                    type="email" 
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
                            <div class="form-field">
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
                                { formik.touched.password && formik.errors.email ? (
                                    <div className="message-error">
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.password}</p>
                                        </div>
                                    ) : null
                                }
                            </div>
                        </div>
                        <div class="form-buttons">
                            <input class="button" type="submit" value="Sign up "/>
                        </div>
                    </form>

                    <br />
                    <br />
                    <div className='text-center'><Link  to={`/login`} >Have an account ? Sign up</Link></div>
            </div>
        </div>
     );
}
 
export default Register;