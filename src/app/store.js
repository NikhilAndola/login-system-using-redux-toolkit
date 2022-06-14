import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from '../feature/userSlice';

const rootReducer = combineReducers({ user: userReducer });

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
