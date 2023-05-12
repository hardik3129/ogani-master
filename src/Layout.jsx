import React, { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Navigate, Outlet } from 'react-router-dom'

const Layout = () => {

  const UserAccessKey = localStorage.getItem('AccessKey')
  
  if (!UserAccessKey) {
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
