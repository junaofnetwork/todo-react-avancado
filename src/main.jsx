import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home/'
import Componentes from './pages/componetes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Componentes />
    
    <Home />
  </StrictMode>,
)
