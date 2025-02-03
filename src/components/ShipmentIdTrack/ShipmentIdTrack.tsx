'use client';

import { useEcomHook } from "@/Context/Context";
import { poppins } from "@/utils/Helper/helper";

function ShipmentIdTrack() {
    const {trackingData} = useEcomHook();
  return (
<div className=" py-5 flex justify-center ">
<div className={`${poppins.className} flex flex-col bg-slate-50 border-dashed gap-5 border-4 w-[500px] max-[530px]:border-2 max-[530px]:w-[95%]`}>
      <h2 className="text-xl px-3 pt-3 font-bold">Tracking Details</h2>
      <div className="flex flex-col items-start gap-3 p-3">
        <p className="max-[450px]:text-sm"><span className="font-bold text-sky-300 ">Tracking Number:</span> {'  '} {trackingData?.trackingNumber}</p>
        <p className="max-[450px]:text-sm"><span className="font-bold text-sky-300 ">Status:</span>  {trackingData?.statusDescription}</p>
                <p className="max-[450px]:text-sm"><span className="font-bold text-sky-300 ">Carrier Status:</span>{'  '} {trackingData?.carrierStatusDescription || "N/A"} </p>
                <p className="max-[450px]:text-sm"> <span className="font-bold text-sky-300 ">Estimated Delivery:</span> {'  '} {trackingData?.estimatedDeliveryDate || "N/A"}</p>
                <p className="max-[450px]:text-sm"> <span className="font-bold text-sky-300 ">Actual Delivery:</span>  {'  '} {trackingData?.actualDeliveryDate || "N/A"}</p>
      </div>
    </div>
</div>

  )
}

export default ShipmentIdTrack
