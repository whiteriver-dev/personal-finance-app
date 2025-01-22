const initialState = {
    user: null,
    loading: false,
    error: null,
};

const registerReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
}

export default registerReducer;