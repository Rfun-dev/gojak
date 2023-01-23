import React from 'react'

function Loyalty() {
  return (
    <div className={'flex items-center justify-center mt-16'}>
        <img src='images/loyality.png' className='w-96 h-96'/>
        <div className='w-[500px]'>
            <h1 className='text-6xl font-bold text-white mt-10'>Gojek Loyalty Program</h1>
            <p className='text-white mt-10'>Make more trasaction, get more reward !</p>
            <button className='px-5 py-3 rounded-full bg-hijau text-white mt-8 font-semibold drop-shadow-lg hover:bg-green-600 transition'>View More!</button>
        </div>
    </div>
  )
}

export default Loyalty