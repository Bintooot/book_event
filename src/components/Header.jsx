import React from 'react'
import radiant_logo from '../assets/logo.png'

const Header = () => {
    return (
        <div>
            <header className='min-h-16 p-4 flex items-center bg-nav-bg-color text-Descrip-text-color gap-4 font-semibold italic text-2xl'>
                <img src={radiant_logo} className='w-[100px]' alt="" />
                <h1>Radiant Reception</h1>
            </header>
        </div>
    )
}

export default Header
