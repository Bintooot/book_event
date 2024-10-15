import React from 'react'
import radiant_logo from '../assets/card.png'
import { Link } from 'react-router-dom'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Login = () => {
    return (
        <div className='flex md:flex-row flex-col gap-16 bg-nav-bg-color justify-center items-center h-screen '>
            <div className='flex items-center gap-5 w-1/2 text-4xl italic'>
                <img src={radiant_logo} className='rounded' alt="" />
            </div>
            <div className=' border-4 border-Descrip-text-color bg-white p-5 rounded-3xl w-[450px]'>
                <div className='mb-6'>
                    <h1 className='text-2xl text-center p-2 font-bold'>LOGIN</h1>
                    <hr />
                </div>
                <div className='drop-shadow-lg'>
                    <form action="" method="post" className='flex flex-col  gap-5'>
                        <label htmlFor="username" className='text-lg'>Username</label>
                        <input className='border-2 p-2 rounded-md' type="text" id='username' name='username' />
                        <label htmlFor="password" className='text-lg'>Password</label>
                        <input className='border-2 p-2 rounded-md' type="password" id='paswword' name='password' />
                    </form>
                </div>
                <div className='text-center text-Descrip-text-color cursor-pointer mt-7 bg-nav-bg-color rounded-md font-semibold p-2 hover:text-white hover:bg-Descrip-text-color'>
                    <button>Login</button>
                </div>

                <div className='mt-7 flex justify-center items-center gap-2'>
                    <Link to='/'> <PersonOutlineIcon className='cursor-pointer' /></Link>
                    <h2>Don't have an <strong>Admin</strong> account yet?</h2>
                    <Link to='/admin_signup'> <a href="#" className='underline hover:text-Descrip-text-color'>Sign up.</a></Link>
                </div>
            </div>
        </div>
    )
}

export default Login
