'use client';
import { contactList } from '@/utils/Helper/helper'
import Image from 'next/image'
import React from 'react'

function ContactList() {
  return (
    <div className='flex justify-center pt-10 flex-wrap max-[899px]:gap-6 '>
      {
        contactList.map((e) => {
            return(
                <div key={e.id} className={`${e.id === 2 ? 'bg-black text-white' :'bg-white '} border flex flex-col items-center py-20 px-2 w-[300px] max-[310px]:w-[270px] max-[280px]:w-[250px]`}>
                    <Image className='size-[60px]' src={`/images/${e.img}`} alt={`contact-${e.id}`} height={10} width={80}/>
                    <p className='text-sm pb-2 pt-3'>{e.email}</p>
                    <p className='text-sm pb-2'>{e.mailTwo}</p>
                    <h4 className='pb-4'>{e.suport}</h4>
                    <button className='border-2  border-[#23a6f0] text-[#23a6f0] text-sm py-3 px-4 rounded-full'>{e.btnSuport}</button>
                </div>
            )
        })
      }
    </div>
  )
}

export default ContactList
