import Navbar from './components/Navbar'
import bgCover from './assets/cover.jpg'
import Footer from './components/Footer'
import Card from './assets/card.png'
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='bg-cover h-screen bg-center' style={{ backgroundImage: `url(${bgCover})` }}  >
        <div className="abulote inset-0 bg-gradient-to-b h-screen from-transparent to-black">
          <div className='flex p-2 flex-col sm:flex-row justify-center h-screen gap-10 items-center'>
            <div className='z-10 '>
              <img src={Card} className='rounded-lg opacity-80' alt="Card.jpg" />
            </div>
            <div className='text-center'>
              <h1 class="text-4xl text-nav-text-color font-semibold">Creating Unforgettable Moments. <br /><i className='text-sm font-normal text-white'> From weddings to birthdays, RadiantReception brings your dream events to life..</i></h1>
              <Link to='/event'> <button className='bg-nav-text-color mt-5 text-black px-7 py-2 rounded-full'>Plan my Event</button></Link>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
