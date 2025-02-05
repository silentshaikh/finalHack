'use client'
import { rubikBuble } from '@/utils/Helper/helper'
import React from 'react'
import {Vortex} from "react-loader-spinner"
function LoadingPage() {
  return (
    <section className={` bg-transparent h-screen ${rubikBuble.className} flex flex-col items-center justify-center`}>
      
    <Vortex 
    visible={true}
    height="140"
    width="140"
    ariaLabel="vortex-loading"
    wrapperStyle={{}}
    wrapperClass="vortex-wrapper"
    colors={['#F8A9A4', '#5EEAD4', '#23A6F0', '#F5EDDE', '#BDD0BE', '#C4A594']}
    />
  
      <h1 className='capitalize text-3xl animate-pulse'>loading...</h1>
      </section>
  )
}

export default LoadingPage
