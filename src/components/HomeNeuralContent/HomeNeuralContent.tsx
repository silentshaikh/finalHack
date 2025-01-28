import React from 'react'

function HomeNeuralContent() {
  return (
    <div className='flex flex-col max-[700px]:items-center'>
        <h5 className='text-[#bdbdbd] font-bold'>SUMMER 2020</h5>
      <h2 className='text-3xl font-bold py-8 w-[300px] max-[300px]:text-2xl max-[300px]:w-[150px]'>Part of the Neural 
      Universe</h2>
      <p className='w-[300px] text-sm pb-4 max-[300px]:w-[250px]'>We know how large objects will act, 
      but things on a small scale.</p>
      <div className="flex items-center gap-5">
      <button className='bg-[#2dc071] rounded-sm py-2 px-6  text-[12px] text-white font-bold'>BUY NOW</button>
        <button className='text-[#2dc071] font-bold border-[#2dc071] border-2 rounded-sm py-2 px-6 text-[12px]'>READ MORE</button>
      </div>
    </div>
  )
}

export default HomeNeuralContent
