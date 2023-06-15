import userIcon from '../assets/user (1).png'
import orderIcon from '../assets/order-delivery.png'
import favourite from '../assets/heart.png'
import inboxIcon from '../assets/mail-inbox-app.png'
import logoutIcon from '../assets/logout.png'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../features/usersApiSlice'
import {logout} from '../features/authSlice'
import { useDispatch,useSelector } from 'react-redux'

const DropDownItemsLoggedIn = () => {
  const [logoutApiCall] = useLoginMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {userInfo} = useSelector((state)=> state.auth)
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
    <>
    <li className='flex gap-2 items-center p-2 cursor-pointer hover:text-white hover:bg-gray-400 duration-200'>
                      <img src={userIcon} alt="" className='w-[20px]'/>
                      <Link to={'/account/'}>Profile</Link>
                      </li>
                      <li className='flex gap-2 items-center p-2 cursor-pointer hover:text-white hover:bg-gray-400 duration-200'>
                      <img src={orderIcon} alt="" className='w-[20px]'/>
                        <Link to={'/account/orders'}>Orders</Link>
                        </li>
                      <li className='flex gap-2 items-center p-2 cursor-pointer hover:text-white hover:bg-gray-400 duration-200'>
                      <img src={favourite} alt="" className='w-[20px]'/>
                       <Link to={'/account/saved_items'}>Saved Items </Link>  
                        </li>
                      <li className='flex gap-2 items-center p-2 cursor-pointer hover:text-white hover:bg-gray-400 duration-200'>
                      <img src={inboxIcon} alt="" className='w-[20px]'/>
                        <Link to={'/account/inbox'}>Inbox</Link> 
                        </li>
                        <hr />
                        <li className='p-2 hover:text-white hover:bg-blue-600 rounded-md duration-200 mt-4' onClick={logoutHandler}> 
                            <button className='flex items-center gap-2'>
                              LOGOUT <img src={logoutIcon} alt="" className='w-[15px]'/>
                            </button>
                          </li>      
    </>
  )
}

export default DropDownItemsLoggedIn