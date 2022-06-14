import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import { Login } from './Login';
import { Logout } from './Logout';
import { selectUser } from './feature/userSlice';

export default function App() {
  const user = useSelector(selectUser);
  console.log(user);
  return <>{user ? <Logout /> : <Login />}</>;
}
