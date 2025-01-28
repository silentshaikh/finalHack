import Image from 'next/image'
import React from 'react'

function ContactTalkDetail() {
  return (
    <div className='flex flex-col items-center '>
      <Image className='size-[40px]' src='/images/Arrow 2.png' alt='contact-talk' height={10} width={50} />
      <h5 className='py-2'>WE Can&apos;t WAIT TO MEET YOU</h5>
      <h2 className='text-4xl font-bold pb-3'>Let&apos;s Talk</h2>
      <button className='bg-[#23a6f0] py-2 w-[150px] text-sm rounded-md text-white'>Try it free now</button>
    </div>
  )
};
export default ContactTalkDetail
