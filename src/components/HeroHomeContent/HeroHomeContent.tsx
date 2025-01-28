import React from 'react'

function HeroHomeContent() {
  return (
    <div className=' flex flex-col items-start pl-[100px] max-[530px]:pl-[20px] text-white'>
      <h5>SUMMER 2020</h5>
      <h1 className='py-5 text-5xl font-extrabold max-[530px]:w-[100px] max-[330px]:text-4xl'>NEW COLLECTION</h1>
      <p className='w-[300px] pb-7 max-[330px]:w-[200px]'>We know how large objects will act, 
      but things on a small scale.</p>
      <button className='bg-[#2dc071] py-3 px-6 rounded-md'>Shop Now</button>
    </div>
  )
}

export default HeroHomeContent
