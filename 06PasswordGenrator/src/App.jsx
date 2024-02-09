
// import './App.css'
import { useState, useCallback , useEffect , useRef} from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // ref hook
  const passwordRef = useRef(null)


  const passwordGenrator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy"

    if (numberAllowed) str += "012345678"

    if (characterAllowed) str += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)


    }

    setPassword(pass)

  }, [length, numberAllowed, characterAllowed,setPassword])

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);

  },[password])

    useEffect(()=>{

      passwordGenrator()

    },[length,numberAllowed,characterAllowed,passwordGenrator])



  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-12 mb-8 text-orange-500 bg-gray-600">
        Password Genrator 
        <div className="flex shadow rounded-lg overflow-hidden mb-4">

          <input type="text" value={password} className="outline-none w-full py-1 px-3 " placeholder="password" readOnly  ref={passwordRef} />


      <button  onClick={copyPassword}  className="outline-none bg-blue-700 hover:bg-blue-900 text-white px-3 py-0.5 shrink-0" >copy</button>


      </div>
      <div className="flex text-sm gap-x-2 ">
        <div className="flex items-center gap-x-1 mb-4">
          <input type="range" min={8} max={100} value={length} 
          className="cursor-pointer" 
          onChange={(e)=>{
setLength(e.target.value)
          }} />
          <label >Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1 mb-4">
          <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>{
                setNumberAllowed((prev) => !prev)
              }}
            />
          <label htmlFor="numberInput">Numbers </label>

        </div>

        <div className="flex items-center gap-x-1 mb-4">
          <input 
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={()=>{
                setCharacterAllowed((prev) => !prev)
              }}
            />
          <label htmlFor="characterInput">Characters </label>

        </div>
      </div>
      </div>

    </>
  )
}

export default App
