import { poppins } from '@/utils/Helper/helper'
import React from 'react'
import PriceHeroCont from '../PriceHeroCont/PriceHeroCont'
import PriceList from '../PriceList/PriceList'

function PriceHero() {
  return (
    <section className={`${poppins.className} flex  flex-col items-center text-center bg-[#fafafa]`}>
      <PriceHeroCont/>
      <PriceList/>
    </section>
  )
}

export default PriceHero
