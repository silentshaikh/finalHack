import { shopCollection } from '@/utils/Helper/helper'
import Image from 'next/image'
import React from 'react'

function ShopCollectList() {
  return (
    <div className='py-6 flex items-center justify-center gap-3 flex-wrap'>
      {shopCollection.map((e) => {
        return (
            <Image className='w-[200px] h-[200px]' key={e.id} src={`/images/${e.img}`} alt='collection' height={200} width={200} placeholder='empty'/>
        )
      })}
    </div>
  )
}

export default ShopCollectList
