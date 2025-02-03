'use client';
import CartAmount from '../CartAmount/CartAmount';
import CartDetail from '../CartDetail/CartDetail';
import {ToastContainer } from "react-toastify"
import { poppins } from '@/utils/Helper/helper';
function CartProduct() {
  return (
    <section className={`${poppins.className} bg-[#f3f3f3] py-16  flex justify-center gap-14 items-start max-[1060px]:gap-6 max-[1003px]:flex-col-reverse max-[1003px]:items-center`}>
      {/* <ToastContainer/> */}
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
      <CartDetail/>
      <CartAmount/>
    </section>
  )
};
export default CartProduct;