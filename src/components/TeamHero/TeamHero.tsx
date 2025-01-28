import React from 'react'
import TeamHeroCont from '../TeamHeroCont/TeamHeroCont'
import TeamHeroImg from '../TeamHeroImg/TeamHeroImg'
import { poppins } from '@/utils/Helper/helper'

function TeamHero() {
  return (
    <section className={`${poppins.className} py-10 flex flex-col items-center`}>
      <TeamHeroCont/>
      <TeamHeroImg/>
    </section>
  )
}

export default TeamHero
