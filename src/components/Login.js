import React from 'react'
import './CSS/Auth.css'
import logo from './Images/logo.png'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <>
      <div className=" flex-center">
            <div className="type-holder">
                <img src={logo} alt="logo"  />
                <p>Log in to Spotify</p>
                <div className="anchor-holder">
                  <Link to="/login"><img src={logo} alt="" />Continue with Google</Link>
                  <Link to="/login"><img src={logo} alt="" />Continue with Facebook</Link>
                  <Link to="/login"><img src={logo} alt="" />Continue with Apple</Link>
                  <Link to="/login">Continue with phone number</Link>
                </div>
                <hr className='hr' />
                <form className='form' >
                  <label htmlFor="username">Email or username</label>
                  <input id='username' type="text" placeholder='username' />
                  <label htmlFor="password">Password</label>
                  <input id='password' type="password" placeholder='password' />
                  <button>Login</button>
                </form>
                <Link className='forgot-pass' to="/login">Forgot your password?</Link>
                <hr className='hr' />
                <Link className='forgot-pass' to="/signup">Don't have an account? Sign up for Spotify.</Link>
            </div>
        </div>
    </>
  )
}

export default Login
