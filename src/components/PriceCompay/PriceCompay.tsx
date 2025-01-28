import { poppins } from '@/utils/Helper/helper'
import React from 'react'
import CompanyList from '../CompanyList/CompanyList'

function PriceCompay() {
  return (
    <section className={`${poppins.className} flex flex-col items-center gap-10 py-16`}>
      <h3 className='font-bold text-center'>Trusted By Over 4000 Big Companies</h3>
      <CompanyList/>
    </section>
  )
}

export default PriceCompay
