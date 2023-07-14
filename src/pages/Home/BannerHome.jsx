import React from 'react';
import { Link } from 'react-router-dom';

const BannerHome = () => {
    return (
        <div className="w-full h-[100vh] bg-[url('https://i.ibb.co/Ms7FXkY/bannner2.jpg')] bg-no-repeat bg-cover bg-blend-overlay bg-center ">
        <div className='bg-black w-full h-[100vh] bg-opacity-30'>
            <div className='flex flex-col justify-center items-center lg:items-start h-[75%] md:h-[82%] max-container px-5 lg:px-0 text-center lg:text-left'>
                <h1 className="text-white text-3xl md:text-6xl font-bold ">YOUR TRUSTED THE BEST <br /> <span className='primary-color'>RESTAURANT & MENU'S</span> </h1>
                <p className='max-w-[500px] text-white my-4 font-mono'>At Food Panshi, We provide you best quality food. That's why, for over three decades, our editors have devoted countless hours and thousands of meals to scouting and discovering the most talented  in the world.</p>
                <Link to="/menu" className='nav-link-hover font-semibold text-base text-white bg-[#E25111] bg-opacity-90 px-5 py-2 font-serif'>
                    <button className='px-2 py-1'>GET MENU</button>
                </Link>
            </div>
            <div className='bg-black w-full h-fit max-container rounded-2xl bg-opacity-40 grid grid-cols-3 gap-4 md:gap-8 p-3 md:p-7'>
                <div>
                    <div className='w-[50%] h-[2px] bg-[#E25111]'></div>
                    <h1 className='text-white text-xl md:text-2xl font-bold font-serif mt-2'>FISH STEAK</h1>
                    <p className='text-white text-sm md:text-base'>We have best chefs for cooking fish steak.</p>
                </div>
                <div>
                    <div className='w-[50%] h-[2px] bg-[#E25111]'></div>
                    <h1 className='text-white text-xl md:text-2xl font-bold font-serif mt-2'>CHICKEN STEAK</h1>
                    <p className='text-white text-sm md:text-base'>We have a experience for cooking chicken steak.</p>
                </div>
                <div>
                    <div className='w-[50%] h-[2px] bg-[#E25111]'></div>
                    <h1 className='text-white text-xl md:text-2xl font-bold font-serif mt-2'>VEGETABLE STEAK</h1>
                    <p className='text-white text-sm md:text-base'>We are expert for maintain vegetable steak.</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default BannerHome;