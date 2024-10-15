import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import PriceCheckOutlinedIcon from '@mui/icons-material/PriceCheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';

const BookingManagement = () => {

    //View list
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);

    //Payment
    const [isPayment, setIsOpenPayment] = useState(false);
    const [selectedRequestPayment, setSelectedRequestPayment] = useState(null);

    //Edit
    const [isEdit, setIsOpenEdit] = useState(false);
    const [selectedRequestEdit, setSelectedRequestEdit] = useState(null);


    const bookingRequests = [
        {
            id: 1,
            fullName: "Ben Johnson",
            email: "ben.johnson@example.com",
            phone: "+1234567890",
            eventType: "Wedding",
            package: "Gold Package",
            guestCount: 150,
            staff: "Mcclean Pavo",
            requestedDate: "2024-12-15",
            status: "Approved",
            price: 2500,
            balance: 1000,
            priceStatus: "Pending",
            request: "Daghan Sagbot na batman tapos uperman tapos bulak"

        },
        {
            id: 2,
            fullName: "Raymond Smith",
            email: "raymond.smith@example.com",
            phone: "+0987654321",
            eventType: "Conference",
            package: "Silver Package",
            guestCount: 100,
            staff: "Mcclean Pavo",
            requestedDate: "2024-11-20",
            status: "Approved",
            price: 1800,
            balance: 0,
            priceStatus: "Paid",
            request: "Daghan Sagbot na batman tapos uperman tapos bulak"

        },
        {
            id: 3,
            fullName: "Aniasco White",
            email: "aniasco.white@example.com",
            phone: "+1122334455",
            eventType: "Birthday",
            staff: "Mcclean Pavo",
            package: "Platinum Package",
            guestCount: 50,
            requestedDate: "2024-10-30",
            status: "Approved",
            price: 1200,
            balance: 500,
            priceStatus: "Pending",
            request: "Daghan Sagbot na batman tapos uperman tapos bulak"

        },
        {
            id: 4,
            fullName: "Lily Adams",
            email: "lily.adams@example.com",
            phone: "+14159876543",
            eventType: "Corporate Event",
            package: "Gold Package",
            guestCount: 200,
            staff: "Marife Siaton",
            requestedDate: "2024-09-15",
            status: "Approved",
            price: 5000,
            balance: 1500,
            priceStatus: "Pending",
            request: "Daghan Sagbot na batman tapos uperman tapos bulak"

        },
        {
            id: 5,
            fullName: "Chris Brown",
            email: "chris.brown@example.com",
            phone: "+11234567890",
            eventType: "Anniversary",
            staff: "Marife Siaton",
            package: "Silver Package",
            guestCount: 80,
            requestedDate: "2024-11-05",
            status: "Approved",
            price: 1600,
            balance: 1600,
            priceStatus: "Pending",
            request: "Daghan Sagbot na batman tapos uperman tapos bulak"

        },
        {
            id: 6,
            fullName: "Sarah Thompson",
            email: "sarah.thompson@example.com",
            phone: "+19786543210",
            eventType: "Charity Gala",
            package: "Diamond Package",
            guestCount: 300,
            staff: "Marife Siaton",
            requestedDate: "2024-12-01",
            status: "Approved",
            price: 7500,
            balance: 5000,
            priceStatus: "Pending",
            request: "Daghan Sagbot na batman tapos uperman tapos bulak"

        },
        {
            id: 7,
            fullName: "Michael Lee",
            email: "michael.lee@example.com",
            phone: "+1234567890",
            eventType: "Retirement Party",
            package: "Gold Package",
            guestCount: 120,
            staff: "Sidney Sabares",
            requestedDate: "2024-11-25",
            status: "Approved",
            price: 2200,
            balance: 1200,
            priceStatus: "Pending",
            request: "Daghan Sagbot na batman tapos uperman tapos bulak"

        },
        {
            id: 8,
            fullName: "Jessica Green",
            email: "jessica.green@example.com",
            phone: "+15678901234",
            eventType: "Baby Shower",
            package: "Bronze Package",
            staff: "Sidney Sabares",
            guestCount: 30,
            requestedDate: "2024-10-20",
            status: "Approved",
            price: 800,
            balance: 0,
            priceStatus: "Paid",
            request: "Daghan Sagbot na batman tapos uperman tapos bulak"

        }
    ];

    //View List
    const openModal = (request) => {
        setSelectedRequest(request);
        setIsModalOpen(true);
    };


    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedRequest(null);
    };

    //Payment
    const openPayment = (request) => {
        setSelectedRequestPayment(request);
        setIsOpenPayment(true);
    };

    const closePayment = () => {
        setIsOpenPayment(false);
        setSelectedRequestPayment(null);
    };

    //Edit
    const openPaymentEdit = (request) => {
        setIsOpenEdit(true);
        setSelectedRequestEdit(request);
    };

    const closePaymentEdit = () => {
        setSelectedRequestEdit(false);
        setIsOpenEdit(null);
    };


    return (
        <div>
            <div className='flex'>
                <div>
                    <Sidebar />
                </div>
                <div className='w-full h-screen overflow-auto'>
                    <div>

                        <div className='p-4'>
                            <div className='text-4xl flex md:flex-row flex-col gap-2 items-center justify-between font-semibold p-5 md:text-start text-center'>
                                <h1>Booked Management</h1>
                                <div className='text-[15px]'>
                                    <label htmlFor="Month" className='text-[15px] md:text-md'>Status:</label>
                                    <select name="Month" id="" className='border border-black ml-2 p-2 rounded'>
                                        <option value="" disabled selected>Select Payment Status </option>
                                        <option value="January">Pending</option>
                                        <option value="February">Paid</option>
                                        <option value="March">Cancelled</option>
                                    </select>
                                </div>
                                <div className='text-[15px] md:text-md'>
                                    <form action="" method="get">
                                        <label for="search">Search Name:</label>
                                        <input type="search" id="search" name="search" className='border-2 mx-2 border-black rounded w-36 ' />
                                        <button className='bg-Descrip-text-color rounded px-2'>Submit</button>
                                    </form>
                                </div>
                            </div>
                            <div className='flex justify-evenly text-sm gap-2 md:flex-row flex-col p-4'>
                                <div className='flex items-center p-4 shadow-lg gap-5 border-2 shadow-gray-400 w-full rounded'>
                                    <div>
                                        <StyleOutlinedIcon sx={{ fontSize: 40 }} />
                                    </div>
                                    <div>
                                        <h2><strong>17</strong></h2>
                                        <p>Total Bookings</p>
                                    </div>
                                </div>
                                <div className='flex items-center p-4 shadow-lg gap-5 shadow-gray-400 w-full border-2 rounded'>
                                    <div>
                                        <PaymentsOutlinedIcon sx={{ fontSize: 40 }} />
                                    </div>
                                    <div>
                                        <h2><strong>17</strong></h2>
                                        <p>Pending Payments</p>
                                    </div>
                                </div>
                                <div className='flex items-center p-4 shadow-lg gap-5 shadow-gray-400 w-full border-2 rounded'>
                                    <div>
                                        <PaidOutlinedIcon sx={{ fontSize: 40 }} />

                                    </div>
                                    <div>
                                        <h2><strong>17</strong></h2>
                                        <p>Paid Bookings </p>
                                    </div>
                                </div>
                                <div className='flex items-center p-4 shadow-lg gap-5 shadow-gray-400 w-full border-2 rounded'>
                                    <div>
                                        <CancelOutlinedIcon sx={{ fontSize: 40 }} />
                                    </div>
                                    <div>
                                        <h2><strong>17</strong></h2>
                                        <p>Cancelled Bookings </p>
                                    </div>
                                </div>
                                <div className='flex items-center p-4 shadow-lg gap-5 shadow-gray-400 w-full border-2 rounded'>
                                    <div>
                                        <TaskAltOutlinedIcon sx={{ fontSize: 40 }} />
                                    </div>
                                    <div>
                                        <h2><strong>17</strong></h2>
                                        <p>Completed Bookings </p>
                                    </div>
                                </div>
                            </div>
                            {isModalOpen && (
                                <div className="fixed inset-0 flex items-center justify-center bg-nav-bg-color bg-opacity-50 z-10">
                                    <div className="bg-white rounded-lg text-black p-6 relative max-w-xl w-full">
                                        <div className='flex justify-between items-center'>
                                            <h2 className="text-2xl">Booking Request Details</h2>
                                            <button onClick={closeModal} className="p-2 rounded text-white w-10  bg-slate-700">
                                                X
                                            </button>
                                        </div>
                                        {selectedRequest && (
                                            <div className='flex flex-col gap-2'>
                                                <p><strong>ID:</strong> {selectedRequest.id}</p>
                                                <p><strong>Full Name:</strong> {selectedRequest.fullName}</p>
                                                <p><strong>Request:</strong> {selectedRequest.email}</p>
                                                <p><strong>ID:</strong> {selectedRequest.phone}</p>
                                                <p><strong>Full Name:</strong> {selectedRequest.eventType}</p>
                                                <p><strong>Request:</strong> {selectedRequest.package}</p>
                                                <p><strong>Full Name:</strong> {selectedRequest.guestCount}</p>
                                                <p><strong>Request Date:</strong> {selectedRequest.requestedDate}</p>
                                                <p><strong>Price:</strong> {selectedRequest.price}</p>
                                                <p><strong>Status:</strong> {selectedRequest.status}</p>
                                                <p><strong>Assigned Staff:</strong> {selectedRequest.staff}</p>
                                                <p><strong>Request:</strong> {selectedRequest.request}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {isPayment && (
                                <div className="fixed inset-0 flex items-center justify-center bg-nav-bg-color bg-opacity-50 z-10">
                                    <div className="bg-white rounded-lg text-black p-6 relative max-w-xl w-full">
                                        <div className='flex justify-between items-center mb-2'>
                                            <h2 className="text-2xl font-bold">Payment</h2>
                                            <button onClick={closePayment} className="p-2 rounded text-white w-10  bg-slate-700">
                                                X
                                            </button>
                                        </div>

                                        <hr className=' border-black' />
                                        {selectedRequestPayment && (
                                            <div className='flex flex-col gap-2 text-black'>
                                                <p><strong>ID:</strong> {selectedRequestPayment.id}</p>
                                                <p><strong>Full Name:</strong> {selectedRequestPayment.fullName}</p>
                                                <p><strong>Requested Date:</strong> {selectedRequestPayment.requestedDate}</p>
                                                <p><strong>Status:</strong> {selectedRequestPayment.priceStatus}</p>
                                                <p><strong>Price:</strong> {selectedRequestPayment.status}</p>
                                                <p><strong>Price:</strong> {selectedRequestPayment.price}</p>
                                                <p><strong>Balance:</strong> {selectedRequestPayment.balance}</p>
                                                <hr className=' border-black' />
                                                <form action="">
                                                    <div>
                                                        <label for="amount"><strong>Amount to Pay:</strong></label>
                                                        <input type="number" id="amount" min='0' placeholder='0.00' name="amount" className='border-2 border-black w-full p-2 rounded' required />
                                                        <div>
                                                            <label htmlFor="status" className='font-bold'>Status:</label>
                                                            <select name="status" id='status' className='border-2 w-full border-black rounded-lg p-2 text-center'>
                                                                <option value="" disabled selected>Select Status</option>
                                                                <option value="completed">Completed</option>
                                                                <option value="cancel">Cancel</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                    <div className='text-center'>
                                                        <button className="bg-green-500 mt-4 p-2 w-48 rounded text-white" type='submit'>
                                                            Confirm
                                                        </button>

                                                    </div>

                                                </form>

                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {isEdit && (
                                <div className="fixed inset-0 flex items-center justify-center bg-nav-bg-color bg-opacity-50 z-10">
                                    <div className="bg-white rounded-lg text-black p-6 relative max-w-[700px] w-full">
                                        <div className='flex justify-between items-center mb-2'>
                                            <h2 className="text-2xl">Edit Request</h2>
                                            <button onClick={closePaymentEdit} className="p-2 rounded text-white w-10  bg-slate-700">
                                                X
                                            </button>
                                        </div>
                                        <form action="" method="get">
                                            {selectedRequestEdit && (
                                                <div className='grid grid-cols-1 gap-2 md:grid-cols-2 h-64 overflow-y-auto'>
                                                    <label htmlFor="id">ID:</label>
                                                    <input type="text" name='id' value={selectedRequestEdit.id} className='border-2 border-black p-1' />
                                                    <label htmlFor="name">Name:</label>
                                                    <input type="text" name='name' value={selectedRequestEdit.fullName} className='border-2 border-black p-1' />
                                                    <label htmlFor="email">Email:</label>
                                                    <input type="email" name='email' value={selectedRequestEdit.email} className='border-2 border-black p-1' />
                                                    <label htmlFor="contact">Contact:</label>
                                                    <input type="text" name='contact' value={selectedRequestEdit.phone} className='border-2 border-black p-1' />
                                                    <label htmlFor="event_type">Event Type:</label>
                                                    <input type="text" name='event_type' value={selectedRequestEdit.eventType} className='border-2 border-black p-1' />
                                                    <label htmlFor="package">Package:</label>
                                                    <input type="text" name='package' value={selectedRequestEdit.package} className='border-2 border-black p-1' />
                                                    <label htmlFor="staff">Assigned Staff:</label>
                                                    <input type="text" name='staff' value={selectedRequestEdit.staff} className='border-2 border-black p-1' />
                                                    <label htmlFor="guest">Guest:</label>
                                                    <input type="text" name='guest' value={selectedRequestEdit.guestCount} className='border-2 border-black p-1' />
                                                    <label htmlFor="request_date">Request Date:</label>
                                                    <input type="text" name='request_date' value={selectedRequestEdit.requestedDate} className='border-2 border-black p-1' />
                                                    <label htmlFor="status">Status:</label>
                                                    <input type="text" name='status' value={selectedRequestEdit.status} className='border-2 border-black p-1' />
                                                    <label htmlFor="price">Price:</label>
                                                    <input type="number" name='price' value={selectedRequestEdit.price} className='border-2 border-black p-1' />
                                                    <label htmlFor="balance">Balance:</label>
                                                    <input type="number" name='balance' value={selectedRequestEdit.balance} className='border-2 border-black p-1' />
                                                    <label htmlFor="payment_status">Payment Status:</label>
                                                    <input type="text" name='payment_status' value={selectedRequestEdit.priceStatus} className='border-2 border-black p-1' />
                                                    <label htmlFor="request">Request:</label>
                                                    <input type="text" name='request' value={selectedRequestEdit.request} className='border-2 border-black p-1' />
                                                </div>
                                            )}
                                            <div className='text-center'>
                                                <button className="bg-green-500 mt-4 p-2 w-48 rounded text-white" type='submit'>
                                                    Save Edit
                                                </button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            )}

                            <div className='p-4 h-[70vh] overflow-x-auto'>
                                <table className='w-full text-center text-sm sm:text-sm table-auto bg-gray-300'>
                                    <thead>
                                        <tr className='bg-gray-100'>
                                            <th className='border px-4 py-2'>Request ID</th>
                                            <th className='border px-4 py-2'>Full Name</th>
                                            <th className='border px-4 py-2'>Email</th>
                                            <th className='border px-4 py-2'>Phone Number</th>
                                            <th className='border px-4 py-2'>Price</th>
                                            <th className='border px-4 py-2'>Balance</th>
                                            <th className='border px-4 py-2'>Payment Status</th>
                                            <th className='border px-4 py-2'>Assigned Staff</th>
                                            <th className='border px-4 py-2'>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bookingRequests.map((request) => (
                                            <tr key={request.id}>
                                                <td className='border px-4 py-2'>{request.id}</td>
                                                <td className='border px-4 py-2'>{request.fullName}</td>
                                                <td className='border px-4 py-2'>{request.email}</td>
                                                <td className='border px-4 py-2'>{request.phone}</td>
                                                <td className='border px-4 py-2'>{request.price}</td>
                                                <td className='border px-4 py-2'>{request.balance}</td>
                                                <td className='border px-4 py-2'>{request.priceStatus}</td>
                                                <td className='border px-4 py-2'>{request.staff}</td>
                                                <td className='border px-4 py-2 flex gap-4 text-white'>
                                                    <button className="border-2 p-2 rounded-lg bg-green-500"
                                                        onClick={() => openPayment(request)}
                                                    >
                                                        <PriceCheckOutlinedIcon />
                                                    </button>
                                                    <button
                                                        className="border-2 p-2 rounded-lg bg-blue-500"
                                                        onClick={() => openModal(request)}
                                                    >
                                                        <VisibilityOutlinedIcon />
                                                    </button>
                                                    <button className="border-2 p-2 rounded-lg bg-yellow-500"
                                                        onClick={() => openPaymentEdit(request)}

                                                    >
                                                        <ModeEditOutlinedIcon />
                                                    </button>
                                                    <button className="border-2 p-2 rounded-lg bg-red-500">
                                                        <CloseOutlinedIcon />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default BookingManagement
