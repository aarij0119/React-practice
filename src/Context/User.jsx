import React, { createContext, useState } from 'react'

const UserContext = createContext();
const UserProvider = ({children}) => {
    const [username, setUsername] = useState('')
    if(username) return console.log("Coming from Cntext", username)
  return (
    <UserContext.Provider value={{username,setUsername}}>
        {children}
    </UserContext.Provider>
  )
}

export {UserProvider, UserContext}