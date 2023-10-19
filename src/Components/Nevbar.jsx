import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiFillTags } from 'react-icons/ai'
import {BsFillCartFill , BsFillSaveFill} from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'

const Nevbar = () => {
    const [nav, setNav] = useState(false)

    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/* Left side */}
            <div className='flex items-center'>
                <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={30}></AiOutlineMenu>
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Best <span>Eats</span></h1>
                <div className='hidden lg:flex items-center bg-gray-300 rounded-full p-1 text-[14px]'>
                    <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                    <p className='p-2'>Pickup</p>
                </div>
            </div>

            {/* Search Input  */}

            <div className='bg-slate-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25}></AiOutlineSearch>
                <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder='search food' />
            </div>
            {/* Cart button  */}
            <button className='border border-black px-5 py-2 bg-black text-white hidden md:flex items-center rounded-full'>
                <BsFillCartFill size={20} className='mr-2'></BsFillCartFill> Cart
            </button>

            {/* Mobile Menu  */}
            {/* Overlay */}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>
            </div> : ''}
             {/* Side drawer menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>

            <AiOutlineClose onClick={()=> setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer'></AiOutlineClose>
            <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl py-4 flex items-center'><TbTruckDelivery size={25} className='mr-4'></TbTruckDelivery>Orders</li>
                    <li className='text-xl py-4 flex items-center'><MdFavorite size={25} className='mr-4'></MdFavorite>Favorites</li>
                    <li className='text-xl py-4 flex items-center'><FaWallet size={25} className='mr-4'></FaWallet>Wallet</li>
                    <li className='text-xl py-4 flex items-center'><MdHelp size={25} className='mr-4'></MdHelp>Help</li>
                    <li className='text-xl py-4 flex items-center'><AiFillTags size={25} className='mr-4'></AiFillTags>Promotions</li>
                    <li className='text-xl py-4 flex items-center'><BsFillSaveFill size={25} className='mr-4'></BsFillSaveFill>Best Ones</li>
                    <li className='text-xl py-4 flex items-center'><FaUserFriends size={25} className='mr-4'></FaUserFriends>Invite Friends</li>
                </ul>
            </nav>
            </div>
        </div>
    );
};

export default Nevbar;