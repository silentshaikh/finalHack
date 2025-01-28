import { poppins } from '@/utils/Helper/helper'
import React from 'react'
import HomePostImg from '../HomePostImg/HomePostImg'

function HomePost() {
  return (
    <section className={`${poppins.className} flex flex-col items-center pt-24 `}>
      <h5 className='text-[#23a6f0] font-bold'>Practice Advice</h5>
      <h2 className='text-3xl font-bold py-3'>Featured Posts</h2>
      <p className='w-[600px] text-sm font-bold text-[#737373] text-center max-[600px]:w-[300px] max-[320px]:text-[12px] max-[320px]:w-[250px]'>Problems trying to resolve the conflict between 
      the two major realms of Classical physics: Newtonian mechanics </p>
      <HomePostImg/>
    </section>
  )
}

export default HomePost
