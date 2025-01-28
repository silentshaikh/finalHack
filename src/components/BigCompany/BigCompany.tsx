import { poppins } from '@/utils/Helper/helper'
import React from 'react'
import CompanyList from '../CompanyList/CompanyList'

function BigCompany() {
  return (
    <section className={`${poppins.className} flex flex-col items-center bg-[#fafafa] py-14`}> 
    <h2 className='text-xl font-extrabold' >Big Companies Are Here</h2>
    <p className='pt-6 w-[500px] text-center text-sm text-[#737373] font-bold pb-14 max-[530px]:w-[350px] max-[360px]:w-[300px] max-[320px]:w-[280px] max-[300px]:w-[250px]:'>Problems trying to resolve the conflict between 
    the two major realms of Classical physics: Newtonian mechanics </p>
    <CompanyList/>
      
    </section>
  )
}

export default BigCompany
