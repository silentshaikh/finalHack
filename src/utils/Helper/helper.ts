import { AboutTeam, ClothList, ContactList, FaqList, NavList, PriceList, RatingList } from "../Type/type";
import {Poppins,Creepster} from 'next/font/google';
export const rubikBuble = Creepster({ subsets: ['latin'], weight: ['400'],display: 'swap',  });
export const poppins = Poppins({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
});

export const navList:NavList[] = [
    {
        name:'home',
        link:'/'
    },
    {
        name:'Shop',
        link:'/product'
    },
    {
        name:'About',
        link:'/about'
    },
    {
        name:'contact',
        link:'/contact'
    },
    {
        name:'Team',
        link:'/team'
    },
    {
        name:'pricing',
        link:'/pricing'
    }
];
export const secondList:NavList[] = [
    {
        name:'home',
        link:'/'
    },
    {
        name:'Product',
        link:'/product'
    },
    {
        name:'contact',
        link:'/contact'
    },
    {
        name:'pricing',
        link:'/pricing'
    }
];
export const homeProduct:ClothList[] = [
    {
        id:1,
        name:'Graphic Design',
        img:'product-cover-5.jpg',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:2,
        name:'Graphic Design',
        img:'product-cover-5 (1).jpg',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:3,
        name:'Graphic Design',
        img:'product-cover-5 (2).jpg',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:4,
        name:'Graphic Design',
        img:'fixed-height.png',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:5,
        name:'Graphic Design',
        img:'product-cover-5.png',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:6,
        name:'Graphic Design',
        img:'product-cover-5 (1).png',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:7,
        name:'Graphic Design',
        img:'fixed-height (1).png',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:8,
        name:'Graphic Design',
        img:'fixed-height (2).png',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
];

export interface FeaturePost{
    id:number;
    name:string;
    img:string;
    para:string;
    date:string;
    comment:string;
    bread:string[];
};

export const featurePost:FeaturePost[] = [
    {
        id:1,
        name:"Loudest à la Madison #1 (L'integral)",
        img:"unsplash_hHdHCfAifHU.png",
        para:`We focus on ergonomics and meeting 
you where you work. It's only a 
keystroke away.`,
        bread:['google','trending','new'],
        date:'22 April 2024',
        comment:'10 comments'
    },
    {
        id:2,
        name:"Loudest à la Madison #1 (L'integral)",
        img:"unsplash_tVEqStC2uz8.png",
        para:`We focus on ergonomics and meeting 
you where you work. It's only a 
keystroke away.`,
        bread:['google','trending','new'],
        date:'22 April 2024',
        comment:'10 comments'
    },
    {
        id:3,
        name:"Loudest à la Madison #1 (L'integral)",
        img:"unsplash_dEGu-oCuB1Y.png",
        para:`We focus on ergonomics and meeting 
you where you work. It's only a 
keystroke away.`,
        bread:['google','trending','new'],
        date:'22 April 2024',
        comment:'10 comments'
    }
];

//Shop

export interface ShopCollection{
    id:number;
    img:string;
};
export const shopCollection:ShopCollection[] = [
    {
        id:1,
        img:'col-md-4.png'
    },
    {
        id:2,
        img:'card-item.png'
    },
    {
        id:3,
        img:'col-md-4 (1).png'
    },
    {
        id:4,
        img:'col-md-4 (2).png'
    },
    {
        id:5,
        img:'col-md-4 (3).png'
    },
];

export const clothList:ClothList[] = [
    {
        id:1,
        img:'fixed-height (22).png',
        name:'Graphic Design',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:2,
        img:'fixed-height (4).png',
        name:'Graphic Design',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:3,
        img:'fixed-height (5).png',
        name:'Graphic Design',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:4,
        img:'fixed-height (6).png',
        name:'Graphic Design',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:5,
        img:'fixed-height (7).png',
        name:'Graphic Design',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:6,
        img:'fixed-height (8).png',
        name:'Graphic Design',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:7,
        img:'fixed-height (9).png',
        name:'Graphic Design',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:8,
        img:'fixed-height (10).png',
        name:'Graphic Design',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:9,
        img:'fixed-height (11).png',
        name:'Graphic Design',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:10,
        img:'fixed-height (12).png',
        name:'Graphic Design',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:11,
        img:'fixed-height (13).png',
        name:'Graphic Design',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:12,
        img:'fixed-height (14).png',
        name:'Graphic Design',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },

];
interface Pagin{
    id:number;
    name:string;
    color:string;
    bgColor:string;
}
export const pagin:Pagin[] = [
    {
        id:1,
        name:'Prev',
        bgColor:'#fff',
        color:'#23a6f0',
    },
    {
        id:2,
        name:'1',
        bgColor:'#fff',
        color:'#23a6f0',
    },
    {
        id:3,
        name:'2',
        bgColor:'#f3f3f3',
        color:'#bdbdbd',
    },
    {
        id:4,
        name:'3',
        bgColor:'#fff',
        color:'#23a6f0',  
    },
    {
        id:5,
        name:'Next',
        bgColor:'#fff',
        color:'#23a6f0',
    },
    
];
export const paginButton = {
    one:'1',
    two:'2',
    three:'3',
    first:'Prev',
    next:'Next'
};
export const otherBar:string[] = ['Description','Additional Information','Reviews (0)'];
export const otherBox1:string[] = [`Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.`,`Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.`,`Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.`];
export const otherBox2:string[] = ['the quick fox jumps over the lazy dog','the quick fox jumps over the lazy dog','the quick fox jumps over the lazy dog'];
export const otherSeller:ClothList[] = [
    {
        id:1,
        name:'Graphic Design',
        img:'fixed-height (20).png',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:2,
        name:'Graphic Design',
        img:'fixed-height (16).png',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:3,
        name:'Graphic Design',
        img:'fixed-height (17).png',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:4,
        name:'Graphic Design',
        img:'product-cover-5 (2).png',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:5,
        name:'Graphic Design',
        img:'fixed-height (18).png',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:6,
        name:'Graphic Design',
        img:'fixed-height (19).png',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:7,
        name:'Graphic Design',
        img:'fixed-height (20).png',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
    {
        id:8,
        name:'Graphic Design',
        img:'fixed-height (16).png',
        category:'English Department',
        oldPrice:'$16.48',
        newPrice:'$6.48',
        color:['#23a6f0','#23856d','#e77c40','#252b42']
    },
];
export const ratingList:RatingList[] = [
    {
        ratingName:'Happy Customers',
        ratingCount:'15K'
    },
    {
        ratingName:'Monthly Visitors',
        ratingCount:'150K'
    },
    {
        ratingName:'Countries  Worldwide',
        ratingCount:'15'
    },
    {
        ratingName:'Top Partners',
        ratingCount:'100+'
    },
];
export const aboutTeam:AboutTeam[] = [
    {
        img:'media (7).png',
        userName:'Username',
        profession:'Profession',
    },
    {
        img:'media (8).png',
        userName:'Username',
        profession:'Profession',
    },
    {
        img:'media (5).png',
        userName:'Username',
        profession:'Profession',
    },
];
export const contactList:ContactList[] = [
    {
        id:1,
        img:'Vector (1).png',
        email:'georgia.young@example.com',
        mailTwo:'georgia.young@ple.com',
        suport:'Get Support',
        btnSuport:'Submit Request',
    },
    {
        id:2,
        img:'icn settings .icn-xl.png',
        email:'georgia.young@example.com',
        mailTwo:'georgia.young@ple.com',
        suport:'Get Support',
        btnSuport:'Submit Request',
    },
    {
        id:3,
        img:'icn settings .icn-xl (1).png',
        email:'georgia.young@example.com',
        mailTwo:'georgia.young@ple.com',
        suport:'Get Support',
        btnSuport:'Submit Request',
    },
];
export const teamImg:string[] = ['unsplash_gMsnXqILjp4.png','unsplash_PSmDDeXaEWE.png','unsplash_1-aA2Fadydc.png','unsplash_mcSDtbWXUZU.png'];
export const teamImg2:string[] = ['unsplash_gMsnXqILjp4 (1).png','unsplash_PSmDDeXaEWE (1).png','unsplash_1-aA2Fadydc (1).png','unsplash_mcSDtbWXUZU (1).png'];
export const teamList:AboutTeam[] = [
    {
       img:'media (3).png',
       userName:'Username',
       profession:'Profession' 
    },
    {
        img:'team-1-user-2.jpg',
        userName:'Username',
        profession:'Profession' 
     },
     {
        img:'media (4).png',
        userName:'Username',
        profession:'Profession' 
     },
     {
        img:'media (2).png',
        userName:'Username',
        profession:'Profession' 
     },
     {
        img:'media (6).png',
        userName:'Username',
        profession:'Profession' 
     },
     {
        img:'media (7).png',
        userName:'Username',
        profession:'Profession' 
     },
     {
        img:'media (1).png',
        userName:'Username',
        profession:'Profession' 
     },
     {
        img:'team-1-user-2 (1).jpg',
        userName:'Username',
        profession:'Profession' 
     },
     {
        img:'media (9).png',
        userName:'Username',
        profession:'Profession' 
     },
];
export const priceList:PriceList[] =[
    {
        id:1,
        quality:'FREE',
        price:'0',
        sym:'$',
        duration:'Per Month',
        package:'Unlimited product updates',
        para:'Organize across all apps by hand',
    },
    {
        id:2,
        quality:'STANDARD',
        price:'9.99',
        sym:'$',
        duration:'Per Month',
        package:'Unlimited product updates',
        para:'Organize across all apps by hand',
    },
    {
        id:3,
        quality:'PREMIUM',
        price:'19.99',
        sym:'$',
        duration:'Per Month',
        package:'Unlimited product updates',
        para:'Organize across all apps by hand',
    },
];
export const faqList:FaqList[] = [
    {
        id:1,
        head:'the quick fox jumps over the lazy dog',
        para:`Met minim Mollie non desert Alamo est sit cliquey 
dolor do met sent. RELIT official consequent door ENIM 
RELIT Mollie. Excitation venial consequent sent 
nostrum met.`
    },
    {
        id:2,
        head:'the quick fox jumps over the lazy dog',
        para:`Met minim Mollie non desert Alamo est sit cliquey 
dolor do met sent. RELIT official consequent door ENIM 
RELIT Mollie. Excitation venial consequent sent 
nostrum met.`
    },
    {
        id:3,
        head:'the quick fox jumps over the lazy dog',
        para:`Met minim Mollie non desert Alamo est sit cliquey 
dolor do met sent. RELIT official consequent door ENIM 
RELIT Mollie. Excitation venial consequent sent 
nostrum met.`
    },
    {
        id:4,
        head:'the quick fox jumps over the lazy dog',
        para:`Met minim Mollie non desert Alamo est sit cliquey 
dolor do met sent. RELIT official consequent door ENIM 
RELIT Mollie. Excitation venial consequent sent 
nostrum met.`
    },
    {
        id:5,
        head:'the quick fox jumps over the lazy dog',
        para:`Met minim Mollie non desert Alamo est sit cliquey 
dolor do met sent. RELIT official consequent door ENIM 
RELIT Mollie. Excitation venial consequent sent 
nostrum met.`
    },
    {
        id:6,
        head:'the quick fox jumps over the lazy dog',
        para:`Met minim Mollie non desert Alamo est sit cliquey 
dolor do met sent. RELIT official consequent door ENIM 
RELIT Mollie. Excitation venial consequent sent 
nostrum met.`
    },
];

export const companyList:string[] = ['col-md-2.png','col-md-2 (1).png','col-md-2 (2).png','col-md-2 (3).png','col-md-2 (4).png','col-md-2 (5).png']
export const footComp:string[] = ['About Us','Carrier','We are hiring','Blog'];
export const feturesFoot:string[] = ['Business Marketing','User Analytic','Live Chat','Unlimited Support'];
export const resoursFoot:string[] = ['IOS & Android','Watch a Demo','Customers','API'];