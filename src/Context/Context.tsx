'use client';
import { paginButton } from '@/utils/Helper/helper';
import { Address, CartAction, CartDec, CartListType, ContextType, InitialCartData, InitialProdData, Product, ProductAction, Rate, ReviewList, ShipmentInpCheck,TrackingData, trackingObjType } from '@/utils/Type/type';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { ChangeEvent, createContext, FormEvent, ReactNode, useCallback, useContext, useEffect, useReducer, useState } from 'react'
import Cookies from "js-cookie";
import getStripe from '@/utils/getStripe';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';
import { toast } from 'react-toastify';

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
export const getWishList = () => {
  return JSON.parse(Cookies.get("fabwishlist") || "[]");
}
export const CartToCookie = (cart:CartListType[]) => {
  Cookies.set("fabcart", JSON.stringify(cart), { expires: 7 }); 
};
export const getCartCookie = () => {
  return JSON.parse(Cookies.get("fabcart") || "[]");
};
  //Calculate Total Quantity
  const calculateQuantity = (addCart:CartListType[]) => {
    const setTotalQuantity = addCart.map((e) => e.productquantity)
              .reduce((prev, curr) => {
                return prev + curr;
    }, 0);
    return setTotalQuantity;
  };
   //Calculate Total Quantity
   const calculateTotalPrice = (addCart:CartListType[]) => {
    const setTotalPrice = addCart.reduce((total, item) => {
      return total + (item.price * item.productquantity);
    }, 0);
    return setTotalPrice;
  };
  
const cartInitialData:InitialCartData = {
  cartList:[],
  productColor:'',
  productSize:'',
  totalPrice:calculateTotalPrice(getCartCookie()),
  totalQuantity:calculateQuantity(getCartCookie()),
  addCartProd:getCartCookie(),
  shipping:10,
  wishList:getWishList(),
  toast:false
};
const CARTACTION = {
  CARTSETLIST:'CARTSETLIST',
  ADDCOLOR:'ADDCOLOR',
  ADDSIZE:'ADDSIZE',
  INCPRODUCTQUAN:'INCPRODUCTQUAN',
  DECPRODUCTQUAN:'DECPRODUCTQUAN',
  ADDTOCART:"ADDTOCART",
  INC_ON_CART_PRODUCT:"INC_ON_CART_PRODUCT",
  DEC_ON_CART_PRODUCT:"DEC_ON_CART_PRODUCT",
  DELETE_ITEM:'DELETE_ITEM',
  CLEAR_CART:'CLEAR_CART',
  ORDER_DONE:'ORDER_DONE',
  RESET_COLOR_SIZE:'RESET_COLOR_SIZE',
  WISHLIST:'WISHLIST',
  DELETE_WISHLIST:'DELETE_WISHLIST',
  HANDLE_CHECKOUT:'HANDLE_CHECKOUT',
}




