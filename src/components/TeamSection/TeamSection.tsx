import { poppins } from '@/utils/Helper/helper'
import React from 'react'
import TeamList from '../TeamList/TeamList'

function TeamSection() {
  return (
    <section className={`${poppins.className} py-7 flex flex-col items-center`}>
      <h3 className='text-3xl font-bold'>Meet Our Team</h3>
      <TeamList/>
    </section>
  )
}

export default TeamSection
