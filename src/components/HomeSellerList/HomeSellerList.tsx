'use client';
import { useEcomHook } from '@/Context/Context'
import Card from '../Card/Card'
function HomeSellerList() {
  const {filtPopCategory} = useEcomHook();
  return (
    <div className='flex justify-center gap-12 items-center flex-wrap pt-10'>
      {
        filtPopCategory.map((e) => {
            return(
                <Card key={e.id} clothlist={e}/>
            )
        })
      }
    </div>
  )
}

export default HomeSellerList
