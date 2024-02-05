import { useState } from 'react'



function App() {
       const [counter , setCounter ] = useState(12)

      function addValue(){
        if(counter <20){
          setCounter (counter +1)


        }
        
      }

      function removeValue(){
        if(counter >0){
          setCounter (counter -1)


        }
      }

  return (
    <>
    <div >
      <h2>counter : {counter}</h2>
      <button onClick={addValue}>Add value  : {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value : {counter}</button>
      </div>
    </>
  )
}

export default App
