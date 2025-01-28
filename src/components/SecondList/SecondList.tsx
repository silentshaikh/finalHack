'use client';

import {poppins, secondList } from "@/utils/Helper/helper";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SecondList() {
    const activePath = usePathname();
  return (
    <ul className={`${poppins.className} flex gap-3 capitalize max-[800px]:flex-col`}>
      {secondList.map((e) => {
        return <li className={`text-sm  ${activePath === e.link ? 'text-[#54b8f1] ' : ''} `} key={e.name}> <Link href={e.link}>{e.name}</Link> </li>
      })}
    </ul>
  )
}

export default SecondList
