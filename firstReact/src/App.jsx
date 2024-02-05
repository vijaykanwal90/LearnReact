import { useState } from 'react'
import First from "./first"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <First/>
    </>
  )
}

export default App
