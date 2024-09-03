import React from 'react'
import acessory1 from '../assets/acessory1.jpg'
import accessory2 from '../assets/accessory2.jpg'
import accessory3 from '../assets/accessory3.jpg'
import accessory4 from '../assets/accessory4.jpg'




const Accesories = () => {
  return (
    <div className='py-[60px] w-full bg-secondary' >
      <div className='flex items-center justify-center '>
      <h1 className='text-[24px] py-[60px] text-white'>Accessories</h1>
      </div>



      <div className='sm:container grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 '>
        {/* First Column */}
       <div className=' w-full col-span-1 md:col-span-2 lg:col-span-2'>
       <div className='flex flex-col'>
       <div className='absolute w-full md:w-[694px] h-[1038px] bg-gradient-to-r from-black/30 to-black/60"'></div>
            <img className='w-[full] md:w-[694px] h-[346px] object-cover' src={acessory1} alt="/" />
            <img className=' w-[full] md:w-[694px] h-[346px]  object-cover' src={accessory3} alt="/" />
            <img className='w-[full] md:w-[694px] h-[346px] object-cover' src={accessory2} alt="/" />
          </div>
       </div>

      
       <div className='relative  col-span-2 grid grid-cols-1 sm:grid-cols-1  w-full overflow-hidden '>
       <div className='absolute w-[702px]  h-[1038px] bg-gradient-to-r  from-black/30 to-black/60"'></div>
          <img className='md:w-[702px]  md:h-[1038px] h-[668px]  object-cover' src={accessory4} alt="/" />
          <div className='bg-black/60 absolute bottom-0 w-full  sm:h-[63px]'>
          <div className='flex items-center py-3 justify-center'>
                  <button className='text-white  text-sm border border-primary w-[164px] h-[32px]'>Learn More</button>
                </div>
          </div>
        
        </div>

      </div>
    </div>
  )
}

export default Accesories
