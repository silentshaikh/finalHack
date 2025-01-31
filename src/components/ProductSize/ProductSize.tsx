import React from 'react'

function ProductSize({size}:{size:string}) {
  return (
    <p className='font-bold text-lg'>
      {size}
    </p>
  )
}

export default ProductSize
