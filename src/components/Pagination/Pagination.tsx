'use client';
import { useEcomHook } from '@/Context/Context';
import { pagin, poppins } from '@/utils/Helper/helper'
import React from 'react'

function Pagination() {
  const {paginationOperate,page} = useEcomHook();
  return (
    <div className={`${poppins.className} pt-16 flex justify-center`}>
      {pagin.map((e) => {
        return(
            <button key={e.id} onClick={() =>paginationOperate(e.name)} style={{backgroundColor: page === +e.name ? '#23a6f0': e.bgColor ,color:page === +e.name ? '#fff' :e.color }} className='border-[#e9e9e9] border-2 outline-none rounded-md p-5 font-bold max-[330px]:p-4 max-[300px]:p-3'>{e.name}</button>
        );
      })}
    </div>
  )
};
export default Pagination;