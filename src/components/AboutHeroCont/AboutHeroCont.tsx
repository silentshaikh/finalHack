import { poppins } from '@/utils/Helper/helper'
import React from 'react'

function AboutHeroCont() {
  return (
    <div className={`${poppins.className}`}>
      <h5 className='font-bold text-sm'>ABOUT COMPANY</h5>
      <h2 className='text-4xl font-bold py-8'>ABOUT US</h2>
      <p className='w-[350px] pb-5 text-[#737373] -tracking-tighter max-[770px]:w-[300px] max-[650px]:text-sm max-[600px]:w-[250px] max-[550px]:w-[300px] max-[330px]:w-[250px]'>We know how large objects will act, 
      but things on a small scale</p>
      <button className='bg-[#23a6f0] py-3 px-4 text-white rounded-md text-[13px] '>Get Quote Now</button>
    </div>
  )
}

export default AboutHeroCont
