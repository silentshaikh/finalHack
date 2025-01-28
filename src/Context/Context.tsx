'use client';
import { paginButton } from '@/utils/Helper/helper';
import { ContextType, InitialProdData, Product, ProductAction } from '@/utils/Type/type';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, createContext, FormEvent, ReactNode, useContext, useEffect, useReducer, useState } from 'react'

const EcomContext = createContext<ContextType|null>(null);
const prodInitialData:InitialProdData = {
  productList:[],
  backupList:[],
  page:1,
  limit:12
};
const PRODUCTACTION = {
  LOADPRODUCT:'LOADPRODUCT',
  BACKUP:'BACKUP',
  PRODPAGEONE:'PRODPAGEONE',
  PRODPAGETWO:'PRODPAGETWO',
  PRODPAGETHREE:'PRODPAGETHREE',
  FILTERCATEG:'FILTERCATEG',
  SEARCHPRODUCT: 'SEARCHPRODUCT',
};
function Context({children}:{children:ReactNode}) {
  //FOR NAV TOGGLE
    const [navTogg,setNavTogg] = useState(false);
    //PRODUCT SEARCH BAR
    const [searchValue,setSearchValue] = useState('');
    //TOGGLE SEARCH BAR
    const [searchTogg,setSearchTogg] = useState(false);
     //HANDLE SELECT BOX FOR FILTER PRODUCT VIA PRODUCT CATEGORY
     const [selectValue,setSelectValue] = useState<string>('');
     //ROUTER FOR NAVIGATION
     const navigRoute = useRouter();
    //TOGGLE NAVBAR
    const onHandleNav = () => {
        setNavTogg((prev) => !prev);
    };

      //HANDLE SEARCH BAR
      const handleSearchValue = (value:string) => {
        setSearchValue(value);
      }
      //HANDLE SEARCH FORM
      const onHandleSearchForm = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(searchValue.trim() === ''){
          alert('Please enter a search term.')
        }else{
          dispatch({type:SEARCHPRODUCT,payload:searchValue});
          navigRoute.push('/product');
        }
      }

      //HANDLE TOGGLE SEARCH
      const handleToggSearch = () => {
        setSearchTogg((prev) => !prev);
        // alert('Bar')
      }

     // FOR HANDLE PRODUCT LIST
     const {FILTERCATEG,LOADPRODUCT,PRODPAGEONE,PRODPAGETWO,PRODPAGETHREE,SEARCHPRODUCT,BACKUP} = PRODUCTACTION;
     const [prodData,dispatch] = useReducer(productReducer,prodInitialData);
     function productReducer(state:InitialProdData,action:ProductAction):InitialProdData{
       switch (action.type) {
         case LOADPRODUCT:
           return {...state,productList:(action.payload as Product[])};
           case BACKUP:
           return {...state,backupList:(action.payload as Product[])};
          //  case BACKUPPROD:
          //   return {...state,backupList:(action.payload as Product[])};  
       
           //FOR FIRST PAGE QUERY
         case PRODPAGEONE:
           let pageNumb = state.page;
           if(pageNumb<2){
             pageNumb = 1;
           }else{
             pageNumb = pageNumb-1
           };
           return {...state,page:pageNumb};
 
           //FOR SECOND PAGE QUERY
          case PRODPAGETWO:
           let pageNum = state.page;
           if(pageNum>=2){
             pageNum = 2;
           }else{
             pageNum = pageNum+1;
           };
           return {...state,page:pageNum};
           //FOR THIRD PAGE QUERY
          case PRODPAGETHREE:
            return { ...state, page: 3 };
           //FOR CATEGORY FILTER
         case FILTERCATEG:
           if((action.payload as string).trim().toLowerCase() === 'ALL'.toLowerCase()){
             return {...state,productList:state.backupList};
           }else{
             const filterProdTypes = state.backupList.filter((e) => {
               return e.category.trim().toLowerCase() === (action.payload as string).trim().toLowerCase();
             });
             return {...state,productList:filterProdTypes};
 
           };

           case SEARCHPRODUCT:
            const searchedProducts = state.backupList.filter((e) =>
              e.productname.toLowerCase().includes((action.payload as string).toLowerCase())
            );
       
            return { ...state, productList:searchedProducts}; 
         default:
           return state;
       }
 
     }

     //HANDLE FILTER CATEGORY
     const onHandleSelectBox = (e:ChangeEvent<HTMLSelectElement>) => {
      setSelectValue(e.target.value);
      console.log(e.target.value);
    };

    const onFilterForm = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(selectValue){
        dispatch({type:FILTERCATEG,payload:selectValue});

      }else{
        alert("Plz Fill the fields");
      }
    }

    
    //FETCH PRODUCT LIST
    const fetchProductList = async (api:string) => {
      try {
        const fetchProd = await fetch(api,{cache:'force-cache'});
        const getProd:Product[] = await fetchProd.json();
        console.log(getProd);
        return getProd;
      } catch (error) {
        throw new Error(`${error}: API Not Found`);
      }
    };
    //DESTRUCTURE OF PRODUCT DATA
    const {productList,backupList,limit,page} = prodData;
    useEffect(() => {
      const callFetchFunc = async ()=> {
        //FOR PRODUCT LIST SHOW
        const prodList:Product[] = (await fetchProductList(`${process.env.NEXT_PUBLIC_FABRIC}/api/clothex?limit=${limit}&page=${page}`)).map((e) => ({...e, productQuantity:1}));
        dispatch({type:LOADPRODUCT,payload:prodList});
        console.log(prodList)
        const backUp = (await fetchProductList(`${process.env.NEXT_PUBLIC_FABRIC}/api/clothex`)).map((e) => ({...e, productQuantity:1}));
        console.log(backUp);
        dispatch({type:BACKUP,payload:backUp});

       
       
 };
 //CALL THE FUNCTION
 callFetchFunc();  
    },[page,BACKUP,limit,LOADPRODUCT]);
      //DESTRUCTURE THE PAGINATION BUTTON VALUE
  const {first,one,next,three,two} = paginButton;
  // PERFORM PAGINATION
  const paginationOperate = (value: string) => {
    if (value === first) {
      // Reset to the first page
      dispatch({ type: PRODPAGEONE,payload:''});
    } else if (value === one) {
      // Navigate to the first page
      dispatch({ type: PRODPAGEONE,payload:''});
    } else if (value === two) {
      // Navigate to the second page
      dispatch({ type: PRODPAGETWO,payload:''});
    } else if (value === three) {
      // Navigate to the third page
      dispatch({ type: PRODPAGETHREE,payload:''});
    } else if (value === next) {
      // Handle "next" logic based on the current page
      const currentPage = prodData.page;
      if (currentPage === 1) {
        dispatch({ type: PRODPAGETWO,payload:''});
      } else if (currentPage === 2) {
        dispatch({ type: PRODPAGETHREE,payload:''});
      }
    };
    setSelectValue('ALL');
  };
  
  //ARRAY MAPPING FOR FILTER PRODUCT VIA CATEGORY
  const productTypes:string[] = prodData.backupList.map((e) => e.category);
  const uniqueTypes =[ "ALL",...new Set(productTypes)];

  //FIND POPULAR PRODUCT
  const popularProd = prodData.backupList.filter((e) => e.tags.includes('popular'));
  const filtPopCategory = popularProd.filter((e) => e.id !== '18');
  console.log(filtPopCategory)
  return (
    <EcomContext.Provider value={{navTogg,onHandleNav,productList,backupList,page,paginationOperate,uniqueTypes,onFilterForm,onHandleSelectBox,selectValue,filtPopCategory,handleSearchValue,searchValue,handleToggSearch,searchTogg,onHandleSearchForm}}>{children}</EcomContext.Provider>
  )
}

export default Context


export const useEcomHook = () => {
    const ecomHok = useContext(EcomContext);
    if(!ecomHok){
        throw new Error('useEcomHook must be used within a EcomContext.Provider')
    };
    return ecomHok;
};