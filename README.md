# FABRIC HAVEN - AN ONLINE SHOPPING PLATFORM

## Author: Shaikh Abdul Moiz  
**Key Role:** Leading the empire of Fabric Haven

## 📌 Marketplace Overview  
Fabric Haven is a modern online shopping platform built with Next.js, Sanity CMS, and third-party APIs for payments and shipping.

---

## 🏗️ Project Structure 

---

## 🖥️ Tech Stack  

| Feature             | Technology         |
|---------------------|-------------------|
| **Front-End**      | Next.js 14, React  |
| **Backend (CMS)**  | Sanity.io          |
| **Authentication** | Clerk             |
| **Payments**       | Stripe            |
| **Shipping**       | ShipEngine        |

---



## ✅ Features Implemented  

### **🖥️ FRONT-END (Next.js)**
1. **Next.js** is used to handle the entire front-end development.
2. **Home Page (Landing Page)** with a list of **popular products**.
3. **Header & Navigation:** Includes links to **Products, Cart, and Login** for easy navigation.
4. **Footer Section:** Provides additional marketplace information.
5. **Product Page:** Displays all products with **Search, Pagination, and Category Filtering**.
6. **Cart Page:** Users can **add, remove, increment, decrement**, and **clear the cart**.
7. **Wishlist Page:** Allows users to **save products** they want to buy later.
8. **Shipment Process UI:** Includes **forms, rate lists, and tracking details**.
9. **Responsive Design:** The entire UI is fully optimized for **mobile, tablet, and desktop**.
10. **API Handling:** Using React hooks to fetch data dynamically in Next.js.

---

