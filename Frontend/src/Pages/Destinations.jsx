import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component for routing
import Aruba3 from '../Media/Aruba3.jpeg';
import FrenchPoly1 from '../Media/FrenchPoly1.jpeg';
import FrenchPoly2 from '../Media/FrenchPoly2.jpeg';
import Maldives2 from '../Media/Maldives2.jpeg';
import Tahiti from '../Media/Tahiti.jpeg';
import Tahitii from '../components/Tahitii';


const Destinations = () => {
  return (
    <div className="max-w-1240 mx-auto py-16 px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">All inclusive Resorts</h1>
      <p className="py-4 text-lg text-gray-500 mb-8">On The Most Beautiful White Sand Beaches</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <Link to="/Book">
          <div className="relative">
            <img className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2" src={Maldives2} alt="" />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold bg-black bg-opacity-50">
              Maldives
            </div>
          </div>
        </Link>
        <Link to="/Book">
          <div className="relative">
            <img className="w-full h-full object-cover" src={Tahiti} alt="/" />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold bg-black bg-opacity-50">
              Bali
            </div>
          </div>
        </Link>
        <Link to="/Book">
          <div className="relative">
            <img className="w-full h-full object-cover" src={FrenchPoly1} alt="/" />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold bg-black bg-opacity-50">
              Tahiti
            </div>
          </div>
        </Link>
        <Link to="/Book">
          <div className="relative">
            <img className="w-full h-full object-cover" src={FrenchPoly2} alt="/" />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold bg-black bg-opacity-50">
              Turks and Caicos
            </div>
          </div>
        </Link>
        <Link to="/Book">
          <div className="relative">
            <img className="w-full h-full object-cover" src={Aruba3} alt="/" />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold bg-black bg-opacity-50">
              Aruba
            </div>
          </div>
        </Link>
      </div>

      <Tahitii />
    </div>
  );
};

export default Destinations;
