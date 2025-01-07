import React, { useContext } from 'react'
import { UserContext } from './Context/User'



const App = () => {
  const user = useContext(UserContext);
  console.log(user)
  return (
    
    <div>App
      <h1>UserName</h1>
    </div>
  )
}

export default App