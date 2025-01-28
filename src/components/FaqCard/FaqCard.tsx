import { FaqList } from '@/utils/Type/type';
import React from 'react'
import { FcNext } from 'react-icons/fc';

function FaqCard({faqData}:{faqData:FaqList}) {
  return (
    <div className='flex gap-2'>
        <FcNext />
        <div className="flex flex-col gap-1">
    <h3 className='font-bold max-[350px]:text-[13px] max-[290px]:w-[200px]'>{faqData.head}</h3>
    <p className='w-[400px] text-sm text-[#737373] max-[440px]:w-[300px] max-[350px]:w-[260px] max-[290px]:text-[12px] max-[290px]:w-[230px]'>{faqData.para}</p>
        </div>
    </div>
  )
};
export default FaqCard;