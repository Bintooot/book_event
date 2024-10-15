import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='font-light text-white text-center p-2 bg-nav-bg-color'>
            <footer>
                <div className='mb-4 flex gap-2 justify-center items-center'>
                    <div>
                        <Link to='/admin_login'><PersonOutlineIcon /></Link>
                    </div>
                    <div>
                        <i>Developed by: CCE106-5ENGR's</i>
                    </div>
                </div>
                <div className='flex cursor-pointer  gap-5 justify-center'>
                    <div className=' hover:underline '>
                        <FacebookIcon /> <h3>Facebook</h3>
                    </div>
                    <div className=' hover:underline '>
                        <EmailIcon /> <h3>Email</h3>
                    </div>
                    <div className=' hover:underline '>
                        <XIcon />  <h3>X</h3>
                    </div>
                    <div className=' hover:underline '>
                        <InstagramIcon /> <h3>Instagram</h3>
                    </div>
                    <div className=' hover:underline '>
                        <PhoneIcon /> <h3>09932135623</h3>
                    </div>


                </div>
            </footer >
        </div >
    )
}

export default Footer
