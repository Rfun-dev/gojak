import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Content from '../screen/careers/Content'
import Footer from '../screen/Footer'

function Careers() {
  return (
      <div className='bg-hitam'>
        <Navbar/>
        <Header 
          text="Hard to get through. Harder to leave." 
          style="text-white text-6xl font-bold leading-[6rem] flex flex-col absolute top-3/4 left-40 -translate-y-32 w-1/2"
          src="https://source.unsplash.com/1920x1080?company"/>
         <Content/> 
        <Footer/>
      </div>
    )
}

export default Careers