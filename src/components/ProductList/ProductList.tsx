'use client';
import { poppins, rubikBuble } from '@/utils/Helper/helper'
import React from 'react'
import Card from '../Card/Card';
import { useEcomHook } from '@/Context/Context';
function ProductList() {
  const { productList} = useEcomHook();
 if(productList.length===0){
  return(
    <section className='h-80 flex justify-center items-center'>

      <h1 className={`text-4xl ${rubikBuble.className}`}>Product Not Available</h1>
    </section>
  )
 }else{
  return (
    <section className={`${poppins.className} pt-10 flex justify-center flex-wrap gap-12`}>
      {
        productList.map((e) => {
          return(
            <Card key={e.id} clothlist={e}/>
          );
        })
      }
    </section>
  )
 }
}

export default ProductList
