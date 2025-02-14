import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <div className='flex justify-center items-center h-screen w-screen'>
    <StrictMode>
    <App />
  </StrictMode>
  </div>,
)
