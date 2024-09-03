import React from 'react'
import { FaRadio } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";

import heroimage from '../assets/heroimage.png'

const Footer = () => {
  return (
    <div name='contact'>
      <footer className='text-white h-[478px] w-full bg-black   '>
        <div className=' container '>
     {/* top footer */}
      <div className='grid  md:grid-cols-3'>
      <div className=' '>

        <div className='flex items-center'> 
      <div 
            className='w-[82px] h-[163px] bg-[#262126] flex items-center justify-center'
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)' }}
          >
            <img className='w-[76px] h-[64px] object-cover' src={heroimage} alt="" />
          </div>
          <div className='pt-[23px]'>
            <p className='text-primary ml-3'>Mattari Suits</p>
          </div>

        </div>
     
         

          <div className='py-6 w-[326px] space-y-4'>
          <div className='flex text-[15px] items-center gap-3 '>
      
          <p className='flex text-[20px] items-center gap-3 '>Contact us</p>
          </div>


          <div className='flex items-center gap-3 mt-3 '>
          <IoCallSharp className="text-primary"/>
          <p className='flex text-[15px] items-center gap-3 '>+1 (212) 123-4567</p>
          </div>

          <div className='flex text-[15px] items-center gap-3 '>
          <MdEmail className="text-primary"/>
          <p className='flex text-[15px] items-center gap-3 '>mailto:info@mattari.com</p>
          </div>

          <div className='flex items-center gap-3 mt-3 '>
          <FaRadio className="text-primary"/>
          <p className='flex text-[15px] items-center gap-3 ' >1 (212) 123-4568</p>
          </div>


          <div className='flex items-center gap-3 mt-3 '>
          <FaLocationDot className="text-primary" />
          <p className='flex items-center gap-3 mt-3 '>123 Main St, Suite 456, New York, NY 10001</p>
          </div>
          </div>


          </div>

          <div className='grid grid-cols-2 sm:grid sm:grid-cols-3 px-3 py-6 col-span-2 md:pl-[56px] '>
            
                 <div className="pt-[50px]">
                  <h1 className='mb-3 text-justify text-[20px]  font-bold sm:text-left'>Quick Links</h1>
                    <div className='flex flex-col text-[15px] space-y-2  md:space-y-4'>
                      <Link>About us</Link>
                      <Link>Our story</Link>
                      <Link>Collection</Link>
                      <Link>Accessories</Link>
                      <Link>Custom suits</Link>
                    </div>
                  </div>
                 <div className="pt-[50px]" >
                 <h1 className='mb-3 text-justify text-[18px] font-bold sm:text-left'>Customer Service</h1>
                 <div className='flex flex-col  text-[15px] space-y-4'>
                 <Link>FAQ</Link>
                  <Link>Return & Exchange</Link>
                  <Link>Shipping & Delivery</Link>
                  <Link>Payment Option</Link>
                  <Link>Terms and Condition</Link>
                   </div>
                 </div>


                 <div className='pt-[35px]'>
            
                 <div className='flex text-primary pt-4 space-x-2 sm:space-x-4 text-2xl '>
                 <FaInstagram />
                 <FaXTwitter />
                 <CiFacebook />
                 <FaLinkedin />

                 </div>
                 </div>
          </div> 
      
      </div>






 
        </div>

      
        <div className='h-[128px] w-full bg-primary flex items-center justify-center'>
   <h1 className='md:text-[18px] text-[14px] text-black'>Copyright@ Mattari Suits. All rights reserved</h1>
    </div>

      
 
       </footer>
    </div>
  )
}

export default Footer
