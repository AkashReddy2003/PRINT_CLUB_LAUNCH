import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyContextProvider } from './context/GlobalContext.jsx'
import { ToastContainer, toast } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css'; 

createRoot(document.getElementById('root')).render(
  <MyContextProvider>
  <StrictMode>
    <App />
    <ToastContainer floatingTime={2000} />
  </StrictMode>
  </MyContextProvider>,
)
