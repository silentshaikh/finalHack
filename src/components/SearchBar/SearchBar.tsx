'use client';
import { useEcomHook } from "@/Context/Context";
import { poppins } from "@/utils/Helper/helper";
import Image from "next/image";
function SearchBar() {
    const {navTogg,searchValue,handleSearchValue,searchTogg,onHandleSearchForm} = useEcomHook();
  return (
    <form action='' onSubmit={onHandleSearchForm} className={`${poppins.className} flex items-center transition-all absolute ${navTogg ? 'max-[800px]:top-[350px]' : 'top-20'} ${searchTogg ? 'left-7 max-[450px]:left-3' : '-left-[400px]'} `}>
        <Image className="absolute left-2 " src='/images/Group 4.png' alt="search-bar" height={16} width={16}/>
        <input type="search" className="bg-slate-200 pl-10 py-2 rounded-md border-slate-300 border-dashed border-2 pr-3 outline-none w-[400px] max-[450px]:w-[350px] max-[375px]:w-[320px] max-[340px]:w-[300px] max-[320px]:w-[280px] max-[300px]:w-[260px] max-[280px]:w-[240px]" name="" id="" placeholder="Search Here..." value={searchValue} onChange={(e) => handleSearchValue(e.target.value)}/>
    </form>
  );
};
export default SearchBar;