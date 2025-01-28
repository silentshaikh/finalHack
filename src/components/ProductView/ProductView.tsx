import React from 'react'
import { CiCircleList } from 'react-icons/ci'
import { GrAppsRounded } from 'react-icons/gr'

function ProductView() {
  return (
    <div className='flex items-center gap-5'>
        <h4 className='font-bold text-[#737373]'>Views:</h4>
        <div className='shadow p-4 '>

        <GrAppsRounded  />
        </div>
        <div className='shadow p-4'>
        <CiCircleList  />
        </div>
    </div>
  )
}

export default ProductView
