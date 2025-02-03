import { poppins } from "@/utils/Helper/helper"
import { SignedIn, UserButton } from "@clerk/clerk-react"
import { SignedOut, SignInButton } from "@clerk/nextjs"
import Image from "next/image"

function HeaderLogin() {
  return (
    <div className="flex items-center gap-2">
      <Image className="size-3" src='/images/Vector (3).png' alt="register/login"
      height={10}
      width={10}
      />
      <SignedOut>
      <SignInButton mode="modal">

      <div className={`${poppins.className} text-[#23a6f0] text-sm flex gap-1 cursor-pointer `}>
        <h6 className="font-extrabold">Login</h6>
        <span className="font-extrabold">/</span>
        <h6 className="font-extrabold">Register</h6>
      </div>
      </SignInButton>
      </SignedOut>
      <SignedIn>
                  <UserButton showName />
                </SignedIn>
    </div>
  )
}

export default HeaderLogin
