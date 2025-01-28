'use client';

import { useEcomHook } from "@/Context/Context";
import { navList, poppins } from "@/utils/Helper/helper";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavList() {
    const activePath = usePathname();
    const {onHandleNav} = useEcomHook();
  return (
    <ul className={`${poppins.className} flex gap-3 capitalize max-[800px]:flex-col`}>
      {navList.map((e) => {
        return <li className={`text-sm  ${activePath === e.link ? 'text-[#54b8f1] ' : ''} `} key={e.name} onClick={onHandleNav}> <Link href={e.link}>{e.name}</Link> </li>
      })}
    </ul>
  )
}

export default NavList
