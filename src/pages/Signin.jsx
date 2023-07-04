import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, provider } from '../firebase'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { RingLoader } from 'react-spinners'
import { UserAccessaction, UserEmailaction } from '../redux/action/UserAccess.action'
import SignInGoogle from '../function/SignInGoogle'

const Login = () => {

    const [Loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const SginInGoogleRedirect = () => {
        SignInGoogle(auth, provider, dispatch, navigate)
    }
    
    const OnSubmitLoginUser = async (e) => {
        e.preventDefault()
        setLoading(true)
        const {email, password} = {
            email : e.target.email.value,
            password : e.target.password.value,
        }
        try {
            const res = await signInWithEmailAndPassword(auth, email, password)
            console.log(res._tokenResponse.localId);
            localStorage.setItem('AccessKey',JSON.stringify(res._tokenResponse.localId))
            dispatch(UserAccessaction(res._tokenResponse.localId))
            dispatch(UserEmailaction(res.user.email))
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
                <div className="col-sm-6">
                <div className="login-form">{/*login form*/}
                <Link to={''}><img src="img/logo.png" alt='' /></Link>
                    <h2>Login to your account</h2>
                    <form onSubmit={OnSubmitLoginUser}>
                    <input type="email" placeholder="Email Address" name='email' />
                    <input type="password" placeholder="Password" name='password' />
                    <div className='my-2'>
                        <Link to={'/signup'}>Create An Account</Link>
                    </div>
                    <div className="other-sign-in-mathod">
                        <div>
                            <img onClick={SginInGoogleRedirect} src="https://banner2.cleanpng.com/20180521/ers/kisspng-google-logo-5b02bbe1d5c6e0.2384399715269058258756.jpg" alt="" />
                        </div>
                    </div>
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
