import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import DatasetOutlinedIcon from '@mui/icons-material/DatasetOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const History = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);

    const bookingRequests = [
        {
            id: 1,
            fullName: "Ben Johnson",
            email: "ben.johnson@example.com",
            phone: "+1234567890",
            eventType: "Wedding",
            staff: "Marife Siaton",
            package: "Gold Package",
            guestCount: 150,
            requestedDate: "2024-12-15",
            status: "Completed",
            price: 2500,
            balance: 1000,
            priceStatus: "Cancel",
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
            status: "Completed",
            staff: "Sidney Sabares",
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
            package: "Platinum Package",
            guestCount: 50,
            requestedDate: "2024-10-30",
            staff: "Letracel Unod",
            status: "Completed",
            price: 1200,
            balance: 500,
            priceStatus: "Cancel",
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
            staff: "Mcclean Pavo",
            requestedDate: "2024-09-15",
            status: "Completed",
            price: 5000,
            balance: 1500,
            priceStatus: "Cancel",
            request: "Daghan Sagbot na batman tapos uperman tapos bulak"

        },
        {
            id: 5,
            fullName: "Chris Brown",
            email: "chris.brown@example.com",
            phone: "+11234567890",
            eventType: "Anniversary",
            staff: "Mcclean Pavo",
            package: "Silver Package",
            guestCount: 80,
            requestedDate: "2024-11-05",
            status: "Completed",
            price: 1600,
            balance: 0,
            priceStatus: "Paid",
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
            staff: "Ben Aniasco",
            requestedDate: "2024-12-01",
            status: "Completed",
            price: 7500,
            balance: 0,
            priceStatus: "Paid",
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
            staff: "Ben Aniasco",
            requestedDate: "2024-11-25",
            status: "Completed",
            price: 2200,
            balance: 0,
            priceStatus: "Paid",
            request: "Daghan Sagbot na batman tapos uperman tapos bulak"

        },
        {
            id: 8,
            fullName: "Jessica Green",
            email: "jessica.green@example.com",
            phone: "+15678901234",
            eventType: "Baby Shower",
            package: "Bronze Package",
            staff: "Marife Siaton",
            guestCount: 30,
            requestedDate: "2024-10-20",
            status: "Completed",
            price: 800,
            balance: 0,
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
                            <div className='text-4xl flex md:flex-row flex-col gap-2 items-center justify-between font-semibold p-5 md:text-start text-center'>
                                <h1>History</h1>
                                <div className='text-[15px] md:text-md'>
                                    <form action="" method="get">
                                        <label for="search">Search Booked:</label>
                                        <input type="search" id="search" name="search" className='border-2 mx-2 border-black rounded w-36 ' />
                                        <button className='bg-Descrip-text-color rounded px-2'>Submit</button>
                                    </form>
                                </div>
                            </div>

                            <div className='flex items-center m-2 p-4 shadow-lg gap-5 border-2 shadow-gray-400 rounded'>
                                <div>
                                    <DatasetOutlinedIcon sx={{ fontSize: 40 }} />
                                </div>
                                <div>
                                    <h2><strong>8</strong></h2>
                                    <p>Total History Record</p>
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
                                                <p><strong>Guest:</strong> {selectedRequest.guestCount}</p>
                                                <p><strong>Request Date:</strong> {selectedRequest.requestedDate}</p>
                                                <p><strong>Price:</strong> {selectedRequest.price}</p>
                                                <p><strong>Balance:</strong> {selectedRequest.balance}</p>
                                                <p><strong>Status:</strong> {selectedRequest.status}</p>
                                                <p><strong>Assigned Staff:</strong> {selectedRequest.staff}</p>
                                                <p><strong>Request:</strong> {selectedRequest.request}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}


                            <div className='p-4 h-[65vh] overflow-x-auto'>
                                <table className='w-full text-center text-sm sm:text-sm table-auto bg-gray-300'>
                                    <thead>
                                        <tr className='bg-gray-100'>
                                            <th className='border px-4 py-2'>Booked ID</th>
                                            <th className='border px-4 py-2'>Full Name</th>
                                            <th className='border px-4 py-2'>Email</th>
                                            <th className='border px-4 py-2'>Phone Number</th>
                                            <th className='border px-4 py-2'>Price</th>
                                            <th className='border px-4 py-2'>Balance</th>
                                            <th className='border px-4 py-2'>Payment Status</th>
                                            <th className='border px-4 py-2'>Asigned Staff</th>
                                            <th className='border px-4 py-2'>Status</th>
                                            <th className='border px-4 py-2'>Action</th>
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
        </div>
    )
}

export default History
