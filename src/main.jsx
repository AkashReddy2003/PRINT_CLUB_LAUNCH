import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyContextProvider } from './context/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(
  <MyContextProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </MyContextProvider>,
)
