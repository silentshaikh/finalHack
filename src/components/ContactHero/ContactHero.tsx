import React from 'react'
import ContactHeroCont from '../ContactHeroCont/ContactHeroCont'
import ContactHeroImg from '../ContactHeroImg/ContactHeroImg'
import { poppins } from '@/utils/Helper/helper'

function ContactHero() {
  return (
    <section className={`${poppins.className} flex justify-evenly items-center max-[600px]:flex-col max-[680px]:py-5 max-[600px]:gap-9 max-[600px]:text-center`}>
      <ContactHeroCont/>
      <ContactHeroImg/>
    </section>
  )
}

export default ContactHero
