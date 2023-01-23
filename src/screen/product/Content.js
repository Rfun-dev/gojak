import React from 'react'
import Header from '../../components/Header'
import Info from '../../components/Info'
import Loyalty from '../../components/Loyalty'
import Product from '../../components/Product'

function Content() {
  return (
    <>
        <Header 
          text="We build products that nations run on" 
          style="text-white text-7xl font-bold leading-[6rem] flex flex-col absolute top-1/2 left-40 -translate-y-32 w-1/2" 
          src="https://source.unsplash.com/1920x1080?parking"/>
        <Loyalty/>
        <Product/>
    </>
  )
}

export default Content