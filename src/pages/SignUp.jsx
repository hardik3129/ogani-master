import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {

    const OnSubmitRegisterUser = (e) => {
        e.preventDefault()
        const obj = {
            name : e.target.name.value,
            email : e.target.email.value,
            password : e.target.password.value,
        }
        
    }
    
  return (
    <>
        <div className="container">
            <div className="row align-items-center justify-content-center vh-100">
                <div className="col-sm-4">
                <Link to={''}><img src="img/logo.png" /></Link>
                <div className="signup-form">{/*sign up form*/}
                    <h2>New User Signup!</h2>
                    <form onSubmit={OnSubmitRegisterUser}>
                    <input type="text" name='name' placeholder="Name" />
                    <input type="email" name='email' placeholder="Email Address" />
                    <input type="password" name='password' placeholder="Password" />
                    <Link to={'/login'} className='d-block mb-2'>I have Account</Link>
                    <button type="submit" className="btn btn-default">Signup</button>
                    </form>
                </div>{/*/sign up form*/}
                </div>
            </div>
            </div>
    </>
  )
}

export default SignUp
