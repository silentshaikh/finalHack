'use client';
import { useEcomHook } from '@/Context/Context'
import React from 'react'
import ShippingLabelInp from '../ShippingLabelInp/ShippingLabelInp';
import ShippingInput from '../ShippingInput/ShippingInput';
import { poppins } from '@/utils/Helper/helper';

function ShipppingForm() {
    const {shipmentInp,onHandleShipmentForm,loading} = useEcomHook()
    return(
        <form action='' className={`${poppins.className} flex flex-col`} onSubmit={(e) => onHandleShipmentForm(e)}>
      <ShippingLabelInp labelValue="contact info"/>
     
      <ShippingInput place="Enter Your Phone" name="phone" value={shipmentInp.phone} />
      <ShippingLabelInp labelValue="shipping address"/>
      <div className="flex  max-[950px]:w-[36vw] max-[700px]:w-[93vw] max-[350px]:flex-col max-[350px]:w-[100%] ">
       <ShippingInput place="First Name" name="name" value={shipmentInp.name}/> 
      
      <ShippingInput place="Enter Your Country" name="countryCode" value={shipmentInp.countryCode}/>
      </div>
      <ShippingInput place="Enter Your State/Region" name="stateProvince" value={shipmentInp.stateProvince}/>
      <ShippingInput place="Enter Your Address" name="addressLine1" value={shipmentInp.addressLine1}/>
      <div className="flex max-[950px]:w-[36vw] max-[700px]:w-[93vw] max-[350px]:flex-col max-[350px]:w-[100%]">
       <ShippingInput place="City" name="cityLocality" value={shipmentInp.cityLocality}/> 
       <ShippingInput place="Postal Code" name="postalCode" value={shipmentInp.postalCode}/> 
      </div>
      <button className="bg-sky-200 text-slate-100 py-2 w-52 hover:bg-sky-300" disabled={loading}>{loading ? 'Plz Wait...' :'Shipping Rates'}</button>
    </form>
    )
}

export default ShipppingForm
