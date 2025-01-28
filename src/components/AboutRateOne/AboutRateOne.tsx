import React from 'react'
import RateBoxOne from '../RateBoxOne/RateBoxOne'
import RateBoxTwo from '../RateBoxTwo/RateBoxTwo'
import { poppins } from '@/utils/Helper/helper'

function AboutRateOne() {
  return (
    <section className={`${poppins.className} flex justify-evenly items-center py-20 max-[540px]:flex-col max-[540px]:gap-10`}>
      <RateBoxOne/>
      <RateBoxTwo/>
    </section>
  )
}

export default AboutRateOne
