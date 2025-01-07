import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import User from './Context/User.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <User>
    <App />
    </User>
  </StrictMode>,
)
