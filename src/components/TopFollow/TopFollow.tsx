import React from 'react'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { FiYoutube } from 'react-icons/fi'
import { PiInstagramLogoDuotone } from 'react-icons/pi'

function TopFollow() {
  return (
    <div className='flex items-center gap-3 max-[900px]:hidden'>
        <h6>Follows: </h6>
        <div className='flex gap-1'>
        <PiInstagramLogoDuotone />
        <FiYoutube />
        <FaFacebook />
        <FaTwitter />
        </div>
    </div>
  )
}

export default TopFollow
