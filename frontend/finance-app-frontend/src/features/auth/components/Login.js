import ButtonPrimary from '../../reusable components/buttons/ButtonPrimary';
import './Login.scss';
import React from 'react';

function Login() {
    const handleClick = () => {
        console.log('Login button clicked');
    };
    return (
        <div className="login">
            <div className="login__container">
                <h1>Login</h1>
                <form>
                    <label htmlFor='email-input'>Email</label>
                    <input className='email-input' type="text"/>
                    <label htmlFor='password-input'>Password</label>
                    <input className='password-input' type="password"/>
                    <ButtonPrimary text='Login' onClick={handleClick}/>
                </form>
                <p>Need to create an account? <span>Sign Up</span></p>
            </div>
        </div>
    );
}



export default Login;