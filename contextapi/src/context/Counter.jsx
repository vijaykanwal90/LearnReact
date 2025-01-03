import { createContext , useState , useEffect} from "react"
export const CounterContext = createContext(null)

export const CounterProvider = (props) =>{
    // const [count,setCount] = useState(0);
    const [count, setCount] = useState(() => {
        const storedCount = localStorage.getItem('count');
        return storedCount !== null ? parseInt(storedCount) : 0;
      });
    useEffect (()=>{
        localStorage.setItem('count',JSON.stringify(count))
      },[count])
    // useEffect(()=>{
    //     setCount(JSON.parse(localStorage.getItem('count')));
    // },[])
    return (
        <CounterContext.Provider value={{count,setCount}}>
            {props.children}

        </CounterContext.Provider>
    )
}