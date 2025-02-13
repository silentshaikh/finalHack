import { client } from "@/sanity/lib/client";
import { CartListType } from "@/utils/Type/type";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        const currUser = await currentUser();
        if(!currUser){
            return NextResponse.json({error:'Unauthorized'},{status:401});
        };
        const {orderlist}:{orderlist:CartListType[]} = await req.json();
        if(!orderlist || orderlist.length===0){
            return NextResponse.json({message:'No Orders have recieved'},{status:400})
        };
        //find that user to save the order data in the user history
            const findUser = `*[_type == "userlist" && userid == $userid][0]`;
            const ourUser = await client.fetch(findUser,{userid:currUser.id});
             // Helper function to fetch and convert image to Buffer
        const fetchImageBuffer = async (imageUrl: string) => {
            const response = await fetch(imageUrl);
            const arrayBuffer = await response.arrayBuffer();
            return Buffer.from(arrayBuffer);
        };

            // Upload images and create the order
        const orderItemsWithImages = await Promise.all(orderlist.map(async (item) => {
            let imageRef = null;

            if (item.productimage) {
                // Check if it's a URL or file
                if (item.productimage.startsWith("http")) {
                    imageRef = item.productimage; // Store the URL directly
                }else{
                      // Convert to Buffer and upload to Sanity
                      const imageBuffer = await fetchImageBuffer(item.productimage);
                      const uploadedImage = await client.assets.upload('image', imageBuffer);
                      imageRef = uploadedImage._id; // Get the image reference ID
                };
            };

            return {
                productid: item.productid,
                productname: item.productname,
                price: item.price,
                productsize: item.productsize,
                productcolor: item.productcolor,
                productcategory: item.productcategory,
                productquantity: item.productquantity,
                sku: item.sku,
                currency: item.currency,
                productimage: imageRef ? { _type: "image", asset: { _type: "reference", _ref: imageRef } } : null,
            };
        }));
            //send order on sanity studio
             await client.create({
                _type:'orderlist',
                user:{_type:'reference',_ref:ourUser.userid},
                orderitems:orderItemsWithImages,
            });
        return NextResponse.json({message:'Order Store Successfully'},{status:201})
    } catch (error) {
        return NextResponse.json({message:`Error when storing orders : ${error}`},{status:500})
    }

}