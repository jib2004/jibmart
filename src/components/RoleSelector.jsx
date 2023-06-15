import{ useState } from 'react'
import BuyersPage from '../pages/userrole/BuyersPage'
import SellersPage from '../pages/userrole/SellersPage'
import Categories from './Categories'
import { useLocation,useNavigate } from 'react-router-dom'
// import {useSelector, useDispatch} from 'react-redux'

const RoleSelector = () => {
    const [isBuyer , setIsBuyer] = useState(true)
    const location = useLocation()
    const navigate = useNavigate()

    // const {userInfo} = useSelector((state)=> state.auth)

    const userRole = (e) =>{
      setIsBuyer(e.target.value)
      setIsBuyer(!isBuyer)
      if(isBuyer === 'buyer'){
        return <BuyersPage />
      }else{
        // location.pathname = '/seller'
        navigate('/seller')
        console.log(location)
        return <SellersPage />
      }
    
    }
  return (
    <>
    <div className='flex items-center justify-around bg-gray-500'>
      <div className='basis-1/2 pl-8 text-white'>
        <Categories />
      </div>
      <div className='basis-1/2 flex justify-end pr-8'>
    <select name="" id="" className='w-[7rem] outline-none bg-gray-500 text-white border' onChange={userRole}>
            <option value="buyer" className='sm:w-full'>Buyer</option>
            <option value="seller" className='sm:w-full'>Seller</option>
          </select>
          </div>
          </div>

          <main className=''>
          {isBuyer? <BuyersPage/> : <SellersPage />}
          </main>
    </>
  )
}

export default RoleSelector