import React from 'react'
import HomeNeuralImg from '../HomeNeuralImg/HomeNeuralImg'
import HomeNeuralContent from '../HomeNeuralContent/HomeNeuralContent'
import { poppins } from '@/utils/Helper/helper'

function HomeNeural() {
  return (
    <section className={`${poppins.className} flex items-center justify-center gap-10 max-[700px]:flex-col-reverse max-[700px]:text-center max-[700px]:py-5`}>
      <HomeNeuralImg/>
      <HomeNeuralContent/>
    </section>
  )
};
export default HomeNeural;