import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookIcon from '@mui/icons-material/Book';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
export const SidebarData = [
    {
        title: 'Dashboard',
        icon: <DashboardIcon />,
        link: "/dashboard"
    },
    {
        title: 'Booking Request',
        icon: <BookIcon />,
        link: "/booking_request"
    },
    {
        title: 'Booking Management',
        icon: <AutoStoriesIcon />,
        link: "/booking_management"
    },
    {
        title: 'History',
        icon: <HistoryToggleOffOutlinedIcon />,
        link: "/history"
    },

]
