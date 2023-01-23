import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Content from '../screen/blog/Content'
import Footer from '../screen/Footer'

function Blog() {
  return (
    <>
      <Navbar/>
      <Header 
        text="Let's see what we have" 
        style="text-white text-7xl font-bold leading-[6rem] flex flex-col absolute top-3/4 left-40 -translate-y-32 w-1/3" 
        src="https://source.unsplash.com/1920x1080?night"/>
      <Content/>
      <Footer classname="bg-black"/>
    </>
  )
}

export default Blog