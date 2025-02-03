import shipEngine from "@/utils/shipEngine";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req:NextRequest){
    try {
        const {rateId} = await req.json();
        if(!rateId){
            return NextResponse.json({error:'RateId is Required to create a Label '},{status:400});
        };
        const fabLabel = await shipEngine.createLabelFromRate({
            rateId
        });
        console.log(`Fab Label : ${fabLabel}`)
        return NextResponse.json(fabLabel,{status:200})
    } catch (error) {
        console.error(`Error when creating a label ${error}`);
        return NextResponse.json({error:`Error when creating a label ${error}`},{status:500})
    }
}