import React from 'react';
import './tradeinfo.scss';

function TradeInfo() {
  return (
    <div className='my-12 container-home'>
        <div className='m-l-12'>
        <img src={'./sulley.png'} className='w-20 text-center' alt="not found"/>
        </div>
            <div className='lg:columns-2 '>
                <div  className='mt-12'>
                    <h3 className='text-6xl font-bold text-white'>
                        TRADE
                    </h3>
                    <h3 className='text-6xl font-bold text-white'> 
                        DIRECTLY ON
                    </h3>
                    <h3 className='text-6xl font-bold text-white'>
                        TELEGRAM
                    </h3>
                    <div className='description text-white mt-6 text-1xl'>
                        Maestro aims to provide a suite of crypto-related tools for Telegram users. 
                        Through our revolutionary multi-chain (BSC + ETH) sniper bot, smooth wallet 
                        tracker, and proactive whale bot, our vision is to create an ecosystem that 
                        satisfies crypto enthusiast needs directly on Telegram, the flagship crypto 
                        platform.
                    </div>
                </div>
                <div className='flex lg:justify-end justify-center'>
                    <img src={'./tradeinfo.png'} className='trade-img'/>
                </div>
            </div>
        <div className='mt-3npm gap-x-5 flex'>
            <button className='bg-amber-200 p-4 rounded-full'>Sniper Tutorial</button>
            <button className='bg-amber-200 p-4 rounded-full'>Sniper Manual</button>
            <img />
            <img />
        </div>

    </div>
  )
}

export default TradeInfo