'use client';
import { poppins } from '@/utils/Helper/helper'
import ProductSize from '../ProductSize/ProductSize'
import ProductColor from '../ProductColor/ProductColor'
import CardAddSubt from '../CardAddSubt/CardAddSubt'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { useEcomHook } from '@/Context/Context';
// import { workSans } from '@/utils/Helper/helper'

function CartOtherDetail({productsize,productcolor,productquantity,productId}:{productId:number,productsize:string,productcolor:string,productquantity:number}) {
  const {cartDeleteItem} = useEcomHook();
  return (
    <div className={`${poppins.className} flex flex-col items-center gap-2 relative bottom-7`}>
      <RiDeleteBin6Fill className='text-red-500 text-2xl cursor-pointer' onClick={() => cartDeleteItem(productId)}/>
      <ProductSize size={productsize}/>
      <ProductColor color={productcolor}/>
      <CardAddSubt quantity={productquantity} productId={productId} />
    </div>
  )
}

export default CartOtherDetail
