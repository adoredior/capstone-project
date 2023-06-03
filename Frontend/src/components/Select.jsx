import React from "react";

import Aruba3 from '../Media/Aruba3.jpeg';
import FrenchPoly1 from '../Media/FrenchPoly1.jpeg';
import FrenchPoly2 from '../Media/FrenchPoly2.jpeg';
import Maldives2 from '../Media/Maldives2.jpeg';
import Tahiti from '../Media/Tahiti.jpeg';
import Tahiti2 from '../Media/Tahiti2.jpeg';


const Select = () => {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-blue-500"></div>
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">TOP DESTINATIONS</h1>
       
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src={Tahiti2}/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Tahiti</h2>
        <p className="text-base leading-relaxed mt-2">Welcome to Tahiti, a tropical paradise nestled in the heart of the French Polynesian Sea. With pristine white-sand beaches, crystal-clear turquoise waters, and breathtaking natural beauty, Tahiti is a dream destination for travelers seeking a tranquil escape. Immerse yourself in the vibrant local culture and indulge in the luxury of overwater bungalows. Book your journey to Tahiti and let the captivating beauty of this paradise create memories that will last a lifetime!"</p>
        <a className="text-blue-500 inline-flex items-center mt-3">Book Now
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src={FrenchPoly2}/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Turks and Caicos</h2>
        <p className="text-base leading-relaxed mt-2">Turks and Caicos Islands, located in the Caribbean, offer a captivating destination for travelers seeking a tropical paradise. With pristine beaches, crystal-clear turquoise waters, and a vibrant underwater world, this archipelago is a haven for beach lovers and water enthusiasts. Explore the stunning coral reefs, go snorkeling or scuba diving to discover an abundance of marine life, or simply unwind on the picture-perfect beaches. The islands boast luxury resorts, world-class dining, and a warm, welcoming atmosphere. Whether you seek adventure, relaxation, or a mix of both, Turks and Caicos promise an unforgettable experience in a breathtaking setting..</p>
        <a className="text-blue-500 inline-flex items-center mt-3"> Book Now 
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src={FrenchPoly1}/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Aruba</h2>
        <p className="text-base leading-relaxed mt-2">Aruba is a tropical paradise located in the southern Caribbean Sea, offering stunning beaches, warm weather, and a vibrant culture. With its year-round sunshine and average temperature of 82°F (28°C), Aruba is a popular destination for beach lovers and outdoor enthusiasts. Its soft white sands and crystal-clear turquoise waters make Eagle Beach and Palm Beach iconic spots for sunbathing, swimming, and water sports. Beyond the beaches, you can explore Arikok National Park's rugged landscapes, visit the Natural Pool for a secluded swim, and experience the lively streets of Oranjestad, the capital city. Aruba's friendly locals, diverse cuisine, and lively festivals add to the island's charm, making it an unforgettable vacation destination..</p>
        <a className="text-blue-500 inline-flex items-center mt-3">Book Now
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Select



   