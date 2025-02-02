import React from 'react'
import ShipppingForm from '../ShipppingForm/ShipppingForm'
import { poppins } from '@/utils/Helper/helper'

function ShippingPage() {
  return (
    <section className='flex flex-col items-center gap-8 py-10'>
      <h1 className={`${poppins.className} text-5xl `}>SHIPPING RATES</h1>
    <ShipppingForm/>
    </section>
  )
}

export default ShippingPage
