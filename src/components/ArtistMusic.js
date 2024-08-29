import React from 'react'
import play from './Images/play_arrow.png'
import favorite from './Images/favorite.png'
import { music } from './utils/data'
import Navbar from './Navbar'

function ArtistMusic({ id }) {
  return (
    <>
      <div className="artists-music">
        <h2>Popular</h2>
        {
          music[id - 1].map((item, index) => {
            const { music_id, song_name, song_banner, weekly_plays, time } = item;
            return (
              <div key={index} className="music-info">
                <div className="music-info-left">
                  <p className='music-id'>{music_id}</p>
                  <img className='img-30 music-info-play' src={play} alt="" />
                  <img className='music-banner' src={song_banner} alt="" />
                  <p className='music-name'>{song_name}</p>
                </div>
                <div className="music-info-right">
                  <p className='music-plays'>{weekly_plays}</p>
                  <div className="music-info-right-right">
                    <div className="hidden-item "><img className='img-30' src={favorite} alt="" /></div>
                    <p className='music-time'>{time}</p>
                    <div className="more-dots">
                      <div className="music-info-more"></div>
                      <div className="music-info-more"></div>
                      <div className="music-info-more"></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default ArtistMusic
