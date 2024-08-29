import React from 'react'
import './CSS/artisthome.css'
import './CSS/Home.css'
import { useParams } from 'react-router-dom'

import { artists, music } from './utils/data'
import playbtn from './Images/play.png'
import UpperNav from './UpperNav';
import play from './Images/play_arrow.png'
import favorite from './Images/favorite.png'
import Populars from './Populars'
import ThreeDots from './ThreeDots'
import ArtistMusic from './ArtistMusic'
import Navbar from './Navbar'
function ArtistHome() {

  const { id } = useParams();
  const showMenu = () => {
    console.log("Hello MNebuy")
    const elem = document.getElementById('hidden-artist-three-dots');
    if (elem.style.display === 'flex') {
      elem.style.display = 'none'
    } else {
      elem.style.display = 'flex'
    }
  }
  const hideAll = () => {
    document.getElementById('hidden-artist-three-dots').style.display = 'none'
  }
  console.log(id)
  return (
    <>
    <div className="container">
      <Navbar />
      <div className="rightHolder backDark">
        <UpperNav backclass={'op-05'} />
        <div onClick={hideAll} className="artist-info">
          <div >
            <img className="artist-img" src={artists[id - 1].image} alt="" />
          </div>
          <div className="artist-details">
            <p>{artists[id - 1].name}</p>
            <p>{artists[id - 1].genre}</p>
            <p>{artists[id - 1].listeners} Monthly listeners.</p>
          </div>
        </div>
        <div className="artist-other">
          <div className="follow-holder">
            <div className="play-button"><img className="play-button" src={playbtn} alt="" /></div>
            <a className="follow-button" href="/">Follow</a>
            <div onClick={showMenu} className="more-dots">
              <div className="round-dot"></div>
              <div className="round-dot"></div>
              <div className="round-dot"></div>
            </div>
            <ThreeDots />
          </div>
          <ArtistMusic id={id} />
        </div>

        <Populars artistnavpath={'../artisthome'} radionavpath={'../radios'} albumnavpath={'../albums'} musicnavpath={'../music'} />

      </div>
      </div>
    </>
  )
}

export default ArtistHome
