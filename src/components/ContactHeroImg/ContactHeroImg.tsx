import Image from 'next/image'
import React from 'react'

function ContactHeroImg() {
  return (
    <div>
      <Image className='w-[500px]  max-[1000px]:size-[450px] max-[840px]:w-[400px] max-[790px]:size-[350px] max-[680px]:size-[320px] max-[340px]:size-[280px] max-[300px]:size-[250px]' src='/images/none (1).png' alt='contact' height={100} width={500} />
    </div>
  )
}

export default ContactHeroImg
