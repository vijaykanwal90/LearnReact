import React, { useEffect, useState } from 'react'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom'
const Github = () => {

  const data =   useLoaderData()
    // const [data ,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/vijaykanwal90')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img  className="" src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
   const response = await  fetch('https://api.github.com/users/vijaykanwal90')

    return response.json()
}