function Context({children}:{children:ReactNode}) {
  //FOR NAV TOGGLE
    const [navTogg,setNavTogg] = useState(false);
    //PRODUCT SEARCH BAR
    const [searchValue,setSearchValue] = useState('');
    //TOGGLE SEARCH BAR
    const [searchTogg,setSearchTogg] = useState(false);
     //HANDLE SELECT BOX FOR FILTER PRODUCT VIA PRODUCT CATEGORY
     const [selectValue,setSelectValue] = useState<string>('');
     // add alert for empty cart selection
    const [emptyAlert,setEmptyAlert] = useState<boolean>(false);
//add alert when product add in the cart
    const [cartAlert,setCartAlert] = useState<boolean>(false);
     //ROUTER FOR NAVIGATION
     const navigRoute = useRouter();
     //ADD COLOR ON WISHLIST ICON
const [colr,setColr] = useState<boolean>(false);
//HANDLE REVIEW INPUT
const [reviewInp,setReviewInp] = useState<string>('');
//REVIEW LIST OF EACH PRODUCT
const [reviewList,setReviewList] = useState<ReviewList[]>([]);
//HANDLE SHIPMENT INPUT
const [shipmentInp,setShipmentInp] = useState<Address>({
  name: "",
  phone: "",
  addressLine1: "1600 Pennsylvania Avenue NW",
  cityLocality: "Washington",
  stateProvince: "DC",
  postalCode: "20500",
  countryCode: "US",
  addressResidentialIndicator: "no",

});

const [rateList, setRatesList] = useState<Rate[]>([]);
  const [rateId, setRateId] = useState<string | null>(null);
  const [labelPdf, setLabelPdf] = useState<string | null>(null);
  const [trackingObj, setTrackingObj] = useState<trackingObjType | null>(null);
  const [loading, setLoading] = useState(false);
  const [shipError, setShipError] = useState<string>('');
  //tracking on shipment
  const [labelId, setLabelId] = useState("");
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [trackError, setTrackError] = useState<string>('');
  const serchParams = useSearchParams();
  const queryId = serchParams.get('labelid') as string;
  const trackRoute = useRouter();

  //CHECK USER LOGGED-IN OR NOT
  const {isSignedIn,user} = useUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress || '';
  const userName = user?.fullName || '';

  const [signupAlert,setSignUpAlert] = useState(false);
    //TOGGLE NAVBAR
    const onHandleNav = () => {
        setNavTogg((prev) => !prev);
    };
     //destructuring the Reducer Cart Action
     const {CARTSETLIST,ADDCOLOR,ADDSIZE,DECPRODUCTQUAN,INCPRODUCTQUAN,ADDTOCART,INC_ON_CART_PRODUCT,DEC_ON_CART_PRODUCT,RESET_COLOR_SIZE,WISHLIST,CLEAR_CART,DELETE_ITEM,DELETE_WISHLIST} = CARTACTION;
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
      };

      //HANDLE TOGGLE SEARCH
      const handleToggSearch = () => {
        setSearchTogg((prev) => !prev);
        setNavTogg(false);
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
 
     };

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
    };

    
    //FETCH PRODUCT LIST
    const fetchProductList = async (api:string) => {
      try {
        const fetchProd = await fetch(api,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache:'force-cache'
        });
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
          //ADD CARTLIST TO PERFORM ADD TO CART
          cartDispatch({type:CARTSETLIST,payload:backUp});
       
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

  //NAVIGATE TO CART AND ALSO CHNAGE STATE OF NAVTOGG
  const cartOperate = () => {
    navigRoute.push('/cart');
    setNavTogg(false);
  }

  //reset the color and the other property when i click on product card
  const onProductDetail = (id:string) => {
    cartDispatch({ type: RESET_COLOR_SIZE, payload: id });
    navigRoute.push(`/product/${id}`);

  };
  //Handle Textarea of Review
  const onHandleReview = (value:string) => {
    setReviewInp(value)
  }
  //Handle Form of Review
  const onFormReview = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(reviewInp.trim() === ''){
      toast('Please Fill that field')
    }else{
      if(!isSignedIn){
        toast('Please Log-in to add a review')
        return;
      };
      setReviewList((prev) => [...prev,{reviewId:new Date().getTime(),userName,userReview:reviewInp}])
    }
  }
   //PRODUCT INCREMENT AND DECREMENT
   const onProdInc= (id:string) => {
    cartDispatch({type:INCPRODUCTQUAN,payload:id});
  }
  const onProdDec= (id:string) => {
    cartDispatch({type:DECPRODUCTQUAN,payload:id});
    // alert(id)
  };

   //SET THE PRODUCT COLOR
   const setProdColor = (color:string) => {
    cartDispatch({type:ADDCOLOR,payload:color});
  };
   //SET THE PRODUCT SIZE
   const setProdSize = (size:string) => {
    cartDispatch({type:ADDSIZE,payload:size});
  };
  //Add To Cart
  const addToCart = (id:string) => {
    cartDispatch({type:ADDTOCART,payload:id});
  }


    //Add Product Increment
    const addProdInc = (id:number) => {
      cartDispatch({type:INC_ON_CART_PRODUCT,payload:id});
      // alert(`ID: ${id}`)
    };
    //Add Product Decrement
    const addProdDec = (id:number,quantity:number) => {
      cartDispatch({type:DEC_ON_CART_PRODUCT,payload:{id,quantity}});
      // alert(`ID: ${id}`)
    }

    //cart delete item
    const cartDeleteItem = (id:number) => {
      cartDispatch({type:DELETE_ITEM,payload:id});
    };

    //clear cart
    const clearCart = () => {
      cartDispatch({type:CLEAR_CART,payload:''})
    }
       //  Add Wishlist
       const addWishList = (id:string) => {
        cartDispatch({type:WISHLIST,payload:id});
        const findProd = productList.find((e) => e.id === id);
        if(findProd){
          setColr(true);
        }
      }
    
      //Delete Wishlist
      const delWishList = (id:string) => {
        cartDispatch({type:DELETE_WISHLIST,payload:id});
        const findProd = productList.find((e) => e.id === id);
        if(findProd){
          setColr(false);
        }
      };

       //HANDLE SANITY DATA ON REGISTRATION
      useEffect(() => {
        if(user){
          fetch(`/api/sync-user`,{
            method:'POST',
            headers:{
              "Content-Type": "application/json",
            }
          })
        }
      },[user])

    //HANDLE CHECKOUT
    const onHandleCheckout = async () => {
      if (!cartData || cartData.addCartProd.length === 0) {
        toast("Cart is Empty");
        return;
      }
      if (!isSignedIn) {
        // alert("You must be logged in to place an order!"); 
        // setSignUpAlert(true)
        toast("You must be logged in for Checkout!")
        // router.push("/sign-in"); // Redirect to login page
      
        return;
      }
      setSignUpAlert(false);
      try {
        const { addCartProd,totalPrice } = cartData;
        const loadStripe = await getStripe();
    
        console.log("⏳ Sending Checkout Request...", addCartProd);
    
        const checkResponse = await fetch("/api/stripe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addCartProd ), // ✅ Corrected JSON structure
        });
    
        const responseData = await checkResponse.json();
        console.log("✅ Checkout API Response:", responseData);
    
        if (!checkResponse.ok) {
          console.error("❌ Checkout API Error:", responseData.error || "Unknown Error");
          alert(`Checkout Failed: ${responseData.error || "Try again!"}`);
          return;
        }
    
        if (!responseData.sessionId) {
          alert("Invalid response from checkout session. Please try again.");
          return;
        }else{

        // }

        //POST REQUEST TO SEND EMAIL TO THE USER
        // if(responseData.sessionId){
          const userEmailResp = await fetch('/api/send-email',{
            method:'POST',
            headers:{
              "Content-Type":'application/json'
            },
            body:JSON.stringify({
              userEmail,
              userName,
              addCartProd,
              totalPrice,
            })
          });
          if(!userEmailResp){
            throw new Error('Failed To send Email to User')
          }
           toast("Just Wait") 
            console.log("🔄 Redirecting to Stripe Checkout...");
            
            //STORE ORDERS INTO SANITY
            try {
              const userOrders = await fetch('/api/store-orders',{
                method:'POST',
                headers:{
                  "Content-Type":'application/json'
                },
                body:JSON.stringify({
                  addCartProd,
                })
              });
              const orderData = await userOrders.json();
              console.log(orderData)
             } catch (error) {
              alert(`Error on Order Storing: ${error}`)
             }
              await loadStripe?.redirectToCheckout({ sessionId: responseData.sessionId });
             
            }
            
    
      } catch (error) {
        console.error("❌ Error in Checkout:", error);
        alert("Something went wrong during checkout. Please try again.");
      }
    };
    
  
    
    //Handle Shipment Form

    const onHandleShipmentInp = (e:ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setShipmentInp((prev: Address) => ({ ...prev, [name]: value }));
  };
  const onHandleShipmentForm = async  (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      const {addressLine1,cityLocality,countryCode,name,phone,postalCode,stateProvince} = shipmentInp;
      //Regex For Input Fields
      const phoneNumRegex = /^[0-9]{11}$/;
      const matchPhoneNum = phone.match(phoneNumRegex);
      const postalCodeNumRegex = /^[0-9]{5}$/;
      const matchPostalCodeNum = postalCode.match(postalCodeNumRegex);
      
      const newInpValidCheck: ShipmentInpCheck = {
        phoneCheck: matchPhoneNum,
        firstnameCheck: name.length >= 3 && name.length <= 16,
        addressCheck: addressLine1.length >= 10 && addressLine1.length <= 30,
        cityCheck: cityLocality.length >= 4 && cityLocality.length <= 20,
        countryCheck: countryCode.length >= 1 && countryCode.length <= 5,
        stateCheck: stateProvince.length >= 2 && stateProvince.length <= 20,
        postalcodeCheck: matchPostalCodeNum,

      };
      const {addressCheck,cityCheck,countryCheck,firstnameCheck,phoneCheck,postalcodeCheck,stateCheck} = newInpValidCheck;
      if(!addressCheck || !cityCheck || !countryCheck  || !firstnameCheck  || !phoneCheck || !postalcodeCheck || !stateCheck){
        toast(`Please complete all required fields before proceeding to checkout.`)
      }
      else{
        toast(`Thank you for your purchase! Your payment was successful. A confirmation email has been sent to  .`);
        setLoading(true);
      setShipError('');
        setRatesList([]);
        try {
          const shipResponse = await axios.post("/api/get-rates", {
            shipmentInp,
            packages: [
                   { weight: { value: 5, unit: "ounce" }, dimensions:{ height: 3, width: 15, length: 10, unit: "inch" } },
                 ],
          });
        
          console.log(shipResponse.data)
          setRatesList(shipResponse.data.shipmentDetail.rateResponse.rates);
        } catch (error) {
          console.error(`Error in Fetching Rating : ${error}`)
          setShipError('Error when Fetching the Rate List')
        }finally{
          setLoading(false)
        }
        setShipmentInp({
        addressLine1:'',
        cityLocality:'',
        addressResidentialIndicator:'no',
        countryCode:'',
        name:'',
        phone:"",
        postalCode:'',
        stateProvince:'',
        });
      }
  };  
  //HANDLE SHIPPING RATE
  const handleRate = (id:string|null) => {
    setRateId(id)
  };
  //CREATING SHIPPING LABEL
  const onCreatingLabel = async () => {
    if(!rateId){
      alert('Select a Rate to create a Label')
      return;
    };

    setLoading(true);
    setShipError('');

    try {
      const labelResponse = await axios.post('/api/label',{rateId})
      const responseData = labelResponse.data;
      setLabelPdf(responseData.labelDownload.href);
      setTrackingObj({
        trackingNumber: responseData.trackingNumber,
        labelId: responseData.labelId,
        carrierCode: responseData.carrierCode,
      });
      console.log(responseData)
    } catch (error) {
      console.error(error);
      setShipError('Here are some issue to create a label. Please try later.')
    }finally {
      setLoading(false);
    }
  }
  //HANDLING TRACKING
  const handleTracking = useCallback(
    async (labelid:string) => {
     if(!labelid){
      setTrackError('Label ID is Necessary');
      return;
     }
      setLoading(true);
      setTrackError('');
      try {
        trackRoute.replace(`/tracking?labelId=${labelid}`)
        const trackResponse = await axios.get(`/api/tracking/${labelid}`);
        setTrackingData(trackResponse.data);
      } catch (error) {
        console.error(`Error on tracking shipment ${error}`);
        setTrackError('Failed To Track Shipment. Please Re-check the Label ID');
      }finally{
        setLoading(false);
      }

    },
    [trackRoute]
   
  ); 

  useEffect(() => {
    if(queryId){
      setLabelId(queryId);
      handleTracking(queryId)
    }
  },[queryId,handleTracking])

  //handle shipment tracking input
  const onHandleTrack = (e:string) => {
    setLabelId(e)
  }

  //submissioon of shipment tracking
  const onSubmitTracking = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleTracking(labelId)
  }
    

 

  //for handle empty alert
