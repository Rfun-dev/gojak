import React from 'react'

function Feedback() {
  return (
    <div>
        <h1 className='text-5xl font-bold text-center p-36'>We stand tall on your our 10 values</h1>
        <div className='flex justify-center items-center pb-10'>
            <div className='rounded-2xl shadow-2xl px-10 w-1/4 drop-shadow-2xl  mr-14'>
                <img src='https://rfun-dev.github.io/gojak/images/job-card.png' className='w-14 bg-purple-500 p-2 rounded-md -mt-10'/>
                <h1 className='font-bold pt-5'>Collaborate with compassion</h1>
                <ul className='list-disc text-xs py-5 text-gray-500'> 
                    <li className='mb-2'>Be a pleasure to work with</li>
                    <li className='mb-2'>Support others in areas beyond your scope</li>
                    <li className='mb-2'>Consider how your actions affect others</li>
                </ul>
            </div>
            <div className='rounded-2xl shadow-2xl px-10 w-1/4 drop-shadow-2xl mr-14'>
                <img src='https://rfun-dev.github.io/gojak/images/job-merch.png' className='w-14 bg-orange-400 p-2 rounded-md -mt-10'/>
                <h1 className='font-bold pt-5'>Criticism is a gift</h1>
                <ul className='list-disc text-xs py-5 text-gray-500'> 
                    <li className='mb-2'>Actively seek feedback</li>
                    <li className='mb-2'>Proactively give helpful feedback</li>
                    <li className='mb-2'>Genuinely act upon feedback given</li>
                </ul>
            </div>
            <div className='rounded-2xl shadow-2xl px-10 w-1/4 drop-shadow-2xl mr-14'>
                <img src='https://rfun-dev.github.io/gojak/images/job-helmet.png' className='w-14 bg-green-500 p-2 rounded-md -mt-10'/>
                <h1 className='font-bold pt-5'>Be fast and fearless</h1>
                <ul className='list-disc text-xs py-5 text-gray-500'> 
                    <li className='mb-2'>Take calculated risk</li>
                    <li className='mb-2'>Value failure as much as success</li>
                    <li className='mb-2'>Have a strong sense of urgency</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Feedback