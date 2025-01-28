import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import PriceForm from '../PriceForm/PriceForm'

function PriceHeroCont() {
  return (
    <div className='py-10 flex flex-col items-center'>
      <h5 className='text-sm text-[#737373] font-bold'>PRICING</h5>
      <h2 className='py-5 text-3xl font-bold -tracking-tighter'>Simple Pricing</h2>
      <div className='flex items-center text-sm gap-3 font-bold pb-6'>
            <h4>Home</h4>
            {/* <span>/</span> */}
            <FaGreaterThan className='text-[#bdbdbd]'/>
            <h4 className='text-[#bdbdbd]'>Shop</h4>
        </div>
        <h3 className='text-2xl font-bold -tracking-tighter'>Pricing</h3>
        <p className='py-5 text-sm text-[#737373] w-[500px] font-bold max-[520px]:w-[350px] max-[350px]:w-[300px] max-[320px]:w-[280px] max-[280px]:w-[260px]'>Problems trying to resolve the conflict between 
        the two major realms of Classical physics: Newtonian mechanics </p>
        <PriceForm/>
    </div>
  )
}

export default PriceHeroCont
