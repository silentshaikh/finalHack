'use client';

import { useEcomHook } from "@/Context/Context";
import CartCard from "../CartCard/CartCard";
import CartOtherDetail from "../CartOtherDetail/CartOtherDetail";
import { rubikBuble } from "@/utils/Helper/helper";


function CartDetail() {
  const {cartData} = useEcomHook();
  const {addCartProd} = cartData;
  if(addCartProd.length>0){
    return (
      <div className='flex items-center justify-center gap-10 flex-wrap py-10 border-[#D9D9D9] border-b-2 px-5 max-[677px]:gap-5'>
        {
          addCartProd.map((e) => {
            return(
              <div key={e.productid} className="flex items-center gap-3 mb-7 max-[1019px]:gap-1 max-[597px]:gap-3">
              <CartCard category={e.productcategory} name={e.productname} img={e.productimage} price={e.price}  />
              <CartOtherDetail productId={e.productid} productcolor={e.productcolor} productsize={e.productsize} productquantity={e.productquantity} />
              </div>
            )
          })
        }
       
       
      </div>
    )
  }else{
    return(
      <section className="h-[60vh] flex justify-center items-center">
      <h2 className={`${rubikBuble.className} text-4xl`}>No Product in Cart</h2>
      </section>
    )
  }
}

export default CartDetail
