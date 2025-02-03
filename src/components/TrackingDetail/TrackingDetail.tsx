'use client';

import { useEcomHook } from "@/Context/Context";
import { poppins } from "@/utils/Helper/helper";
import Link from "next/link";

function TrackingDetail() {
    const {trackingObj} = useEcomHook();
  return (
    <div className="py-10">

    <div className={`${poppins.className} bg-slate-50 flex flex-col gap-3 border-2 px-14 py-6 rounded-md border-dotted max-[450px]:w-[90%]` }>
      <h5 className="text-xl">Tracking Details</h5>
      <p>Tracking Number :{trackingObj?.trackingNumber}</p>
      <p >Label ID: {trackingObj?.labelId}</p>
              <p >
                Carrier Code: {trackingObj?.carrierCode}
              </p>
             <Link href={`/tracking/?labelid=${trackingObj?.labelId}`}> <button className=" outline-none px-6 py-2 bg-emerald-300 text-white rounded-md max-[303px]:text-sm">Track Shipment</button> </Link>

    </div>
    </div>
  )
}

export default TrackingDetail
