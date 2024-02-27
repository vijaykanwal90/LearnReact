import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from "./components/Home/Home.jsx"
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Github  , {githubInfoLoader} from './components/Github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {path:"",
//         element:<Home/>
//     },
//       {
//         path:'about',
//         element:<About/>
//       },
//       {
//         path:'contact',
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(

  createRoutesFromElements(<Route path='/' element={<Layout/>}>

    <Route path='/' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:id' element={<User/>}/>

    <Route
    // in loader we can even do api calls nowadays program doing loading of data or fetching api when the mouse hover fo rfast response
    loader={githubInfoLoader}
     path='github' 
     
     element={<Github/>}/>

  </Route>)
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App />
     */}
     <RouterProvider router={router} />
  </React.StrictMode>,
)
