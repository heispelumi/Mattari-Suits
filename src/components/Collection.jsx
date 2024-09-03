
import React from 'react';
import category1 from '../assets/category1.png';
import category2 from '../assets/category2.png';
import category5 from '../assets/category5.png';
import category3 from '../assets/category3.png';
import category6 from '../assets/category6.png';
import catvid from '../assets/catvid.mp4';

const Collection = () => {
  return (
    <div className='py-[60px] bg-secondary'>
      <div className='flex items-center justify-center py-[60px]'>
        <h1 className='text-[24px] text-white'>Latest Collection</h1>
      </div>
    
      <div className='sm:container grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 '>
        {/* First Column - Single Image */}
        <div className='relative  w-full col-span-1 md:col-span-2 lg:col-span-2'>
          <img className='md:w-[686px] w-full sm:h-[692px]  object-cover' src={category1} alt="/" />
          <div className='bg-black/60 absolute bottom-0 w-full  sm:h-[177px]'>
            <div className='flex items-center justify-center flex-col py-8 space-y-6 text-white'>
              <p className='text-[24px]'>Mattari Winter Suit</p>
              <p className="text-primary">Year Collection</p>
            </div>
          </div>
        </div>

        {/* Second and Third Columns */}
        <div className='col-span-2 grid grid-cols-1 sm:grid-cols-2 overflow-hidden '>

          <div className='flex w-full flex-col'>
            <img className='md:w-[371px] w-full h-[346px] object-cover' src={category2} alt="/" />
            <img className='md:w-[371px] w-full h-[346px] object-cover' src={category5} alt="/" />
          </div>

          <div className='flex flex-col'>
            <img className='md:w-[371px] w-full h-[346px] object-cover' src={category3} alt="/" />
            <div className='relative'>
              <img className='md:w-[371px] w-full h-[346px] object-cover' src={category6} alt="/" />
              <div className='absolute bottom-9 w-full'>
                <div className='flex items-center justify-center'>
                  <button className='text-white border border-primary px-4 py-2'>See More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* Video Section */}
       <div className='relative'>
        <video
          className='w-full h-full'
          src={catvid}
          autoPlay
          muted
          loop
          poster="path_to_poster_image.jpg"
        />
        <div className='absolute inset-0 bg-black/50'></div> {/* Overlay */}
      </div>

 

    
    </div>
  );
}

export default Collection;
