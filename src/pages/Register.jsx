import React from 'react';

const Register = () => {
    return ( 
        <div className='container'>
            <div class=""></div>
                <div class="register-form-container">
                    <form action="">
                        <h1 class="form-title">
                        Registration
                        </h1>
                        <div class="form-fields">
                            <div class="form-field">
                                <input type="text" name="username" placeholder="Username" required pattern="[a-zA-Z]+" />
                            </div>
                            <div class="form-field">
                                <input type="email" name="email" placeholder="Email" required />
                            </div>
                            <div class="form-field">
                                <input type="password" name="password" placeholder="Password" required minlength="8" maxlength="128" />
                            </div>
                        </div>
                        <div class="form-buttons">
                            <button class="button" type='button'>Sign up</button>
                        </div>
                    </form>
            </div>
        </div>
     );
}
 
export default Register;