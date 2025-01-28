import { otherBox2 } from '@/utils/Helper/helper';
import React from 'react'
import { PiGreaterThan } from 'react-icons/pi';

function OtherBoxTwo() {
  return (
    <div className="flex flex-col pb-10">
        <h2 className='font-bold pb-5 text-xl'>the quick fox jumps over </h2>
    <div className='flex flex-col gap-3'>
    {otherBox2.map((e,i) => {
        return (
            <div key={i} className='flex gap-2 items-center'>
                <PiGreaterThan className='text-lg text-[#737373]' />
            <p className=' text-sm text-[#737373] font-bold max-[330px]:text-[12px]'>{e}</p>
            </div>
        );
    })}
  </div>
    </div>
  )
}

export default OtherBoxTwo
