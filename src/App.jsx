import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'

// pages
import Starships from './pages/Starships/Starships'
import StarshipPage from './pages/StarshipPage/StarshipPage'

// components
import Nav from './components/Nav/Nav'

function App() {
  
  return (
    <>
      <Nav />
      <main>  
        <Routes>
          <Route path="/starships" element={<Starships />} />
          <Route path="/starships/:starshipId" element={<StarshipPage/>} />
        </Routes>
      </main>
    </>
  )
}

export default App
