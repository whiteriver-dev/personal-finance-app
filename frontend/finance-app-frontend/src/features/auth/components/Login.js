import React, { useState } from 'react';
import './Login.scss';
import ButtonPrimary from '../../reusable components/buttons/ButtonPrimary';
import { PulseLoader } from 'react-spinners';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authActions';

function Login() {
    const [credentials, setCredentials] = useState({ email: '', password: ''});
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError({}); // Clear the errors
        setIsLoading(true); 

        try {
            console.log('Logging in with credentials:', credentials);
            await dispatch(login({credentials}));
            window.location.href = "/register";// Redirect to the dashboard

            console.log('Login successful');
        } catch (error) {
            setError(error);
            console.error('Login failed:', error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="login">
            <div className="login__container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}> 
                    <label htmlFor='email-input'>Email{error.email && <span className='error'>{error.email}</span>}</label>
                    <input
                    className={`email-input ${error.email ? 'error' : ''}`}
                    type="text"
                    value={credentials.email}
                    onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                    />
                    <label htmlFor='password-input'>Password{error.password && <span className='error'>{error.password}</span>}</label>
                    <input
                    className={`password-input ${error.password ? 'error' : ''}`}
                    type="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                    />
                    <ButtonPrimary
                        text={
                            isLoading ? (
                            <PulseLoader color="white" size={6}/>
                            ) : (
                                'Login'
                            )
                        } 
                        onClick={handleSubmit}
                        disabled={isLoading}/>
                </form>
            </div>
        </div>
    );
}

<p>Need to create an account? <span>Sign Up</span></p>

export default Login;

