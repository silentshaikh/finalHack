'use client';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { rubikBuble } from '@/utils/Helper/helper'
import { usePathname } from 'next/navigation';

function FooterOne() {
  const footPath = usePathname();
  return (
    <div className={`border-b flex justify-evenly items-center py-5 ${footPath === '/'? 'bg-[#fafafa]' : "bg-white"} max-[340px]:gap-16`}>
      {/* <Logo/> */}
      <div className={`${rubikBuble.className} `}>
      <h1 className='text-2xl'>Bandage</h1>
    </div>
      <div className="flex gap-3">
      <FaFacebook  className='text-[#23a6f0] text-lg'/>
      <FaInstagram  className='text-[#23a6f0] text-lg'/>
      <FaTwitter  className='text-[#23a6f0] text-lg'/>

      </div>
    </div>
  )
}

export default FooterOne
