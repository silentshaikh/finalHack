import { ChangeEvent, FormEvent } from "react";

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
    onHandleNav:() => void;
    paginationOperate:(e:string) => void;
    onHandleSelectBox:(e:ChangeEvent<HTMLSelectElement>) => void;
    onFilterForm: (e:FormEvent<HTMLFormElement>) => void;
    handleSearchValue: (value:string) => void;
    handleToggSearch: () => void;
    onHandleSearchForm: (e:FormEvent<HTMLFormElement>) => void;
    searchValue:string;
    searchTogg:boolean;
    
};
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
    reviewlist?: string[]; // Array of reviews (currently empty in the example)
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
  