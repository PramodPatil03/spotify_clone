import React from 'react'

import './CSS/Home.css'

import spotify from './Images/logo.png'
import home from './Images/home.png'
import search from './Images/search.png'
import library from './Images/library_icon.png'
import plusIcon from './Images/Plus.png'
import globe from './Images/globe.png'

function Navbar() {
  const language = 'English'
  return (
    <div className="leftHolder backDark">
          <nav className='navbar-left'>
            <ul className='leftNav'>
              <li className='nav-item'><img src={spotify} alt="" className="nav-item-img" /><a href="/">Spotify</a></li>
              <li className='nav-item'><img src={home} alt="" className="nav-item-img" /><a href="/">Home</a></li>
              <li className='nav-item'><img src={search} alt="" className="nav-item-img" /><a href="/">Search</a></li>
            </ul>
          </nav>
          <section className='leftSection'>
            <div className="leftSectionUpper">
              <div className="library"><img src={library} alt="Library" className='icon-image' /><p>Your library</p><img src={plusIcon} alt="plusIcon" className='icon-image-plus' /></div>
              <div className="itemHolder">
                <div className="div-item">
                  <p className='div-item-head'>Create your first playlist</p>
                  <p className="div-item-desc">It's easy, We'll help you</p>
                  <button className='div-item-btn'>Create playlist</button>
                </div>
                <div className="div-item">
                  <p className='div-item-head'>Let's find some podcast to follow</p>
                  <p className="div-item-desc">We'll keep you updated on new episodes</p>
                  <button className='div-item-btn'>Browse podcasts</button>
                </div>
              </div>
            </div>
            <div className="leftSectionBottom">
              <div className='contents'>
                <p>Jello</p>
                <p>jalagara movie</p>
                <p>Bhau</p>
                <p>Jello</p>
                <p>jalagara</p>
                <p>Bhau</p>
              </div>
              <div className="langBtn">
                <button> <img src={globe} alt="Lang" className='icon-image' /> {language}</button>
              </div>
            </div>
          </section>
        </div>
  )
}

export default Navbar
