import { useContext, useState } from 'react'
import Button from './components/Button'
import './App.css'
import { CounterContext } from './context/Counter'

function App() {
  const counterState = useContext(CounterContext)

  return (
    <>
      <h1>The count is {counterState.count}</h1>
      <Button/>
      <Button/>
      <Button/>
      
    </>
  )
}

export default App
