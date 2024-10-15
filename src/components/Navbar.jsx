import React, { useState } from 'react'
import radiant_logo from '../assets/logo.png'
import menu_icon from '../assets/menu.png'
import { Link } from "react-router-dom";

const Navbar = () => {

    const [closeMenu, setOpenMenu] = useState(false)

    return (
        <div className='bg-nav-bg-color text-nav-text-color max-w-full px-[50px] py-3'>
            <nav className='flex justify-between text-center items-center font-semibold text-xl '>
                <div>
                    <Link to="/"><img src={radiant_logo} className='w-[80px]' alt="logo.png" /></Link>
                </div>
                <div className=''>
                    <ul className='hidden md:flex gap-14 pt-2'>
                        <li className='hover:text-black hover:bg-yellow-300 rounded transition-all p-2'><Link to="/">Home</Link></li>
                        <li className='hover:text-black hover:bg-yellow-300 rounded transition-all p-2'><Link to="/event">Events</Link></li>
                        <li className='hover:text-black hover:bg-yellow-300 rounded transition-all p-2'><Link to="/gallery">Gallery</Link></li>
                        <li className='hover:text-black hover:bg-yellow-300 rounded transition-all p-2'><Link to="/about_us">About us</Link></li>
                    </ul>
                </div>
                <div className='md:hidden cursor-pointer' onClick={() => setOpenMenu(!closeMenu)}>
                    <img src={menu_icon} className='w-10' alt="menu.png" />
                </div>

                <div className={`z-20 absolute md:hidden left-0 top-[12%] w-full flex flex-col items-center bg-nav-bg-color gap-5 p-1 font-semibold text-lg transform transition-transform ${closeMenu ? "opacity-100" : "opacity-0"}`}>
                    <li className='list-none w-full text-center  hover:text-black hover:bg-yellow-300 cursor-pointer transition-all p-2'><Link to="/">Home</Link></li>
                    <li className='list-none w-full text-center  hover:text-black hover:bg-yellow-300 cursor-pointer transition-all p-2'><Link to="/event">Events</Link></li>
                    <li className='list-none w-full text-center  hover:text-black hover:bg-yellow-300 cursor-pointer transition-all p-2'><Link to="/gallery">Gallery</Link></li>
                    <li className='list-none w-full text-center  hover:text-black hover:bg-yellow-300 cursor-pointer transition-all p-2'><Link to="/about_us">About us</Link></li>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
