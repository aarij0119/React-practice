import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount, decrementByAmount } from "./Features/CounterSlice"
// import React, { useContext } from 'react'
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import Login from './Context/Components/Login'


const App = () => {

  const [data, setdata] = useState('');
  useEffect(() => {
    fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random', {
      method: 'Get'
    })
      .then((response) => {
        response.json()
          .then((data) => {
            console.log(data)
            setdata(data.data)
          })
      })
  }, [])

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [number, setNUmber] = useState(0);
  const [number1, setNUmber1] = useState(0);
  //
  const [count2, setCount2] = useState(1)

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(number));
  };
  const handleIncrementByAmount1 = () => {
    dispatch(decrementByAmount(number1))
  }
  const ClickHandler = () => {
    setCount2(count2 * 2)
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
      </div><br />
      <h4>Increament</h4>
      <input onChange={(e) => setNUmber(e.target.value)} type="text" /><br />
      <h4>Decreament</h4>
      <input onChange={(e) => setNUmber1(e.target.value)} type="text" /><br /><br />

      <button onClick={ClickHandler}>
        Click
      </button>
      <h4>Value is : {count2}</h4>
      <h1>Fetching an API</h1>
      {data ? (
        <div>
          <h1>{data.content}</h1>
          <h4>—{data.author}</h4>
        </div>
      ) : (
        <div>
          <h5>Loading...</h5>
          </div>
      )}

    </div>
  )
}

export default App