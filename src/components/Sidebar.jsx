import React from 'react'
import radiant_logo from '../assets/logo.png'
import { SidebarData } from './SidebarData'
import { Link, useLocation } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

const YourComponent = ({ items }) => {
    const location = useLocation;
}

const sidebar = () => {
    return (
        <div className='bg-nav-bg-color h-full p-2 w-20 md:w-64 flex flex-col justify-between'>
            <div>
                <div className='flex items-center p-2 gap-2 text-Descrip-text-color italic'>
                    <img src={radiant_logo} className='w-[40px] md:w-[80px]' alt="logo.png" />

                    <h1 className='hidden md:block'>Radiant Reception</h1>
                </div>
                <hr />
                <div className='overflow-y-auto'>
                    <ul className='text-Descrip-text-color pt-2'>
                        {SidebarData.map((val, key) => {
                            return (
                                <Link to={val.link} key={key}>
                                    <li className={`flex gap-2 p-4 items-center cursor-pointer 
                            ${location.pathname === val.link ? 'bg-Descrip-text-color text-white' : 'hover:bg-Descrip-text-color hover:text-white'}`}>
                                        <div className='text-center'>
                                            {val.icon}
                                        </div>

                                        <div className='hidden md:block'>
                                            {val.title}
                                        </div>
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
            </div>

            {/* Bottom section with admin and logout */}
            <div className='text-white items-center p-4 flex md:flex-row flex-col gap-6 justify-between'>
                <div className='flex gap-2'>
                    <PersonIcon />
                    {/* Username visible only on larger screens */}
                    <h2 className='hidden md:block'>Admin Username</h2>
                </div>
                <div className='cursor-pointer text-red-600'>
                    <Link to='/admin_login'>
                        <LogoutIcon />
                    </Link>
                </div>
            </div>
        </div>


    )
}

export default sidebar
