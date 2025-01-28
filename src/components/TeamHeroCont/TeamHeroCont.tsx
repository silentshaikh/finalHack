import React from 'react'
import { FaGreaterThan } from 'react-icons/fa';

function TeamHeroCont() {
  return (
    <div className='flex flex-col items-center text-center'>
      <h5 className='text-[#737373] font-bold text-sm'>WHAT WE DO</h5>
      <h2 className='py-5 text-3xl font-bold'>Innovation tailored for you</h2>
      <div className='flex items-center text-sm gap-3 font-bold'>
            <h4>Home</h4>
            {/* <span>/</span> */}
            <FaGreaterThan className='text-[#bdbdbd]'/>
            <h4 className='text-[#bdbdbd]'>Shop</h4>
        </div>
    </div>
  )
};
export default TeamHeroCont;