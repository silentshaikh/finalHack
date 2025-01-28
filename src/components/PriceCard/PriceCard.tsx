import { PriceList } from '@/utils/Type/type'
import React from 'react'
import { FcOk } from 'react-icons/fc'

function PriceCard({priceData}:{priceData:PriceList}) {
  return (
    <div className={`flex flex-col items-center w-[300px]  py-12 ${priceData.id === 2 ? 'bg-black text-white' : 'bg-white'} max-[320px]:w-[280px] max-[290px]:w-[250px]`}> 
      <h3 className='text-2xl -tracking-tighter font-bold'>{priceData.quality}</h3>
      <p className='py-4 text-[#737373] font-bold w-[200px]'>{priceData.para}</p>
      <div className="flex items-center gap-1 py-3">
        <h4 className='text-3xl text-[#23a6f0] font-bold'>{priceData.price}</h4>
        <sup className='text-[#23a6f0] font-bold text-xl'>{priceData.sym}</sup>
        <p className='pt-5 text-[#8EC2F2] font-bold'>{priceData.duration}</p>
      </div>
      <div className="flex flex-col text-sm font-bold py-3 gap-3">
        <p className='flex gap-1 items-center '> <FcOk className='text-xl' />{priceData.package}</p>
        <p className='flex gap-1 items-center '> <FcOk className='text-xl' />{priceData.package}</p>
      </div>
    </div>
  )
}

export default PriceCard
