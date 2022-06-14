import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './feature/userSlice';

export const Logout = () => {
  // const name = user || 'guest';
  // const userName = useSelector((state) => state.user.user.name);
  // console.log('out', userName);

  const dispatch = useDispatch();
  return (
    <div className="logout">
      <h2>Welcome user</h2>
      <button onClick={() => dispatch(logout(null))}>Logout</button>
    </div>
  );
};
