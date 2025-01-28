import { poppins } from '@/utils/Helper/helper'
import React from 'react'

function HomeSummerContent() {
  return (
    <div className={`${poppins.className} flex flex-col text-white max-[350px]:items-center max-[350px]:text-center`}>
      <h5>SUMMER 2020</h5>
      <h2 className='text-4xl font-bold w-[300px] -tracking-tighter py-8 max-[300px]:w-[200px]'>Vita Classic Product</h2>
      <p className='w-[400px] text-sm pb-4 max-[860px]:w-[300px] max-[350px]:w-[250px] max-[300px]:w-[200px]'>We know how large objects will act, We know how are objects will act, We know</p>
      <div className="flex items-center gap-5">
        <p className='font-bold -tracking-tighter '>$16.48</p>
        <button className='bg-[#2dc071] rounded-sm py-2 px-6 text-[12px]'>ADD TO CART</button>
      </div>
    </div>
  )
};
export default HomeSummerContent;