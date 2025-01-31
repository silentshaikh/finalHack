'use client';
import { useEcomHook } from '@/Context/Context';
import { Product } from '@/utils/Type/type';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { TiDelete } from 'react-icons/ti';

function WishCard({cloth}:{cloth:Product}) {
  const {delWishList} = useEcomHook()
    const {productimg,productname,id} = cloth;
    const navigDetail = useRouter();
  return (
    <div className='relative flex w-[400px] flex-col items-center  text-center shadow max-[420px]:w-[290px] max-[300px]:w-[250px]'>
      <Image className='h-[200px] w-[400px] max-[420px]:w-[290px] max-[300px]:w-[250px]' src={`${productimg}`} alt={productname} height={200} width={200}/>
      <div className="flex items-center gap-10 py-1 max-[300px]:gap-5">
    <h3 className='font-bold text-slate-400 max-[300px]:text-sm'>{productname}</h3>
    <button className='outline-none text-teal-300 max-[300px]:text-sm' onClick={() => navigDetail.push(`/product/${id}`)}>Buy Now</button>
      </div>
      <TiDelete className='text-red-500 text-2xl absolute top-56 left-52 cursor-pointer max-[420px]:left-40' onClick={() => delWishList(id)}/>
    </div>
  )
};
export default WishCard;