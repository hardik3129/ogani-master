import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, provider } from '../firebase';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { RingLoader } from 'react-spinners';
import { addDoc, collection } from 'firebase/firestore';
import SignInGoogle from '../function/SignInGoogle';

const SignUp = () => {
    
    const [Loading, setLoading] = useState(false)
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const SginInGoogleRedirect = () => {
        SignInGoogle(auth, provider, dispatch, navigate)
    }
    
  return (
    <>
        <div className="container">
            <div className="row align-items-center justify-content-center vh-100">
                <div className="col-sm-6">
                <div className="signup-form">{/*sign up form*/}
                    <Link to={''}><img src="img/logo.png" alt='' /></Link>
                    <h2>New User Signup!</h2>
                    <Formik
                        initialValues={{
                            name : '',
                            email : '',
                            password : '',
                            conf_password : ''
                        }}
                        onSubmit={async(value) => {
                            setLoading(true)
                            const { email, password } = value
                            try {
                                const res = await createUserWithEmailAndPassword(auth, email, password)
                                const SpreadUser = {...value, uid : res.user.uid}
                                await addDoc(collection(db,'users'),SpreadUser)
                                navigate('/login')
                            } catch (error) {
                                // console.log(error);
                                toast.error(error.code)
                            }
                            setLoading(false)
                        }}
                        validationSchema={
                            yup.object().shape({
                                name : yup.string().required(),
                                email : yup.string().email().required(),
                                password : yup.string().min(6,'Minimum 6').required(),
                                conf_password : yup.string().oneOf([yup.ref('password')], 'Passwords must match').required()
                            })
                        }
                    >
                        <Form>
                            <Field type="text" name='name' placeholder="Name" />
                            <ErrorMessage name='name' className='text-danger' component={'div'}  />

                            <Field type="email" name='email' placeholder="Email Address" />
                            <ErrorMessage name='email' className='text-danger' component={'div'}  />

                            <Field type="password" name='password' placeholder="Password" />
                            <ErrorMessage name='password' className='text-danger' component={'div'}  />
                            
                            <Field type="password" name='conf_password' placeholder="Confirm Password" />
                            <ErrorMessage name='conf_password' className='text-danger' component={'div'}  />
                            <div className='my-2'>
                                <Link to={'/login'}>I have allready account</Link>
                            </div>
                            <div className="other-sign-in-mathod">
                                <div>
                                    <img width={'100%'} onClick={SginInGoogleRedirect} src="https://banner2.cleanpng.com/20180521/ers/kisspng-google-logo-5b02bbe1d5c6e0.2384399715269058258756.jpg" alt="" />
                                </div>
                            </div>
                            {Loading === true ?
                            <button type="button" className="btn btn-default">
                                <RingLoader color="#fff" loading={Loading} size={25} />
                            </button> :
                            <button type="submit" className="btn btn-default">Sign up</button>
                            }
                        </Form>
                    </Formik>
                </div>{/*/sign up form*/}
                </div>
            </div>
            </div>
    </>
  )
}

export default SignUp
