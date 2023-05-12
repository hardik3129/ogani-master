import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { RingLoader } from 'react-spinners'
import { UserAccessaction } from '../redux/action/UserAccess.action'

const Login = () => {

    const [Loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const OnSubmitLoginUser = async (e) => {
        e.preventDefault()
        setLoading(true)
        const {email, password} = {
            email : e.target.email.value,
            password : e.target.password.value,
        }
        try {
            const res = await signInWithEmailAndPassword(auth, email, password)
            localStorage.setItem('AccessKey',JSON.stringify(res.user.uid))
            dispatch(UserAccessaction(res.user.uid))
        } catch (error) {
            toast.error(error.message)
        }
        setLoading(false)
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
                    {Loading === true ?
                    <button type="button" className="btn btn-default">
                        <RingLoader color="#fff" loading={Loading} size={25} />
                    </button> :
                    <button type="submit" className="btn btn-default">Login</button>
                    }
                    </form>
                </div>{/*/login form*/}
                </div>
            </div>
        </div>
    </>
    )
}

export default Login
