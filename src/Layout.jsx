import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Navigate, Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { UserAccessaction } from './redux/action/UserAccess.action'

const Layout = () => {

  const UserAccessKey = JSON.parse(localStorage.getItem('AccessKey'))
  const dispatch = useDispatch()
  
  if (!UserAccessKey) {
    return <Navigate to={'/login'} />
  }
  if (UserAccessKey) {
    dispatch(UserAccessaction(UserAccessKey))
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
