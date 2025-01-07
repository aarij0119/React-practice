import React, { useContext, useState } from 'react'
import { UserContext } from '../User'

const Login = () => {
 const data =  useContext(UserContext);

 const [username,setUsername] = useState('');
 const submithandler = (e) =>{
    e.preventDefault();
    if(username){
        data.setName(username)
    }
    console.log(username)
    console.log("Done");
    setUsername('')
 }
  return (
    <div>Login
        <input onChange={(e)=>setUsername(e.target.value) } type='text'></input>
        <button onClick={submithandler}>Submit</button>
    </div>
  )
}

export default Login