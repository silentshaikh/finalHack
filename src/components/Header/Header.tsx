'use client';
import { useEcomHook } from "@/Context/Context"
import HeaderTogg from "../HeaderTogg/HeaderTogg"
import Logo from "../Logo/Logo"
import Navbar from "../Navbar/Navbar"
import SearchBar from "../SearchBar/SearchBar";

function Header() {
  const {navTogg} = useEcomHook();
  return (
    <header className={`shadow flex justify-evenly items-center py-4 sticky top-0 z-20 bg-white max-[800px]:flex-col max-[800px]:sticky ${navTogg ? '' :'max-[800px]:h-[64px]'}`}>
      <Logo/>
      <Navbar/>
      <HeaderTogg/>
      <SearchBar/>
    </header>
  )
}
export default Header;
