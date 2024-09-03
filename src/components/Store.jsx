import React, { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import storelogo from '../assets/storelogo.png';
import store1 from '../assets/store1.png';
import store2 from '../assets/store2.png';
import store3 from '../assets/store3.png';
import store4 from '../assets/store4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";

const Store = () => {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    swiperRef.current.swiper.slidePrev(); 
  };

  const handleNextClick = () => {
    swiperRef.current.swiper.slideNext(); 
  };

  return (
    <div ='shop' className='py-[30px] w-full ' style={{ backgroundColor: '#262126' }}>
      <div className='flex items-center -ml-[25px] flex-col py-[60px] justify-center'>
        <h1 className='text-[24px] text-white -mb-3'>Mattari Store</h1>
        <img className='w-[120px] -ml-[15px]  h-[74px]' src={storelogo} alt="Store Logo" />
      </div>

      <div className='sm:container md:w-[1074px] items-center justify-center  w-full  h-[490px] relative'>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
          <MdKeyboardArrowLeft className="text-primary w-[24px] h-[48px]" onClick={handlePrevClick} />
        </div>

        <Swiper
          modules={[Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
         slidesPerView={1} 
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
breakpoints={{
    898: {
      slidesPerView: 3, 
    },
  }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="mySwiper"
          ref={swiperRef}
        >
       

   

  

          <SwiperSlide>
            <div className="slide-content relative md:w-[334px] w-[248px] h-[490px] group">
              <div className='absolute inset-0  w-[248px] h-[332px] translate-y-1/2 bg-transparent group-hover:bg-[#F9DEA5] transition-all duration-300 z-0'></div>
               <div className='w-[248px]  text-white  group-hover:text-black  h-[468px]'>    
                <img className='relative w-[248px] h-[345px] object-cover z-10' src={store1} alt="Slide 4" />
              <div className='absolute bottom-0  left-0 text-center    justify-center items-center '>
                <div className='w-[248px] mx-auto h-full flex items-center   flex-col'> 
                <p className='flex text-center  justify-center  '>Mattari P. Original  Blue </p>
                 <p className='pt-2'>$ 150</p>
                 <div className='flex items-center  w-[248px] mx-auto h-[full] justify-center'>
                    <div className='flex items-center space-x-14 justify-between'>
                    <p>View</p>
                             <p className='flex  items-center'><MdShoppingCart className='mr-2'/>Add</p>
                    </div>
                 </div>
                </div>
              </div>   
             </div>  
            
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="slide-content relative md:w-[334px] w-[248px] h-[490px] group">
              <div className='absolute inset-0  w-[248px] h-[332px] translate-y-1/2 bg-transparent group-hover:bg-[#F9DEA5] transition-all duration-300 z-0'></div>
               <div className='w-[248px]  text-white  group-hover:text-black  h-[468px]'>    
                <img className='relative w-[248px] h-[345px] object-cover z-10' src={store2} alt="Slide 4" />
              <div className='absolute bottom-0  left-0 text-center     justify-center items-center '>
                <div className='w-[248px] mx-auto h-[full]  flex items-center   flex-col'> 
                <p className='flex text-center  justify-center  '>Mattari P. Original  Black</p>
                 <p className='pt-2'>$ 150</p>
                 <div className='flex items-center  w-[248px] mx-auto h-[full] justify-center'>
                    <div className='flex items-center space-x-14 justify-between'>
                    <p>View</p>
                    <p className='flex  items-center'><MdShoppingCart className='mr-2'/>Add</p>
                    </div>
                 </div>
                </div>
              </div>   
             </div>  
            
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-content relative md:w-[334px] w-[248px] h-[490px] group">
              <div className='absolute inset-0  w-[248px] h-[332px] translate-y-1/2 bg-transparent group-hover:bg-[#F9DEA5] transition-all duration-300 z-0'></div>
               <div className='w-[248px]  text-white  group-hover:text-black  h-[468px]'>    
                <img className='relative w-[248px] h-[full] object-cover z-10' src={store3} alt="Slide 4" />
              <div className='absolute bottom-0  left-0 text-center     justify-center items-center '>
                <div className='w-[248px] mx-auto h-[full]  flex items-center   flex-col'> 
                <p className='flex text-center  justify-center  '>Mattari P. Original  Black</p>
                 <p className='pt-2'>$ 150</p>
                 <div className='flex items-center  w-[248px] mx-auto h-[full] justify-center'>
                    <div className='flex items-center space-x-14 justify-between'>
                    <p>View</p>
                    <p className='flex  items-center'><MdShoppingCart className='mr-2'/>Add</p>
                    </div>
                 </div>
                </div>
              </div>   
             </div>  
            
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="slide-content relative md:w-[334px] w-[248px] h-[490px] group">
              <div className='absolute inset-0  w-[248px] h-[332px] translate-y-1/2 bg-transparent group-hover:bg-[#F9DEA5] transition-all duration-300 z-0'></div>
               <div className='w-[248px]  text-white  group-hover:text-black  h-[468px]'>    
                <img className='relative w-[248px] h-[345px] object-cover z-10' src={store4} alt="Slide 4" />
              <div className='absolute bottom-0  left-0 text-center     justify-center items-center '>
                <div className='w-[248px] mx-auto h-[full]  flex items-center   flex-col'> 
                <p className='flex text-center  justify-center  '>Mattari P. Original  Black</p>
                 <p className='pt-2'>$ 150</p>
                 <div className='flex items-center  w-[248px] mx-auto h-[full] justify-center'>
                    <div className='flex items-center space-x-14 justify-between'>
                    <p>View</p>
                    <p className='flex  items-center'><MdShoppingCart className='mr-2'/>Add</p>
                    </div>
                 </div>
                </div>
              </div>   
             </div>  
            
            </div>
      </SwiperSlide>

        </Swiper>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
          <MdKeyboardArrowRight className="text-primary w-[24px] h-[48px]" onClick={handleNextClick} />
        </div>
      </div>
    </div>
  );
};

export default Store;


