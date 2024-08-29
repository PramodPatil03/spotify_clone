import React from 'react'

import './CSS/Home.css'
import {albums,radios,artists, music} from './utils/data'
import { useNavigate } from 'react-router-dom'


function Populars({artistnavpath,radionavpath,albumnavpath,musicnavpath}) {
  const navigateArtist = useNavigate();
  const navigateAlbum = useNavigate();
  const navigateRadio = useNavigate();

  return (
    <div className="rightContentSection">

            {/* Popular artists starts here */}
            <div>
              <div className="popularArtistsHeading">
                <h3>Popular artists</h3>
                <p>Show all</p>
              </div>
              <div className="popularArtists">
                <div className="profileContainer">
                  {
                    artists.map((elem) => {
                      const { id, name, image, genre } = elem;
                      
                      return (
                        <div onClick={()=>navigateArtist(`${artistnavpath}/${id}`)} key={id} className="card">
                          <div className="cardImage">
                            <img src={image} alt="Sangu" />
                            <p className="name">{name}</p>
                            <p className="details">{genre}</p>
                          </div>
                        </div>
                      )
                    })

                  }

                </div>
              </div>
            </div>
            {/* Popular artists ends here */}

            {/* Popular Albums */}
            <div>
              <div className="popularArtistsHeading">
                <h3>Popular albums</h3>
                <p>Show all</p>
              </div>
              <div className="popularArtists">
                <div className="profileContainer">
                  {
                    albums.map((elem) => {
                      const { id, name, region, image } = elem;
                      return (
                        <div  onClick={()=>navigateAlbum(`${albumnavpath}/${id}`)} className="card" key={id}>
                          <div className="cardImage">
                            <img className='cardImage-2' src={image} alt="Sangu" />
                            <p className="name">{name}</p>
                            <p className="details">{region}</p>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            {/* Popular songs ends here */}
            {/* Popular radios starts here */}
            <div>
              <div className="popularArtistsHeading">
                <h3>Popular Radio</h3>
                <p>Show all</p>
              </div>
              <div className="popularArtists">
                <div className="profileContainer">
                  {
                    radios.map((elem) => {
                      const { id, name, desc, image } = elem;
                      return (
                        <div  onClick={()=>navigateRadio(`${radionavpath}/${id}`)} key={id} className="card">
                          <div className="cardImage">
                            <img className='cardImage-2' src={image} alt="Sangu" />
                            <p className="name">{name}</p>
                            <p className="details">{desc}</p>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            {/* Popular radios ends here */}

            {/* Popular songs starts here */}
            <div>
              <div className="popularArtistsHeading">
                <h3>Popular Songs</h3>
                <p>Show all</p>
              </div>
              <div className="popularArtists">
                <div className="profileContainer">
                  {
                    music[0].map((elem) => {
                      const { music_id, song_name, song_banner, weekly_plays, time } = elem;
                      return (
                        <div  onClick={()=>navigateRadio(`${musicnavpath}/${music_id}`)} key={music_id} className="card">
                          <div className="cardImage">
                            <img className='cardImage-2' src={song_banner} alt="Sangu" />
                            <p className="name">{song_name}</p>
                            <p className="details">{weekly_plays}</p>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            {/* Popular songs ends here */}


          </div>
  )
}

export default Populars
