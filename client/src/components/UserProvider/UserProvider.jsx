import React from 'react';

export const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = React.useState({
    name: 'Jamie',
    games: [],
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
