import React from 'react'

import './CSS/Navbar.css'

import previous from './Images/backward_icon.png'
import forward from './Images/forward_icon.png'
import { Link, useNavigate } from 'react-router-dom'
function UpperNav({ backclass }) {
  const navigateBack = useNavigate();
  return (
      <div className={`upperNav ${backclass}`}>
            <div className="leftUpperNav">
              <ul>
                <li><img onClick={() => navigateBack('..')} src={previous} alt="" /></li>
                <li><img src={forward} alt="" /></li>
              </ul>
            </div>
            <div className="rightUpperNav">
              <ul>
                <li className='navBtn'><Link to="/signup">Sign Up</Link></li>
                <li className='navBtn' id='loginBtn'><Link to="/login">Login</Link></li>
              </ul>
            </div>
          </div>
  )
}

export default UpperNav
