import { client } from "@/sanity/lib/client";
import { currentUser } from "@clerk/nextjs/server";
import {  NextResponse } from "next/server";

export async function POST(){
   try {
    const currUser = await currentUser();
    if(!currUser){
        return NextResponse.json({error:'Unauthorized'},{status:401});
    };

    //check the user exist in sanity data or not
    const checkUser = `*[_type == "userlist" && username == $username][0]`;
    const userExist = await client.fetch(checkUser,{username:currUser.fullName});
    if(!userExist){
        await client.create({
            _type:'userlist',
            userid:`${currUser.id.slice(0,6)}-${currUser.fullName}`,
            username:currUser.fullName,
            useremail:currUser.primaryEmailAddress?.emailAddress,
        });
    };
    return NextResponse.json({message:'User Synced Successfully'},{status:201})
   } catch (error) {
    return NextResponse.json({error:`User didn't sync ${error}`},{status:500})
   }
}