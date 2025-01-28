'use client';
import TopContact from '../TopContact/TopContact'
import { poppins } from '@/utils/Helper/helper'
import TopOffer from '../TopOffer/TopOffer'
import TopFollow from '../TopFollow/TopFollow'
import { usePathname } from 'next/navigation';

function TopBar() {
  const colroPath = usePathname();
  return (
    <aside className={`${poppins.className} flex justify-evenly py-3 text-sm ${colroPath === '/' ? 'bg-[#252b42]' : 'bg-[#23856d]'} text-white max-[600px]:justify-center`}>
      <TopContact/>
      <TopOffer/>
      <TopFollow/>
    </aside>
  )
};
export default TopBar;