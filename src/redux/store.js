import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import countriesReducer from './countrySlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    countries: countriesReducer,
  },
});

export default store;