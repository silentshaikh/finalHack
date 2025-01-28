'use client';
import NavList from '../NavList/NavList'
import HeaderLogin from '../HeaderLogin/HeaderLogin'
import HeaderIcon from '../HeaderIcon/HeaderIcon'
import { useEcomHook } from '@/Context/Context'

function Navbar() {
  const {navTogg} = useEcomHook();
  return (
    <nav className={`stroke flex ${navTogg? 'nav-transition show ' :'nav-transition '} gap-14 items-center transition-all ease-in  max-[900px]:gap-9 max-[850px]:gap-7 max-[820px]:gap-5 max-[800px]:flex-col  max-[800px]:justify-center max-[800px]:pt-12`}>
      <NavList/>
      <HeaderLogin/>
      <HeaderIcon/>
    </nav>
  )
}

export default Navbar
