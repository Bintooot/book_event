import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import wed1 from '../assets/wedpic/wed1.jpg'
import wed2 from '../assets/wedpic/wed2.jpg'
import wed3 from '../assets/wedpic/wed3.jpg'
import wed4 from '../assets/wedpic/wed4.jpg'
import wed5 from '../assets/wedpic/wed5.jpg'
import wed6 from '../assets/wedpic/wed6.jpg'
import wed7 from '../assets/wedpic/wed7.jpg'
import wed8 from '../assets/wedpic/wed8.jpg'
import wed9 from '../assets/wedpic/wed9.jpg'
import wed10 from '../assets/wedpic/wed10.jpg'
import wed11 from '../assets/wedpic/wed11.jpg'
import wed12 from '../assets/wedpic/wed12.jpg'
import wed13 from '../assets/wedpic/wed13.jpg'
import wed14 from '../assets/wedpic/wed14.jpg'

import birt1 from '../assets/birthpic/birt1.jpg'
import birt2 from '../assets/birthpic/birt2.jpg'
import birt3 from '../assets/birthpic/birt3.jpg'
import birt4 from '../assets/birthpic/birt4.jpg'
import birt5 from '../assets/birthpic/birt5.jpg'
import birt6 from '../assets/birthpic/birt6.jpg'
import birt7 from '../assets/birthpic/birt7.jpg'
import birt8 from '../assets/birthpic/birt8.jpg'
import birt9 from '../assets/birthpic/birt9.jpg'
import birt10 from '../assets/birthpic/birt10.jpg'
import birt11 from '../assets/birthpic/birt11.jpg'
import birt12 from '../assets/birthpic/birt12.jpg'
import birt14 from '../assets/birthpic/birt14.jpg'


import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export const data = [
    { id: 1, img: wed1 },
    { id: 2, img: wed2 },
    { id: 3, img: wed3 },
    { id: 4, img: wed4 },
    { id: 5, img: wed5 },
    { id: 6, img: wed6 },
    { id: 7, img: wed7 },
    { id: 8, img: wed8 },
    { id: 9, img: wed9 },
    { id: 10, img: wed10 },
    { id: 11, img: wed11 },
    { id: 12, img: wed12 },
    { id: 13, img: wed13 },
    { id: 14, img: wed14 },
];

export const birtdata = [
    { id: 1, img: birt1 },
    { id: 2, img: birt2 },
    { id: 3, img: birt3 },
    { id: 4, img: birt4 },
    { id: 5, img: birt5 },
    { id: 6, img: birt6 },
    { id: 7, img: birt7 },
    { id: 8, img: birt8 },
    { id: 9, img: birt9 },
    { id: 10, img: birt10 },
    { id: 11, img: birt11 },
    { id: 12, img: birt12 },
    { id: 14, img: birt14 },

];


function Gallery() {


    const wed_slideLeft = () => {
        var slider = document.getElementById('W_slider');
        slider.scrollLeft = slider.scrollLeft - 420;
    };

    const wed_slideRight = () => {
        var slider = document.getElementById('W_slider');
        slider.scrollLeft = slider.scrollLeft + 420;
    };


    const birt_slideLeft = () => {
        var slider = document.getElementById('B_slider');
        slider.scrollLeft = slider.scrollLeft - 425;
    };

    const birt_slideRight = () => {
        var slider = document.getElementById('B_slider');
        slider.scrollLeft = slider.scrollLeft + 425;
    };
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <main>
                <div className='justify-center items-center m-2 flex'>
                    <h1 className='text-4xl font-semibold italic text-Descrip-text-color  '>GALLERY</h1>
                </div>
                <h1 className='my-5 text-Descrip-text-color text-4xl italic ml-10'><strong>Weddings</strong></h1>
                <div className='relative flex items-center'>
                    <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={wed_slideLeft} size={40} />

                    <div id='W_slider'
                        className='w-full h-full py-6 bg-gray-950 rounded-md overflow-x-scroll scroll whitespace-nowrap scroll-smooth '>
                        {data.map((item) => (
                            <img src={item.img} alt={`Wedding Image ${item.id}`} className="object-cover w-[425px] h-[400px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-3xl" />
                        ))}
                    </div>
                    <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={wed_slideRight} size={40} />
                </div>

                <div className='my-5'>
                    <h1 className='text-Descrip-text-color text-4xl italic ml-10'><strong>Birthdays</strong></h1>
                </div>
                <div className='relative flex items-center'>
                    <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={birt_slideLeft} size={40} />
                    <div id='B_slider'
                        className='w-full h-full py-6  bg-gray-950 rounded-md overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
                        {birtdata.map((item) => (
                            <img src={item.img} alt={`Wedding Image ${item.id}`} className="object-cover w-[425px] h-[400px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-3xl" />
                        ))}
                    </div>
                    <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={birt_slideRight} size={40} />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>

        </div>
    );
}

export default Gallery
