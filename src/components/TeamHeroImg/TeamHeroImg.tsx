'use client';
import { teamImg, teamImg2 } from '@/utils/Helper/helper'
import Image from 'next/image'
import React from 'react'

function TeamHeroImg() {
  return (
    <div className=' pt-10 flex justify-center gap-2 max-[620px]:flex-col'>
      <Image className='h-[410px] w-[600px] max-[1315px]:w-[550px] max-[1250px]:w-[500px] max-[1130px]:w-[450px] max-[980px]:w-[420px] max-[900px]:w-[380px] max-[800px]:w-[400px] max-[720px]:w-[300px] max-[620px]:w-[100%]' src='/images/unsplash_Lks7vei-eAg.png' alt='team-section' height={10} width={505}/>
      <div className="flex flex-wrap gap-2 w-[710px] max-[1315px]:w-[690px] max-[1250px]:w-[610px] max-[1130px]:w-[510px] max-[980px]:w-[480px] max-[900px]:w-[410px] max-[800px]:w-[320px] max-[620px]:hidden">
        {
          teamImg.map((e,i) => {
            return(
              <Image key={i} className='h-[200px] w-[350px] max-[1315px]:w-[340px] max-[1250px]:w-[300px] max-[1130px]:w-[250px] max-[980px]:w-[230px] max-[900px]:w-[200px] max-[800px]:w-[150px] max-[620px]:w-[49%] max-[620px]:h-[300px]' src={`/images/${e}`} alt='team-section' height={10} width={350}/>
            );
          })
        }
      </div>
      <div className="max-[620px]:flex justify-center flex-wrap gap-1 w-[100%] max-[400px]:w-[100%] hidden ">
        {
          teamImg2.map((e,i) => {
            return(
              <Image key={i} className='w-[49%] max-[400px]:w-[48%]' src={`/images/${e}`} alt='team-section' height={10} width={100}/>
            );
          })
        }
      </div>
    </div>
  );
};
export default TeamHeroImg;