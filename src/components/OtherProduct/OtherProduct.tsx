import React from 'react'
import OtherBar from '../OtherBar/OtherBar'
import { poppins } from '@/utils/Helper/helper'
import OtherProdDetail from '../OtherProdDetail/OtherProdDetail'

function OtherProduct() {
  return (
    <section className={`${poppins.className}`}>
      <OtherBar/>
      <OtherProdDetail/>
    </section>
  )
}

export default OtherProduct
