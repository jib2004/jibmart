import {useState} from 'react'
import Aside from '../../components/Aside'
import { Link, Navigate, useParams, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import RoleSelector from '../../components/RoleSelector'
import ProductForm from '../sellerAccountOption/PrductForm'
import Products from '../sellerAccountOption/Products'
import SellerOrders from '../sellerAccountOption/Orders'
import SellerInbox from '../sellerAccountOption/Inbox'
import SellerWallet from '../sellerAccountOption/Wallet'


const Seller = () => {
  let navigate = useNavigate()
  
  let {subpage} = useParams()
  if(subpage === undefined){
    subpage = 'productform'
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
    <div>
      <Navbar />
      {/* <RoleSelector /> */}

      <div className='flex gap-6 px-4 relative'>
      <Link to={'/'} className='border w-8 h-8 flex justify-center items-center rounded-full cursor-pointer absolute top-3 hover:bg-[rgba(0,0,0,0.2)] z-10 duration-200' >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>

        </Link>

      <aside className=' basis-1/6  h-fit relative top-[100px]  shadow-2xl bg-white'>
        
                <nav className='flex flex-col gap-10 py-4'>
                  
                    <Link to={'/seller'} className={accountOpt('productform')}> Product Form</Link>
                    <Link to={'/seller/orders'} className={accountOpt('orders')}> Orders</Link>
                    <Link to={'/seller/products'} className={accountOpt('products')}>Products</Link>
                    <Link to={'/seller/inbox'}  className={accountOpt('inbox')}> Inbox</Link>
                    <Link to={'/seller/wallet'} className={accountOpt('wallet')}>Wallet</Link>
                     
                </nav>
            </aside>

            <div className='basis-[83%]'>
            {subpage === 'productform' && (
                    < ProductForm/>
                )}


                {subpage === 'orders' &&(
                    <SellerOrders />
                )}

                {subpage === 'products' &&(
                    <Products />
                )}

                {subpage === 'inbox' &&(
                    <SellerInbox />
                )}

                {subpage === 'wallet' &&(
                    <SellerWallet />
                )}

            </div>
      </div>
    </div>
  )
}

export default Seller