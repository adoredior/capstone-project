import React from 'react';
import { RiCustomerService2Line } from 'react-icons/ri';
import { SiYourtraveldottv } from 'react-icons/si';
import { Link } from 'react-router-dom';
import {HiFilter} from 'react-icons/hi';
import DunnsRiver from '../Media/DunnsRiver.jpeg';
import Miamiskyline from '../Media/Miamiskyline.jpeg';
import Mexico from '../Media/Mexico.jpeg';
import Cave from '../Media/Cave.jpeg';





const Book = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2 className='text-center' >LUXURY VACATIONS FOR TWO </h2>
          <p className='py-4 text-center'>
          Escape to a luxurious paradise for two on a stunning white sand beach. Experience the epitome of opulence and relaxation as you indulge in a world of elegance. From exquisite accommodations to personalized service and gourmet dining, every moment is crafted to exceed your expectations. Immerse yourself in the beauty of the ocean, engage in thrilling activities, and let our dedicated concierge team cater to your every desire. Create unforgettable memories on this exclusive luxury vacation, where pristine shores and unparalleled luxury combine to offer a truly extraordinary experience.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Line size={50} />
            </button>
            <div>
                <h3 className='py-2'>TOP CONCIERGE SERVICE</h3>
                <p className='py-1'>TOP RATED COMPANY FOR TRAVEL </p>
            </div>
          </div>
        <div className='flex flex-col lg:flex-row items-center text-center'>
          <button>
            <SiYourtraveldottv size={45} />
          </button>
          <div>
                <h3 className='py-2'>AUTOMATED BOOKINGS</h3>
                <p className='py-1'>ALL INCLUSIVE PACKAGES</p>
          </div>
        </div>
      </div>
    <div>
      <div>
          <div className='border text-center'>
              <p className='pt-2'>GET AN ADDITIONAL 15% OFF</p>
              <p className='py-4'>8 HOURS LEFT</p>
              <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
          </div>
          <form className='w-full'>
              <div className='flex flex-col my-2'>
                  <label>Destination</label>
                  <select className='border rounded-md p-2'>
                  <option>Tahiti</option>
                  <option>Aruba</option>
                  <option>Maldives</option>
                  <option>Jamaica</option>
                  <option>Miami</option>
                  <option>New York</option>
                  <option>Cancun</option>

            </select>
          </div>
          <div className='flex flex-col my-4'>
                <label>Check In</label>
                <input className='border rounded-md p-2' type= "date" />
          </div>
          <div className='flex flex-col my-2'>
            <label>Check Out</label>
            <input className='border rounded-md p-2' type= "date" />
          </div>

          <div className='flex flex-col my-2'>
            <label>Price</label>
            <input className='border rounded-md p-2' type= "price" />
          <h3 className="total">$0</h3>
          <div className="input flex"></div>
        <input type="range" max="10000" min="50" />
      </div>

      <div className='searchOptions flex'>
     <HiFilter className="icon"/>
       <span>MORE FILTERS</span>
       </div>
      
    
          <Link to='/Book'>
            <button className='w-full my-4'>Rates & Availability</button>
          </Link>
        </form>

        <div className="bg-white"/>
        <div classname="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"/>
          <h2 className="text-2xl text-center font-bold tracking-tight text-gray-900">Quick Getaways</h2>
          <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <img className="w-full h-full object-cover" src={DunnsRiver} alt="/" />
          <img className="w-full h-full object-cover" src={Miamiskyline} alt="/" />
          <img className="w-full h-full object-cover" src={Mexico} alt="/" />
          <img className="w-full h-full object-cover" src={Cave} alt="/" />
        </div>
        </div>
      </div>
    </div>
  </div>
  );
};
export default Book;
