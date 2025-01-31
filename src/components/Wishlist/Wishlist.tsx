import { poppins, rubikBuble } from '@/utils/Helper/helper'
import WishListBox from '../WishListBox/WishListBox'

function WishList() {
  return (
    <section className='flex flex-col items-center py-10 gap-10'>
      <div className="flex flex-col items-center text-center gap-5 ">
        {/* <h1 className={`${rubikBuble.className} text-4xl`}>Your Wishlist Awaits</h1> */}
        <h1 className={`${rubikBuble.className} text-4xl text-slate-400 max-[300px]:w-[200px] `}>Your Wishlist Awaits</h1>
        <p className={`${poppins.className} text-sm w-[500px] text-slate-300 max-[530px]:text-[13px] max-[530px]:w-[400px] max-[420px]:w-[320px] max-[350px]:w-[300px] max-[300px]:w-[250px]`}>Welcome to your personalized wishlist! Here, you can keep track of all the items you love and want to save for later. Whether you&apos;re planning your next purchase or just gathering ideas, your wishlist makes it easy to revisit your top picks anytime. Don&apos;t wait too long—grab your favorites before they&apos;re gone!</p>
      </div>
      <WishListBox/>
    </section>
  )
}

export default WishList
