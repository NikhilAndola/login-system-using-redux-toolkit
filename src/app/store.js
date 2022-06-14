import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../feature/userSlice';

console.log(userReducer);

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: true,
});

export default store;
