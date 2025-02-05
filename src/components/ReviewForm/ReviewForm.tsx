'use client';

import { useEcomHook } from "@/Context/Context";

function ReviewForm() {
    const {reviewInp,onHandleReview,onFormReview} = useEcomHook();
  return (
    <form action='' className='flex flex-col gap-3' onSubmit={onFormReview}>
        <label htmlFor="">Your Feedback Matters</label>
        <textarea name="" id="" rows={9} placeholder='Share Your Experience with Us' className='outline-none p-2 text-sm w-[600px] resize-none rounded-md border-2 border-dashed' value={reviewInp} onChange={(e) => onHandleReview(e.target.value)}></textarea>
      <button className='bg-sky-300 w-[180px] py-2 rounded-full text-white hover:bg-sky-200 outline-none'>Your Opinion</button>
    </form>
  )
}

export default ReviewForm
