'use client'
import { useEcomHook } from '@/Context/Context'
import ShipppingForm from '../ShipppingForm/ShipppingForm'
import { poppins } from '@/utils/Helper/helper'
import RateList from '../RateList/RateList';
import LabelButton from '../LabelButton/LabelButton';
import ShipLabelButton from '../ShipLabelButton/ShipLabelButton';
import TrackingDetail from '../TrackingDetail/TrackingDetail';
import { ToastContainer } from 'react-toastify';
import ShipError from '../ShipError/ShipError';

function ShippingPage() {
  const {rateList,rateId,labelPdf,trackingObj,shipError} = useEcomHook();
  return (
    <section className='flex flex-col items-center gap-8 py-10'>
      <h1 className={`${poppins.className} text-5xl max-[500px]:text-4xl max-[340px]:text-3xl`}>SHIPPING RATES</h1>
    <ShipppingForm/>
    {
      rateList.length>0 ? <RateList/> : ''
    }
    {
      rateId ? <LabelButton/> : ''
    }
    {
      labelPdf ? <ShipLabelButton/> : ""
    }
    {
      shipError ? <ShipError/> : ""
    }
    {
      trackingObj ? <TrackingDetail/> : ''
    }
  {rateList.length>0 ? <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/> :<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
}
 
    </section>
  )
}

export default ShippingPage
