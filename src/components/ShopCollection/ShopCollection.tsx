import React from 'react'
import ShopCollectBar from '../ShopCollectBar/ShopCollectBar'
import ShopCollectList from '../ShopCollectList/ShopCollectList'

function ShopCollection() {
  return (
    <section className='bg-[#fafafa] py-5'>
      <ShopCollectBar/>
      <ShopCollectList/>
    </section>
  )
}

export default ShopCollection
