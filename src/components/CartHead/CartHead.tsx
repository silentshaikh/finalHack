'use client';
import { useEcomHook } from '@/Context/Context';
import { poppins, rubikBuble } from '@/utils/Helper/helper'

function CartHead() {
    const {clearCart} = useEcomHook();
  return (
    <div className={`relative ${poppins.className} flex justify-center items-center gap-[500px] bg-[#f3f3f3] pt-8 max-[800px]:gap-[400px] max-[700px]:gap-[300px] max-[600px]:gap-[200px] max-[500px]:gap-[100px] max-[400px]:gap-[40px] max-[400px]:flex-col`}>
      <h1 className={` uppercase ${rubikBuble.className} text-4xl`}>fab total</h1>
      <button className='bg-[#f0e2c7] text-white py-3 px-5 rounded-md max-[400px]:py-2' onClick={clearCart}>Clear Cart</button>
    </div>
  )
}

export default CartHead
