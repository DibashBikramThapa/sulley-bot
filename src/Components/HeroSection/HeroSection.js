import React from 'react'
import './herosection.scss'

function HeroSection() {
  return (
    <div className='hero-section text-center'>
        <img src={'./sulley.png'} alt="Not found"/>
        <h1 className='md:text-5xl font-bold sm:text-3xl animate-bounce my-3'>TRADING MADE EASIER.</h1>
    </div>
  )
}

export default HeroSection