import React from 'react'
import Navbar from '../components/Navbar'
import radiant_logo from '../assets/logo_removebg.png'
import Marife from '../assets/marife.png'
import letrecel from '../assets/letracel.png'
import Sidney from '../assets/sidney.png'
import Ben from '../assets/ben.png'
import Adam from '../assets/adam.png'
import Footer from '../components/Footer'


function About_us() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow p-7 bg-background-color">
                <div className="container mx-auto py-10">
                    <div className="grid justify-items-center pb-9 rounded-lg gap-4 bg-gradient-to-b from-[#000000] to-[#4c4b4b]">
                        <img src={radiant_logo} alt="Rediant_Card.png" />
                        <p className="text-Descrip-text-color text-justify px-10">
                            <strong>RadiantReception</strong>, our team is fueled by a passion for creating unforgettable experiences.
                            At radiantReception, our team is fueled by a passion for creating unforgettable experiences. With years of experience in the event planning industry, we have honed our skills in designing and delivering personalized events that reflect our clients' unique visions. From intimate gatherings to grand celebrations, we approach each project with creativity, precision, and a keen eye for detail. <br /><br />

                            Our core values—creativity, attention to detail, and customer satisfaction—are at the heart of everything we do. We believe that every event should not only meet expectations but exceed them, leaving a lasting impression on both our clients and their guests. At radiantReception, we take pride in turning your dreams into reality, one event at a time.
                        </p>
                    </div>

                    <div className="mt-5">
                        <div className="flex justify-center my-4 text-Descrip-text-color text-3xl font-light italic">
                            <strong>Meet Your Event Expert</strong>

                        </div>
                        <hr />
                        <div className="flex flex-col items-center my-6">
                            <img src={Marife} alt="##" />
                            <h2 className="text-Descrip-text-color mt-4">
                                <strong>Marife Siaton – Founder & Lead Event Planner</strong>
                            </h2>
                            <p className="text-white max-w-md text-center mt-4">
                                Marife founded RadiantReception with a mission to make every event extraordinary. <br /> <br /> With over 10 years of experience in event planning, her attention to detail and innovative approach ensure that no two events are the same. Emily’s hands-on leadership and love for all things creative make her the driving force behind the company.
                            </p>
                        </div>
                        <div className='flex sm:flex-row flex-col justify-around my-6'>
                            <div className='grid justify-items-center my-6'>
                                <img src={letrecel} alt="##" />
                                <h2 className='text-Descrip-text-color mt-5'> <strong>Letracel Unod – Event Manager</strong></h2>
                                <p className='text-white max-w-md text-center mt-4'>
                                    Letracel is our go-to expert when it comes to logistics and seamless execution. With a background in hospitality and event management, she specializes in coordinating every aspect of an event from start to finish. Her dedication to ensuring that everything runs smoothly is what makes each event a flawless experience for our clients.
                                </p>
                            </div>
                            <div className='grid justify-items-center my-6'>
                                <img src={Sidney} alt="##" />
                                <h2 className='text-Descrip-text-color mt-5'> <strong>Sidney Sabares – Design & Décor Specialist</strong></h2>
                                <p className='text-white max-w-md text-center mt-4'>
                                    Sidney’s eye for design transforms venues into breathtaking spaces. With a background in interior design, she brings a fresh perspective to event styling, creating customized themes and décor that perfectly match the client’s vision. Her creativity knows no bounds, and she’s known for her innovative ideas that elevate every event.
                                </p>
                            </div>
                        </div>
                        <div className='flex sm:flex-row flex-col justify-around  my-6'>
                            <div className='grid justify-items-center my-6'>
                                <img src={Ben} alt="##" />

                                <h2 className='text-Descrip-text-color mt-5'> <strong>Ben Aniasco – Catering & Culinary Consultant</strong></h2>
                                <p className='text-white max-w-md text-center mt-4'>
                                    With years of experience in the culinary arts, Ben is responsible for curating exceptional dining experiences. From intimate dinners to large banquets, his expertise ensures that the food at every event is nothing short of spectacular. He works closely with clients to create menus that cater to their tastes and preferences, ensuring a delicious experience for all guests.
                                </p>
                            </div>
                            <div className='grid justify-items-center my-6'>
                                <img src={Adam} alt="##" />
                                <h2 className='text-Descrip-text-color mt-5'> <strong>Andrew Pavo – Client Relations Manager</strong></h2>
                                <p className='text-white max-w-md text-center mt-4'>
                                    Andrew is the friendly face behind radiantReception’s client interactions. With her warm and approachable nature, she ensures that every client feels heard and supported throughout the planning process. Andrew’s dedication to customer satisfaction is evident in her commitment to making the planning experience as stress-free and enjoyable as possible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <hr />
            <footer>
                <Footer />
            </footer>
        </div >
    )
}

export default About_us
