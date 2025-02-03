import shipEngine from "@/utils/shipEngine";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,{
    params,
  }: {
    params: Promise<{ labelid: string }>;
  }){
    const labelId = (await params).labelid;
    if(!labelId){
        return NextResponse.json({error:'Label ID is missing'},{status:400});
    };
    try {
        const trackLabel = await shipEngine.trackUsingLabelId(labelId);
        return NextResponse.json(trackLabel,{status:200});
    } catch (error) {
        return NextResponse.json(error,{status:500});
    }

}