import axios from 'axios';

export const API_URL = 'http://localhost:8080/api'; //Backend URL

export const registerApi = async (userData) => {
    return axios.post(`http://127.0.0.1:8000/api/auth/register/`, userData); // POST request to Register endpoint
}

export const loginApi = async (credentials) => {
    return axios.post(`http://127.0.0.1:8000/api/auth/login/`, credentials); // POST request to Login endpoint
}