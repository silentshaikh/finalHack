'use client';
import { useEcomHook } from "@/Context/Context";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

function ProductQuantity({id}:{id:string}) {
    const {onProdInc,cartData,onProdDec} = useEcomHook();
    const quantityProduct = cartData.cartList.find((e) => {
        return e.id === id;
    });
    const prodQuan = quantityProduct && quantityProduct.productQuantity;
   
  return (
    <>
      <div className='flex gap-4 items-center   bg-teal-300 w-28'>
        <button className='  text-white p-2 border-r-2  outline-none' onClick={() => onProdDec(id)}><FiMinus />
        </button>
        <h5 className="text-white">{prodQuan}</h5>
        <button className='  text-white p-2 border-l-2 outline-none' onClick={() => onProdInc(id)}><GoPlus />
        </button>
      </div>
    </>
  )
}

export default ProductQuantity
