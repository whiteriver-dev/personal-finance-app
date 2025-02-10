const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    loading: false,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null,
            };
        case 'REGISTER_FAILURE':
            return {
                ...state,
                user: null,
                loading: false,
                error: action.payload,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                token: action.payload.token,
                loading: false,
                error: null,
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                error: action.payload,
            };
        default:
            return state;

    
    }
}


export default authReducer;