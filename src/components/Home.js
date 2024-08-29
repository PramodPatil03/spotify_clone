import React from 'react'

import './CSS/Home.css'
import UpperNav from './UpperNav';
import Populars from './Populars';
import Navbar from './Navbar';

function Home(props) {


  return (
    <>
    <div className="container">

      <Navbar />
      <div className="rightHolder backDark">
        <UpperNav backclass={''} />
        <Populars artistnavpath={'/artisthome'} radionavpath={'/radios'} albumnavpath={'/albums'} musicnavpath={'/music'} />
      </div>
    </div>
    </>
  )
}

export default Home
