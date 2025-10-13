import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Routing from './poc/Routing'
import Context from './poc/Context.jsx'
import ThemeManager from './poc/themes/ThemeManager.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      
      {/* <Routing /> */}
      {/* <Context /> */}
      {/* <ThemeManager/> */}

    </BrowserRouter>
  </StrictMode>,
)
