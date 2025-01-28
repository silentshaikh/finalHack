'use client';
import { useEcomHook } from "@/Context/Context";
import { CiMenuFries } from "react-icons/ci"

function HeaderTogg() {
    const {onHandleNav} = useEcomHook();
  return (
    <div className="hidden max-[800px]:block max-[800px]:absolute right-5 top-5" onClick={onHandleNav}>
      <CiMenuFries className="text-xl" />
    </div>
  )
}

export default HeaderTogg
