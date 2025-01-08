import React, { useContext, useState } from 'react';
import { UserContext } from '../User';



const Login = () => {
  const {setUsername} = useContext(UserContext);
  const [name,setName] = useState('');
  const Clickedhandler = (e) =>{
    e.preventDefault()
    if(name){
      
      console.log('set')
      setUsername(name)
      console.log("Done")
    }
  }
  return (
    <>
      <div>Login</div>
      <input onChange={(e)=> setName(e.target.value)} value={name} type="text" />
      <button onClick={Clickedhandler}>Submit</button>
    </>
  );
};

export default Login;
