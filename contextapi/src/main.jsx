import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CounterProvider } from './context/Counter.jsx'
import App from './App.jsx'
import { UserProvider } from './context/User.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterProvider >
      <UserProvider>
      <App />

      </UserProvider>

    </CounterProvider>
  </StrictMode>,
)
