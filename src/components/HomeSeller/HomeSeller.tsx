import { poppins } from '@/utils/Helper/helper'
import React from 'react'
import HomeSellerList from '../HomeSellerList/HomeSellerList'

function HomeSeller() {
  return (
    <section className={`${poppins.className} flex flex-col items-center py-20`}>
      <h5 className='font-bold text-[#737373]'>Featured Products</h5>
      <h2 className='text-xl font-extrabold -tracking-tighter py-2'>BESTSELLER PRODUCTS</h2>
      <p className='text-sm font-bold text-[#737373] text-center'>Problems trying to resolve the conflict between </p>
        <HomeSellerList/>
    </section>
  )
}

export default HomeSeller
