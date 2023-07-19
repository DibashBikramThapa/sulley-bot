import React from 'react'

function BotInfo() {
    return (
        <div className='mt-12 container-home'>
            <div className='m-l-12'>
                <img src={'./sulley.png'} className='w-20 text-center' alt="not found" />
            </div>
            <div className='lg:columns-2 '>
                <div className='mt-12'>
                    <h3 className='lg:text-6xl text-4xl font-bold text-white'>
                        Sulley BOT
                    </h3>
                    <h3 className='font-bold text-amber-300 mt-4'>
                        NO NEED TO SETUP YOUR OWN NODES <br />
                        WE DO ALL THE HEAVYLIFTING FOR YOU
                    </h3>
                    <div className='description text-white mt-3 text-1xl md:gap-y-3 sm:gap-1 grid'>
                        <h3 className='hover:text-amber-300'>LIGHTNING FAST (BSC, ETH, ARB, & SRG) TELEGRAM Sulley BOT</h3>
                        <h3 className='hover:text-amber-300'>EASY LIQUIDITY, LAUNCH, AND METHOD SNIPING</h3>
                        <h3 className='hover:text-amber-300'>TRADING TERMINAL WITH HIGH-END FUNCTIONS</h3>
                        <h3 className='hover:text-amber-300'>ANTI-RUG PROTECTION TO SAVE YOUR INVESTMENTS</h3>
                        <h3 className='hover:text-amber-300'>EFFORTLESS PINKSALE PRESALE ENTRIES</h3>
                        <h3 className='hover:text-amber-300'>POWERFUL CALL CHANNEL SNIPING</h3>
                        <h3 className='hover:text-amber-300'>ACCESSIBLE ON ANY DEVICE THAT SUPPORTS TELEGRAM - COMPUTERS, PHONES, TABLETS, YOU NAME IT!</h3>
                    </div>
                </div>
                <div className='flex lg:justify-end justify-center animate-[zoomInOut_2s_ease-in-out_infinite]'>
                    <img src={'./botinfo.png'} className='trade-img' />
                </div>
            </div>
            <div className='mt-3 gap-x-5 flex'>
                <button className='bg-amber-200 p-4 rounded-full'>Sulley Bot</button>
                <img />
                <img />
            </div>

        </div>
    )
}

export default BotInfo