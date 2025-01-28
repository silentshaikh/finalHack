import { teamList } from '@/utils/Helper/helper';
import React from 'react'
import AboutTeamCard from '../AboutTeamCard/AboutTeamCard';

function TeamList() {
  return (
    <div className=' pt-10 flex justify-center items-center gap-14 flex-wrap'>
    {
      teamList.map((e,i) => {
          return(
              <AboutTeamCard key={i} teamCard={e}/>
          );
      })
    }
  </div>
  )
}

export default TeamList
