import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Navigate, Outlet } from 'react-router-dom'

const Layout = () => {

  if (!JSON.parse(localStorage.getItem('AccessKey'))) {
    return <Navigate to={'/login'} />
  }
  
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  )
}

export default Layout
