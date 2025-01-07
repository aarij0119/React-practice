import React, { createContext } from 'react';

const UserContext = createContext();
const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={"Aarij"}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext};
export default UserProvider;
