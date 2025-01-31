'use client';
import { useEcomHook } from '@/Context/Context';
import { rubikBuble } from '@/utils/Helper/helper'
function CartAlert() {
    const {cartAlert} = useEcomHook();
  return (
    <div className={`${rubikBuble.className} transition-all fixed top-36 ${cartAlert ? 'right-10 max-[400px]:right-5' : '-right-64'}  flex justify-center text-teal-300 bg-slate-200 py-5 px-6 rounded-md max-[500px]:py-3 `}>
    <p className=' max-[500px]:text-sm'>Great Choice! It&apos;s in Your Bag!</p>
    </div>
  )
}

export default CartAlert
