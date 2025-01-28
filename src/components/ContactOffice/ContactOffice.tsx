import { poppins } from '@/utils/Helper/helper'
import React from 'react'
import ContactList from '../ContactList/ContactList'

function ContactOffice() {
  return (
    <section className={`${poppins.className} flex flex-col items-center py-10 text-center bg-[#fafafa]`}>
      <h5 className='font-bold text-sm'>VISIT OUR OFFICE</h5>
      <h2 className='text-3xl py-4 font-extrabold w-[400px] max-[500px]:text-2xl max-[400px]:w-[300px] max-[310px]:w-[270px] max-[280px]:w-[240px]'>We help small businesses with big ideas</h2>
      <ContactList/>
    </section>
  )
}

export default ContactOffice
