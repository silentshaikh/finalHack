import { poppins } from '@/utils/Helper/helper'
import React from 'react'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

function TrialSectionCont() {
  return (
    <div className={`${poppins.className} flex flex-col items-center text-center py-8`}>
        <h2 className='text-3xl font-bold max-[430px]:text-2xl max-[360px]:w-[250px]'>Start your 14 days free trial</h2>
        <p className='py-7 text-[#737373]  text-sm w-[400px] max-[430px]:w-[350px] max-[360px]:w-[300px] max-[310px]:w-[250px]'>Met minim Mollie non desert Alamo est sit cliquey dolor 
        do met sent. RELIT official consequent.</p>
        <button className='bg-[#23a6f0] px-4 py-3 text-white rounded-md'>Try it free now</button>
        <div className="pt-7 flex gap-4 text-2xl max-[600px]:justify-center">
        <FaTwitter className='text-[#23a6f0]'/>
        <FaFacebookSquare className='text-[#395185]' />
        <FaInstagram className='text-[#e94d96]'/>
        <FaLinkedin className='text-[#0a66c2]'/>
        </div>
      
    </div>
  )
}

export default TrialSectionCont
