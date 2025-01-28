import React from 'react'
import { CiMail } from 'react-icons/ci'
import { FiPhone } from 'react-icons/fi'

function TopContact() {
  return (
    <address className='flex gap-10 '>
      <div className='flex items-center gap-2 max-[800px]:hidden'>
      <FiPhone />
        <p>(255) 555-0118</p>
      </div>
      <div className='flex items-center gap-2 max-[600px]:hidden'>
      <CiMail />
      <p>bandage@gmail.com</p>
      </div>
    </address>
  )
}

export default TopContact
