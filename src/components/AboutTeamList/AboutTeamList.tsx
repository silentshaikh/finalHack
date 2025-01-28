import { aboutTeam } from '@/utils/Helper/helper'
import React from 'react'
import AboutTeamCard from '../AboutTeamCard/AboutTeamCard';

function AboutTeamList() {
  return (
    <div className=' pt-10 flex justify-evenly items-center gap-5 flex-wrap'>
      {
        aboutTeam.map((e,i) => {
            return(
                <AboutTeamCard key={i} teamCard={e}/>
            );
        })
      }
    </div>
  )
}

export default AboutTeamList
