'use client';
import { useEcomHook } from '@/Context/Context'
import { rubikBuble } from '@/utils/Helper/helper'
import React from 'react'

function EmptyAlert() {
    const {emptyAlert} = useEcomHook();
  return (
    <div className={`${rubikBuble.className} transition-all fixed ${emptyAlert ? 'top-32' : '-top-60'} left-[40%] flex justify-center text-red-500 bg-slate-200 py-5 px-6 rounded-md max-[500px]:py-3 max-[500px]:left-32 max-[430px]:left-8 max-[340px]:left-3 max-[280px]:w-[230px]`}>
      <p className='max-[500px]:text-sm max-[280px]:text-[13px] '>Please Select the color and add the quantity</p>
    </div>
  )
}

export default EmptyAlert
