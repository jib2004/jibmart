import React from 'react'
import Aside from '../components/Aside'
import Navbar from '../components/Navbar'
import Main from '../components/Main'

export const Hopmepage = () => {
  return (
    <div>
    <div className='flex'>
      <Aside />
      <div>
        <Navbar />
        <Main />
      </div>
      </div>
    </div>
  )
}


export default Hopmepage