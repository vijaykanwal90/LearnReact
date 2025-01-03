import React, { useContext , useEffect } from 'react'
import { CounterContext } from '../context/Counter'

const Button = () => {
    const counterState = useContext(CounterContext)
    // console.log(counterState)
    
  return (
    <div>
        <button onClick={ ()=>{
            // console.log("hello")
            counterState.setCount(counterState.count +1)}}>Increment</button>
        <button onClick={ ()=>{
            counterState.setCount(counterState.count -1)}}>Decrement</button>
            <button onClick={()=>{
              counterState.setCount(0)
            }}>Reset</button>
    </div>
  )
}

export default Button