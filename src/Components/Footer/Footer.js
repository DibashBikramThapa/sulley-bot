import React from 'react'
import { AiFillTwitterSquare } from 'react-icons/ai';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';


function Footer() {

    return (
        <div className='mt-12 flex items-center flex-col'>
            <img src="./sulley.png" className='w-20'/>
            <img src="./sulley1.png" className='w-20 mt-10'/>
            <div className='flex mt-10 gap-x-4 animate-[fadeIn_6s_ease-in-out]'>
                <button className='bg-amber-200 p-4 rounded-lg grow w-80'>Sulley tutorial</button>
                <button className='bg-amber-200 p-4 rounded-lg grow w-80'>Sulley Manual</button>
                <button className='bg-amber-200 p-4 rounded-lg grow w-80'>Terms and Conditions</button>
            </div>
            <div className='mt-10 flex gap-x-6'>
                <a href="https://twitter.com" target="_blank"><AiFillTwitterSquare className='svg text-6xl text-white'/></a>
                <a href="https://twitter.com" target="_blank"><BsArrowUpRightCircleFill className='svg text-6xl text-white'/></a>
            </div>
            <div className='mt-10 text-white text-center text-2xl'>
                <h3>© 2023 MAESTRO</h3>
                <h3>ALL RIGHTS RESERVED</h3>
            </div>
        </div>
    )
}

export default Footer