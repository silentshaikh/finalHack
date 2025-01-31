'use client';
import CartAmount from '../CartAmount/CartAmount';
import CartDetail from '../CartDetail/CartDetail';

import { poppins } from '@/utils/Helper/helper';
function CartProduct() {
  return (
    <section className={`${poppins.className} bg-[#f3f3f3] py-16  flex justify-center gap-14 items-start max-[1060px]:gap-6 max-[1003px]:flex-col-reverse max-[1003px]:items-center`}>
      <CartDetail/>
      <CartAmount/>
    </section>
  )
};
export default CartProduct;