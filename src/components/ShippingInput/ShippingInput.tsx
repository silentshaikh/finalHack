import { useEcomHook } from '@/Context/Context';
import { ShipmentInp } from '@/utils/Type/type';
import React from 'react'

function ShippingInput({name,place,value}:ShipmentInp) {
    const {onHandleShipmentInp} = useEcomHook();
    return (
      <input type="text" className='border p-2 mb-5 outline-none max-[1050px]:w-[100%]' name={name} id="" placeholder={`${place}`} value={value} onChange={(e) => onHandleShipmentInp(e)}/>
    )
}

export default ShippingInput
