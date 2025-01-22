import ButtonPrimary from '../../reusable components/buttons/ButtonPrimary';
import './Register.scss';
import React from 'react';

function Register() {
    const handleClick = () => {
        console.log('Register button clicked');
    };
    return (
        <div className="register">
            <div className="register__container">
                <h1>Sign Up</h1>
                <form>
                    <label htmlFor='name-input'>Name</label>
                    <input className='name-input' type="text"/>
                    <label htmlFor='email-input'>Email</label>
                    <input className='email-input' type="text"/>
                    <label htmlFor='createpassword-input'>Create Password</label>
                    <input className='createpassword-input' type="password"/>
                    <ButtonPrimary text='Create Account' onClick={handleClick}/>
                </form>
                <p>Already have an account? <span>Login</span></p>
            </div>
        </div>
    );
}



export default Register;