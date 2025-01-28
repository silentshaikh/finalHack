import { otherBar } from '@/utils/Helper/helper'
import React from 'react'

function OtherBar() {
  return (
    <div className='flex justify-center flex-wrap gap-8 py-6 border-b-2 max-[450px]:gap-4'>
      {
        otherBar.map((e,i) => {
            return(
                <h3 key={i} className='text-[#737373] font-bold'>{e}</h3>
            );
        })
      }
    </div>
  )
}

export default OtherBar
