import Image from 'next/image'
import React from 'react'
import OtherBox from '../OtherBox/OtherBox'
import OtherBoxTwo from '../OtherBoxTwo/OtherBoxTwo'

function OtherProdDetail() {
  return (
    <div className='flex justify-center gap-10 flex-wrap py-10 max-[1000px]:gap-5 max-[619px]:flex-col max-[619px]:items-center'>
        <Image
        className='w-[300px] h-[400px] max-[330px]:w-[250px]'
         src='/images/card-item (1).png'
        alt='product-detail'
        height={200}
        width={300}
        />
        <div className="flex flex-col">
        <h2 className='font-bold pb-5 text-xl'>the quick fox jumps over </h2>
        <OtherBox/>
        </div>
        <div className='flex flex-col max-[924px]:flex-row max-[924px]:gap-10 max-[619px]:flex-col max-[619px]:gap-0'>
        <OtherBoxTwo/>
        <OtherBoxTwo/>
        </div>
      
    </div>
  )
};
export default OtherProdDetail;