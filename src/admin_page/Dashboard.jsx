import React from 'react'
import Sidebar from '../components/Sidebar'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const Dashboard = () => {

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
            id: 4,
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
            id: 5,
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
        <div className='flex'>
            <div>
                <Sidebar />
            </div>
            <div className='w-full h-screen overflow-x-auto p-4 '>
                <div className='text-4xl p-6 flex items-center justify-between font-semibold md:text-start text-center'>
                    <h1>Dashboard</h1>
                    <div className='flex md:flex-row flex-col justify-between'>
                        <Link to='/booking_request'><NotificationsOutlinedIcon fontSize='large' className='cursor-pointer  hover:text-Descrip-text-color' /></Link>
                    </div>
                </div>
                <hr />
                <div className='flex justify-evenly text-2xl gap-2 md:flex-row flex-col p-4'>
                    <div className='flex items-center p-4 shadow-lg gap-5 border-2 shadow-gray-400 w-full rounded'>
                        <div>
                            <Person2OutlinedIcon sx={{ fontSize: 40 }} />
                        </div>
                        <div>
                            <h2><strong>17</strong></h2>
                            <p>Appointments</p>
                        </div>
                    </div>
                    <div className='flex items-center p-4 shadow-lg gap-5 shadow-gray-400 w-full border-2 rounded'>
                        <div>
                            <AccountBalanceWalletOutlinedIcon sx={{ fontSize: 40 }} />
                        </div>
                        <div>
                            <h2>17</h2>
                            <p>Revenue</p>
                        </div>
                    </div>
                    <div className='flex items-center p-4 shadow-lg gap-5 shadow-gray-400 w-full border-2 rounded'>
                        <div>
                            <PersonAddAlt1OutlinedIcon sx={{ fontSize: 40 }} />
                        </div>
                        <div>
                            <h2>17</h2>
                            <p>New Customer</p>
                        </div>
                    </div>
                </div>
                <div className='p-4'>
                    <div className='shadow-lg border-2 p-2 rounded shadow-gray-400'>
                        <h2 className='uppercase font-bold text-center'>Appointments quick stat</h2>
                        <div className='grid sm:grid-cols-5 grid-cols-2 gap-2 p-2'>
                            <div className='p-2 flex justify-around'>
                                <div>
                                    <PendingActionsOutlinedIcon /> <span>Request</span>
                                </div>
                                <div>
                                    <span>0</span>
                                </div>
                            </div>
                            <div className='p-2 flex justify-around'>
                                <div>
                                    <CheckIcon /> <span>Approved</span>
                                </div>
                                <div>
                                    <span>0</span>
                                </div>
                            </div>
                            <div className='p-2 flex justify-around'>
                                <div>
                                    <CloseIcon /> <span>Cancelled</span>
                                </div>
                                <div>
                                    <span>0</span>
                                </div>
                            </div>
                            <div className='p-2 flex justify-around'>
                                <div>
                                    <DeleteOutlineIcon /> <span>Rejected</span>
                                </div>
                                <div>
                                    <span>0</span>
                                </div>
                            </div>
                            <div className='p-2 flex justify-around'>
                                <div>
                                    <TaskAltIcon /> <span>Completed</span>
                                </div>
                                <div>
                                    <span>0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='flex justify-between'>
                            <div>
                                <h2 className='font-bold p-2 uppercase text-xl'>Recent Booked</h2>
                            </div>
                            <Link to='/booking_management'>
                                <div className='grid items-center cursor-pointer hover:text-Descrip-text-color'>
                                    <VisibilityIcon fontSize='large' />
                                </div>
                            </Link>
                        </div>
                        <div className='p-4 h-[38vh] overflow-x-auto'>
                            <table className='w-full text-center text-sm sm:text-sm table-auto  bg-gray-300'>
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
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
