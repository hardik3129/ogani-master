import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { toast } from 'react-toastify'

const Login = () => {

    const navigate = useNavigate()

    const OnSubmitLoginUser = async (e) => {
        e.preventDefault()
        const {email, password} = {
            email : e.target.email.value,
            password : e.target.password.value,
        }
        try {
            const res = await signInWithEmailAndPassword(auth, email, password)
            localStorage.setItem('AccessKey',JSON.stringify(res.user.accessToken))
        } catch (error) {
            toast.error(error.message)
        }
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
