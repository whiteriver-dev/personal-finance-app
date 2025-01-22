import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../auth/redux/authReducer';

const store = configureStore({
  reducer: {
    auth: authReducer, 
    // Add more reducers if needed
  },
});

export default store;
