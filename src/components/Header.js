import React from 'react'

function  Header({text,style,src}) {
  return (
    <div>
      <h1 className={style}>{text}</h1>
      <img src={src} className='bg-cover bg-cente' alt="header"/>
    </div>
  )
}

export default Header