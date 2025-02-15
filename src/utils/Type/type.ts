import { ChangeEvent,FormEvent } from "react";

export interface NavList{
    name:string,
    link:string
};
export interface ContextType{
    navTogg:boolean,
    productList:Product[];
    backupList:Product[];
    page:number;
    uniqueTypes:string[];
    selectValue:string;
    filtPopCategory:Product[];
    cartData:InitialCartData;
    onHandleNav:() => void;
    paginationOperate:(e:string) => void;
    onHandleSelectBox:(e:ChangeEvent<HTMLSelectElement>) => void;
    onFilterForm: (e:FormEvent<HTMLFormElement>) => void;
    handleSearchValue: (value:string) => void;
    handleToggSearch: () => void;
    onHandleSearchForm: (e:FormEvent<HTMLFormElement>) => void;
    cartOperate:() => void;
    addWishList: (id:string) => void;
    delWishList: (id:string) =>void;
    searchValue:string;
    searchTogg:boolean;
    emptyAlert:boolean;
    cartAlert:boolean;
    colr:boolean;
    shipmentInp:Address;
    rateList:Rate[];
    rateId:string|null;
    labelPdf:string|null;
    loading:boolean;
    shipError:string;
    trackingObj:trackingObjType|null;
    labelId:string;
    trackingData:TrackingData|null;
    trackError:string;
    signupAlert:boolean;
    onProdInc: (id:string) => void;
    onProdDec: (id:string) => void;
    setProdColor: (color:string) => void;
    setProdSize: (size:string) => void;
    addToCart: (id:string) => void;
    addProdInc:(id:number) => void;
    addProdDec:(id:number,quantity:number) => void;
    cartDeleteItem: (id:number) =>void;
    clearCart: () => void;
    onHandleCheckout : () => void;
    onProductDetail:(id:string) =>void;
    onHandleShipmentForm :(e:FormEvent<HTMLFormElement>) => void;
    onHandleShipmentInp : (e:ChangeEvent<HTMLInputElement>) => void;
    handleRate:(id:string|null) =>void;
    onCreatingLabel:() =>void;
    onHandleTrack: (e:string) => void;
    onSubmitTracking: (e:FormEvent<HTMLFormElement>) => void;
    onHandleReview: (value:string) => void;
    reviewInp:string;
    onFormReview: (e:FormEvent<HTMLFormElement>,id:string) => void;
    // reviewList:ReviewList[];
};

//Review List
export interface ReviewList{
  _key?:string;
  userreview:string;
  review:string;
  timing:string;
}
//Card Type for Cart Page
export interface TypeForCartCard {
    name: string;
    category: string;
    price: number;
    img: string;
  }
export interface ClothList{
    id:number;
    name:string;
    img:string;
    category:string;
    oldPrice:string;
    newPrice:string;
    color:string[]
}
export interface RatingList{
    ratingName:string;
    ratingCount:string;
}
export interface AboutTeam{
    img:string;
    userName:string;
    profession:string;
};
export interface ContactList{
    id:number;
    img:string;
    email:string;
    mailTwo:string;
    suport:string;
    btnSuport:string;
};
export interface PriceList{
    id:number;
    package:string;
    price:string;
    sym:string;
    duration:string;
    quality:string;
    para:string;
};
export interface FaqList{
    id:number;
    head:string;
    para:string;
};

//Mock API Interface
export interface Product {
    createdAt: string; // ISO string representing the creation date
    productname: string; // Name of the product
    productimg: string; // URL to the product image
    description: string; // Product description
    price: number; // Price of the product
    discount: number; // Discount on the product
    category: string; // Product category
    stock: number; // Number of items in stock
    rating: number; // Product rating
    tags: string[]; // Tags associated with the product
    productsizes: string[]; // Available sizes for the product
    productcolors: string[]; // Available colors represented as hex codes
    updatedAt: string; // ISO string representing the last update date
    id: string; // Product ID
    reviewlist: ReviewList[]; // Array of reviews (currently empty in the example)
    productQuantity:number;
};

//Product Reducer 
export interface InitialProdData{
    productList:Product[];
    backupList:Product[];
    page:number,
    limit:number
};

export interface ProductAction{
    type:string,
    payload:string|Product[];
};
  

export interface CartListType{
    productname: string; 
    productid: number; 
    productsize: string; 
    // producttype: string; 
    // productavaiableornot: boolean | null; 
    productcolor:string; 
    price: number; 
    productcategory: string; 
    productimage: string;
    productquantity:number;
    sku:string;
    currency:string
    // productimagelist: ProductImage[]; 
  };

export interface InitialCartData{
    cartList:Product[];
    productColor:string;
    productSize:string;
    totalPrice:number;
    totalQuantity:number
    addCartProd:CartListType[]
    shipping:number;
    wishList:Product[];
    toast:boolean
};
export interface CartAction{
    type:string;
    payload:string|number|Product[]|CartDec;
};
export interface CartDec{
    id:number,
    quantity:number;
}


//Shipment Types
export type Address = {
    name: string;
    phone: string;
    addressLine1: string;
    addressLine2?: string;
    cityLocality: string;
    stateProvince: string;
    postalCode: string;
    countryCode: string;
    addressResidentialIndicator: "yes" | "no";
  };
  export type unit = "ounce" | "gram" | "kilogram" | "pound";
  export type dimensionUnit = "inch" | "centimeter";
  
  export type Package = {
    weight: {
      value: number;
      unit: unit;
    };
    dimensions: {
      height: number;
      width: number;
      length: number;
      unit: dimensionUnit;
    };
  };
  
  export type Rate = {
    rateId: string;
    rateType: string;
    carrierId: string;
    shippingAmount: {
      currency: string;
      amount: number;
    };
    serviceType: string;
    serviceCode: string;
    trackable: boolean;
    carrierFriendlyName: string;
    validationStatus: string;
    warningMessages?: string[];
  };
  
  export interface trackingObjType {
    trackingNumber: string;
    labelId: string;
    carrierCode: string;
  }
  
  export interface TrackingData {
    trackingNumber?: string;
    statusDescription?: string;
    carrierStatusDescription?: string;
    estimatedDeliveryDate?: string;
    actualDeliveryDate?: string;
  }

  //shipment input types
export interface ShipmentInpType{
    email:string;
    phone:string;
    firstname:string;
    lastname:string;
    country:string;
    state:string;
    address:string;
    city:string;
    postalcode:string;
  }

  //shipment input label type
  export interface CheckLabel {
    labelValue: string;
  }

  //shipmentout Input
export interface ShipmentInp {
  place: string;
  name: string;
  value:string;
}

 //shipment boolean state
export interface ShipmentInpCheck{
    phoneCheck:RegExpMatchArray|null;
    firstnameCheck:boolean;
    countryCheck:boolean;
    stateCheck:boolean;
    addressCheck:boolean;
    cityCheck:boolean;
    postalcodeCheck:RegExpMatchArray|null;
  } 