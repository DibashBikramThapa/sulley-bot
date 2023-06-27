import React from 'react'
import './header.scss'

function Header() {
  return (
    <header>
        <div className='flex flex-col flex-wrap justify-center items-center'>
            <img src={'./sulley1.png'} className='w-20' alt="not found"/>
            <h1 className='sm:text-1xl font-bold animate-bounce my-2'>Sulley Telegram Bot</h1>
        </div>
    </header>
  )
}

export default Header