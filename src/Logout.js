import * as React from 'react';

export const Logout = ({ user }) => {
  const name = user || 'guest';

  return (
    <div className="logout">
      <h2>Welcome {name}</h2>
      <button>Logout</button>
    </div>
  );
};
