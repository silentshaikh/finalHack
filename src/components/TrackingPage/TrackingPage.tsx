'use client';
import TrackingForm from '../TrackingForm/TrackingForm'
import ShipmentIdTrack from '../ShipmentIdTrack/ShipmentIdTrack'
import { useEcomHook } from '@/Context/Context';
import { rubikBuble } from '@/utils/Helper/helper';
import TrackingError from '../TrackingError/TrackingError';

function TrackingPage() {
    const {trackingData,trackError} = useEcomHook();
  return (
    <section className='py-10 '>
        <h1 className={`${rubikBuble.className} text-3xl text-center pb-5`}>Track Your Shipment</h1>
      <TrackingForm/>
      {
        trackError ? <TrackingError/> :''
      }
      {
        trackingData ? <ShipmentIdTrack/> :''
      }
    </section>
  )
}

export default TrackingPage
