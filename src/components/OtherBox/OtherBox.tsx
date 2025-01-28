import { otherBox1 } from '@/utils/Helper/helper';
import React from 'react'

function OtherBox() {
  return (
    <div className='flex flex-col gap-3'>
      {otherBox1.map((e,i) => {
            return (
                <p key={i} className='w-[300px] text-sm text-[#737373] font-bold max-[330px]:text-[12px] max-[330px]:w-[250px]'>{e}</p>
            );
        })}
    </div>
  )
}

export default OtherBox
