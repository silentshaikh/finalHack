'use client';
import { useEcomHook } from "@/Context/Context";
import { poppins } from "@/utils/Helper/helper";
import Link from "next/link";
function ShipLabelButton() {
    const {labelPdf} = useEcomHook();
  return (
    <Link href={labelPdf as string}
     target="_blank">

    <button className={`${poppins.className} bg-sky-400 text-white p-3`} >
        Download Label
    </button>
    </Link>
  )
}

export default ShipLabelButton
