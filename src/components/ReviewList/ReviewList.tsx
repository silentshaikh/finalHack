'use client';
import { useEcomHook } from '@/Context/Context'
import { rubikBuble } from '@/utils/Helper/helper';


function ReviewList() {
  const {reviewList} = useEcomHook();
  if(reviewList.length === 0){
    return(
      <div className='flex flex-col items-center'>
        <h3 className={`${rubikBuble.className} text-xl`}>### No Comments Here ###</h3>
      </div>
    )
  }else{
    return (
      <ul className='flex flex-col items-center gap-5'>
       {
        reviewList.map((e) => {
          return(
            <li key={e.reviewId} className='bg-slate-50 p-3 w-[500px] max-[550px]:w-[450px] max-[490px]:w-[400px] max-[440px]:w-[350px] max-[380px]:w-[320px]  max-[350px]:w-[300px] max-[330px]:w-[280px] max-[300px]:w-[250px] max-[270px]:w-[90vw]'>
            <div>
              <h5 className='font-bold'>{e.userName}</h5>
              <p className='text-sm break-words tracking-widest max-[380px]:text-[12px]'>{e.userReview}</p>
            </div>
          </li>
          )
        })
       }
      </ul>
    )
  }
}

export default ReviewList
