import React from 'react'
import Header from './components/Header/Header'

import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
    <Header/>

    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default Layout

// layout changes at outlet area used to keep other data same and change it only