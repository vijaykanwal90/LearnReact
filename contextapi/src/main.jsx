import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CounterProvider } from './context/Counter.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterProvider >
    <App />

    </CounterProvider>
  </StrictMode>,
)
