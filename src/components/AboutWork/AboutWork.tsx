import React from 'react'
import AboutWorkContent from '../AboutWorkContent/AboutWorkContent'
import AboutWorkImg from '../AboutWorkImg/AboutWorkImg'
import { poppins } from '@/utils/Helper/helper'

function AboutWork() {
  return (
    <section className={`${poppins.className} flex justify-center`}>
      <AboutWorkContent/>
      <AboutWorkImg/>
    </section>
  )
}

export default AboutWork
