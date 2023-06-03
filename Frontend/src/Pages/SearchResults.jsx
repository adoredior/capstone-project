import React from 'react'
import Aruba from '../Media/Aruba.jpeg'

const SearchResults = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        
         <div className='relative'>
            <img src={Aruba} alt="/" />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-4 text-2xl font-bold absolute text-white'>Aruba</p>
            </div>

         


    </div>
    </div>
  )
}

export default SearchResults