'use client';
import { companyList } from '@/utils/Helper/helper'
import Image from 'next/image'
import React from 'react'

function CompanyList() {
  return (
    <div className='flex justify-center gap-14 flex-wrap'>
     {companyList.map((e,i) => {
        return(
            <Image key={i} className='' src={`/images/${e}`} alt='company' height={0} width={100}/>
        )
     })} 
    </div>
  )
}

export default CompanyList
