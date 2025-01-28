import React from "react";

import { CiHeart } from "react-icons/ci";

import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import ProductQuantity from "../ProductQuantity/ProductQuantity";

function ProductImgContent({
  color,
  name,
  price,
  description,stock,size,id
}: {
  color: string[];
  name: string;
  price: number;
  discount: number;
  quantity:number;
  rating:number;
  description:string;
  stock:number;
  size:string[];
  id:string;
}) {
  return (
    <div>
      <h2 className="text-xl">{name}</h2>
      <div className="flex items-center gap-2 py-3">
        <div className="flex gap-2 text-yellow-300 text-lg">
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarOutline />
        </div>
        <p className="text-sm font-bold text-[#737373]">10 Reviews</p>
      </div>
      <h3 className="font-bold text-2xl py-2">${price}</h3>
      <p className="text-[#737373] font-bold pb-2 max-[450px]:pb-0">
        Availability: {stock>0 ? <span className="text-[#23a6f0] text-sm">InStock</span> : <span className="text-[#e73950] text-sm">Out of Stock</span>}
      </p>
      <ProductQuantity id={id}/>
      <p className="text-[#737373] w-[500px] py-5 max-[1000px]:w-[400px] max-[950px]:text-[14px] max-[520px]:w-[300px] max-[450px]:py-3 max-[380px]:text-[13px] max-[350px]:w-[250px] max-[320px]:w-[220px]">
        {description}
      </p>
      <div className="flex gap-2 pt-2">
        {color.map((e,i) => {
          return (
            <button
              key={i}
              style={{ backgroundColor: e }}
              className={`cursor-pointer outline-none size-9 rounded-full max-[380px]:size-6`}
            ></button>
          );
        })}
      </div>
      <div className="flex  gap-2 pt-6">
        {size.map((e,i) => {
          return (
            <button
              key={i}
              // style={{ backgroundColor: e }}
              className={` flex items-center justify-center outline-none uppercase size-11 cursor-pointer border-2 border-dashed text-[#737373] font-bold hover:bg-slate-100 text-center text-xl max-[380px]:size-9`}
            >{e}</button>
          );
        })}
      </div>
      <div className="flex items-center gap-5 pt-9 max-[950px]:pt-7 max-[350px]:gap-3 ">
        <button className="bg-[#23a6f0] py-3 px-4 rounded-md text-white text-sm font-bold outline-none">Add To Cart</button>
        <div className="flex gap-3">
        <CiHeart className="shadow size-10 p-2 rounded-full cursor-pointer max-[380px]:size-8" />
        {/* <BsCart className="shadow size-10 p-2 rounded-full max-[380px]:size-8" />
        <FaEye className="shadow size-10 p-2 rounded-full max-[380px]:size-8" /> */}
        </div>
      </div>
    </div>
  );
}

export default ProductImgContent;
