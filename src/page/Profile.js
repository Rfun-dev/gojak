import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../screen/Footer'
import Content from '../screen/profile/Content'

function Profile() {
  return (
    <div className='bg-black'>
      <Navbar/>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default Profile