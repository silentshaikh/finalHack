import Image from 'next/image'
import React from 'react'

function HomeSummerImg() {
  return (
    <div>
      <Image
      className='relative top-10 max-[950px]:w-[300px] max-[350px]:w-[250px]'
      src={`/images/col-md-6.png`}
      alt='Summer-Collection'
      height={400}
      width={400}
      />
    </div>
  )
}

export default HomeSummerImg
