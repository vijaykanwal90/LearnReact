import React, { useContext, useState} from 'react'
// import { UserContext } from '../context/User'
import {  UserContext } from '../context/User'

const Profile = () => {
    const user = useContext(UserContext);
    const {isLoggedIn,login, logout} = user;
    // console.log("this is user:" + user)
    // console.log(isLoggedIn)
    // console.log(login)
    
  return (

    <div>Profile
        {isLoggedIn?(<> <p>You are logged in </p>
            <button onClick={logout}>Logout</button></>):(<> <p>Please Loggin </p>
        <button onClick={login} >Login</button>
        </>)}
       
    </div>
  )
}

export default Profile