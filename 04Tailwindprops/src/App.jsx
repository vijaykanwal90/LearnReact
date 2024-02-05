import { useState } from 'react'
import Card from "./components/Card"
import './App.css'

function App() {
  const newArr = [1,2,3 ]
  

  return (
    <>
     <h2 className='bg-green-500 text-black p-4 m-6 text-2xl '>This is tailwind test</h2>
     <Card brand="Apple" btnText="click Me"/>
     <Card brand="HP" btnText="visit me"  />
     <Card brand="Dell" />


    </>
  )
}

export default App
