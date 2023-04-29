import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const OnSubmitLoginUser = (e) => {
        e.preventDefault()
        localStorage.setItem('AccessKey','abcd')
        navigate('/')
    }
    
    return (
    <>
        <div className="container">
            <div className="row align-items-center justify-content-center vh-100">
                <div className="col-sm-4 col-sm-offset-1">
                <Link to={''}><img src="img/logo.png" alt='' /></Link>
                <div className="login-form">{/*login form*/}
                    <h2>Login to your account</h2>
                    <form onSubmit={OnSubmitLoginUser}>
                    <input type="email" placeholder="Email Address" name='email' />
                    <input type="password" placeholder="Password" name='password' />
                    <span className='d-flex align-items-center'>
                        <input type="checkbox" className="me-2 my-0 checkmark" name='signin' /> 
                        Keep me signed in
                    </span>
                    <span className='d-flex align-items-center'>
                        <Link to={'/signup'}>Create An Account</Link>
                    </span>
                    <button type="submit" className="btn btn-default">Login</button>
                    </form>
                </div>{/*/login form*/}
                </div>
            </div>
            </div>

    </>
    )
}

export default Login
