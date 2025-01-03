import { useContext, useEffect, useState } from 'react'
import Button from './components/Button'
import './App.css'
import { CounterContext } from './context/Counter'
import Form from './components/Form'
import Profile from './components/Profile'

function App() {
  const counterState = useContext(CounterContext)
  
  
  return (
    <>
      <h1>The count is {counterState.count}</h1>
      <Button/>
      <Button/>
      <Button/>
      <Form/>
      <Profile/>
    </>
  )
}

export default App
