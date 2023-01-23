import React from 'react'

function News({src}) {
  return (
    <div className='my-20 mx-10'>
        <img src={src} className='rounded-2xl w-52 h-36'/>
        <h1 className='text-black text-1xl font-bold my-3'>Pesan Makan di GoFood Cepet Sampenya, Cepet Uenaknya</h1>
        <p className='text-gray-600'>Gosen / 19 Dec 2022</p>
    </div>
  )
}

export default News