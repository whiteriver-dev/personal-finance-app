import { loginApi, registerApi } from '../../services/api';

export const register = (userData) => async (dispatch) => {
    try {
        const response = await registerApi(userData);
        dispatch({
            type: 'REGISTER_SUCCESS',
            payload: response.data })
    } catch (error) {
        dispatch({
            type: 'REGISTER_FAILURE',
            payload: error.message })
    }
}

export const login = (credentials) => async (dispatch) => {
    try {
        const response = await loginApi(credentials);
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: response.data })
    } catch (error) {
        console.log(error);
    }
}