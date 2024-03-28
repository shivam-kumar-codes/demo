// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Section from './components/Section'
import FAQ from './components/FAQ'
import Help from './components/Help'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full min-h-screen'>
      <Navbar />
      <LandingPage /> 
      <Section />
      <FAQ />
      <Help/>
      <Footer />
    </div>
  )
}

export default App