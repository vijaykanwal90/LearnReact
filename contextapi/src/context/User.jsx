import { createContext , useContext, useEffect , useState} from "react";

export const UserContext = createContext(
    {
    isLoggedIn:false,
    // login :()=>{},
    // logout :()=>{}

}
);

// export const User = useContext(UserContext);

export const UserProvider = (props)=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [token,setToken]  = useState(true);
    useEffect (()=>{
        if(localStorage.getItem('token')==='true'){
            setIsLoggedIn(true);
        }
        else {
            setIsLoggedIn(false)
        }
    },[])
    // useEffect(()=>{
    //     // console.log("useEffect")
    //     localStorage.setItem('token',token)

    // },[])
    const login = ()=>{
        console.log("login clicked")
        setIsLoggedIn(true)
        localStorage.setItem('token','true')
    }
    const logout = ()=>{
        setIsLoggedIn(false)
        console.log("logout clicked")
        
        localStorage.setItem('token','false')

    }
   
    return (
        <UserContext.Provider value={{isLoggedIn, login, logout}} >
        {props.children}
        </UserContext.Provider>
    )
}
// export const UserAuth = () =>useContext(UserContext)