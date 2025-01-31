'use client';
import { useEcomHook } from '@/Context/Context';
import { poppins } from '@/utils/Helper/helper';
import Image from 'next/image';
import Link from 'next/link';

function HeaderIcon() {
  const {handleToggSearch,cartData,cartOperate} = useEcomHook();
  const {totalQuantity} = cartData;
  return (
    <div className={`${poppins.className} flex gap-5  text-[#23a6f0] text-sm items-center`}>
      <Image className="size-4 cursor-pointer" onClick={handleToggSearch} src='/images/icn settings icn-xs.png' alt="search"
      height={10}
      width={10}
      />
      <div className='flex gap-1 items-center relative cursor-pointer' onClick={() => cartOperate()}>
      <Image className="size-4" src='/images/Vector (4).png' alt="cart"
      height={10}
      width={10}
      />
      <p className='absolute left-5 bottom-2'>{totalQuantity}</p>
      </div>
      <Link href='/wishlist'>
      <div className='flex gap-1 items-center relative'>
      <Image className="size-4" src='/images/Vector (5).png' alt="wishlist"
      height={10}
      width={10}
      />
      <p className='absolute left-5 bottom-2'>{cartData.wishList.length}</p>
      </div>
      </Link>
    </div>
  )
}

export default HeaderIcon
