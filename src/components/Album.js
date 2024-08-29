import React from 'react'
import UpperNav from './UpperNav'
import './CSS/radio.css'
import { useParams } from 'react-router-dom';
import { albums,music } from './utils/data'
import playbtn from './Images/play.png'
import favorite from './Images/favorite.png'
import ThreeDots from './ThreeDots';
import ArtistMusic from './ArtistMusic';
import Navbar from './Navbar';

function Album() {
  const { id } = useParams();
  const showMenu = () => {
    const elem = document.getElementById('hidden-artist-three-dots');
    if (elem.style.display === 'flex') {
      elem.style.display = 'none'
    } else {
      elem.style.display = 'flex'
    }
  }
  return (
    <>
    <div className="container">
      <Navbar />
      <div className="rightHolder radio-back backDark">
        <UpperNav backclass={'op-05'} />
        <div className="radio-home">
          <div className="artist-info">
            <div >
              <img className="artist-img" src={albums[id - 1].image} alt="" />
            </div>
            <div className="artist-details">
              <p>{albums[id - 1].name}</p>
              <p>{albums[id - 1].region}</p>
            </div>
          </div>
          <div className="radio-others">
            <div className="follow-holder">
              <div className="play-button"><img className="play-button" src={playbtn} alt="" /></div>
              <div className="fav-holder"><img src={favorite} alt="" className="img-30" /></div>
              <div onClick={showMenu} className="more-dots">
                <div className="round-dot"></div>
                <div className="round-dot"></div>
                <div className="round-dot"></div>
              </div>
              <ThreeDots />
            </div>
            <ArtistMusic id = {id}/>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Album;
