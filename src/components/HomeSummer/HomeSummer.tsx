import React from 'react'
import HomeSummerContent from '../HomeSummerContent/HomeSummerContent'
import HomeSummerImg from '../HomeSummerImg/HomeSummerImg'

function HomeSummer() {
  return (
    <section className='bg-[#23856d] flex justify-center gap-14 items-center py-10 max-[700px]:flex-col max-[700px]:gap-2 max-[700px]:py-14'>
      <HomeSummerContent/>
      <HomeSummerImg/>
    </section>
  )
}

export default HomeSummer;