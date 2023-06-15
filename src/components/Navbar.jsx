import {useState} from 'react'
import { Link } from 'react-router-dom'
import user from '../assets/user.png'
import {useSelector, useDispatch} from 'react-redux'
import cart from '../assets/shopping-cart.png'
import filter from '../assets/setting.png'

import help from '../assets/question.png'
import {BiChevronDown,BiChevronUp} from 'react-icons/bi'
import DropDownItemsLoggedIn from '../components/DropDownItemsLoggedIn'
import DropDownItemsLoggetOut from '../components/DropDownItemsLoggetOut'
import HelpDropdownItem from './HelpDropdownItem'


const Navbar = () => {
  const [userMenu, setUserMenu] = useState(false)
  const [helpMenu, setHelpMenu] = useState(false) 
  const [cartCount, setCartCount] = useState(0)
  const [loggedIn , setLogin] = useState(false)

  const {userInfo} = useSelector((state)=> state.auth)

  return (
    <nav className='flex justify-between p-10  items-center shadow-lg sm:flex-col justify-center items-center w-full'>
      <Link to={'/'} className='basis-1/6  sm:w-full text-center p-2'>
        <h1 className='text-xl font-bold'>Jibs Mart</h1>
        </Link>


        <div className='basis-1/2 flex items-center gap-2  sm:w-full text-center p-2'>
         <input type="search" name="" id="" />
         <button className=' border-black p-2 w-[100px] rounded-lg bg-blue-600 hover:bg-blue-900 duration-200 text-white'>
          Search
         </button>
        </div>

      
        <div className=' sm:w-full text-center flex justify-center p-2'>
            <ul className='flex items-center gap-5 cursor-pointer relative sm:gap-5'>
              <li className='flex gap-2 items-center' onClick={()=>{setUserMenu(!userMenu)}}>
                    <img src={user} alt="" className='w-[30px] sm:w-[20px]'/> <span className='flex items-center'>Hello, {userInfo ? userInfo.firstName : 'user'} {userMenu ? <BiChevronUp/> : <BiChevronDown />}</span>
                      <ul className={`absolute top-10 w-[200px] p-2  bg-gray-100 shadow-md z-20  ${userMenu ?  'visible ' : 'invisible'}`}> 
                      {userInfo ? <DropDownItemsLoggedIn /> :  <DropDownItemsLoggetOut /> }

                      </ul>
              </li>

              <li className='flex gap-2 items-center cursor-pointer' onClick={()=>{setHelpMenu(!helpMenu)}}>
                <img src={help} alt="" className='w-[30px] sm:w-[20px]'/> <span className='flex items-center'>Help {helpMenu ? <BiChevronUp/> : <BiChevronDown />}</span>
                <ul className={`absolute top-10 left-[4rem] w-[250px] p-2 z-20 bg-gray-100 shadow-md  ${helpMenu ?  'visible' : 'invisible'}`}> 
                      <HelpDropdownItem />
                      </ul>
              </li>

              <Link to={'/customer'}> <li className=' cursor-pointer relative'>
                <div className="absolute -top-2 -right-2 bg-blue-600 w-[20px] h-[20] text-center text-white rounded-full ">
                  <span>{cartCount}</span>
                </div>
                <img src={cart} alt="" className='w-[30px] '/>
              </li>
              </Link>
              </ul> 
        
      
        </div>
      

      
        
      </nav>
  )
}

export default Navbar