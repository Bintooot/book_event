import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About_us from './pages/About_us.jsx'
import Event from './pages/Event.jsx'
import Gallery from './pages/Gallery.jsx'
import Login from './admin_page/Login.jsx'
import Sign_up from './admin_page/Sign_up.jsx'
import Dashboard from './admin_page/Dashboard.jsx'
import BookingRequest from './admin_page/BookingRequest.jsx'
import BookingManagement from './admin_page/BookingManagement.jsx'
import WeddingPlan from './pages/WeddingPlan.jsx'
import Birthday from './pages/Birthday.jsx'
import Form from './pages/Form.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import History from './admin_page/History.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "admin_login",
    element: <Login />,
  },
  {
    path: "admin_signup",
    element: <Sign_up />,
  },
  {
    path: "about_us",
    element: <About_us />,
  },
  {
    path: "event",
    element: <Event />,
  },
  {
    path: "gallery",
    element: <Gallery />,
  },
  {
    path: "wedding_plan",
    element: <WeddingPlan />,
  },
  {
    path: "form",
    element: <Form />,
  },
  {
    path: "birthday_plan",
    element: <Birthday />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "booking_request",
    element: <BookingRequest />,
  },
  {
    path: "booking_management",
    element: <BookingManagement />,
  },
  {
    path: "history",
    element: <History />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
