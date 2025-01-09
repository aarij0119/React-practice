import React, { useState } from "react"
import {useSelector, useDispatch } from "react-redux"
import { increment,decrement,incrementByAmount,decrementByAmount } from "./Features/CounterSlice"
// import React, { useContext } from 'react'
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import Login from './Context/Components/Login'


const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [number,setNUmber] = useState(0);
  const [number1,setNUmber1] = useState(0);
  const handleIncrementByAmount = () => {
     dispatch(incrementByAmount(number));  
      };
      const handleIncrementByAmount1 = () =>{
        dispatch(decrementByAmount(number1))
      }
  return (
    <div>
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>{' '}
      <span>{count}</span>{' '}
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>{' '}
      <button onClick={handleIncrementByAmount} >ByNumber</button>{' '}
      <button onClick={handleIncrementByAmount1} >DecByNumber</button>
    </div><br/>
    <h4>Increament</h4>
    <input onChange={(e)=>setNUmber(e.target.value)} type="text" /><br/>
    <h4>Decreament</h4>
    <input onChange={(e)=>setNUmber1(e.target.value)} type="text" />
  </div>
  )
}

export default App