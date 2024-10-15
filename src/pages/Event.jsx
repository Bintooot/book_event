import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import bgWedding from '../assets/bgWedding.jpg'
import bgBirthday from '../assets/bgbd.jpg'
import bgbd from '../assets/bd.jpg'
import { Link } from 'react-router-dom'

function Event() {
    return (
        <div className='min-h-screen bg-background-color'>
            <Navbar />
            <main className='p-3'>
                <div className='text-Descrip-text-color text-center text-4xl italic mb-2'>
                    <h1>SELECT A TYPE OF EVENT</h1>
                </div>
                <div className='flex md:flex-row flex-col gap-5 items-center justify-center p-3 text-white text-center '>
                    <div className=' h-[70vh] w-[460px] bg-cover rounded-2xl  border-2 border-Descrip-text-color transition-transform duration-300 hover:scale-105 cursor-pointer' style={{ backgroundImage: `url(${bgWedding})` }} >
                        <div className='abulote inset-0 w-full h-full rounded-2xl bg-gradient-to-b from-transparent flex flex-col justify-around to-black p-5'>
                            <div className='text-4xl font-semibold italic'>
                                <h2>WEDDING</h2>
                            </div>
                            <div className='italic'>
                                <h2>"Let radiantReception guide you through every detail of your wedding planning, turning your dream day into a stunning reality!"</h2>
                            </div>
                            <div>
                                <Link to='/wedding_plan'><button className='bg-nav-text-color mt-5 text-black px-7 py-2 rounded-full'>View</button></Link>
                            </div>

                        </div>
                    </div>
                    <div className=' h-[70vh] w-[460px] bg-cover rounded-2xl transition-transform duration-300 hover:scale-105 cursor-pointer' style={{ backgroundImage: `url(${bgBirthday})` }} >
                        <div className='abulote inset-0 w-full h-full border-2 border-Descrip-text-color rounded-2xl bg-gradient-to-b from-transparent to-black p-5 flex flex-col justify-around'>
                            <div className='text-4xl font-semibold italic'>
                                <h2 >BIRTHDAY</h2>
                            </div>
                            <div className='italic'>
                                <h2>"Let radiantReception handle every detail of your birthday celebration, turning your special day into an unforgettable experience!"</h2>
                            </div>
                            <div>
                                <Link to='/birthday_plan'><button className='bg-nav-text-color mt-5 text-black px-7 py-2 rounded-full'>View</button></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <hr />
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Event
