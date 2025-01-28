'use client';

// import { useEcomHook } from "@/Context/Context";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

function ProductQuantity({}:{id:string}) {
    // const {onProdInc,cartData,onProdDec} = useEcomHook();
    // const quantityProduct = cartData.cartList.find((e) => {
    //     return e.product_id === id;
    // });
    // const prodQuan = quantityProduct && quantityProduct.productQuantity;
    // onClick={() => onProdDec(id)} 
    // onClick={() => onProdInc(id)}
  return (
    <>
      <div className='flex gap-4 items-center   bg-teal-300 w-28'>
        <button className='  text-white p-2 border-r-2  outline-none'><FiMinus />
        </button>
        <h5 className="text-white">1</h5>
        <button className='  text-white p-2 border-l-2 outline-none' ><GoPlus />
        </button>
      </div>
    </>
  )
}

export default ProductQuantity
