// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation,Autoplay} from 'swiper'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export const Carouse_Btn = () => {
  const images = [
    'https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/61qa3132IFL._SX3000_.jpg',
    

  ]
  return (
    <Swiper
    loop={true}
      spaceBetween={0}
      navigation = {true}
      modules={[Navigation,Autoplay]}
      autoplay={{
        delay:4000
      }}
      className='h-[60vh]'
      // slidesPerView={3}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='basis-[100%] grow-0 shrink-0 min-w-0 border'><img className='w-full h-full object-fit' src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" alt="" /> </SwiperSlide>
      <SwiperSlide className='basis-[100%] grow-0 shrink-0 min-w-0 border'><img className='w-full h-full object-fit' src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" alt="" /></SwiperSlide>
      <SwiperSlide className='basis-[100%] grow-0 shrink-0 min-w-0 border'><img className='w-full h-full object-fit' src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg" alt="" /></SwiperSlide>
      <SwiperSlide className='basis-[100%] grow-0 shrink-0 min-w-0 border'><img className='w-full h-full object-fit' src="https://m.media-amazon.com/images/I/61qa3132IFL._SX3000_.jpg" alt="" /></SwiperSlide>
      
    </Swiper>
  );
};