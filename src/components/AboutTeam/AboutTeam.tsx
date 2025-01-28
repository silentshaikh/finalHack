import { poppins } from '@/utils/Helper/helper'
import React from 'react'
import AboutTeamList from '../AboutTeamList/AboutTeamList'

function AboutTeam() {
  return (
    <section className={`${poppins.className} flex flex-col items-center py-10`}>
      <h2 className='text-2xl font-bold'>Meet Our Team</h2>
      <p className='w-[500px] text-center py-5 text-sm text-[#737373] font-bold max-[540px]:w-[400px] max-[430px]:w-[350px] max-[360px]:w-[300px] max-[330px]:w-[250px]'>Problems trying to resolve the conflict between 
      the two major realms of Classical physics: Newtonian mechanics </p>
      <AboutTeamList/>
    </section>
  )
}

export default AboutTeam
