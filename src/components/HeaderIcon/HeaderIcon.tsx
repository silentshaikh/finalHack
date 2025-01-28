'use client';
import { useEcomHook } from '@/Context/Context';
import { poppins } from '@/utils/Helper/helper';
import Image from 'next/image';

function HeaderIcon() {
  const {handleToggSearch} = useEcomHook()
  return (
    <div className={`${poppins.className} flex gap-5  text-[#23a6f0] text-sm items-center`}>
      <Image className="size-4 cursor-pointer" onClick={handleToggSearch} src='/images/icn settings icn-xs.png' alt="search"
      height={10}
      width={10}
      />
      <div className='flex gap-1 items-center'>
      <Image className="size-4" src='/images/Vector (4).png' alt="cart"
      height={10}
      width={10}
      />
      <p>1</p>
      </div>
      <div className='flex gap-1 items-center'>
      <Image className="size-4" src='/images/Vector (5).png' alt="wishlist"
      height={10}
      width={10}
      />
      <p>1</p>
      </div>
    </div>
  )
}

export default HeaderIcon
