import Image from 'next/image'
import React from 'react'

function AboutVideoDetail() {
  return (
    <>
     <Image className='max-[840px]:w-[700px] max-[740px]:w-[600px] max-[640px]:w-[500px] max-[540px]:w-[400px] max-[440px]:w-[350px] max-[370px]:w-[300px] max-[320px]:w-[250px]' src='/images/Video card.png' alt='about-video' height={100} width={800} /> 
    </>
  )
}

export default AboutVideoDetail
