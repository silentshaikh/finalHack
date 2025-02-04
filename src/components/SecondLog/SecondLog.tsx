import { poppins } from '@/utils/Helper/helper'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'

function SecondLog() {
  return (
    <div className={`${poppins.className} flex gap-5 items-center max-[800px]:hidden`}>
      <SignedOut>
    <SignInButton mode='modal'>
      <h5 className='text-[#23a6f0]'>Login</h5>
    </SignInButton>
      </SignedOut>
      <SignedIn>
                  <UserButton showName />
                </SignedIn>
      <button className='bg-[#23a6f0] text-white flex items-center text-sm py-3 px-5 rounded-md'>Become a member <IoMdArrowForward /></button>
    </div>
  )
}

export default SecondLog
