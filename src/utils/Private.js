import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Private = () => {

    if (!localStorage.getItem('AccessKey')) {
        return <Navigate to={'/login'} />
    }
    
  return (
    <>
        <Outlet />
    </>
  )
}

export default Private
