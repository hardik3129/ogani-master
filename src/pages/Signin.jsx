import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const OnSubmitLoginUser = (e) => {
        e.preventDefault()
        const obj = {
            
        }
    }
    
    return (
    <>
        <div className="container">
            <div className="row align-items-center justify-content-center vh-100">
                <div className="col-sm-4 col-sm-offset-1">
                <Link to={''}><img src="img/logo.png" /></Link>
                <div className="login-form">{/*login form*/}
                    <h2>Login to your account</h2>
                    <form onSubmit={OnSubmitLoginUser}>
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <span className='d-flex align-items-center'>
                        <input type="checkbox" className="me-2 my-0" /> 
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
