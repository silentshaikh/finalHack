import { faqList } from '@/utils/Helper/helper'
import React from 'react'
import FaqCard from '../FaqCard/FaqCard';

function PriceFaqList() {
  return (
    <div className='flex justify-center items-center flex-wrap gap-14 py-10'>
      {faqList.map((e) => {
        return(
            <FaqCard key={e.id} faqData={e}/>
        );
      })}
    </div>
  )
}

export default PriceFaqList
