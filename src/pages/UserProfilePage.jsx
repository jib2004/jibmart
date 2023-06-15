import { Link, Navigate,useParams,useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Profile from './accountOptions/Profile'
import Orders from './accountOptions/Orders'
import Saved from './accountOptions/Saved'
import Inbox from './accountOptions/Inbox'
import Wallet from './accountOptions/Wallet'

const UserProfilePage = () => {
    const {userInfo} = useSelector((state)=> state.auth)
    let {subpage} = useParams()
    
    




    if(subpage === undefined){
        subpage = 'profile'
    }

  
    function accountOpt(type= null){
        let classes = '  p-2 px-6 '
        if(type === subpage){
            classes += ' text-white bg-[#ff5a60] '
        }else{
            // classes += 'bg-gray-200'
          }

          return classes
    }
  return (
    <>

    { userInfo ?  
    <div>
        <Navbar />
        <div  className='flex gap-6 px-4 relative'>

        <Link to={'/'} className='border w-8 h-8 flex justify-center items-center rounded-full cursor-pointer absolute top-3 hover:bg-[rgba(0,0,0,0.2)] z-10 duration-200' >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>

        </Link>


            <aside className=' basis-1/6 relative top-[100px] h-fit shadow-2xl bg-white'>
                <nav className='flex flex-col gap-10 py-4'>

                    <Link to={'/account/'} className={accountOpt('profile')}> Profile</Link>
                    <Link to={'/account/orders'} className={accountOpt('orders')}> Orders</Link>
                    <Link to={'/account/saved_items'} className={accountOpt('saved_items')}> Saved Items</Link>
                    <Link to={'/account/inbox'} className={accountOpt('inbox')}> Inbox</Link>
                    <Link to={'/account/wallet'} className={accountOpt('wallet')}> Wallet</Link>
                     <button className='p-4 bg-black text-white'>Close Account</button>
                </nav>
            </aside>

            <div className='basis-[83%]'>
                {subpage === 'profile' && (
                    <Profile />
                )}


                {subpage === 'orders' &&(
                    <Orders />
                )}

                {subpage === 'saved_items' &&(
                    <Saved />
                )}

                {subpage === 'inbox' &&(
                    <Inbox />
                )}

                {subpage === 'wallet' &&(
                    <Wallet />
                )}


            </div>
        </div>
        
        
        
        
        </div>: <Navigate to={'/login'}/>}
    </>

  )
}

export default UserProfilePage