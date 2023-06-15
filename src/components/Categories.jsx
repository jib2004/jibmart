import { useState } from 'react'
import 'animate.css';
import {AiOutlineMenu,AiOutlineClose,AiOutlineRight} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import { Link , useNavigate} from 'react-router-dom'
import logoutIcon from '../assets/logout (1).png'
import { useSelector } from 'react-redux';
import { useLoginMutation } from '../features/usersApiSlice'
import {logout} from '../features/authSlice'
import { useDispatch } from 'react-redux'


const Categories = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
// 
const {userInfo} = useSelector((state)=> state.auth)
    const showMenu =()=>{
        setIsMenuOpen(!isMenuOpen)
    
    }

    const [logoutApiCall] = useLoginMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = async () =>{
    try{
       await logoutApiCall().unwrap() 
       dispatch(logout())
       navigate('/')
    }catch(err){
      console.log(err)
    }
  } 
  return (
    <div>
        <div className="categories  cursor-pointer flex items-center gap-2 w-fit" onClick={showMenu}><span className='text-2xl'><AiOutlineMenu /></span><span className='text-md'>Categories</span></div>
        <div className={`absolute z-10 top-0   bg-white shadow-2xl flex   ${isMenuOpen ? 'visible  animate-slide left-0': '-left-[300px]  animate-slideOut ' }`}>
          
            <ul className='w-[250px] flex-col '> 
                <li className='bg-gray-700 flex gap-2 items-center py-4 px-3 sticky top-0 '><FaUser/>  Hello, {userInfo ? userInfo.firstName : 'user'}  <span className='text-2xl text-black  absolute -right-7 cursor-pointer ' onClick={showMenu}><AiOutlineClose /></span></li>
                <Link> <li className='text-gray-600 flex text-lg py-4 px-3  hover:text-black'> <span className='basis-3/4'>Electronics</span>  <span className='basis-1/4 flex justify-end '><AiOutlineRight/></span> </li> </Link>
                <Link> <li className='text-gray-600 flex text-lg py-4 px-3  hover:text-black'> <span className='basis-3/4'>Computers</span>  <span className='basis-1/4 flex justify-end '><AiOutlineRight/></span> </li> </Link>
                <Link> <li className='text-gray-600 flex text-lg py-4 px-3  hover:text-black'> <span className='basis-3/4'>Mobile Phones and Accessories</span>  <span className='basis-1/4 flex justify-end '><AiOutlineRight/></span> </li> </Link>
                <Link> <li className='text-gray-600 flex text-lg py-4 px-3  hover:text-black'> <span className='basis-3/4'>Automotive</span>  <span className='basis-1/4 flex justify-end '><AiOutlineRight/></span> </li> </Link>
                <Link> <li className='text-gray-600 flex text-lg py-4 px-3  hover:text-black'> <span className='basis-3/4'>Beauty and Personal Care</span>  <span className='basis-1/4 flex justify-end '><AiOutlineRight/></span> </li> </Link>
                <Link> <li className='text-gray-600 flex text-lg py-4 px-3  hover:text-black'> <span className='basis-3/4'>Fashion</span>  <span className='basis-1/4 flex justify-end '><AiOutlineRight/></span> </li> </Link>
                <Link> <li className='text-gray-600 flex text-lg py-4 px-3  hover:text-black'> <span className='basis-3/4'>Health and Household</span>  <span className='basis-1/4 flex justify-end '><AiOutlineRight/></span> </li> </Link>
                <Link> <li className='text-gray-600 flex text-lg py-4 px-3  hover:text-black'> <span className='basis-3/4'>Toys and Games</span>  <span className='basis-1/4 flex justify-end '><AiOutlineRight/></span> </li> </Link>
                <Link> <li className='text-gray-600 flex text-lg py-4 px-3  hover:text-black'> <span className='basis-3/4'>Video Games and Consoles</span>  <span className='basis-1/4 flex justify-end '><AiOutlineRight/></span> </li> </Link>
                <Link> <li className='text-gray-600 flex text-lg py-4 px-3  hover:text-black'> <span className='basis-3/4'>Arts & Craft</span>  <span className='basis-1/4 flex justify-end '><AiOutlineRight/></span> </li> </Link>
                <Link> <li className='text-gray-600 flex text-lg py-4 px-3  hover:text-black'> <span className='basis-3/4'>Sports and Outdoors</span>  <span className='basis-1/4 flex justify-end '><AiOutlineRight/></span> </li> </Link>
                <Link> <li className='text-gray-600 flex text-lg py-4 px-3  hover:text-black'> <span className='basis-3/4'>Pet Supplies</span>  <span className='basis-1/4 flex justify-end '><AiOutlineRight/></span> </li> </Link>
                <Link> <li className='text-gray-600 flex text-lg py-4 px-3  hover:text-black'> <span className='basis-3/4'>Appliances</span>  <span className='basis-1/4 flex justify-end '><AiOutlineRight/></span> </li> </Link>
                <Link> <li className='text-gray-600 flex text-lg py-4 px-3  hover:text-black'> <span className='basis-3/4'>Fruits and Vegetables</span>  <span className='basis-1/4 flex justify-end '><AiOutlineRight/></span> </li> </Link>
                <Link> <li className='text-gray-600 flex text-lg py-4 px-3  hover:text-black'> <span className='basis-3/4'>Books</span>  <span className='basis-1/4 flex justify-end '><AiOutlineRight/></span> </li> </Link>

                <hr className=''/>
                <Link onClick={logoutHandler}> <li className='text-gray-600 flex text-lg py-4 px-3 items-center gap-2 text-black'> Logout <img src={logoutIcon} alt="" className='w-[15px] object-contain'/> </li></Link>
            </ul>
          
        </div>
    </div>
  )
}

export default Categories