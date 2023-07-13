import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({children}) => {
    const [isOpenMenu, setOpenMenu] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    // toggle menu for responsive
    const toggleMenu = () => {
        setOpenMenu(!isOpenMenu);
    }
    useEffect(() => {
      const handleScroll = (event) => {
        setScrollTop(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <div  className={`absolute left-0 right-0 z-10 ${scrollTop > 150 ? 'bg-black bg-opacity-75' : ''} ${children !== 'login' ? 'top-6 md:top-14' : 'py-3 w-full bg-black bg-opacity-90'}`}>
        <div className='flex justify-between items-center px-5 md:px-0 max-container py-1'>
        <Link to="/" className='flex gap-2 items-center'>
            <img className='h-14 w-14' src="https://i.ibb.co/G06HxpD/logo.png" alt="" />
            <h1 className='text-white text-xl md:text-3xl font-bold font-mono'>Cooking <span className='primary-color'>Classy</span></h1>
        </Link>
        <FaTimes className={isOpenMenu ? 'md:hidden w-6 h-6 text-white' : 'hidden'} onClick={toggleMenu}></FaTimes>
        <FaBars className={!isOpenMenu ? 'md:hidden w-6 h-6 text-white' : 'hidden'} onClick={toggleMenu}></FaBars>
        <div className={`text-white text-lg font-semibold font-serif ${isOpenMenu ? 'absolute flex flex-col top-14 right-7 bg-black p-4 rounded-lg' : 'md:flex gap-5 items-center hidden'}`}>
            <NavLink to="/" className={({isActive})=> isActive ? 'border-b border-[#E25111]' : 'nav-link-hover'}>Home</NavLink>
            <NavLink to="/menu" className={({isActive})=> isActive ? 'border-b border-[#E25111]' : 'nav-link-hover'}>Menu</NavLink>
            <NavLink to="/my-orders" className={({isActive})=> isActive ? 'border-b border-[#E25111]' : 'nav-link-hover'}>My Orders</NavLink>
            <NavLink to="/about" className={({isActive})=> isActive ? 'border-b border-[#E25111]' : 'nav-link-hover'}>About</NavLink>
            <NavLink to="/contract" className={({isActive})=> isActive ? 'border-b border-[#E25111]' : 'nav-link-hover'}>Contract</NavLink>
        </div>
        </div>
    </div>
    );
};

export default Navbar;