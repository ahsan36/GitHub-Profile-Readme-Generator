import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Profile from './pages/Profile'

const App = () => {
  return (
    <>
      <Navbar />
      <Profile />
      <Footer />
    </>
  )
}

export default App
