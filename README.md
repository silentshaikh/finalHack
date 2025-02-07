# FABRIC HAVEN AN ONLINE SHOPPING PLATFORM

Author : Shaikh Abdul Moiz
Key Role : Leading the empire of Fabric Haven

# MARKETPLACE OVERVIEW

**The outline will give me technical information of our market that what we have implemented on here, suc as functionalities, endpoints of API etc.**

# SECTION OF FABRIC HAVEN

We have divided our marketplace into three section. Here it is:

1) FRONT-END ---> (NEXTJS) 

2) SANITY ----> (As a Backend to manage Product API and Orders data)

3) THIRD PARTY APIs ----->  (Stripe for Payment , ShipEngine for Shipment Tracking)

4) AUTHENTICATION -----> (Clerk)


# WHAT WE HAVE DONE IN ALL SECTION ?

   # ---- YOU WANT TO KNOW ---- #


    FRONT-END :
    ------------

1) We are using Nextjs to perform our Front-End Job.
2) We are creating a Home Page to show user when he visit our Web-Application.
3) We have also a list of Popular Product on Home Page.
4) We can also called Home Page as a Landing Page.
5) We have created a Header fro to show some link that people can navigate to other page like product, cart, login.
5) Here , we have created a footer for additional Info of our Marketplace.
6) We have developed a Product Page wgere all the product has listed successfully and also implement functionality such as a Search Bar, Pagination and Filter via Category.
7) We have developed a Cart Page also where user can select the products that they want to buy here, I have perform all operation like Increment , Decrement , Delete Item and also a clear Cart.
8) We have also developed a Wishlist page for that product that user want to buy later.
9) With Nextjs, we have validated all the thing that will help user when he will be buying some product from our marketplace like cart functionality and many other task.
10) We have also developed the Ui for Shipment process where we have to form , Rate list and Tracking Detail
11) The main thing in every Front-End project is Responsiveness, we have covered that section . We have manage the UI of our marketplace according to screen sizes.
12) Nextjs is a Framework that built on React, so we are handling the API request via React hooks in Nextjs.

    ### ---- Handling the API ---- ###

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

    # -------- XXXXXXXXXXXXXXX -------- #

13) We are handling the Third Part APIs like stripe and ship-engine in our API Routes in api folder with "route.ts" file in Nextjs.
14)  We are using Cookies to store our Cart Data.


     SANITY (CMS) :
    ------------

1) We are using Sanity to manage oru product, order etc.
2) First of all, we had run the migration file (migrate.mjs) in scripts folder to migrate the mock API data in Sanity.
3) We are using private data like token in .env file to run operations securly.
4) For perform migration processs, so we need to set our schemna via document and that is Product where we defined all the field that will migrate in sanity

    # ---- PRODUCT SCHEMA ---- #

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
}

 # -------- XXXXXXXXXXXXXXX -------- #

4) Once, the process will done , so we can see all the product in Sanity Studio.


    THIRD PARTY API :
    -------------------


1) We are using Third Party APIs to perform operation like payment handling and shipment tracking.
2) Stripe is used tp perform checkout operation, here we doesn't need to create our own checkout for market. If w want to create so we can. But for now we are it, to work securely and fast.
3) The next task is shipment, so we are using Ship-Engine to perform Shipment Tracking on Orders when it will go from warehaouse to customer.


    # ---- ENDPOINT OF APIs ---- #


    | Endpoint             | API Method | Purpose of Methods                           | Response Example                                                       |
| -------------------- | ------ | ---------------------------------- | ---------------------------------------------------------------------- |
| /productlist          | GET    | Fetch all detail of products          | **[ { "name": "Product Name", "slug": "product-slug", "price": 100 } ]** |
| /tracking | GET    | Fetch real-time tracking updates   | **{ "trackingId": "AB123", "status": "In Transit" }**                    |
| /inventory        | GET    | Fetch real-time stock levels       | **{ "productId": 789, "stock": 50 }**                                    |
| /cart              | POST   | Add product to cart                | **{ "cartId": 101, "items": [...] }**                                    |
| /wishlist          | POST   | Add product to wishlist            | **{ "wishlistId": 202, "items": [...] }**                               |

   # ------- !!!!!!!!!!!!!!!!!!!!!!!!!!! ------ #


    
    ROADMAP OF OUR MARKETPLACE :
    --------------------------

    The roadmap is simple not a critical like you think. We are explaining it :

    1) AUTHENTICATION:
        * When a user come in our web-application want to buy product.
        * But if he isn't registered in our web-appliction he can't buy project.
        * If user don't register in our web-application so, our web-application can't found it and doesn't know him.
        * Registration is like that if we regstered we can buy product what if we are not so we can't.
        * User can simply go to sign-up if he's not register in our web-application or he wil go to login.
        * After that , he is registered in our marketplace so, he can buy product easily

     2) PRODUCT LISTING:
        * When user will go to product page , so the all product will list over there and we have also perform some functionality over there like Search bar, Pagination, Filter etc.
        * The Product is fetching from sanity CMS because, we have perform migration on Sanity to send MOCK API data to Sanity.

     3) WISHLIST:
        * We have also a wishlist page where user can add their product that he will buy later.

     4) CART PAGE
         * Here , we have a Cart page where user can add products that he wants to buy and then they will pay the payment of that product that he want in Checkout with the help of Stripe.

    5) SHIPMENT TRACKING
        * We are using Third Part API to performing shipment tracking easily. The API is Ship Engine. 
        * With the help of ship-engine user can track their order from to warehouse to delivery location.



      TESTING SECTION :
      --------------------------

      After Completed all the process of our marketplace, Now we need to test our marketplace:

       * We have tested all workflows like : 
        1) User Registration.
        2) Product Listing.  
        3) Cart Management.
        3) Wishlist Section.
        4) Checkout Section.
        5) Shipment Section.

        * and all of the section is working perfeclty.


        DEPLOYEMENT PHASE :
        --------------------------

        Once, we have completed all the task that our marketplace want. So the next step, is to set our Market place live. We need to host our marketplace on platform like Vercel, Netlify and other. We are using Vercel to deploy our Market place. Now we need to set all task that we have developed and also contain private data securely e.g (env variable). Then all Formalities will done, so our Market place will host successfully and then we will need to test it that how's it work.


        # CONCLUSION:
            This is document is only design to guide you that what featues have implemented in our website.
            Then, how our platform will work:

            1) FRONT-END 

            2) SANITY 

            3) THIRD PARTY APIs 

    <--------------------------------- ### THE END ### --------------------------------------------->

