import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import card from '../assets/card.png'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Link } from 'react-router-dom';

const Form = () => {

  //Month =======>> 
  const [selectedMonth, setSelectedMonth] = useState("");

  const MonthChange = (event) => {
    setSelectedMonth(event.target.value)
  }

  //Year ========>>
  const [selectedYear, setSelectedYear] = useState("");

  const YearChange = (event) => {
    setSelectedYear(event.target.value)
  }

  //Price ========>>
  const [selectedPackage, setPrice] = useState('00.00')
  const updatePrice = (event) => {
    setPrice(event.target.value)
  }


  const currentYear = 2024;
  const numberOfYears = 10;


  const years = Array.from({ length: numberOfYears }, (v, i) => currentYear + i);

  const bookingRequests = [
    {
      id: 1,
      fullName: "Ben Johnson",
      email: "ben.johnson@example.com",
      phone: "+1234567890",
      eventType: "Wedding",
      package: "Gold Package",
      guestCount: 150,
      requestedDate: "2024-12-15",
      status: "Approved",
    },
    {
      id: 2,
      fullName: "Raymond Smith",
      email: "raymond.smith@example.com",
      phone: "+0987654321",
      eventType: "Conference",
      package: "Silver Package",
      guestCount: 100,
      requestedDate: "2024-11-20",
      status: "Completed",
    },
    {
      id: 3,
      fullName: "Aniasco White",
      email: "aniasco.white@example.com",
      phone: "+1122334455",
      eventType: "Birthday",
      package: "Platinum Package",
      guestCount: 50,
      requestedDate: "2024-10-30",
      status: "Cancelled",
    },
    {
      id: 3,
      fullName: "Aniasco White",
      email: "aniasco.white@example.com",
      phone: "+1122334455",
      eventType: "Birthday",
      package: "Platinum Package",
      guestCount: 50,
      requestedDate: "2024-10-30",
      status: "Cancelled",
    },
    {
      id: 3,
      fullName: "Aniasco White",
      email: "aniasco.white@example.com",
      phone: "+1122334455",
      eventType: "Birthday",
      package: "Platinum Package",
      guestCount: 50,
      requestedDate: "2024-10-30",
      status: "Cancelled",
    },
    {
      id: 3,
      fullName: "Aniasco White",
      email: "aniasco.white@example.com",
      phone: "+1122334455",
      eventType: "Birthday",
      package: "Platinum Package",
      guestCount: 50,
      requestedDate: "2024-10-30",
      status: "Cancelled",
    },
    {
      id: 3,
      fullName: "Aniasco White",
      email: "aniasco.white@example.com",
      phone: "+1122334455",
      eventType: "Birthday",
      package: "Platinum Package",
      guestCount: 50,
      requestedDate: "2024-10-30",
      status: "Cancelled",
    },
    {
      id: 3,
      fullName: "Aniasco White",
      email: "aniasco.white@example.com",
      phone: "+1122334455",
      eventType: "Birthday",
      package: "Platinum Package",
      guestCount: 50,
      requestedDate: "2024-10-30",
      status: "Cancelled",
    },
    {
      id: 3,
      fullName: "Aniasco White",
      email: "aniasco.white@example.com",
      phone: "+1122334455",
      eventType: "Birthday",
      package: "Platinum Package",
      guestCount: 50,
      requestedDate: "2024-10-30",
      status: "Cancelled",
    },
    {
      id: 3,
      fullName: "Aniasco White",
      email: "aniasco.white@example.com",
      phone: "+1122334455",
      eventType: "Birthday",
      package: "Platinum Package",
      guestCount: 50,
      requestedDate: "2024-10-30",
      status: "Cancelled",
    },
    {
      id: 3,
      fullName: "Aniasco White",
      email: "aniasco.white@example.com",
      phone: "+1122334455",
      eventType: "Birthday",
      package: "Platinum Package",
      guestCount: 50,
      requestedDate: "2024-10-30",
      status: "Cancelled",
    },
    {
      id: 3,
      fullName: "Aniasco White",
      email: "aniasco.white@example.com",
      phone: "+1122334455",
      eventType: "Birthday",
      package: "Platinum Package",
      guestCount: 50,
      requestedDate: "2024-10-30",
      status: "Cancelled",
    },
    {
      id: 3,
      fullName: "Aniasco White",
      email: "aniasco.white@example.com",
      phone: "+1122334455",
      eventType: "Birthday",
      package: "Platinum Package",
      guestCount: 50,
      requestedDate: "2024-10-30",
      status: "Cancelled",
    },
  ];

  return (
    <div>
      <Navbar />
      <main className='flex md:flex-row flex-col '>
        <div className='md:w-2/3 w-full bg-[#C4C4C4] p-3'>
          <div className='grid justify-items-center'>
            <img src={card} alt="card" className='rounded-2xl' />
          </div>
          <br />
          <hr className='border-black' />
          <div className='text-justify p-2'>
            <p>To schedule a time with us to discuss the styling of your special day, simply follow the instructions below it's quick and easy!
              Our styling consultations are complimentary, where we’ll explore every detail of your event, providing you with fresh ideas and inspiration for each aspect of your wedding. All our designs are tailored to reflect your style, venue, and budget.
              After your consultation, you'll receive a detailed mood board and a style quote, complete with a curated shopping list of decor options specifically designed for you to help make your wedding dreams come true.
              What are you waiting for? Our styling appointments fill up fast, so secure yours today!
              We can’t wait to hear all about your special day!
            </p>
            <br />
            <p>
              If you have any questions, just reach us here.
            </p>
          </div>
          <hr className='border-black' />
          <div className='my-2 text-justify'>
            <div className='flex p-2 gap-2'>
              <PhoneAndroidIcon />
              <p>09812345678</p>
            </div>
            <div className='flex p-2 gap-2'>
              <EmailIcon />
              <p>RediantReception@gmail.com</p>
            </div>
            <div className='flex p-2 gap-2'>
              <NewspaperIcon />
              <p>www.RediantReception.com</p>
            </div>
          </div>
        </div>
        <div className='p-2 w-full'>
          <h1 className='p-2 text-2xl font-semibold italic'>Provide Information</h1>
          <div className='p-5 grid gap-5 '>
            <div className='grid gap-2 items-center'>
              <div>
                <label htmlFor="eventtype" className='font-bold'>Event Type: </label>
                <select name="eventtype" id="" className='border-2 border-black rounded-lg p-2 ml-10 text-center'>
                  <option value="" disabled selected>Select a Event Type</option>
                  <option value="January">Wedding</option>
                  <option value="February">Birthday</option>
                </select>
              </div>
              <div>
                <label htmlFor="kindofpackage" className='font-bold'>Kind of Package: </label>
                <select name="kindofpackage" id="" className='border-2 border-black rounded-lg p-2 text-center' onChange={updatePrice}>
                  <option value="" disabled selected>Select a Package</option>
                  <option value="100,000" name='100 Person'>Full</option>
                  <option value="50,000">Essential</option>
                  <option value="10,000">Starter</option>
                </select>
              </div>
              <div className='flex'>
                <h3 className='font-bold'>Price: </h3>
                <p className='ml-24'>₱{selectedPackage}</p>
              </div>
              <div className='flex'>
                <h3 className='font-bold'>Down Payment: </h3>
                <p className='ml-5 opacity-50'>20% of the price. Down payment should be payed at consultation date.</p>
              </div>
            </div>
            <div>
              <form action="/" method="post">
                <label htmlFor="datetime" className='font-bold mr-10' >Date & Time for Consultation: </label>
                <input type="datetime-local" name="datetime" className='border-2 border-black rounded-lg p-2 w-full' />
                <small className=' text-red-700'>Note: This date is for consoltation.</small>
              </form>
            </div>
          </div>
          <hr className='border-black' />
          <h1 className='p-2 text-2xl font-semibold italic'>Customer Details</h1>
          <div className='p-5 grid gap-5 md:grid-cols-2 grid-cols-1'>
            <div className='p-2'>
              <form action="/" method="post">
                <label htmlFor="name" className='font-bold'>Full Name: </label>
                <input type='text' name="name" className='border-2 w-full border-black rounded-lg p-2' />
              </form>
            </div>
            <div className='p-2'>
              <form action="/" method="post">
                <label htmlFor="email" className='font-bold'>Email: </label>
                <input type='email' name="email" className='border-2 w-full  border-black rounded-lg p-2' />
              </form>
            </div>
            <div className='p-2'>
              <form action="/" method="post">
                <label htmlFor="contact" className='font-bold'>Contact: </label>
                <input type='text' name="contact" maxLength='11' className='border-2 w-full  border-black rounded-lg p-2' />
              </form>
            </div>

            <div className='p-2'>
              <form action="/" method="post">
                <label htmlFor="guests" className='font-bold'>Number of guests (approx.): </label>
                <input type='number' name="guests" min='1' max='100' className=' border-2 w-full border-black rounded-lg p-2' />
              </form>
            </div>
          </div>
          <div className='p-2 text-center'>
            <h3 className='font-bold text-red-700'>RECOMMENDED GUEST PER PACKAGE</h3>
            <div className='grid grid-cols-3 font-semibold'>
              <h4>Full Package</h4>
              <h4>Essesntial Package</h4>
              <h4>Starter Package</h4>
            </div>
            <div className='grid grid-cols-3'>
              <h4>100 Person</h4>
              <h4>50 Person</h4>
              <h4>25 Person</h4>
            </div>
          </div>
          <hr className='border-black' />
          <h1 className='p-2 text-2xl font-semibold italic'>Reserve Date</h1>
          <div className='p-2 flex justify-around'>
            <div className='w-1/4'>
              <label htmlFor="Year" className='font-bold'>Year:</label>
              <select name="Year" className='border-2 w-full border-black rounded-lg p-2 text-center' onChange={YearChange}>
                <option value="" disabled selected>Select a Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="Month" className='font-bold'>Month:</label>
              <select name="Month" id="" className='border-2 w-full border-black rounded-lg p-2 text-center' onChange={MonthChange}>
                <option value="" disabled selected>Select a Month</option>
                <option value="1/January">January</option>
                <option value="2/February">February</option>
                <option value="3/March">March</option>
                <option value="4/April">April</option>
                <option value="5/May">May</option>
                <option value="6/June">June</option>
                <option value="7/July">July</option>
                <option value="8/August">August</option>
                <option value="9/September">September</option>
                <option value="10/October">October</option>
                <option value="11/November">November</option>
                <option value="12/December">December</option>
              </select>
            </div>
            <div className='w-1/4'>
              <label htmlFor="Day" className='font-bold'>Day:</label>
              <select name="Day" id="" className='border-2 w-full border-black rounded-lg p-2 text-center'>
                <option value="" disabled selected>Select a Day</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="1">13</option>
                <option value="2">14</option>
                <option value="3">15</option>
                <option value="4">16</option>
                <option value="5">17</option>
                <option value="6">18</option>
                <option value="7">19</option>
                <option value="8">20</option>
                <option value="9">21</option>
                <option value="10">22</option>
                <option value="11">23</option>
                <option value="12">24</option>
                <option value="12">25</option>
                <option value="1">26</option>
                <option value="2">27</option>
                <option value="3">28</option>
                <option value="4">29</option>
                <option value="5">30</option>
                <option value="6">31</option>
              </select>
            </div>

          </div>
          <div className='flex md:flex-row flex-col flex-grow'>
            <div className='m-4 p-2'>
              <h3 className='font-bold p-2 border-b-2' >Date reserved for the month of <span className='uppercase text-red-700'>{selectedMonth}</span> to avoid conflict in a year <span className='uppercase text-red-700'>{selectedYear}</span>.</h3>
              <div className='p-4 h-[38vh] overflow-auto '>
                <table className='w-full text-center text-sm sm:text-lg table-auto bg-gray-300'>
                  <thead>
                    <tr className='bg-gray-100'>
                      <th className='border'>Request ID</th>
                      <th className='border'>Occupied Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingRequests.map((request) => (
                      <tr key={request.id}>
                        <td className='border'>{request.id}</td>
                        <td className='border'>{request.requestedDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
            <div className='m-4 flex-grow'>
              <h3 className='font-bold border-b-2 text-center' >Please Describe Your Request  </h3>
              <textarea name="" id="" className='w-full border border-black h-80 p-2 resize-none'></textarea>
            </div>
          </div>
          <div className='w-full text-center'>
            <button type='submit' className='bg-nav-bg-color w-[350px] text-white p-2 rounded-full hover:bg-Descrip-text-color '>Submit Booking</button>
          </div>
        </div >
      </main >
    </div >
  )
}

export default Form
