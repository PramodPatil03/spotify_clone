import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ArtistHome from './components/ArtistHome'
import Radio from './components/Radio'
import Album from './components/Album'
import Login from './components/Login'
import Signup from './components/Signup'
import MusicHome from './components/MusicHome'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/artisthome/:id' element={<ArtistHome />} />
            <Route exact path='/albums/:id' element={<Album />} />
            <Route exact path='/radios/:id' element={<Radio />} />
            <Route exact path='/music/:id' element={<MusicHome />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
