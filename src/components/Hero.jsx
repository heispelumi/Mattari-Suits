import React from 'react'
import hero from '../assets/hero.png'
import heroimage from '../assets/heroimage.png'

const Hero = () => {
  return (
    <div name='/' className="w-full h-screen   overflow-hidden  relative">
     <div className='absolute w-full h-full bg-gradient-to-r from-black/30 via-black/60 to-black/90"'></div>
      <img src={hero} className="w-full h-full  object-cover " alt="/" />
      
      <div className='container px-4 sm:px-0  md:px-8 sm:pb-[250px] over-flow:hidden h-full w-full top-0 left-0 absolute'>
        <div className='w-full h-full flex px-3 flex-col justify-center items-start text-left text-white '>
       <div className='sm:w-[550px] w-[320px] h-[78px] '>
          <p className='sm:text-[18px] text-[14px] -mb-4  text-[#F9DEA5] '>Mattari Suits</p>
          <h1 className="sm:text-[64px] text-[32px] sm:font-bold ">Suit Up, <span className='text-[#F9DEA5]'>Level Up</span> </h1>
          <p className="sm:text-[18px] text-[14px] sm:w-[300px] sm:h-[78px] ">Unlock your full potential with our handcrafted suits, designed to make a lasting impression</p>
           {/* Hero Button */}
          <div className='py-[50px]'>
          <button className=' bg-[#262126] sm:px-8 px-6  py-4'>
                Schedule a Fitting Today
          </button>
          </div>
       </div>
         
        </div>
        <div className='absolute   bottom-0 right-[-240px]'>
        <img src={heroimage} className="sm:w-[604px] w-[370px] h-[200px] sm:h-[508px] object-cover" alt="/" />
        </div>
      </div>


    </div>
  )
}

export default Hero

