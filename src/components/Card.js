import React from 'react'

function Card() {
  return (
    <div className='flex w-full -mt-40 justify-center'>
        <div className='w-96 h-80 rounded-[50px] bg-hitam-light relative px-16 py-5 text-white mx-2'>
            <img src='/images/job-card.png' className='w-24 h-24 bg-hijau-light p-3 rounded-xl absolute -top-8'/>
            <h2 className='text-3xl font-bold mt-16'>Employee</h2>
            <p className='text-sm mt-5'>Behind Southeast Asia’s only hyper-growth startup are some billion-dollar brains, doing what they do best.</p>
            <button className='px-5 py-3 rounded-full bg-hijau text-white mt-8 font-semibold drop-shadow-lg hover:bg-green-600 transition'>Join as employee</button>
        </div>
        <div className='w-96 h-80 rounded-[50px] bg-hitam-light relative px-16 py-5 text-white mx-2'>
            <img src='/images/job-helmet.png' className='w-24 h-24 bg-orange-light p-3 rounded-xl absolute -top-8'/>
            <h2 className='text-3xl font-bold mt-16'>Driver partners</h2>
            <p className='text-sm mt-5'>We’re home to 2 million+ driver partners, who enjoy a bundle of health and financial benefits.</p>
            <button className='px-5 py-3 rounded-full bg-hijau text-white mt-8 font-semibold drop-shadow-lg hover:bg-green-600 transition'>Join as driver partner</button>
        </div>
        <div className='w-96 h-80 rounded-[50px] bg-hitam-light relative px-16 py-5 text-white mx-2'>
            <img src='/images/job-merch.png' className='w-24 h-24 bg-purple-light p-3 rounded-xl absolute -top-8'/>
            <h2 className='text-3xl font-bold mt-16'>Merchants</h2>
            <p className='text-sm mt-5'>We empower 500,000+ merchants with cutting-edge technologies that help them multiply reach and sales.</p>
            <button className='px-5 py-3 rounded-full bg-hijau text-white mt-8 font-semibold drop-shadow-lg hover:bg-green-600 transition'>Join as merchant</button>
        </div>
    </div>
  )
}

export default Card;