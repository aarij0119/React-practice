import React, { useContext } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './Context/Components/Login'


const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} ></Route>
      </Routes>
    </Router>
  )
}

export default App