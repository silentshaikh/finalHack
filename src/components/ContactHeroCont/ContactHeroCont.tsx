import React from 'react'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function ContactHeroCont() {
  return (
    <div className='flex flex-col'>
        <h5 className='text-bold text-sm font-bold'>CONTACT US</h5>
        <h2 className='py-7 text-3xl font-extrabold max-[680px]:text-2xl'>Get in touch today!</h2>
        <p className='text-sm text-[#737373] pb-5 w-[350px] font-bold max-[790px]:w-[300px] max-[680px]:w-[250px] max-[600px]:w-[99%]'>We know how large objects will act, 
        but things on a small scale</p>
        <p className='pb-5 font-bold'>Phone ; +451 215 215 </p>
        <p className='pb-5 font-bold'>Fax : +451 215 215</p>
        <div className="flex  gap-4 text-xl max-[600px]:justify-center">
        <FaTwitter />
        <FaFacebookSquare />
        <FaInstagram />
        <FaLinkedin />
        </div>
    </div>
  )
};
export default ContactHeroCont;