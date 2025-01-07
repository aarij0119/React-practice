import React, { createContext, useState } from 'react';

const UserContext = createContext();
const UserProvider = ({ children }) => {
    const [name, setName] = useState('');

    if (name) {
        console.log("coming from context", name)
    }
    return (
        <UserContext.Provider value={{ name, setName }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext };
export default UserProvider;
