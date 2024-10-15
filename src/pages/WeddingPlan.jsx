import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Wedkiss from '../assets/Wedkiss.jpg'
import Holdhands from '../assets/holdhands.jpg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'



const WeddingPlan = () => {

    //Initial =====>>
    const [FullPlan, set_full_plan] = useState(<h2 className='text-Descrip-text-color text-4xl italic'>Full Package (All-Inclusive Wedding Planning)</h2>
    );

    const [Fullinfo, set_full_info] = useState(<h3 className='text-[24px] text-center'>Clients who want a worry-free, fully-managed experience from start to finish.</h3>
    );

    const [Fullfeature, set_full_feature] = useState(<ul className='list-disc ml-6 mt-5'>
        <li className='mb-1'><strong>Initial Consultation & Planning: </strong> Unlimited consultations with our event specialists, in-person or virtual meetings.</li>
        <li className='mb-1'><strong> Venue Selection & Booking:</strong> Assistance with finding and booking the perfect venue that matches your event's theme and size.</li>
        <li className='mb-1'><strong>Decor & Design:</strong>  Comprehensive event styling, including custom theme creation, lighting, florals, and table settings.</li>
        <li className='mb-1'><strong>Catering & Beverages:</strong>  Tailor-made menu options with top caterers, including appetizers, main courses, desserts, and beverages.</li>
        <li className='mb-1'><strong>Entertainment & Performers: </strong> DJs, live bands, emcees, or specialized performers (e.g., magicians, dancers, etc.).</li>
        <li className='mb-1'><strong> Photography & Videography:</strong> Professional photographers and videographers to capture all moments from preparation to the after-party.</li>
        <li className='mb-1'><strong> Guest Management:</strong> Invitations, RSVP tracking, guest seating arrangement, and on-the-day coordination.</li>
        <li className='mb-1'><strong>On-the-Day Coordination:</strong>  A dedicated event coordinator to ensure everything runs smoothly.</li>
        <li className='mb-1'> <strong>Transportation & Accommodation: </strong>Organize guest transport and lodging if needed.</li>
        <li className='mb-1'><strong>Post-Event Services:</strong>  Assistance with clean-up and return of rented equipment.</li>
    </ul>);

    const [FullPrice, set_full_price] = useState(<h2 className='text-[30px]'>₱100,000</h2>);


    //Full Package ==============>>
    const changePlan = () => set_full_plan(<h2 className='text-Descrip-text-color text-4xl italic'>Full Package (All-Inclusive Wedding Planning)</h2>);
    const changeInfo = () => set_full_info(<h3 className='text-[24px] text-center'>Clients who want a worry-free, fully-managed experience from start to finish.</h3>);
    const changeFeature = () => set_full_feature(<ul className='list-disc ml-6 mt-5'>
        <li className='mb-1'><strong>Initial Consultation & Planning: </strong> Unlimited consultations with our event specialists, in-person or virtual meetings.</li>
        <li className='mb-1'><strong> Venue Selection & Booking:</strong> Assistance with finding and booking the perfect venue that matches your event's theme and size.</li>
        <li className='mb-1'><strong>Decor & Design:</strong>  Comprehensive event styling, including custom theme creation, lighting, florals, and table settings.</li>
        <li className='mb-1'><strong>Catering & Beverages:</strong>  Tailor-made menu options with top caterers, including appetizers, main courses, desserts, and beverages.</li>
        <li className='mb-1'><strong>Entertainment & Performers: </strong> DJs, live bands, emcees, or specialized performers (e.g., magicians, dancers, etc.).</li>
        <li className='mb-1'><strong> Photography & Videography:</strong> Professional photographers and videographers to capture all moments from preparation to the after-party.</li>
        <li className='mb-1'><strong> Guest Management:</strong> Invitations, RSVP tracking, guest seating arrangement, and on-the-day coordination.</li>
        <li className='mb-1'><strong>On-the-Day Coordination:</strong>  A dedicated event coordinator to ensure everything runs smoothly.</li>
        <li className='mb-1'> <strong>Transportation & Accommodation: </strong>Organize guest transport and lodging if needed.</li>
        <li className='mb-1'><strong>Post-Event Services:</strong>  Assistance with clean-up and return of rented equipment.</li>
    </ul>);
    const fullPrice = () => set_full_price(<h2 className='text-[30px]'>₱100,000</h2>);



    //Essential Package ==========>>
    const essential_Plan = () => set_full_plan(<h2 className='text-Descrip-text-color text-4xl italic'>Essential Package</h2>);
    const essential_info = () => set_full_info(<h3 className='text-[24px] text-center'>Clients who want to manage some parts of the event but need support with major elements.</h3>);
    const essential_feature = () => set_full_feature(<ul className='list-disc ml-6 mt-5'>
        <li className='mb-1'><strong>Initial Consultation: </strong> 1-2 consultations for event planning guidance.</li>
        <li className='mb-1'><strong> Venue Booking:</strong> Recommendations only (no booking service).</li>
        <li className='mb-1'><strong>Decor & Setup:</strong>  Pre-designed themes with no customization, including basic floral arrangements.</li>
        <li className='mb-1'><strong>Catering:</strong>  Guidance on choosing a caterer, but clients must handle booking and communication directly.</li>
        <li className='mb-1'><strong>Basic Entertainment: </strong> Access to a DJ or playlist setup (no live performers).</li>
        <li className='mb-1'><strong> Photography:</strong>  2-hour session to capture key moments.</li>
        <li className='mb-1'><strong>On-the-Day Coordination:</strong> A half-day coordinator to manage event setup and the start of the event.</li>
    </ul>);
    const essentialPrice = () => set_full_price(<h2 className='text-[30px]'>₱50,000</h2>);

    //Starter Pack =======>> 
    const starter_Plan = () => set_full_plan(<h2 className='text-Descrip-text-color text-4xl italic'>Starter Package</h2>);
    const starter_info = () => set_full_info(<h3 className='text-[24px] text-center'>Clients who need minimal assistance and prefer to handle most event details themselves.</h3>);
    const starter_feature = () => set_full_feature(<ul className='list-disc ml-6 mt-5'>
        <li className='mb-1'><strong>Consultation Only: </strong>1 planning session with our event expert for advice and ideas.</li>
        <li className='mb-1'><strong> Venue Recommendations: </strong> Suggestions only (no bookings).</li>
        <li className='mb-1'><strong>DIY Decor Ideas:</strong> We provide a list of vendors for basic decor but no setup or customization.</li>
        <li className='mb-1'><strong>Catering Recommendations:</strong>  We suggest caterers, but the client is responsible for all communication.</li>
        <li className='mb-1'><strong>Entertainment Options: </strong> We provide DJ or playlist recommendations (client to manage).</li>
        <li className='mb-1'><strong> No Photography: </strong>Not included, but we can suggest vendors.</li>
        <li className='mb-1'><strong>On-the-Day Check-In: </strong>  A 2-hour visit from our coordinator to ensure the event is starting smoothly.</li>
    </ul>);
    const starterPrice = () => set_full_price(<h2 className='text-[30px]'>₱10,000</h2>);





    return (
        <div>
            <Navbar />
            <main>
                <div style={{ backgroundImage: `url(${Wedkiss})` }} className='w-full bg-cover bg-center h-[80vh] text-white flex justify-center text-center items-center text-5xl font-serif'>
                    <h1>RadiantReception's Wedding Planning Packages</h1>
                </div>
                <div className='p-14 text-center'>
                    <h3>At RadiantReception, we offer a range of luxury wedding planning packages to suit your needs and budget. Whether you’re looking for full guidance or just a helping hand with specific aspects, we’re here to make your dream day a reality. Choose from our Full Planning Package for comprehensive support, our Partial Planning Package, or our One-Day Coordination Package. We've also introduced our Peace of Mind Planning Package, perfect for couples who know exactly what they want but need someone to bring their vision to life. Explore our wedding planning packages below, and let’s chat about how we can help make your dream wedding come true!</h3>
                    <br />
                    <h2 className='text-Descrip-text-color text-4xl font-normal'>Our Event Packages</h2>
                    <br />
                    <h3>We offer a range of packages tailored to meet your event needs and budget. Choose from our Full Package for all-inclusive service or explore our flexible options that focus on specific event aspects</h3>
                </div>
                <div className=' text-white gap-2 flex'>
                    <button className='w-[500px] bg-nav-bg-color p-4 text-xl hover:bg-Descrip-text-color rounded-sm' onClick={() => { changePlan(); changeInfo(); changeFeature(); fullPrice(); }} type="button">Full Package</button>
                    <button className='w-[500px] bg-nav-bg-color p-4 text-xl hover:bg-Descrip-text-color rounded-sm' onClick={() => { essential_Plan(); essential_info(); essential_feature(); essentialPrice(); }} type="button">Essential Package</button>
                    <button className='w-[500px] bg-nav-bg-color p-4 text-xl hover:bg-Descrip-text-color rounded-sm' onClick={() => { starter_Plan(); starter_info(); starter_feature(); starterPrice(); }} type="button">Starter Package</button>
                </div>
                <div className=' text-white bg-nav-bg-color flex md:flex-row flex-col w-full'>
                    <div className='md:w-1/2 w-full bg-cover bg-center justify-evenly p-8 flex flex-col text-center' style={{ backgroundImage: `url(${Holdhands})` }}>
                        {FullPlan}
                        {Fullinfo}
                        <Link to='/form'> <button className='bg-nav-bg-color w-44 text- px-7 py-2 rounded-full hover:bg-Descrip-text-color '>Book Package</button></Link>
                    </div>
                    <div className='p-8 md:w-1/2 w-full'>
                        <h2 className='text-[24px] font-bold'>Features Include:</h2>
                        {Fullfeature}
                        <hr />
                        <div className='flex gap-10'>
                            <h2 className='text-[30px] font-bold'>Price:</h2>
                            {FullPrice}
                        </div>

                    </div>
                </div>
            </main >
            <footer>
                <Footer />
            </footer>
        </div >
    )
}

export default WeddingPlan
