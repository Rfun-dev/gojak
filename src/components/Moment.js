import React from 'react'

function Moment() {
  return (
    <>
        <div>
            <div className='flex items-center justify-around bg-purple-900 rounded-t-3xl p-20'>
                <div className='text-white'>
                    <p className='text-xs mb-5'>#winning_moment</p>
                    <h1 className='font-bold text-4xl w-96 leading-10 mb-3'>When 12 engineers managed 1 million drivers.</h1>
                    <p className='w-3/5'>Back in 2015, Gojek’s first-ever engineering team realised their potential, and impact.</p>
                    <button class="bg-white hover:bg-gray-700 hover:text-white text-black font-bold py-2 px-4 rounded-full mt-10">Know More</button>
                </div>
                <div>
                    <img src='https://rfun-dev.github.io/gojak/images/oppur-chart.png' className='w-80'/>
                </div>
            </div>
            <div className='flex items-center justify-around bg-pink-900 rounded-t-3xl p-20 -my-10'>
                <div className=' mr-80'>
                    <img src='https://rfun-dev.github.io/gojak/images/oppur-greener.png' className='w-80'/>
                </div>
                <div className='text-white'>
                    <p className='text-xs mb-5'>#winning_moment</p>
                    <h1 className='font-bold text-4xl w-96 leading-10 mb-3'>Rebranding Gojek, in-house!</h1>
                    <p className='w-3/5'>12 months, a hundred iterations, a company-wide overnight makeover, and The Gojek Brand Book. All of it, in-house!</p>
                    <button class="bg-white hover:bg-gray-700 hover:text-white text-black font-bold py-2 px-4 rounded-full mt-10">Know More</button>
                </div>
            </div>
            <div className='flex items-center justify-around bg-blue-900 rounded-t-3xl p-20'>
                <div className='text-white'>
                    <p className='text-xs mb-5'>#winning_moment</p>
                    <h1 className='font-bold text-4xl w-96 leading-10 mb-3'>How Kafka solved a cultural problem</h1>
                    <p>Every engineer’s playground, Kafka fixed a critical cultural problem for Gojek. Find out how.</p>
                    <button class="bg-white hover:bg-gray-700 hover:text-white text-black font-bold py-2 px-4 rounded-full mt-10">Know More</button>
                </div>
                <div>
                    <img src='https://rfun-dev.github.io/gojak/images/oppur-chart.png' className='w-80'/>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Moment