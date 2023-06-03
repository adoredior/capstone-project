import React from 'react';
import beachVid from '../../Media/beachVid.mp4';
import { BsSearch } from 'react-icons/bs';
import Select from '../Select';
import Footer from '../Footer/Footer';


const Home = () => {
  return (
    <div>
       <div className="w-full h-screen relative">
          <video 
              className="w-full h-full object-cover" 
              src={beachVid} type="video/mp4"
              autoPlay 
              loop 
              muted
              />
        
         {/* <div className="content-container">  */}
        <div className = 'absolute w-full h-full top-0 bg-gray-900/30'></div>
          <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
            <h1>YOUR DREAM VACATION AWAITS YOU.....</h1>
            <h3 className="py-4">Explore The Top Locations</h3>
             <form 
            className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-white"> 
             <div>
              <input
                  className="bg-white text-black w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none"
                  type="text"
                  placeholder="Search destination ..."
                />
              </div>
              <div>
                <button>
                  <BsSearch size={20} className="icon" style={{ color: '#0876eb' }} />
                </button>
              </div>
            </form> 
         
          {/* <div className='homeContent container'>
            <div className='textDiv'>
              
              <span className="smallText">
              Our Packages
              </span>
             
              <h1 className='homeTitle'>
                Search Your Dream Vacation
              </h1>
            </div>
          </div>
            <label htmlFor="city">Select your 
              destination</label>
              <div className='input flex'>
                <input type="text" placeholder='Enter destination here ......'/>
                <GrLocation className ='icon'/>
              </div>

            <div className='dateInput'>
              <label htmlFor="date">Select your 
              date</label>
              <div className='input flex'>
                <input type="date" />
              </div>
            </div>
            <div className='priceInput'>
              <div className='label_total flex'>
                <label htmlFor="price">Max price</label>
                <h3 className="total">$5000</h3>
              </div>
              <div className="input flex"></div>
              <input type="range" max="5000" min="500" />
            </div>
          </div>
          </div>
        </div> */}

        </div>
      </div>
      <Select />
      <Footer />
   </div>
  );
};

export default Home;
