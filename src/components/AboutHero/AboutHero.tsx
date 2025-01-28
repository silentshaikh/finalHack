import React from 'react'
import AboutHeroImg from '../AboutHeroImg/AboutHeroImg'
import AboutHeroCont from '../AboutHeroCont/AboutHeroCont'

function AboutHero() {
  return (
    <section className='flex justify-evenly items-center  max-[550px]:flex-col max-[550px]:py-10 max-[550px]:gap-14'>
        <AboutHeroCont/>
      <AboutHeroImg/>
    </section>
  )
}

export default AboutHero
