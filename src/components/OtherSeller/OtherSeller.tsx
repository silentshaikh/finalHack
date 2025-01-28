import { poppins } from '@/utils/Helper/helper'
import React from 'react'
import OtherSellerList from '../OtherSellerList/OtherSellerList'

function OtherSeller() {
  return (
    <section className={`${poppins.className} flex flex-col relative bg-[#fafafa] py-10`}>
      <h2 className='text-xl absolute left-36 font-bold pb-5  border-b-2 max-[900px]:left-3'>BESTSELLER PRODUCTS</h2>
    <OtherSellerList/>
    </section>
  )
}

export default OtherSeller;
