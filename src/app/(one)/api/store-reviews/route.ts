import { client } from "@/sanity/lib/client";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest,NextResponse } from "next/server";


export async function POST(req:NextRequest){
    const {id,reviewInp,userName}:{id:string,reviewInp:string,userName:string} = await req.json();
    try {
        const user = await currentUser();
        if(!user){
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        };
        if(!id || !reviewInp ||!userName){
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        };

        //find the product from sanity
        const findProduct = `*[_type == "productlist" && id == $id][0]`;
        const productExists = await client.fetch(findProduct,{id});
        
        //check product exist or not
        if(!productExists){
            console.log('Product Not found')
            return NextResponse.json({error:'Product not Found'},{status:404});
        };

        //create a new review object
        const newReview = {
            userreview:userName,
            review:reviewInp,
            timing: new Date().toISOString(),
        };

        //add a new review to the existing review list
        await client.patch(productExists._id)
        .setIfMissing({reviewlist:[]})
        .insert('after','reviewlist[-1]',[newReview]) // Update timestamp
      .commit();
      return NextResponse.json({ message: "Review added successfully" }, { status: 201 });
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: `Failed to add review: ${error}` }, { status: 500 }); 
    }
}