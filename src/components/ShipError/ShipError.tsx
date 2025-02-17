'use client';
import { useEcomHook } from '@/Context/Context'
import { poppins } from '@/utils/Helper/helper';
function ShipError() {
    const {shipError} = useEcomHook();
  return (
    <div className={`${poppins.className} mx-auto my-8 bg-red-400 border-2 rounded-md border-red-300 py-2 px-6 w-[500px] max-[530px]:w-[90%] text-sm max-[300px]:text-[12px]`}>
      {shipError}
    </div>
  )
}

export default ShipError
