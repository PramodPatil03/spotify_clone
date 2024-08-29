import React from 'react'

import {singleMusic} from './utils/data'
import playbtn from './Images/play.png'
import favorite from './Images/favorite.png'
import ThreeDots from './ThreeDots';
import ArtistMusic from './ArtistMusic';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import UpperNav from './UpperNav';


function MusicHome() {
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
      <div className="rightHolder backDark">
        <UpperNav backclass={'op-05'} />
        <div className="artist-info">
          <div >
            <img className="artist-img" src={singleMusic[id - 1].song_banner} alt="" />
          </div>
          <div className="artist-details">
            <p>{singleMusic[id - 1].song_name}</p>
            <p>{singleMusic[id - 1].time}</p>
            <p>{singleMusic[id - 1].weekly_plays} Weekly plays.</p>
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
                <p className='artist-name'>Artist</p>
                {
                    singleMusic[id-1].artists.map((item,index)=>{
                        const { image,name } = item;
                        return(
                            <div className="music-artist" key={index}>
                                <img className='artist-image' src={image} alt="" />
                                <div className="artist-name">{name}</div>
                            </div>
                        )
                    })
                }
            <ArtistMusic id = {id}/>
          </div>

        {/* <Populars artistnavpath={'../artisthome'} radionavpath={'../radios'} albumnavpath={'../albums'} /> */}

      </div>
      </div>
    </>
  )
}

export default MusicHome
