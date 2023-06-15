import{ useState } from 'react'
import Navbar from '../components/Navbar'
import RoleSelector from '../components/RoleSelector'



const LandingPage = () => {


  return (
    <div>
        <header>
          <Navbar />
        </header>
        <div className='  sm:mx-auto '>
          <div className=''>
          <RoleSelector />
          </div>
          
        </div>

        
      
      
    </div>
  )
}

export default LandingPage