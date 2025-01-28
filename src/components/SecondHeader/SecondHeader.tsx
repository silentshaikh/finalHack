'use client';
import { useEcomHook } from "@/Context/Context"
import HeaderTogg from "../HeaderTogg/HeaderTogg"
import Logo from "../Logo/Logo"
import SecondNav from "../SecondNav/SecondNav";
import SecondLog from "../SecondLog/SecondLog";

function SecondHeader() {
  const {navTogg} = useEcomHook();
  return (
    <header className={`shadow flex justify-evenly items-center py-4 sticky top-0 z-20 bg-white max-[800px]:flex-col max-[800px]:relative ${navTogg ? '' :'max-[800px]:h-[64px]'}`}>
      <Logo/>
     <SecondNav/>
     <SecondLog/>
      <HeaderTogg/>
    </header>
  )
}
export default SecondHeader;
