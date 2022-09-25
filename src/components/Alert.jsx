import React, { useContext } from 'react';

import authContext from '../context/auth/authContext';


const Alert = () => {

    //acceder al state
  const AuthContext = useContext(authContext);

  const { message } = AuthContext;

    return ( 
        <div className="alert-div">
            {message}
        </div>
     );
}
 
export default Alert;