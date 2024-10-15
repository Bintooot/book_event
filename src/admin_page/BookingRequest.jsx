import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';




const BookingRequest = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);

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
            status: "Pending",
            price: 2500,
            balance: 1000,
            priceStatus: "Pending", // Partial payment made
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
            requestedDate: "2024-11-20",
            status: "Pending",
            price: 1800,
            balance: 0, // Fully paid
            priceStatus: "Paid",
            request: "Daghan Sagbot na batman tapos uperman tapos bulak"

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
            status: "Pending",
            price: 1200,
            balance: 500,
            priceStatus: "Pending", // Still has balance,
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
            requestedDate: "2024-09-15",
            status: "Pending",
            price: 5000,
            balance: 1500,
            priceStatus: "Pending", // Partial payment made,
            request: "Daghan Sagbot na batman tapos uperman tapos bulak"
        },
        {
            id: 5,
            fullName: "Chris Brown",
            email: "chris.brown@example.com",
            phone: "+11234567890",
            eventType: "Anniversary",
            package: "Silver Package",
            guestCount: 80,
            requestedDate: "2024-11-05",
            status: "Pending",
            price: 1600,
            balance: 1600, // Full amount pending
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
            requestedDate: "2024-12-01",
            status: "Pending",
            price: 7500,
            balance: 5000, // Partial payment made
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
            requestedDate: "2024-11-25",
            status: "Pending",
            price: 2200,
            balance: 1200, // Refund to be processed
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
            guestCount: 30,
            requestedDate: "2024-10-20",
            status: "Pending",
            price: 800,
            balance: 0, // Fully paid
            priceStatus: "Paid",
            request: "Daghan Sagbot na batman tapos uperman tapos bulak"
        },
        {
            id: 9,
            fullName: "Jessica Green",
            email: "jessica.green@example.com",
            phone: "+15678901234",
            eventType: "Baby Shower",
            package: "Bronze Package",
            guestCount: 30,
            requestedDate: "2024-10-20",
            status: "Pending",
            price: 800,
            balance: 0, // Fully paid
            priceStatus: "Paid",
            request: "Daghan Sagbot na batman tapos uperman tapos bulak"
        }

    ];

    const openModal = (request) => {
        setSelectedRequest(request);
        setIsModalOpen(true);
    };


    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedRequest(null);
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
                            <div className='text-4xl font-semibold p-5 md:text-start text-center'>
                                <h1>Booking Request</h1>
                                <div className='flex md:flex-row flex-col justify-between'>
                                    <p className='text-gray-600 text-2xl'>Review and manage all incoming booking requests.</p>
                                    <p className='text-sm'>Total Request: 7</p>
                                </div>

                            </div>

                            {isModalOpen && (
                                <div className="fixed inset-0 flex items-center justify-center bg-nav-bg-color bg-opacity-50 z-10">
                                    <div className="bg-white rounded-lg text-black p-6 relative max-w-xl w-full">
                                        <div className='flex justify-between items-center'>
                                            <h2 className="text-2xl font-bold">Booking Request Details</h2>
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
                                                <p><strong>Request:</strong> {selectedRequest.request}</p>
                                                <hr className='border-black' />
                                                <h2 className='font-bold text-2xl text-center'>Assigned Staff</h2>
                                                <form action="/action_page.php" >
                                                    <label for="fname"><strong>Name:</strong></label>
                                                    <input type="text" id="fname" name="fname" className='border-2 border-black p-2 w-full rounded' required />
                                                    <div className='text-center flex justify-around'>
                                                        <div >
                                                            <button className="bg-green-500 mt-4 p-2 w-48 rounded text-white" type='submit'>
                                                                Confirm
                                                            </button>
                                                        </div><div >
                                                            <button onClick={closeModal} className="bg-red-500 mt-4 p-2 w-48 rounded text-white">
                                                                Reject
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>

                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            <div className='p-4 h-[80vh] overflow-x-auto flex-grow'>
                                <table className='w-full text-center text-sm sm:text-sm table-auto bg-gray-300'>
                                    <thead>
                                        <tr className='bg-gray-100'>
                                            <th className='border px-4 py-2'>Request ID</th>
                                            <th className='border px-4 py-2'>Full Name</th>
                                            <th className='border px-4 py-2'>Email</th>
                                            <th className='border px-4 py-2'>Phone Number</th>
                                            <th className='border px-4 py-2'>Event Type</th>
                                            <th className='border px-4 py-2'>Package</th>
                                            <th className='border px-4 py-2'>Number of Guests</th>
                                            <th className='border px-4 py-2'>Requested Date</th>
                                            <th className='border px-4 py-2'>Status</th>
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
                                                <td className='border px-4 py-2'>{request.eventType}</td>
                                                <td className='border px-4 py-2'>{request.package}</td>
                                                <td className='border px-4 py-2'>{request.guestCount}</td>
                                                <td className='border px-4 py-2'>{request.requestedDate}</td>
                                                <td className='border px-4 py-2'>{request.status}</td>
                                                <td className='border px-4 py-2 text-white'>
                                                    <button
                                                        className="border-2 p-2 rounded-lg bg-blue-500"
                                                        onClick={() => openModal(request)}
                                                    >
                                                        <VisibilityOutlinedIcon />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BookingRequest
