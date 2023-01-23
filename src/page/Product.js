import React from 'react'
import Explore from '../components/Explore'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../screen/Footer'
import Content from '../screen/product/Content'

function Product() {
  return (
    <div className='bg-black'>
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default Product