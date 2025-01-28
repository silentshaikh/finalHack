import { ratingList } from '@/utils/Helper/helper'
import React from 'react'

function AboutRatingList() {
  return (
    <section className='flex justify-evenly items-center py-9 flex-wrap gap-5'>
      {ratingList.map((e) => {
        return(
            <div key={e.ratingName} className='flex flex-col items-center gap-2'>
                <h2 className='text-3xl font-bold'>{e.ratingCount}</h2>
                <p className='text-sm text-[#737373] font-bold'>{e.ratingName}</p>
            </div>
        )
      })}
    </section>
  )
}

export default AboutRatingList
