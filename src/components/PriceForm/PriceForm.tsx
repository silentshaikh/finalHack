import Image from 'next/image'
import React from 'react'

function PriceForm() {
  return (
    <div className='flex justify-center items-center gap-3 py-5 max-[320px]: flex-col'>
      <h4 className='font-bold'>Monthly</h4>
      <Image src='/images/form-check-input.png' alt='package check' height={10} width={50}/>
      <h4 className='font-bold'>Year</h4>
      <button className='bg-[#b2e3ff] text-[#23a6f0]  py-3 px-5 font-bold text-sm rounded-full'>Save 25%</button>
    </div>
  )
}

export default PriceForm
