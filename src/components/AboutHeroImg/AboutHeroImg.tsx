import Image from 'next/image'
import React from 'react'

function AboutHeroImg() {
  return (
    <div>
      <Image className='max-[950px]:size-[450px] max-[900px]:size-[400px] max-[810px]:size-[350px] max-[710px]:size-[300px] max-[650px]:w-[250px] max-[550px]:w-[350px] max-[370px]:w-[300px] max-[330px]:w-[250px] max-[300px]:w-[230px]' src='/images/none.png' alt='about-detail' height={100} width={450} />
    </div>
  )
}

export default AboutHeroImg;