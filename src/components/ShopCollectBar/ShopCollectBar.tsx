import { poppins, rubikBuble } from '@/utils/Helper/helper'
import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'

function ShopCollectBar() {
  return (
    <div className={`${poppins.className} flex justify-between items-center px-36 max-[600px]:px-5 max-[380px]:flex-col max-[380px]:gap-5`}>
        <div className={`${rubikBuble.className}`}>
            <h2 className='text-2xl'>SHOP</h2>
        </div>
        <div className='flex items-center text-sm gap-3 font-bold'>
            <h4>Home</h4>
            {/* <span>/</span> */}
            <FaGreaterThan className='text-[#bdbdbd]'/>
            <h4 className='text-[#bdbdbd]'>Shop</h4>
        </div>
      
    </div>
  )
}

export default ShopCollectBar
