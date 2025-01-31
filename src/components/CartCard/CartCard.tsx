import { TypeForCartCard } from '@/utils/Type/type'
import Image from 'next/image'
function CartCard({name,price,category,img}:TypeForCartCard) {
  return (
    <>
        <div  className='flex flex-col items-start'>
      <Image
      className='size-[260px] border-4 border-dashed  max-[677px]:size-[250px] max-[638px]:w-[230px] max-[597px]:size-[300px] max-[380px]:size-[280px]'
      src={img}
      alt={name}
      width={305}
      height={313}
      />
      <h3 className='text-sm uppercase'>{category}</h3>
      <div className='font-bold flex flex-col  relative max-[320px]:text-sm' >
        <h4 >{name}</h4>
        <h4 className=' max-[350px]:left-52 max-[320px]:left-44'>{price}</h4>
      </div>
    </div>
    </>
  )
}

export default CartCard;
