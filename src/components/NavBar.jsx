
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import heroimage from '../assets/heroimage.png';
import { CiFacebook } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setDropdownOpen(false);
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [nav]);

  return (
    <div className='w-full container overflow-hidden absolute z-20 flex justify-between items-center h-24'>
      {/* Desktop View */}
      <div className='w-full mx-auto p-3 flex justify-between items-center'>
        {/* Brand Logo */}
        <div className='flex py-8'>
        <div
                  className="w-[82px] h-[163px]  flex items-center justify-center"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 100%)" }}
                >
                  <img
                    className="w-[76px] h-[64px] object-cover"
                    src={heroimage}
                    alt=""
                  />
                </div>
          {/* Menu Links for Desktop */}
          <div className='hidden ml-[60px] sm:flex items-center lg:text-[15px] md:text-[12px] space-x-6 md:space-x-4 text-white'>
            <Link to="/" spy={true} smooth={true} offset={50} duration={500} className='hover:text-[#F9DEA5]'>Home</Link>
            <Link to="shop" spy={true} smooth={true} offset={50} duration={500} className='hover:text-[#F9DEA5]'>Shop</Link>
            <Link to="accessories" spy={true} smooth={true} offset={50} duration={500} className='hover:text-[#F9DEA5]'>Accessories</Link>
            <Link to="service" spy={true} smooth={true} offset={50} duration={500} className='hover:text-[#F9DEA5]'>Service</Link>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className='hover:text-[#F9DEA5]'>Contact</Link>
          </div>
        </div>

        {/* Buttons for Desktop */}
        <div className='hidden sm:flex pt-[32px] md:pt-0 md:text-[10px] lg:text-[15px] space-x-4'>
          <button className='text-white px-6 py-1 border lg:px-6 lg:py-2 border-[#F9DEA5]'>Sign in</button>
          <button className='px-6 py-1 border lg:px-6 lg:py-2 text-black bg-[#F9DEA5]'>Sign up</button>
        </div> 

        {/* Mobile Menu Button */}
        <div className='flex sm:hidden'>
          <CiMenuFries onClick={() => setNav(!nav)} size={30} className="text-white cursor-pointer" />
        </div>
      </div>

      {/* Overlay */}
      {nav && <div className="bg-black/80 fixed top-0 left-0 w-full h-screen z-20"></div>}

      {/* Top-Sliding Navigation for Mobile */}
      <div className={nav ? 'fixed top-0 left-0 h-screen w-full bg-[#262126] text-white flex flex-col justify-between items-center z-30 duration-300' : 'fixed top-[-100%] left-0 bg-[#262126] h-full w-full z-10 duration-300'}>
        <AiOutlineClose onClick={() => setNav(!nav)} className='absolute top-12 right-12 w-[18.3px] h-[18.3px] cursor-pointer' />

        {/* Centered Navigation Links */}
        <div className='flex pt-[100px] flex-col items-center space-y-6'>
          <Link onClick={() => setNav(false)} className='text-[20px] hover:text-primary'>Home</Link>

          <div className='relative group'>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className='flex hover:text-primary text-[20px] items-center'>
              Shop
              <span>
                <RiArrowDropDownLine size={30}
                  className={`transition-all mt-2 duration-200 ${dropdownOpen ? 'rotate-180 text-white' : ''}`}
                />
              </span>
            </button>
            {dropdownOpen && (
              <div className="absolute -right-14 rounded z-30 mt-2 w-[200px] p-2 ease-in-out duration-300 text-black bg-white">
                <div className="flex justify-center items-center">
                  <Link className="block text-[15px] py-2">Custom fitting</Link>
                </div>
                <div className='flex justify-center items-center'>
                  <Link className="block py-2 text-[15px]">Pre-made</Link>
                </div>
              </div>
            )}
          </div>
          <Link onClick={() => setNav(false)} className='text-[20px] hover:text-primary'>Accessories</Link>
          <Link onClick={() => setNav(false)} className='text-[20px] hover:text-primary'>Service</Link>
          <Link onClick={() => setNav(false)} className='text-[20px] hover:text-primary'>Contact</Link>
        </div>
          
        {/* Buttons for Mobile */}
        <div className='flex flex-col items-center py-7 space-y-6'>
          <button className='text-[20px] px-[100px] py-[7px] border rounded-md border-white'>Sign in</button>
          <button className='bg-[#F9DEA5] text-[20px] text-black px-[100px] py-[10px] border rounded-md'>Sign up</button>
        </div>

        {/* Socials at the Bottom */}
        <div className='flex items-center justify-center space-x-4 mt-auto z-20'>
          <CiFacebook className='w-[24px] h-[24px]' />
          <RiTwitterXFill className='w-[24px] h-[24px]' />
          <FaInstagram className='w-[24px] h-[24px]' />
          <CiLinkedin className='w-[24px] h-[24px]' />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
