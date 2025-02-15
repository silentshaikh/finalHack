'use client';

import { useEcomHook } from "@/Context/Context";

function ReviewForm({id}:{id:string}) {
    const {reviewInp,onHandleReview,onFormReview} = useEcomHook();
  return (
    <form action='' className='flex flex-col gap-3' onSubmit={(e) => onFormReview(e,id)}>
        <label htmlFor="" className="font-bold max-[330px]:text-sm">Your Feedback Matters</label>
        <textarea name="" id="" rows={9} placeholder='Share Your Experience with Us' className='outline-none p-3 text-sm w-[600px] resize-none rounded-md border-2 border-dashed max-[700px]:w-[500px] max-[550px]:w-[450px] max-[490px]:w-[400px] max-[440px]:w-[350px] max-[380px]:w-[320px] max-[380px]:text-[12px] max-[350px]:w-[300px] max-[330px]:w-[280px] max-[300px]:w-[250px] max-[270px]:w-[90vw]' value={reviewInp} onChange={(e) => onHandleReview(e.target.value)}></textarea>
      <button className='bg-sky-300 w-[180px] py-2 rounded-full text-white hover:bg-sky-200 outline-none max-[700px]:w-[150px] max-[550px]:w-[130px] max-[550px]:text-sm max-[440px]:w-[120px]'>Your Opinion</button>
    </form>
  )
}

export default ReviewForm
