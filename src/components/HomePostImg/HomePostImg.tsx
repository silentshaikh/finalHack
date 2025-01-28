import { featurePost } from '@/utils/Helper/helper'
import Image from 'next/image';
import React from 'react'
import { FcBullish, FcClock, FcNext } from 'react-icons/fc';

function HomePostImg() {

  return (
    <div className='py-10 flex justify-center gap-4 flex-wrap'>
    {
        featurePost.map((e) => {
            return(
                <div key={e.id} className='shadow flex flex-col items-start flex-wrap pb-5'>
                    <Image className='max-[370px]:w-[300px] max-[320px]:w-[280px] max-[300px]:w-[250px]' src={`/images/${e.img}`} alt={e.name} height={100} width={350}/>
                    <div className="flex gap-2 px-4 pt-5">
                        {e.bread.map((e) => <h5 key={e} className='text-sm text-[#737373] capitalize '>{e}</h5> )}
                    </div>
                    <h3 className='w-[300px] py-3 px-4 max-[320px]:w-[250px]'>{e.name}</h3>
                    <p className='text-[13px] w-[270px] text-[#bebebe]  px-4 max-[300px]:text-[12px] max-[300px]:w-[250px]'>{e.para}</p>
                    <div className="flex gap-28 text-[12px] py-3 font-bold text-[#737373] px-4 max-[370px]:gap-14 max-[300px]:gap-7">
                        <div className="flex items-center gap-1">
                    <FcClock />
                        <p > {e.date}</p>
                        </div>
                        <div className="flex items-center gap-1">
                        <FcBullish />
                        <p>{e.comment}</p>
                        </div>
                    </div>
                    <div className='px-4 pt-2'>
                        <button className='flex items-center text-[#bebebe]'>Learn More <FcNext /></button>
                    </div>
                </div>
            );
        })

    }  
    </div>
  )
}

export default HomePostImg