useEffect(() => {
  setTimeout(() => {
    setEmptyAlert(false);
  },5000)
},[emptyAlert])

  //for handle cart  alert
useEffect(() => {
  setTimeout(() => {
    setCartAlert(false);
  },5000)
},[cartAlert])

  //HANDLE CART
  const [cartData,cartDispatch] = useReducer(cartReducer,cartInitialData);
  useEffect(() => {
    // setTimeout(() => {
      CartToCookie(cartData.addCartProd);
    // }, 1000);
  },[cartData.addCartProd]);

  //HANDLE WISH LIST
  useEffect(() => {
    Cookies.set('fabwishlist',JSON.stringify(cartData.wishList), { expires: 7 })
  },[cartData.wishList]);

   //Add to Cart Reducer
   function cartReducer(state:InitialCartData,action:CartAction):InitialCartData {
     switch (action.type) {
       case CARTSETLIST:
         return {...state,cartList:(action.payload as Product[])};
       case ADDCOLOR:
         return {...state,productColor:(action.payload as string)};
      case ADDSIZE:
         return {...state,productSize:(action.payload as string)};
       case  INCPRODUCTQUAN:
         const updatedCartInc = state.cartList.map((e) => {
           if (e.id === (action.payload as string)){
             return { ...e, productQuantity: e.productQuantity+1};
           }; 
             return e;
         });
         return { ...state, cartList: updatedCartInc}; 

       case DECPRODUCTQUAN:
         const updatedCartDec = state.cartList.map((e) => {
           if (e.id === (action.payload as string)){
             const quanDec = e.productQuantity===0 ? 0 : e.productQuantity-1;
             return { ...e, productQuantity:quanDec};
           } else {
             return e;
           }
         });
         return { ...state, cartList: updatedCartDec};
         case RESET_COLOR_SIZE:
          const updatedCartList = state.cartList.map((e) => {
            if(e.id === (action.payload as string)){
              // remove one quantity for set the decrement of product
             const deleteQuan = e.productQuantity-1;
              return {...e, productQuantity:e.productQuantity-deleteQuan}
            }else{
              return e;
            }
          });
          return{...state,cartList:updatedCartList, productColor:'',productSize:''};  
       case ADDTOCART:
         const prodFind = state.cartList.find((e)=> {
           return e.id === (action.payload as string);
         });
  
         if(prodFind){
           if(state.productColor=== '' || state.productSize === '' || prodFind.productQuantity<1){
            // alert('Set the color,size and quantity');
             setEmptyAlert(true);
           }else{
             setEmptyAlert(false);
             setCartAlert(true);
             const getColor =prodFind.productcolors.find((e) => {
               return e === state.productColor;
             });
             const getSize =prodFind.productsizes.find((e) => {
              return e === state.productSize;
            });
            // alert(`${getSize} ${getColor}`)
            // alert(prodFind.productQuantity)
            if(getColor&&getSize){
              const addProductItem:CartListType = {
                productid:new Date().getTime(),
                productname:prodFind.productname,
                productimage:prodFind.productimg,
                productcategory:prodFind.category,
                productcolor:getColor,
                productsize:getSize,
                price:prodFind.price,
                productquantity:prodFind.productQuantity,
                sku:`${getColor}-${new Date().getTime()}-${getSize}`,
                currency:'USD'
              };

              //destructure the find item
              const {productname,productQuantity,} = prodFind;
            
              //find product if already exist in the cart with same property
              const findCartProd=state.addCartProd.find((e) => {
                return e.productname === productname && e.productcolor === getColor && e.productsize === getSize ;
              });
              if(findCartProd){
                const {productname,productcolor,productid} = findCartProd;
                // if(productname.toLowerCase() === product_name.toLowerCase() && getColor === productcolor){
                  //update  the quantity that product if it's already exist in the cart
                  const mapCartList = state.addCartProd.map((e) => {
                    if(productname === e.productname && productcolor === getColor && e.productid === productid){
                      return {...e,productquantity:e.productquantity+productQuantity}
                    }else{
                      return e;
                    }
                  });
                  //add the updated list of cart
                  return {...state,addCartProd:mapCartList,totalQuantity:calculateQuantity(mapCartList),totalPrice:calculateTotalPrice(mapCartList),toast:false};

               
              }else{
                const addCartItems:CartListType[] =[...state.addCartProd,addProductItem];
                // setShowToast(true);
                return {...state,addCartProd:addCartItems,totalQuantity:calculateQuantity(addCartItems),totalPrice:calculateTotalPrice(addCartItems),toast:true};
              }
              
            }else{
              alert("Color,Size is not Available");
            }
          }
        } else {
          alert("Product is not Available");
          return {...state,toast:false};
        }
        
        case INC_ON_CART_PRODUCT:
          const incAddProd = state.addCartProd.map((e) => {
            if(e.productid === (action.payload as number)){
              return {...e, productquantity: e.productquantity+1}
            };
            return e;
          }); 
          return {...state,addCartProd:incAddProd,totalQuantity:calculateQuantity(incAddProd),totalPrice:calculateTotalPrice(incAddProd)};   

        case DEC_ON_CART_PRODUCT:
          if((action.payload as CartDec).quantity===1){
            //remove that item if quantity zero
            const removeCartItem = state.addCartProd.filter((e) => {
              return e.productid !== (action.payload as CartDec).id
            });
            return {...state, addCartProd:removeCartItem,totalQuantity:calculateQuantity(removeCartItem), totalPrice:calculateTotalPrice(removeCartItem)};
          }else{
  
            const decAddProd = state.addCartProd.map((e) => {
              if(e.productid === (action.payload as CartDec).id){
                return {...e, productquantity: e.productquantity-1}
              }else{
                return e;
              }
            });
            return {...state,addCartProd:decAddProd,totalQuantity:calculateQuantity(decAddProd),totalPrice:calculateTotalPrice(decAddProd)};   
          } 
         
        case DELETE_ITEM:
          const deleteItem = state.addCartProd.filter((e) => {
            return e.productid !== (action.payload as number)
          });
          return {...state,addCartProd:deleteItem,totalPrice:calculateTotalPrice(deleteItem),totalQuantity:calculateQuantity(deleteItem)};
        
        case CLEAR_CART:
          return {...state,addCartProd:[],totalPrice:0,totalQuantity:0}  

      //  case ORDER_DONE:
      //  return {...state,addCartProd:[],totalPrice:0,totalQuantity:0};
       case WISHLIST:
         //find the product to add in wishlist
         const findProdForWish = state.cartList.find((e) => {
           return e.id === (action.payload as string);
         });
         if(findProdForWish){
           //create wishlist
           const wishProduct:Product = {
             id:findProdForWish.id,
             stock:findProdForWish.stock,
             productcolors:findProdForWish.productcolors,
             productimg:findProdForWish.productimg,
            price:findProdForWish.price,
            //  old_price:findProdForWish.old_price,
             description:findProdForWish.description,
            //  product_id:findProdForWish.product_id,
            //  product_img:findProdForWish.product_img,
             productname:findProdForWish.productname,
             rating:findProdForWish.rating,
             category:findProdForWish.category,
             productQuantity:findProdForWish.productQuantity,
             productsizes:findProdForWish.productsizes,
             createdAt:findProdForWish.createdAt,
             updatedAt: findProdForWish.updatedAt,
             discount:findProdForWish.discount,
             tags:findProdForWish.tags
           };
           //destructure the wish list object
           const {productname} = wishProduct;
           //find if some products is already exist in wishlist
           const findExistWishList = state.wishList.find((e) => {
             return e.productname === productname;
           });
           // const findColor = findExistWishList?.color_list.find((e) => {
           //   e === state.productColor;
           // })
           if(findExistWishList?.productname === productname){
             alert('This Product is already exist');
             return state;
           }else{
            
             const addWishList = [...state.wishList,wishProduct];
             return {...state,wishList:addWishList}
           }

         }; 
         case DELETE_WISHLIST:
         const deleteWish = state.wishList.filter((e) => {
          return e.id !== (action.payload as string);
         });
         return {...state, wishList:deleteWish};

       
         

       default:
         return state
     }
   };
  
  //ARRAY MAPPING FOR FILTER PRODUCT VIA CATEGORY
  const productTypes:string[] = prodData.backupList.map((e) => e.category);
  const uniqueTypes =[ "ALL",...new Set(productTypes)];

  //FIND POPULAR PRODUCT
  const popularProd = prodData.backupList.filter((e) => e.tags.includes('popular'));
  const filtPopCategory = popularProd.filter((e) => e.id !== '18');
  console.log(filtPopCategory)
  return (
    <EcomContext.Provider value={{navTogg,onHandleNav,productList,backupList,page,paginationOperate,uniqueTypes,onFilterForm,onHandleSelectBox,selectValue,filtPopCategory,handleSearchValue,searchValue,handleToggSearch,searchTogg,onHandleSearchForm,cartAlert,emptyAlert,cartData,onProdDec,onProdInc,setProdColor,setProdSize,addToCart,addProdDec,addProdInc,cartDeleteItem,clearCart,cartOperate,addWishList,colr,delWishList,onHandleCheckout,onProductDetail,onHandleShipmentForm,onHandleShipmentInp,shipmentInp,rateList,handleRate,rateId,onCreatingLabel,trackingObj,labelPdf,loading,shipError,onHandleTrack,onSubmitTracking,labelId,trackError,trackingData,signupAlert,onHandleReview,reviewInp,onFormReview,reviewList}}>{children}</EcomContext.Provider>
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