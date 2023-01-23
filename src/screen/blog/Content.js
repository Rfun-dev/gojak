import React from 'react'
import News from '../../components/News'
import Search from '../../components/Search'

function Content() {
  return (
    <>
      <Search/>
      <div className='flex'>
        <News src="https://source.unsplash.com/1920x1080?law"/>
        <News src="https://source.unsplash.com/1920x1080?man"/>
        <News src="https://source.unsplash.com/1920x1080?woman"/>
        <News src="https://source.unsplash.com/1920x1080?bike"/>
      </div>
    </>
  )
}

export default Content