import Image from 'next/image'
import React from 'react'

function HeroCollectImg() {
  return (
    <div className='flex gap-7 max-[718px]:gap-3 max-[700px]:flex-col max-[700px]:items-center'>
    <div className='relative'>
    <Image
      className='h-[420px] w-[450px] max-[930px]:w-[280px] max-[750px]:w-[250px] max-[680px]:w-[220px] max-[660px]:w-[500px] max-[660px]:h-[300px] max-[520px]:h-[400px] max-[520px]:w-[300px]  max-[320px]:w-[250px]'
      src='/images/filter.jpg'
      alt='collection'
      height={300}
      width={400}
      />
      <button className='absolute bottom-16 left-10 bg-white px-12 py-2 font-bold'>MEN</button>
    </div>
    <div className='relative'>

      <Image
      className='max-[660px]:w-[400px] max-[660px]:h-[250px] max-[520px]:h-[400px] max-[520px]:w-[300px] max-[320px]:w-[250px]'
      src='/images/filter (1).jpg'
      alt='collection'
      height={300}
      width={200}
      />
      <button className='absolute bottom-16 left-3 bg-white px-7 py-2 font-bold'>WOMEN</button>
      </div>
      <div className="flex flex-col gap-4">
        <div className='relative'>

      <Image
      className='size-[200px] max-[660px]:w-[350px] max-[660px]:h-[200px] max-[520px]:h-[200px] max-[520px]:w-[300px] max-[320px]:w-[250px]'
      src='/images/filter (2).jpg'
      alt='collection'
      height={200}
      width={200}
      />
      <button className='absolute bottom-5 left-3 bg-white px-7 py-2 font-bold'>ACCESSORIES</button>
      </div>
      <div className='relative'>
       <Image
       className='size-[200px] max-[660px]:w-[350px] max-[660px]:h-[200px] max-[520px]:h-[200px] max-[520px]:w-[300px] max-[320px]:w-[250px]'
       src='/images/filter (3).jpg'
       alt='collection'
       height={200}
       width={200}
       />
       <button className='absolute bottom-3 left-3 bg-white px-7 py-2 font-bold'>KID</button>
       </div>
      </div>
    </div>
  )
}

export default HeroCollectImg
