import React from 'react'
import { Link } from 'react-router-dom'
export const DropDownItemsLoggetOut = () => {
  return (
    <>
                      <Link to={'/login'}>
                       <li className='p-2'><button className='w-full h-full p-2 rounded-lg cursor-pointer text-center bg-blue-600 text-white'> SignIn</button> </li>
                       </Link>   

                       <Link to={'/register'}>
                       <li className='p-2'><button className='w-full h-full p-2 rounded-lg cursor-pointer text-center bg-blue-600 text-white'> SignUp</button> </li>
                       </Link>      
                    </>
  )
}

export default DropDownItemsLoggetOut


