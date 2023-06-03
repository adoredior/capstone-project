import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-blue-900 tracking-widest">ABOUT TRAVEL HAUS</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <div className="flex-grow sm:pl-8">
                  <h3 className="text-500 mb-3">The Innovative Travel App Redefining Your Getaways</h3>
                  <p className="mb-4">
           Travel Haus is a groundbreaking travel app that is revolutionizing the way people plan and experience their vacations. With its innovative features and cutting-edge technology, Travel Haus is setting a new standard in the travel industry.
        </p>
        <p>
          With Travel Haus, you can say goodbye to the hassle of traditional travel planning. Our app offers a seamless and user-friendly interface that makes booking vacations, excursions, and quick getaways a breeze. Whether you're looking for a relaxing beach escape, an adventurous trek through the mountains, or an immersive cultural experience, Travel Haus has it all.
        </p>
        <p>
          What sets Travel Haus apart is its intelligent recommendation system. Our app utilizes advanced algorithms and machine learning to analyze your preferences, travel history, and interests. Based on this information, Travel Haus provides personalized recommendations tailored specifically to you. Say goodbye to generic travel suggestions – with Travel Haus, every trip is uniquely curated to match your preferences.
        </p>
        
        <p>
          Not only does Travel Haus offer an exceptional booking experience, but it also provides a wealth of information and resources to enhance your journey. From insider tips and local insights to detailed destination guides and interactive maps, Travel Haus ensures that you have all the tools you need to make the most of your trip.
        </p>
        
        <p>
          Safety and security are of utmost importance to us at Travel Haus. We partner with trusted accommodations, transportation providers, and tour operators to ensure that every aspect of your trip meets the highest standards of quality and reliability. Additionally, our app provides real-time updates, travel alerts, and emergency assistance to give you peace of mind throughout your journey.
        </p>
       
        <p>
          Travel Haus is not just an app – it's a community of passionate travelers. Connect with like-minded explorers, share your experiences, and gain inspiration for your next adventure. Our app also features user-generated reviews and ratings, allowing you to make informed decisions based on real feedback from fellow travelers.
        </p> 
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};

export default About;
