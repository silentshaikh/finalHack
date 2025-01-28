import React from 'react'
import HeroCollectImg from '../HeroCollectImg/HeroCollectImg'
import { poppins } from '@/utils/Helper/helper'

function HeroCollection() {
  return (
    <section className={`${poppins.className} flex flex-col justify-center items-center py-20  bg-[#fafafa]`}>
      <h2 className='text-xl font-extrabold -tracking-tighter'>EDITOR’S PICK</h2>
      <p className='text-sm pt-3 pb-8 text-[#737373] max-[350px]:w-[200px] max-[350px]:text-center '>Problems trying to resolve the conflict between </p>
      <HeroCollectImg/>
    </section>
  )
}

export default HeroCollection
