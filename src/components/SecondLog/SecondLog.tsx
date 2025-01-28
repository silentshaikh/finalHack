import { poppins } from '@/utils/Helper/helper'
import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'

function SecondLog() {
  return (
    <div className={`${poppins.className} flex gap-5 items-center max-[800px]:hidden`}>
      <h5 className='text-[#23a6f0]'>Login</h5>
      <button className='bg-[#23a6f0] text-white flex items-center text-sm py-3 px-5 rounded-md'>Become a member <IoMdArrowForward /></button>
    </div>
  )
}

export default SecondLog
