import { AboutTeam } from '@/utils/Type/type'
import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function AboutTeamCard({teamCard}:{teamCard:AboutTeam}) {
  return (
    <div className='flex flex-col items-center'>
      <Image className='max-[330px]:w-[250px]' src={`/images/${teamCard.img}`} alt={teamCard.userName} height={0} width={300} />
      <h3 className='pt-5 font-bold'>{teamCard.userName}</h3>
      <h5 className='pt-2 text-sm text-[#737373]'>{teamCard.profession}</h5>
      <div className="flex items-center gap-3 text-[#23a6f0] pt-3 text-lg">
      <FaFacebook />
      <FaInstagram />
      <FaTwitter />
      </div>
    </div>
  )
}

export default AboutTeamCard