### **🔗 API Handling Example in Next.js**
```ts
const fetchProductList = async (api: string) => {
  try {
    const fetchProd = await fetch(api, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: 'force-cache'
    });
    const getProd: Product[] = await fetchProd.json();
    console.log(getProd);
    return getProd;
  } catch (error) {
    throw new Error(`${error}: API Not Found`);
  }
};


          
## 🚀 SANITY (CMS)

1. We are using Sanity to manage oru product, order etc.
2. First of all, we had run the migration file (migrate.mjs) in scripts folder to migrate the mock API data in Sanity.
3. We are using private data like token in .env file to run operations securly.
4. For perform migration processs, so we need to set our schemna via document and that is Product where we defined all the field that will migrate in sanity

    # ---- PRODUCT SCHEMA ---- #

    ```typescript
    export const productList = {
    name:'productlist',
    title:'Product List',
    type:'document',
    fields:[
        {
            name:'id',
            title:'Product ID',
            type:'string'
        },
        {
            name:'productname',
            title:'Product Name',
            type:'string',
        },
        {
            name:'category',
               title:'Category Name',
            type:'string'
        },
        {
            name:'productimg',
               title:'Product Img',
            type:'image'
        },
        {
            name:'description',
               title:'Product Description',
            type:'text'
        },
        {
            name:'price',
            title:'Product Price',
            type:'number'
        },
        {
            name:'discount',
            title:'Discount',
            type:'number'
        },
        {
            name:'stock',
            title:'Product Stock',
            type:'number'
        },
        {
            name:'tags',
            title:'Product Tags',
            type:'array',
            of:[{type:'string'}]
        },
        {
            name:'productcolors',
            title:'Product Colors',
            type:'array',
            of:[{type:'string'}]
        },
        {
            name:'productsizes',
            title:'Product Sizes',
            type:'array',
            of:[{type:'string'}]
        },
        {
            name:'rating',
            title:'Product Rating',
            type:'number'
        },
        {
            name:'reviewlist',
            title:'Review List',
            type:'array',
            of:[{type:'string'}]
        },
        {
            name:'createdAt',
            title:'Created Date',
            type:'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                timeStep: 30, // Allow selection in 30-minute intervals
                calendarTodayLabel: 'Set to Today',
              },
              initialValue: () => new Date().toISOString(), // Default to the current date and time
        },
        {
            name:'updatedAt',
            title:'Updated Date',
            type:'datetime'
        },
    ]
}```


5. Once, the process will done , so we can see all the product in Sanity Studio.

    ## 🚀 THIRD-PARTY APIs


1. We are using **Third Party APIs** to perform operation like **payment handling** and **shipment tracking**.
2. **Stripe** is used tp perform checkout operation, here we does not need to create our own checkout for market. If w want to create so we can. But for now we are it, to work securely and fast.
3. The next task is **shipment**, so we are using **Ship-Engine** to perform Shipment Tracking on Orders when it will go from **warehouse** to **customer**.

## 📌 API Endpoints

| **Endpoint**       | **Method** | **Purpose**                          | **Response Example**                                                 |
|--------------------|-----------|--------------------------------------|----------------------------------------------------------------------|
| `/productlist`     | `GET`      | Fetch all product details           | `{ "name": "Product Name", "slug": "product-slug", "price": 100 }`  |
| `/tracking`       | `GET`      | Fetch real-time tracking updates    | `{ "trackingId": "AB123", "status": "In Transit" }`                 |
| `/inventory`      | `GET`      | Fetch real-time stock levels        | `{ "productId": 789, "stock": 50 }`                                 |
| `/cart`           | `POST`     | Add product to cart                 | `{ "cartId": 101, "items": [...] }`                                 |
| `/wishlist`       | `POST`     | Add product to wishlist             | `{ "wishlistId": 202, "items": [...] }`                             |


    # 🛒 Marketplace Roadmap

The roadmap is simple, not as critical as you might think. Here’s a breakdown of our marketplace development process:  

## 🔑 Authentication
    Authentication is essential for securing our marketplace and ensuring a smooth shopping experience.

        ### 🛍️ User Registration & Login Flow
        1. When a **new user** comes our web-application want to buy product.
        2. But if he is not **registered** in our web-appliction he cannot buy project.
        3. If user do not **register** in our web-application so, our **web-application** cannot found it and does not know him.
        4. **Registration** is like that if we **regstered** we can buy product what if we are not so we cannot.
        5. User can simply go to **sign-up** if he is not **register** in our web-application or he wil go to **login**.
        6. After that , he is **registered** in our **marketplace** so, he can buy product easily
    ---
     ### 📦  Product Listing

        - When user will go to **Product Page** , so the all product will list over there and we have also perform some functionality over there like:
        - 🔍 **Search Bar** – Users can search for specific products.  
        - 📊 **Pagination** – Products are displayed in pages for easy navigation.  
         - 🎯 **Filters** – Users can filter products by category, price, etc.  
        - 🛠️ **Data Source:** Products are fetched from **Sanity CMS**, where we have migrated mock API data.  
    ---
     ### ❤️  Wishlist
        - We have also a **Wishlist Page** where user can **add their product** that he will buy later.
    ---
     ### 🛒  Cart Page
         - The **Cart Page** allows users to manage products before checkout.  
        - Users can:    
        - Add/remove products.  
        - Update quantity.  
        - View total cost.  
        - 💳 **Payment Processing:** Checkout is handled using **Stripe**, ensuring a secure and fast payment process.  
    ---
    ### 🚚  Shipment Tracking

       - We use a **Third-Party API** for shipment tracking.  
        - **ShipEngine** is integrated to provide real-time tracking updates.  
        - Users can track their orders **from the warehouse to their delivery location** seamlessly.  
    ---

        ## 🛠️ Testing Section  

        After completing all the development processes of our **marketplace**, we proceeded with **testing** to ensure everything works smoothly.  

        ### ✅ Tested Workflows:  
            We have tested all key functionalities, including:  

        1️⃣ **User Registration** – Ensuring users can sign up and log in successfully.  
        2️⃣ **Product Listing** – Verifying products display correctly with search, filters, and pagination.  
        3️⃣ **Cart Management** – Adding, removing, and updating cart items without errors.  
        4️⃣ **Wishlist Section** – Checking if users can save and retrieve their wishlist items.  
        5️⃣ **Checkout Section** – Testing the payment flow via **Stripe** for smooth transactions.  
        6️⃣ **Shipment Section** – Tracking orders through **ShipEngine** from warehouse to delivery.  

        ### 🏆 Test Results  
        - ✅ All sections have been **successfully tested** and are **working perfectly**! 🎉  

        ## 🚀 Deployment Phase  

        Once we have completed all the tasks required for our **marketplace**, the next step is to make it **live**. We need to host our marketplace on platforms like **Vercel, Netlify**, or others.  

        We are using **Vercel** for deployment.  

        ### 🔧 Steps for Deployment:  
        1️⃣ **Prepare the Code** – Ensure all features are implemented and tested.  
        2️⃣ **Environment Variables** – Securely set up `.env` files for private data (e.g., API keys).  
        3️⃣ **Deploy on Vercel** – Push the latest code to GitHub and deploy via **Vercel**.  
        4️⃣ **Final Testing** – Verify that everything works smoothly in production.  
        5️⃣ **Live Marketplace** – Our marketplace is now live and ready for users! 🎉  

        ---

        ## 🏁 Conclusion  

        This document is designed to **guide you** through the features implemented in our **marketplace** and how the platform functions.  

        ### 🔹 Key Components of Our Marketplace:  
        1️⃣ **Front-End** – Built with **Next.js + TypeScript** for a seamless user experience.  
        2️⃣ **Sanity (CMS)** – Manages all **products, orders, and inventory** dynamically.  
        3️⃣ **Third-Party APIs** – Handles **payments (Stripe)** and **shipment tracking (ShipEngine)**.  

        ---

        ## 🎯 The End 🎯  


