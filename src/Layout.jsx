import React, { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Layout = () => {

  const UserAccessKey = localStorage.getItem('AccessKey')
  const getAccessToken = useSelector((key) => key.UserAccessreducer.AccessToken)

  const location = useLocation()

  useEffect(() => {
    localStorage.setItem('AccessKey',getAccessToken)
  },[location])
  
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
