'use client';
import { useEcomHook } from '@/Context/Context'
import { poppins } from '@/utils/Helper/helper';

function RateList() {
    const {rateList,rateId,handleRate} = useEcomHook();
//   if(rateList.length===0){
//     return(
//         <div>
//         <h3>Rates Not Available</h3>
//         </div>
//     )
//   }else{
    return (
        <div className={`${poppins.className} flex flex-col gap-5 items-center py-8 border-t-2`}>
          <h2 className='text-2xl'>Our Shipping Rates</h2>
          <div className='flex flex-col gap-3 items-center h-[50vh] overflow-y-auto'>
        {
            rateList.map((e) => {
                return(
                    <div className={`cursor-pointer p-3 w-[50vw] border rounded-lg ${rateId===e.rateId ? 'bg-sky-300 border-sky-400' : ''} max-[450px]:w-[95%] max-[300px]:w-[80%]`} onClick={() => handleRate(e.rateId)}>
                        <p> {e.carrierFriendlyName} - {e.serviceType}</p>
                        <h4 className='text-[#23A6F0] font-bold text-xl flex gap-3'> {e.shippingAmount.amount}
                        <span className='uppercase'>{e.shippingAmount.currency}</span></h4>

                    </div>
                )
            })
        }
          </div>
        </div>
      )
//   }
}

export default RateList
