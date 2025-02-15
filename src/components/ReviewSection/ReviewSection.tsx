import { poppins, rubikBuble } from '@/utils/Helper/helper'
import ReviewForm from '../ReviewForm/ReviewForm'
import { ToastContainer } from 'react-toastify'
import ReviewList from '../ReviewList/ReviewList'

function ReviewSection({id}:{id:string}) {
  return (
    <>
    <section className={`${poppins.className} flex flex-col items-center gap-9 bg-[#F1F5F9] py-9 `}>
        <h2 className={`${rubikBuble.className} text-center text-3xl max-[500px]:text-2xl max-[330px]:text-xl`}>⭐ Loved It? Let Us Know!</h2>
      <ReviewForm id={id}/>
      <ReviewList/>
    </section>
    <ToastContainer
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
    </>
  )
}

export default ReviewSection
