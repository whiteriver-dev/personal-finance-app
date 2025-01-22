import React, { useState } from 'react';
import './Register.scss';
import ButtonPrimary from '../../reusable components/buttons/ButtonPrimary';
import { useDispatch } from 'react-redux';
import { register } from '../redux/authActions';



function Register() {
    const [formData, setFormData] = useState({ name: '', email: '', password: ''});
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};

        if (!formData.name) {
            validationErrors.name = 'Name is required';
        }

        if (!formData.password) {
            validationErrors.password = 'Password is required';
        }

        if (!formData.email) {
            validationErrors.email = 'Email is required';
        } 
        else if (!validateEmail(formData.email)) {   
            validationErrors.email = 'Email is invalid';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({}); // Clear the errors
        dispatch(register(formData)); // Dispatch the register action with the form data
    };
    return (
        <div className="register">
            <div className="register__container">
                <h1>Sign Up</h1>
                <form>
                    <label htmlFor='name-input'>Name</label>
                    <input
                     className='name-input'
                     type="text"
                     value={formData.name}
                     onChange={(e) => setFormData({...formData, name: e.target.value})}
                     />
                     {errors.name && <p className='error'>{errors.name}</p>}
                    <label htmlFor='email-input'>Email</label>
                    <input
                     className='email-input'
                     type="text"
                     value={formData.email}
                     onChange={(e) => setFormData({...formData, email: e.target.value})}
                     />
                     {errors.email && <p className='error'>{errors.email}</p>}
                    <label htmlFor='createpassword-input'>Create Password</label>
                    <input
                     className='createpassword-input'
                     type="password"
                     value={formData.password}
                     onChange={(e) => setFormData({...formData, password: e.target.value})}
                     />
                     {errors.password && <p className='error'>{errors.password}</p>}
                    <ButtonPrimary text='Create Account' onClick={handleSubmit}/>
                </form>
                <p>Already have an account? <span>Login</span></p>
            </div>
        </div>
    );
}



export default Register;