import liveChatIcon from '../assets/chat.png'
import { Link } from 'react-router-dom'

const HelpDropdownItem = () => {
  return (
    <>
    
    <li className='flex gap-2 items-center p-2 cursor-pointer w-[200px] hover:text-white hover:bg-gray-400 duration-200 '>
                      
                      <Link className=''>Help Center</Link>
                      </li>
                      <li className='flex gap-2 items-center p-2 cursor-pointer w-[200px] hover:text-white hover:bg-gray-400 duration-200 '>
                    
                        <Link className=''>Place & Track order</Link>
                        </li>
                      <li className='flex gap-2 items-center p-2 cursor-pointer w-[200px] hover:text-white hover:bg-gray-400 duration-200 '>
                     
                        <Link className=''>Order cancellation</Link>
                        </li>
                      <li className='flex gap-2 items-center p-2 cursor-pointer w-[200px] hover:text-white hover:bg-gray-400 duration-200 '>
                      
                        <Link className=''>Returns & Refunds</Link>
                        </li>

                        <li className='flex gap-2 items-center p-2 cursor-pointer w-[200px] hover:text-white hover:bg-gray-400 duration-200 '>
                      
                        <Link className=''>Payment & Account Info</Link>
                        </li>
                        <hr />

                        <li className='p-2 text-white bg-blue-600  rounded-md duration-200 mt-4'> 
                            <button className='flex items-center gap-2 text-center'>
                              LIVE CHAT <img src={liveChatIcon} alt="" className='w-[15px]'/>
                            </button>
                          </li>
    
    </>
  )
}

export default HelpDropdownItem