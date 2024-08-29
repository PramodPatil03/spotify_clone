import React from 'react'
import './CSS/Auth.css'
import logo from './Images/logo.png'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <>
        <div className=" flex-center">
            <div className="type-holder">
                <img src={logo} alt="logo" />
                <p>Sign Up to</p>
                <p>Start Listening</p>
                <form className='form' >
                  <label htmlFor="username">Email</label>
                  <input id='username' type="text" placeholder='username' />
                  
                  <button>Next</button>
                </form>
                
                <hr className='hr'  />
                <div className="anchor-holder">
                  <Link to="/login"><img src={logo} alt="" />Sign up with Google</Link>
                  <Link to="/login"><img src={logo} alt="" />Sign up with Facebook</Link>
                  <Link to="/login"><img src={logo} alt="" />Sign up with Apple</Link>
                  <Link to="/login">Sign up with phone number</Link>
                </div>
                <hr className='hr'  />
                <Link className='forgot-pass' to="/login">Already have an account? Log in here.</Link>
            </div>
        </div>
    </>
  )
}

export default Signup
