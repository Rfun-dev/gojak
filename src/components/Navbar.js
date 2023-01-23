import React from 'react'

function Navbar() {
  return (
    <nav className='w-full flex fixed flex-wrap items-center justify-center px-2 bg-hitam mb-3 text-white font-sans z-10'>
        <div className='container mx-auto flex flex-wrap items-center justify-between px-24'>
            <a href='/' className='flex items-center justify-center'>
                <img src='https://rfun-dev.github.io/gojak/images/icon2.png' className='h-28 w-16' alt="icon"/>
                <span className='text-xl leading-relaxed inline-block mr-4 py-2 uppercase font-bold -m-3'>Gojek</span>
            </a>
            <div>
                <ul className='flex justify-center items-center font-semibold text-lg mr-10'>
                    <li className='mr-12 transition  delay-200 hover:border-b-2 hover:shadow-none'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='mr-12 transition  delay-200 hover:border-b-2 hover:shadow-none'>
                        <a href='/careers'>Careers</a>
                    </li>
                    <li className='mr-12 transition  delay-200 hover:border-b-2 hover:shadow-none'>
                        <a href='product'>Product</a>
                    </li>
                    <li className='mr-12 transition  delay-200 hover:border-b-2 hover:shadow-none'>
                        <a href='blog'>Blog</a>
                    </li>
                    <li className='mr-12 transition  delay-200 hover:border-b-2 hover:shadow-none'>
                        <a href='profile'>Profile</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar