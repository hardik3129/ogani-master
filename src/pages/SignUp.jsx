import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const SignUp = () => {
    
    const navigate = useNavigate()
    
  return (
    <>
        <div className="container">
            <div className="row align-items-center justify-content-center vh-100">
                <div className="col-sm-4">
                <Link to={''}><img src="img/logo.png" /></Link>
                <div className="signup-form">{/*sign up form*/}
                    <h2>New User Signup!</h2>
                    <Formik
                        initialValues={{
                            name : '',
                            email : '',
                            password : '',
                            conf_password : ''
                        }}
                        onSubmit={async(value) => {
                            const { email, password } = value
                            const res = await createUserWithEmailAndPassword(auth, email, password)
                            localStorage.setItem('AccessKey',JSON.stringify(res.user.accessToken))
                            navigate('/')
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

                            <Link to={'/login'} className='d-block mb-2'>I have allready Account</Link>
                            <button type="submit" className="btn btn-default">Signup</button>
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
