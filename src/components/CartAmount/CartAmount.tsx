'use client'
import { useEcomHook } from '@/Context/Context'
// import CartAmountDetail from '../CartAmountDetail/CartAmountDetail'
import { poppins, rubikBuble} from '@/utils/Helper/helper'
// import ConfirmOrder from '../ConfirmOrder/ConfirmOrder'
function CartAmount() {
  const {cartData,} = useEcomHook();
  const {totalPrice,addCartProd} = cartData;
  return (
    <>
      <div className={`${poppins.className} bg-white flex flex-col rounded-lg  ${addCartProd.length===0? "w-[30vw]" :'w-[40vw]'} max-[1240px]:w-[900px] max-[1003px]:w-[600px] max-[650px]:w-[500px] max-[540px]:w-[400px] max-[440px]:w-[350px] max-[400px]:w-[300px] max-[340px]:w-[250px] max-[300px]:w-[90%]`}>
      <div className='border-4 border-dashed  flex flex-col g p-5'>
      <h4 className={`uppercase font-bold pb-5 border-b-2 ${rubikBuble.className}`}>CART total</h4>
      <div className="flex justify-evenly pt-5">
        <h3>Sub Total: </h3>
        <h3>${totalPrice}</h3>
        </div>      
        <div className="flex justify-evenly py-5">
        <h3>Total: </h3>
        <h3>${totalPrice}</h3>
        </div>  
        <div>
      <button className='bg-[#5EEAD4] text-white py-1 px-4 '>Checkout</button>
          </div>    
      </div>
      </div>
    </>
  )
}

export default CartAmount
