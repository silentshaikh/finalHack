import { otherSeller } from '@/utils/Helper/helper'
import React from 'react'
import OtherCard from '../OtherCard/OtherCard';

function OtherSellerList() {
  return (
    <div className='pt-20 flex justify-center flex-wrap gap-12'>
      {
        otherSeller.map((e) => {
            return(
                <OtherCard key={e.id} clothlist={e}/>
            );
        })
      }
    </div>
  )
}

export default OtherSellerList
