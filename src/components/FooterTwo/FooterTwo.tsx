import { feturesFoot, footComp, poppins, resoursFoot } from '@/utils/Helper/helper'
import React from 'react'

function FooterTwo() {
  return (
    <div className={`${poppins.className} py-10 flex justify-center gap-14 flex-wrap max-[1000px]:gap-8 max-[868px]:gap-14 max-[330px]:flex-col max-[330px]:items-center`}>
        <div className="flex gap-8 max-[868px]:gap-14 max-[330px]:flex-col">

        <div className="flex flex-col">
            <h3 className='pb-4 font-bold'>Company Info</h3>
            <ul className='flex flex-col gap-3'>
               {footComp.map((e,i) => <li key={i} className='text-sm text-[#7e7e7e] font-bold'>{e}</li> )} 
            </ul>
        </div>
        <div className="flex flex-col">
            <h3 className='pb-4 font-bold'>Legal</h3>
            <ul className='flex flex-col gap-3'>
               {footComp.map((e,i) => <li key={i} className='text-sm text-[#7e7e7e] font-bold'>{e}</li> )} 
            </ul>
        </div>
        </div>
        <div className="flex gap-8 max-[868px]:gap-14 max-[330px]:flex-col ">

        <div className="flex flex-col">
            <h3 className='pb-4 font-bold'>Features</h3>
            <ul className='flex flex-col gap-3'>
               {feturesFoot.map((e,i) => <li key={i} className='text-sm text-[#7e7e7e] font-bold'>{e}</li> )} 
            </ul>
        </div>
        <div className="flex flex-col">
            <h3 className='pb-4 font-bold'>Features</h3>
            <ul className='flex flex-col gap-3'>
               {resoursFoot.map((e,i) => <li key={i} className='text-sm text-[#7e7e7e] font-bold'>{e}</li> )} 
            </ul>
        </div>
        </div>
        <div className="flex flex-col max-[868px]:pt-5">
        <h3 className='font-bold'>Get in Touch</h3>
        <form action="" className='flex pt-4'>
            <input className='bg-[#f9f9f9] outline-none px-2 py-3 max-[868px]:w-[350px] max-[450px]:w-[200px] max-[300px]:w-[170px]' type="email" required name="" placeholder='Your Email' id="" />
            <button className='bg-[#23a6f0] text-white px-1 text-sm'>Subscribe</button>
        </form>
        <p className='pt-2 text-[12px]'>Lore imp sum dolor Amit</p>
        </div>
      
    </div>
  )
}

export default FooterTwo
