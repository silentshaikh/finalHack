'use client';
import {  poppins } from '@/utils/Helper/helper'
import ProductImg from '../ProductImg/ProductImg';
import ProductImgContent from '../ProductImgContent/ProductImgContent';
import { useEcomHook } from '@/Context/Context';

function ProdDetail({id}:{id:string}) {
  const {backupList} = useEcomHook();
  const productDetail = backupList.find((e) => {
    return e.id === id;
  });
 if(productDetail){
  return (
    <section className={`${poppins.className} flex justify-evenly items-center bg-[#fafafa] pt-32 pb-10 max-[700px]:flex-col max-[700px]:gap-10`}>
      <ProductImg img={productDetail.productimg} name={productDetail.productimg}  />
      <ProductImgContent name={productDetail.productname} color={productDetail.productcolors} price={productDetail.price} description={productDetail.description} stock={productDetail.stock} discount={productDetail.discount} quantity={productDetail.productQuantity} rating={productDetail.rating} size={productDetail.productsizes} id={productDetail.id} />
    </section>
  )
 }
}

export default ProdDetail
