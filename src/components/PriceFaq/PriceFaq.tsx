import { poppins } from '@/utils/Helper/helper'
import React from 'react'
import PriceFaqList from '../PriceFaqList/PriceFaqList'

function PriceFaq() {
  return (
    <section className={`${poppins.className} flex flex-col items-center py-14`}>

      <h3 className='text-2xl font-bold'>Pricing FAQs</h3>
      <p className='text-[#737373] py-4 w-[500px] text-center font-bold max-[510px]:w-[400px] max-[390px]:w-[350px] max-[390px]:text-sm max-[350px]:w-[300px] max-[320px]:w-[280px] max-[290px]:w-[260px]'>Problems trying to resolve the conflict between 
      the two major realms of Classical physics</p>
      <PriceFaqList/>
      {/* <p className='text-[#737373] pt-3'>Haven’t got your answer? Contact our support</p> */}
    </section>
  )
}

export default PriceFaq
