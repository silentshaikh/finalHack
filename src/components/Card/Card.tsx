'use client';
import { useEcomHook } from '@/Context/Context';
import {  Product } from '@/utils/Type/type'
import Image from 'next/image'
import React from 'react'

function Card({clothlist}:{clothlist:Product}) {
    const {onProductDetail} = useEcomHook();
    const {category,id,price,productname,productimg,productcolors} = clothlist;
  return (
    <div  className='flex flex-col items-center cursor-pointer' onClick={() => onProductDetail(id)}>
                    <Image
                    className='h-[300px]'
                        src={productimg}
                        alt={productname}
                        height={170}
                        width={235}
                    />
                    <h4 className='pt-4 font-bold'>{productname}</h4>
                    <h5 className='py-2 text-sm font-bold text-[#737373]'>{category}</h5>
                    <div className='flex gap-2 text-sm font-bold'>
                        <p className='text-[#bdbdbd]'>{price}</p>
                        <p className='text-[#23a56d]'> {price}</p>
                    </div>
                    {/* { */}
                        {/* // colorShowPath === `/product/${id}` ? '' : */}
                    <div className="flex gap-2 pt-2">
                        {
                            productcolors.map((e,i) => {
                                return <div key={i} style={{backgroundColor:e}} className={` size-4 rounded-full`}></div>
                            })
                        
                        }
                    </div>
                        {/* } */}
                </div>
  )
}

export default Card
