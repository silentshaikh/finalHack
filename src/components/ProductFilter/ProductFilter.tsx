'use client';

import { useEcomHook } from "@/Context/Context";

function ProductFilter() {
  const {uniqueTypes,onHandleSelectBox,onFilterForm,selectValue} = useEcomHook();
  return (
    <form className='flex gap-5' onSubmit={(e) => onFilterForm(e)}>
      <select name="" id="" className='py-3 px-3 bg-[#f9f9f9] outline-none rounded-sm cursor-pointer' value={selectValue} onChange={(e) => onHandleSelectBox(e)}>
        {
          uniqueTypes.map((e,i) => {
            return(
              <>
              {e.toLowerCase() === 'all' ? <option key={i} className="cursor-pointer" defaultValue={e} value={e}>{e}</option>:<option key={i} className="cursor-pointer" value={e}>{e}</option>}
              </>
            )
          })
        }
      </select>
      <button className='bg-[#23a6f0] px-6 text-white rounded-md outline-none'>Filter</button>
    </form>
  )
};
export default ProductFilter;