import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai' 
import { Swiper, SwiperSlide } from 'swiper/react';

const SellerWallet = () => {
  return (
    <div className=' w-full'>
    <div>
      <h4 className='mb-9 mt-2 text-2xl font-medium'>Total Balance</h4>

      <div className='flex items-center gap-5 justify-between '>
        <div className='flex items-center gap-5'>
      <h1 className=' text-4xl font-semibold'>&#8358;0</h1>
      <div className='border w-10 h-10 flex items-center justify-center rounded-full bg-black text-white cursor-pointer' title='Deposit Money'><AiOutlinePlus /></div>
      </div>
      <button className='border p-2 rounded-xl bg-black text-white'>Withdraw</button>
      
      </div>

      <hr  className='border-black mt-6'/>

      <div className='mt-4'>
        <h3 className='flex items-center gap-2'>Add Card <span className='border w-6 h-6 flex items-center rounded-lg bg-black text-white cursor-pointer justify-center' title='Add a new card'><AiOutlinePlus /></span></h3>
    
        <Swiper
    spaceBetween={30}
    slidesPerView={3}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    className='border w-[50%] mx-0 mt-6 h-64 p-2'
  >
    <SwiperSlide className='basis-3/4 grow-0 shrink-0 min-w-0 border rounded-lg p-4 flex flex-col justify-between'>
        <span>Card Number</span>
        <input type="tel" className='w-[80%] outline-none'/>

        <div className='flex gap-2 '>
          <div> <span>Expiry date</span>
          <div className='flex items-center'>
          <input type="tel" className='basis-[5rem] outline-none'/>
          /
          <input type="tel" className='basis-[5rem] outline-none'/>  
          </div> 
          
          
          </div>
          <div> <span>CVV</span> <input type="tel"/></div>
        </div>
    </SwiperSlide>
    <SwiperSlide className='basis-3/4 grow-0 shrink-0 min-w-0 border rounded-lg p-4 flex flex-col justify-between'>
        <span>Card Number</span>
        <input type="tel" className='w-[80%] outline-none'/>

        <div className='flex gap-2 '>
          <div> <span>Expiry date</span>
          <div className='flex items-center'>
          <input type="tel" className='basis-[5rem] outline-none'/>
          /
          <input type="tel" className='basis-[5rem] outline-none'/>  
          </div> 
          
          
          </div>
          <div> <span>CVV</span> <input type="tel"/></div>
        </div>
    </SwiperSlide>
    <SwiperSlide className='basis-3/4 grow-0 shrink-0 min-w-0 border rounded-lg p-4 flex flex-col justify-between'>
        <span>Card Number</span>
        <input type="tel" className='w-[80%] outline-none'/>

        <div className='flex gap-2 '>
          <div> <span>Expiry date</span>
          <div className='flex items-center'>
          <input type="tel" className='basis-[5rem] outline-none'/>
          /
          <input type="tel" className='basis-[5rem] outline-none'/>  
          </div> 
          
          
          </div>
          <div> <span>CVV</span> <input type="tel"/></div>
        </div>
    </SwiperSlide>
  </Swiper>
        
      </div>
    
    </div>

    <hr  className='border-black mt-6'/>

    <div >
    <h3 className='flex items-center gap-2 mt-4'>Planning <span className='border w-6 h-6 flex items-center rounded-lg bg-black text-white cursor-pointer justify-center' title='Save money for your dream product'><AiOutlinePlus /></span></h3>
    </div>
  </div>
  )
}

export default SellerWallet