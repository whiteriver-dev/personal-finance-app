import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; //Backend URL

export const registerApi = async (userData) => {
    return axios.post(`${API_URL}/register`, userData); // POST request to Register endpoint
}

export const loginApi = async (credentials) => {
    return axios.post(`${API_URL}/login`, credentials); // POST request to Login endpoint
}