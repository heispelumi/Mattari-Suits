import React from 'react';
import heroimage from '../assets/heroimage.png';
import offer from '../assets/offer.png';
import { MdKeyboardArrowRight } from "react-icons/md";

const Offers = () => {
  return (
    <div className='pt-[120px] w-full bg-secondary'>
      <div className='  relative flex justify-between bg-[#131313] items-center h-[456px] px-4 md:px-[60px]'>
        {/* Text and button section */}
        <div className='  container z-10 w-[450px]'>
          <button className='text-white border border-primary text-sm  px-3 py-2  md:px-6 md:py-2'>Special Offer</button>
          <p className='md:text-[30px] text-[20px] text-white pt-6 '>Mattari PL Original Gold Vein</p>
          <div className='flex flex-col py-2  md:py-2 text-primary'>
            <p className='md:text-[100px] text-[40px] leading-none '>20 %</p>
            <p className='md:text-[30px] text-[15px]  '>Off</p>
          </div>
          <div className='flex text-white absolute bottom-12'>
            <p className='text-[16px] flex items-center mr-3'>Learn More </p>
            <span><MdKeyboardArrowRight className='w-[14px] h-[28px]' /> </span>
          </div>
        </div>

        {/* Image section */}
        <div className='relative space-x-12 flex'>
          {/* First image  */}
          <div className='relative top-1/2 md:top-[120px] z-20 hidden  md:flex -right-[80px] h-[100px] md:w-[504px] md:h-[424px]'>
  <img
    className='absolute  flex w-[full]  h-[180px]  inset-0 md:w-[504px] md:h-[424px]  border-none object-cover'
    src={heroimage}
    alt="/"
  />
  <div className='absolute set-0 '></div> {/* Dark overlay */}
</div>


          {/* Second image without gradient */}
          <div className='relative'>
            <img
              className='w-[600px] hidden md:flex  h-[450px] sm:w-[386px] sm:h-[659px]'
              src={offer}
              alt="Offer"
            />
          </div>
        </div>
      </div>


      {/* Subscribe */}
      <div className='bg-[#1F1F1F] flex items-center justify-center overflow-x-hidden w-full h-[628px]'>
  <div className='flex flex-col items-center'>
    <img className='block w-[106px] h-[90px]' src={heroimage} alt="" />
    <div className='text-[66px] flex  text-primary  flex-col items-center w-[full] h-[full] mt-4'>
      <p className='leading-tight'>Mattari</p>
      <p className='leading-tight' >Suits</p>
    </div>
    <div className='mt-3 text-primary text-[15px]'>
        <h2>Where Style Meets Substance </h2>
    </div>
  </div>
</div>
 
     {/* Newsletter */}
     
    <div className='h-[300px] md:h-[500px] flex   px-4 bg-secondary w-full'>
          <div className=' items-center justify-center w-full h-full  md:px-0   grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-2'>
              <div className='flex flex-col  items-center'>
                <div className='md:px-[80px] '>
                <h1 className='md:w-[559px] w-[250px] md:h-full md:text-[43px] text-primary '>
                    Subscribe for daily updates 
                </h1>
                <p className='md:text-[20px] text-[12px] md:pt-3 text-white w-[260px] py-3 md:py-0 md:w-[510px] md:h-[87px]'>Stay ahead of the curve with exclusive updates, promotions, and style tips from Mattar</p>
                </div>

            <div>
            </div>
              <div className='flex px-6 items-center absolute pt-[100px] md:pt-0 md:right-12'>
                <h1> <input className='md:w-[443px] w-[180px] p-3 md:p-8' type="text" placeholder='Enter email'  /><span className='bg-primary p-3 md:p-8 w-[30px] md:w-[164px]'> <button className='md:text-[18px] text-[12px]'>Subscribe</button>  </span></h1>
           
              </div>
              </div>

          </div>
    </div>


    </div>
  );
}

export default Offers;
